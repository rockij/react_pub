import React from 'react';
import { ChevronRight, Clock3 } from 'lucide-react';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { DatePicker } from '../../components/DatePicker/DatePicker';
import { Select } from '../../components/Select/Select';
import { Textarea } from '../../components/Textarea/Textarea';
import { TextField } from '../../components/TextField/TextField';
import '../../assets/css/screen/consult-inquiry-screen.css';

const inquiryOptions = [
  { value: 'product', label: '상품 문의' },
  { value: 'account', label: '계좌/거래 문의' },
  { value: 'service', label: '서비스 이용 문의' },
  { value: 'complaint', label: '민원 접수' },
];

export function ConsultInquiryScreenCase() {
  const [inquiryType, setInquiryType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [agreed, setAgreed] = React.useState(false);
  const [reservationDate, setReservationDate] = React.useState<Date | undefined>();
  const [reservationTime, setReservationTime] = React.useState('');

  return (
    <section className="consult-inquiry-screen" aria-label="문의 접수 화면">
      <div className="consult-inquiry-screen__device">
        <div className="consult-inquiry-screen__body">
          <header className="consult-inquiry-screen__hero">
            <h2>
              궁금하신 내용을 남겨주시면
              <br />
              전담직원이 답변을 드려요
            </h2>
          </header>

          <form
            className="consult-inquiry-screen__form"
            onSubmit={event => event.preventDefault()}
          >
            <section className="consult-inquiry-screen__section">
              <h3>문의 내용</h3>

              <div className="consult-inquiry-screen__field-stack">
                <div className="consult-inquiry-screen__field">
                  <Select
                    id="consult-inquiry-type"
                    className="consult-inquiry-screen__select"
                    value={inquiryType}
                    onChange={setInquiryType}
                    options={inquiryOptions}
                    placeholder="문의 종류 선택"
                  />
                </div>

                <div className="consult-inquiry-screen__field">
                  <TextField
                    id="consult-inquiry-title"
                    className="consult-inquiry-screen__textfield"
                    label="제목 입력"
                    value={title}
                    onChange={setTitle}
                    placeholder="제목 입력"
                  />
                </div>

                <div className="consult-inquiry-screen__field">
                  <Textarea
                    id="consult-inquiry-content"
                    className="consult-inquiry-screen__textarea"
                    label="문의 내용 입력"
                    value={content}
                    onChange={setContent}
                    placeholder="문의 내용을 상세히 입력해 주시면 보다 정확한 답변을 드릴 수 있어요."
                    rows={5}
                    resize="none"
                  />
                </div>

                <div className="consult-inquiry-screen__consent">
                  <Checkbox
                    id="consult-inquiry-agreement"
                    className="consult-inquiry-screen__checkbox"
                    label="개인(신용)정보 수집·이용 동의"
                    size="medium"
                    checked={agreed}
                    onChange={setAgreed}
                  />
                  <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
                </div>
              </div>
            </section>

            <section className="consult-inquiry-screen__section">
              <h3>전화상담 예약 (선택)</h3>

              <div className="consult-inquiry-screen__reservation-grid">
                <DatePicker
                  id="consult-inquiry-date"
                  className="consult-inquiry-screen__datepicker"
                  label="날짜 선택"
                  placeholder="날짜 선택"
                  value={reservationDate}
                  onChange={setReservationDate}
                  allowClear={false}
                />

                <div className="consult-inquiry-screen__time-field">
                  <TextField
                    id="consult-inquiry-time"
                    className="consult-inquiry-screen__textfield consult-inquiry-screen__textfield--time"
                    label="시간 선택"
                    value={reservationTime}
                    onChange={setReservationTime}
                    placeholder="시간 선택"
                    readOnly
                    endAdornment={<Clock3 size={19} strokeWidth={2} />}
                  />
                  <input
                    type="time"
                    value={reservationTime}
                    aria-label="전화상담 시간 선택"
                    className="consult-inquiry-screen__time-native"
                    onChange={event => setReservationTime(event.target.value)}
                  />
                </div>
              </div>

              <ul className="consult-inquiry-screen__notes">
                <li>상담예약은 영업일에만 신청할 수 있습니다.</li>
                <li>
                  먼저 전화상담을 신청하신 손님의 상담이 길어질 경우, 신청하신 시간보다 늦게 연락 드릴 수
                  있습니다.
                </li>
              </ul>
            </section>
          </form>
        </div>
      </div>
    </section>
  );
}
