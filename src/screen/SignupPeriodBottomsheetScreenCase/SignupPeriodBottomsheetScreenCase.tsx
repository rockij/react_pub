import React from 'react';
import { Button } from '../../components/Button/Button';
import { Dialog } from '../../components/Dialog/DialogIcon';
import '../../assets/css/screen/signup-period-bottomsheet-screen.css';

const signupPeriods = [
  '1년',
  '2년',
  '3년',
  '4년',
  '5년',
  '6년',
  '7년',
  '8년',
  '9년',
  '10년',
  '11년',
  '12년',
] as const;
const VISIBLE_OFFSETS = [-2, -1, 0, 1, 2] as const;

type SignupPeriodBottomsheetScreenCaseProps = {
  onDismiss?: () => void;
};

export function SignupPeriodBottomsheetScreenCase({ onDismiss }: SignupPeriodBottomsheetScreenCaseProps) {
  const [isBottomsheetOpen, setBottomsheetOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const wrapIndex = React.useCallback((index: number) => {
    return (index + signupPeriods.length) % signupPeriods.length;
  }, []);

  const handleClose = () => {
    setBottomsheetOpen(false);
    onDismiss?.();
  };

  const handleWheel = (event: React.WheelEvent<HTMLUListElement>) => {
    event.preventDefault();
    if (event.deltaY === 0) {
      return;
    }

    setSelectedIndex(prev => wrapIndex(prev + (event.deltaY > 0 ? 1 : -1)));
  };

  return (
    <section className="signup-period-bottomsheet-screen" aria-label="가입기간 선택 바텀시트 화면">
      <div className="signup-period-bottomsheet-screen__device">
        <div className="signup-period-bottomsheet-screen__dim" aria-hidden="true" />
      </div>

      <Dialog
        isOpen={isBottomsheetOpen}
        onRequestClose={handleClose}
        title="가입기간 선택"
        variant="bottomsheet"
        contentClassName="signup-period-bottomsheet-modal"
      >
        <div className="signup-period-bottomsheet-sheet">
          <ul
            className="signup-period-bottomsheet-sheet__options"
            role="radiogroup"
            aria-label="가입기간 선택"
            onWheel={handleWheel}
          >
            {VISIBLE_OFFSETS.map(offset => {
              const targetIndex = wrapIndex(selectedIndex + offset);
              const period = signupPeriods[targetIndex];
              const isSelected = offset === 0;

              return (
                <li key={`${period}-${offset}`}>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`signup-period-bottomsheet-sheet__option${isSelected ? ' is-selected' : ''}`}
                    onClick={() => setSelectedIndex(targetIndex)}
                  >
                    {period}
                  </button>
                </li>
              );
            })}
          </ul>

          <Button label="확인" size="large" variant="primary" onClick={handleClose} />
        </div>
      </Dialog>
    </section>
  );
}
