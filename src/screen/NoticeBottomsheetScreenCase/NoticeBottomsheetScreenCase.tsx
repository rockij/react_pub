import React from 'react';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Dialog } from '../../components/Dialog/DialogIcon';
import '../../assets/css/screen/notice-bottomsheet-screen.css';

type NoticeItem = {
  id: string;
  label: string;
};

const noticeItems: NoticeItem[] = [
  {
    id: 'notice-bottomsheet-item-1',
    label:
      '보험료는 선물 보내는 분의 계좌에서 선물 받는 분(손님) 계좌로 입금 후, 최종적으로 손님 계좌에서 보험료가 출금됩니다.',
  },
  {
    id: 'notice-bottomsheet-item-2',
    label:
      '선물 주시는, 선물 받는 분 계좌 상태에따라 최종 보험료 출금이 안될 수 있습니다. 이 경우, 계좌 상태를 확인 후 처음부터 다시 진행하셔야 합니다.',
  },
];

type NoticeBottomsheetScreenCaseProps = {
  onDismiss?: () => void;
};

export function NoticeBottomsheetScreenCase({ onDismiss }: NoticeBottomsheetScreenCaseProps) {
  const [isBottomsheetOpen, setBottomsheetOpen] = React.useState(true);
  const [checkedMap, setCheckedMap] = React.useState<Record<string, boolean>>({
    'notice-bottomsheet-item-1': false,
    'notice-bottomsheet-item-2': false,
  });

  const handleToggle = (id: string, next: boolean) => {
    setCheckedMap(prev => ({
      ...prev,
      [id]: next,
    }));
  };

  const handleClose = () => {
    setBottomsheetOpen(false);
    onDismiss?.();
  };

  return (
    <section className="notice-bottomsheet-screen" aria-label="유의사항 확인 바텀시트 화면">
      <div className="notice-bottomsheet-screen__device">
        <div className="notice-bottomsheet-screen__dim" aria-hidden="true" />
      </div>

      <Dialog
        isOpen={isBottomsheetOpen}
        onRequestClose={handleClose}
        title="꼭 확인해 주세요"
        variant="bottomsheet"
        contentClassName="notice-bottomsheet-modal"
      >
        <div className="notice-bottomsheet-sheet">
          <ul className="notice-bottomsheet-sheet__list">
            {noticeItems.map(item => (
              <li key={item.id}>
                <Checkbox
                  id={item.id}
                  className="notice-bottomsheet-sheet__checkbox"
                  label={item.label}
                  size="medium"
                  checked={checkedMap[item.id]}
                  onChange={next => handleToggle(item.id, next)}
                />
              </li>
            ))}
          </ul>

          <div className="notice-bottomsheet-sheet__actions">
            <Button label="취소" size="large" variant="secondary" onClick={handleClose} />
            <Button label="확인" size="large" variant="primary" onClick={handleClose} />
          </div>
        </div>
      </Dialog>
    </section>
  );
}
