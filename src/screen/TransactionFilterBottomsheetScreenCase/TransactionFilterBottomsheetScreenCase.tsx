import React from 'react';
import { addMonths } from 'date-fns';
import { Button } from '../../components/Button/Button';
import { DatePicker } from '../../components/DatePicker/DatePicker';
import { Dialog } from '../../components/Dialog/DialogIcon';
import '../../assets/css/screen/transaction-filter-bottomsheet-screen.css';

const DEFAULT_END_DATE = new Date(2025, 5, 5);

const periodOptions = [
  { value: '1m', label: '1개월', months: 1 },
  { value: '3m', label: '3개월', months: 3 },
  { value: '6m', label: '6개월', months: 6 },
  { value: 'custom', label: '직접입력', months: null },
] as const;

const transactionOptions = [
  { value: 'all', label: '전체' },
  { value: 'deposit', label: '입금' },
  { value: 'withdrawal', label: '출금' },
] as const;

const sortOptions = [
  { value: 'latest', label: '최신순' },
  { value: 'oldest', label: '과거순' },
] as const;

type PeriodValue = (typeof periodOptions)[number]['value'];
type TransactionValue = (typeof transactionOptions)[number]['value'];
type SortValue = (typeof sortOptions)[number]['value'];

type TransactionFilterBottomsheetScreenCaseProps = {
  onDismiss?: () => void;
};

const getStartDateByMonths = (endDate: Date, months: number) => addMonths(endDate, -months);

export function TransactionFilterBottomsheetScreenCase({
  onDismiss,
}: TransactionFilterBottomsheetScreenCaseProps) {
  const [isBottomsheetOpen, setBottomsheetOpen] = React.useState(true);
  const [period, setPeriod] = React.useState<PeriodValue>('custom');
  const [transactionType, setTransactionType] = React.useState<TransactionValue>('all');
  const [sortOrder, setSortOrder] = React.useState<SortValue>('latest');
  const [endDate, setEndDate] = React.useState<Date | undefined>(DEFAULT_END_DATE);
  const [startDate, setStartDate] = React.useState<Date | undefined>(new Date(2025, 2, 5));

  const handleClose = () => {
    setBottomsheetOpen(false);
    onDismiss?.();
  };

  const handlePeriodSelect = (nextPeriod: PeriodValue) => {
    setPeriod(nextPeriod);

    if (nextPeriod === 'custom' || !endDate) {
      return;
    }

    const matchedOption = periodOptions.find(option => option.value === nextPeriod);

    if (matchedOption?.months) {
      setStartDate(getStartDateByMonths(endDate, matchedOption.months));
    }
  };

  const handleStartDateChange = (value?: Date) => {
    setStartDate(value);
    setPeriod('custom');
  };

  const handleEndDateChange = (value?: Date) => {
    setEndDate(value);

    if (!value) {
      setPeriod('custom');
      return;
    }

    setPeriod(prevPeriod => {
      const matchedOption = periodOptions.find(option => option.value === prevPeriod);

      if (matchedOption?.months) {
        setStartDate(getStartDateByMonths(value, matchedOption.months));
        return prevPeriod;
      }

      return 'custom';
    });
  };

  return (
    <section className="transaction-filter-bottomsheet-screen" aria-label="조회조건 선택 바텀시트 화면">
      <div className="transaction-filter-bottomsheet-screen__device">
        <div className="transaction-filter-bottomsheet-screen__dim" aria-hidden="true" />
      </div>

      <Dialog
        isOpen={isBottomsheetOpen}
        onRequestClose={handleClose}
        title="조회조건 선택"
        variant="bottomsheet"
        contentClassName="transaction-filter-bottomsheet-modal"
      >
        <div className="transaction-filter-bottomsheet-sheet">
          <section className="transaction-filter-bottomsheet-sheet__section">
            <h4>조회기간</h4>

            <div className="transaction-filter-bottomsheet-sheet__segmented" role="group" aria-label="조회기간">
              {periodOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  className={[
                    'transaction-filter-bottomsheet-sheet__choice',
                    period === option.value ? 'is-selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handlePeriodSelect(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="transaction-filter-bottomsheet-sheet__date-range">
              <DatePicker
                id="transaction-filter-start-date"
                label="시작일"
                value={startDate}
                onChange={handleStartDateChange}
                allowClear={false}
              />
              <span className="transaction-filter-bottomsheet-sheet__date-separator" aria-hidden="true">
                ~
              </span>
              <DatePicker
                id="transaction-filter-end-date"
                label="종료일"
                value={endDate}
                onChange={handleEndDateChange}
                allowClear={false}
              />
            </div>
          </section>

          <section className="transaction-filter-bottomsheet-sheet__section">
            <h4>거래구분</h4>

            <div className="transaction-filter-bottomsheet-sheet__segmented transaction-filter-bottomsheet-sheet__segmented--three">
              {transactionOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  className={[
                    'transaction-filter-bottomsheet-sheet__choice',
                    transactionType === option.value ? 'is-selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setTransactionType(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>

          <section className="transaction-filter-bottomsheet-sheet__section">
            <h4>정렬순서</h4>

            <div className="transaction-filter-bottomsheet-sheet__segmented transaction-filter-bottomsheet-sheet__segmented--two">
              {sortOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  className={[
                    'transaction-filter-bottomsheet-sheet__choice',
                    sortOrder === option.value ? 'is-selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setSortOrder(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>

          <div className="transaction-filter-bottomsheet-sheet__actions">
            <Button label="취소" size="large" variant="secondary" onClick={handleClose} />
            <Button label="확인" size="large" variant="primary" onClick={handleClose} />
          </div>
        </div>
      </Dialog>
    </section>
  );
}
