'use client';

import React from 'react';
import { Accordion } from '../components/Accordion/Accordion';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { DatePicker } from '../components/DatePicker/DatePicker';
import { Dialog } from '../components/Dialog/DialogIcon';
import { Pagination } from '../components/Pagination/Pagination';
import { RadioGroup } from '../components/RadioGroup/RadioGroup';
import { Select } from '../components/Select/Select';
import { Skeleton } from '../components/Skeleton/Skeleton';
import { Slider } from '../components/Slider/Slider';
import { Switch } from '../components/Switch/Switch';
import { Table } from '../components/Table/Table';
import { Tabs } from '../components/Tabs/Tabs';
import { Textarea } from '../components/Textarea/Textarea';
import { TextField } from '../components/TextField/TextField';
import { Toast } from '../components/Toast/Toast';
import TooltipDemo from '../components/Tooltip/Tooltip';

type ComponentCase = {
  id: string;
  title: string;
  description: string;
  preview: React.ReactNode;
};

type ComponentCaseCollection = {
  summary: string;
  cases: ComponentCase[];
};

type CaseTab = 'preview' | 'code';

const panelStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid #d9e2ea',
  borderRadius: 20,
  background: '#fff',
  padding: 24,
};

const centeredPanelStyle: React.CSSProperties = {
  ...panelStyle,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 160,
};

const stackStyle: React.CSSProperties = {
  display: 'grid',
  gap: 16,
  width: '100%',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  flexWrap: 'wrap',
};

const selectOptions = [
  { value: '10', label: '10 years' },
  { value: '20', label: '20 years' },
  { value: '30', label: '30 years' },
  { value: '40', label: '40 years' },
];

const teamTableColumns = [
  { key: 'name', header: 'Name' },
  { key: 'team', header: 'Team' },
  { key: 'status', header: 'Status', align: 'center' as const, width: '120px' },
  { key: 'score', header: 'Score', align: 'right' as const, width: '120px' },
];

const teamTableRows = [
  { id: 'member-1', name: 'Avery Kim', team: 'Design', status: 'Active', score: '92' },
  { id: 'member-2', name: 'Mina Lee', team: 'Frontend', status: 'Review', score: '88' },
  { id: 'member-3', name: 'Joon Park', team: 'QA', status: 'Pending', score: '76' },
];

function ButtonPrimaryCase() {
  return (
    <div style={centeredPanelStyle}>
      <Button label="기본 버튼 Button" />
    </div>
  );
}

function ButtonScaleCase() {
  return (
    <div style={centeredPanelStyle}>
      <div style={rowStyle}>
        <Button label="Small" size="small" />
        <Button label="Medium" size="medium" variant="secondary" />
        <Button label="Large" size="large" variant="danger" />
      </div>
    </div>
  );
}

function ButtonDisabledCase() {
  return (
    <div style={centeredPanelStyle}>
      <Button label="비활성화 Button" disabled />
    </div>
  );
}

function AccordionSingleCase() {
  return (
    <div style={panelStyle}>
      <Accordion
        mode="single"
        defaultOpenId="panel2"
        items={[
          { id: 'panel1', title: 'Shipping details', content: <p>Orders ship within 2 to 3 business days.</p> },
          {
            id: 'panel2',
            title: 'Returns and exchanges',
            content: <p>Requests can be submitted within 7 days after delivery.</p>,
          },
          { id: 'panel3', title: 'Member benefits', content: <p>Points, coupons, and member pricing are supported.</p> },
        ]}
      />
    </div>
  );
}

function AccordionMultipleCase() {
  return (
    <div style={panelStyle}>
      <Accordion
        mode="multiple"
        defaultOpenIds={['guide1']}
        items={[
          { id: 'guide1', title: 'Usage guide', content: <p>You can open more than one section at a time.</p> },
          { id: 'guide2', title: 'Accessibility', content: <p>Button and region relationships are announced with aria attributes.</p> },
          { id: 'guide3', title: '비활성화 state', disabled: true, content: <p>비활성화 item</p> },
        ]}
      />
    </div>
  );
}

function AccordionCheckboxHeaderCase() {
  const [checked, setChecked] = React.useState(false);
  const titleId = 'accordion-checkbox-title';
  const panelId = 'accordion-checkbox-panel';

  const handleToggle = () => {
    setChecked(prev => !prev);
  };

  return (
    <div style={panelStyle}>
      <div className="accordion">
        <div className="accordion-panel accordion-checkbox-panel">
          <div className="accordion-checkbox-header">
            <Checkbox
              className="accordion-header-checkbox"
              id="accordion-header-checkbox"
              size="medium"
              label="Select shipping details"
              checked={checked}
              onChange={setChecked}
            />

            <h2 id={titleId} className="accordion-heading">
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={checked}
                aria-controls={panelId}
                onClick={handleToggle}
              >
                <span className="accordion-trigger-label">Shipping details confirmation</span>
                <span className="accordion-trigger-chevron" aria-hidden="true" />
              </button>
            </h2>
          </div>

          <div
            id={panelId}
            className="accordion-content"
            role="region"
            aria-labelledby={titleId}
            aria-hidden={!checked}
          >
            <div>
              <p>
                Check the header control when the customer has reviewed the shipping-related notes and
                wants to see the detailed guidance.
              </p>
              <p>
                This pattern can be useful when the user must explicitly acknowledge a section before
                continuing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardDefaultCase() {
  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 320 }}>
        <Card title="Content card">Use this pattern to group summary information inside a clear surface.</Card>
      </div>
    </div>
  );
}

function CardImageCase() {
  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 320 }}>
        <Card title="Image card" imageUrl="https://via.placeholder.com/400x200/dae7f2/33556f?text=Preview">
          This variation combines media and text content in one card layout.
        </Card>
      </div>
    </div>
  );
}

function CheckboxBasicCase() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div style={centeredPanelStyle}>
      <Checkbox
        id="case-checkbox-basic"
        size="medium"
        label="I agree to the terms."
        checked={checked}
        onChange={setChecked}
      />
    </div>
  );
}

function CheckboxSizeCase() {
  const [values, setValues] = React.useState({ small: false, medium: true, large: false });

  return (
    <div style={centeredPanelStyle}>
      <div className="checkbox-group">
        <Checkbox
          id="case-checkbox-small"
          size="small"
          label="small"
          checked={values.small}
          onChange={next => setValues(prev => ({ ...prev, small: next }))}
        />
        <Checkbox
          id="case-checkbox-medium"
          size="medium"
          label="medium"
          checked={values.medium}
          onChange={next => setValues(prev => ({ ...prev, medium: next }))}
        />
        <Checkbox
          id="case-checkbox-large"
          size="large"
          label="large"
          checked={values.large}
          onChange={next => setValues(prev => ({ ...prev, large: next }))}
        />
      </div>
    </div>
  );
}

function DatePickerDefaultCase() {
  const [value, setValue] = React.useState<Date | undefined>(new Date('2026-04-08'));

  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 280 }}>
        <DatePicker
          id="case-datepicker-default"
          label="체크인"
          value={value}
          onChange={setValue}
          helperText="기본 단일 날짜 선택 예제입니다."
        />
      </div>
    </div>
  );
}

function DatePickerBoundedCase() {
  const [value, setValue] = React.useState<Date | undefined>();

  return (
    <div style={panelStyle}>
      <div style={{ ...stackStyle, maxWidth: 320 }}>
        <DatePicker
          id="case-datepicker-bounded"
          label="예약일"
          value={value}
          onChange={setValue}
          helperText="오늘부터 30일 안의 평일만 예약 가능하도록 제한했습니다."
          fromDate={new Date('2026-04-08')}
          toDate={new Date('2026-05-08')}
          disabledDays={{ dayOfWeek: [0, 6] }}
        />
      </div>
    </div>
  );
}

function DialogDefaultCase() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={centeredPanelStyle}>
      <Button label="Open dialog" onClick={() => setOpen(true)} />
      <Dialog isOpen={open} onRequestClose={() => setOpen(false)} title="기본형 dialog">
        <p>Use this dialog for short confirmation or guidance flows.</p>
        <div style={{ marginTop: 12 }}>
          <Button label="Close" onClick={() => setOpen(false)} />
        </div>
      </Dialog>
    </div>
  );
}

function DialogVariantsCase() {
  const [variant, setVariant] = React.useState<'bottomsheet' | 'full' | null>(null);

  return (
    <div style={centeredPanelStyle}>
      <div style={rowStyle}>
        <Button label="Bottom Sheet" variant="secondary" onClick={() => setVariant('bottomsheet')} />
        <Button label="Full Dialog" variant="danger" onClick={() => setVariant('full')} />
      </div>
      <Dialog
        isOpen={variant !== null}
        onRequestClose={() => setVariant(null)}
        title={variant === 'full' ? 'Full screen dialog' : 'Bottom sheet'}
        variant={variant ?? 'dialog'}
      >
        <p>One component can support several layouts based on context.</p>
      </Dialog>
    </div>
  );
}

function PaginationDefaultCase() {
  const [page, setPage] = React.useState(6);

  return (
    <div style={centeredPanelStyle}>
      <div style={{ ...stackStyle, justifyItems: 'center' }}>
        <Pagination count={12} page={page} onChange={setPage} />
        <div style={{ fontSize: 14, color: '#47627a' }}>
          current page: <strong>{page}</strong>
        </div>
      </div>
    </div>
  );
}

function PaginationEdgesCase() {
  const [page, setPage] = React.useState(9);

  return (
    <div style={centeredPanelStyle}>
      <div style={{ ...stackStyle, justifyItems: 'center' }}>
        <Pagination
          count={24}
          page={page}
          onChange={setPage}
          boundaryCount={2}
          showFirstButton
          showLastButton
          size="large"
        />
        <div style={{ fontSize: 14, color: '#47627a' }}>
          archive page <strong>{page}</strong> of 24
        </div>
      </div>
    </div>
  );
}

function RadioGroupCase() {
  const [value, setValue] = React.useState('male');

  return (
    <div style={centeredPanelStyle}>
      <RadioGroup
        name="gender-case"
        size="medium"
        value={value}
        onChange={setValue}
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'none', label: '비활성화 option', disabled: true },
        ]}
      />
    </div>
  );
}

function SelectDefaultCase() {
  const [value, setValue] = React.useState('');

  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 280 }}>
        <Select id="case-select-default" value={value} onChange={setValue} options={selectOptions} placeholder="Age" />
      </div>
    </div>
  );
}

function SelectPreselectedCase() {
  const [value, setValue] = React.useState('30');

  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 280 }}>
        <Select id="case-select-preselected" value={value} onChange={setValue} options={selectOptions} placeholder="Age" />
      </div>
    </div>
  );
}

function SkeletonShowcaseCase() {
  return (
    <div style={panelStyle}>
      <div style={{ display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Skeleton variant="circle" width={56} height={56} />
          <div style={{ display: 'grid', gap: 10, width: '100%' }}>
            <Skeleton variant="line" width="45%" height={14} />
            <Skeleton variant="line" width="80%" height={14} />
          </div>
        </div>
        <Skeleton variant="rect" width="100%" height={120} />
      </div>
    </div>
  );
}

function SliderDefaultCase() {
  const [value, setValue] = React.useState(40);

  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 320 }}>
        <Slider id="case-slider-default" value={value} onChange={setValue} />
      </div>
    </div>
  );
}

function SliderRangeCase() {
  const [value, setValue] = React.useState(25);

  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 320, display: 'grid', gap: 12 }}>
        <Slider id="case-slider-range" min={10} max={50} step={5} value={value} onChange={setValue} />
        <div style={{ fontSize: 14, color: '#47627a' }}>
          current value: <strong>{value}</strong>
        </div>
      </div>
    </div>
  );
}

function SwitchDefaultCase() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div style={centeredPanelStyle}>
      <Switch id="case-switch-default" checked={checked} onChange={setChecked} label="Marketing emails" />
    </div>
  );
}

function SwitchSettingsCase() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div style={centeredPanelStyle}>
      <div style={rowStyle}>
        <Switch id="case-switch-settings" checked={darkMode} onChange={setDarkMode} label="Dark mode" />
        <span style={{ fontSize: 14, color: '#47627a' }}>{darkMode ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  );
}

function TabsUnderlineCase() {
  return (
    <div style={panelStyle}>
      <Tabs
        defaultActiveId="overview"
        items={[
          {
            id: 'overview',
            label: 'Overview',
            content: (
              <div style={{ display: 'grid', gap: 12 }}>
                <p style={{ margin: 0, color: '#47627a', fontSize: 16, lineHeight: 1.75 }}>
                  Tabs let you switch between related content without moving away from the current page.
                </p>
                <p style={{ margin: 0, color: '#47627a', fontSize: 16, lineHeight: 1.75 }}>
                  This example uses the default underline style for product or summary sections.
                </p>
              </div>
            ),
          },
          {
            id: 'details',
            label: 'Details',
            content: (
              <ul style={{ margin: 0, paddingLeft: 20, color: '#47627a', fontSize: 16, lineHeight: 1.8 }}>
                <li>Supports controlled and uncontrolled active tab state</li>
                <li>Includes arrow-key, Home, and End keyboard navigation</li>
                <li>Disabled tabs remain visible but cannot be selected</li>
              </ul>
            ),
          },
          {
            id: 'history',
            label: 'History',
            content: (
              <p style={{ margin: 0, color: '#47627a', fontSize: 16, lineHeight: 1.75 }}>
                Recent changes, audit notes, or secondary records can be grouped into separate tab panels.
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}

function TabsVerticalCase() {
  return (
    <div style={panelStyle}>
      <Tabs
        orientation="vertical"
        defaultActiveId="billing"
        items={[
          {
            id: 'profile',
            label: 'Profile settings',
            content: (
              <p style={{ margin: 0, color: '#47627a', fontSize: 16, lineHeight: 1.75 }}>
                Manage account basics, notification defaults, and member profile information.
              </p>
            ),
          },
          {
            id: 'billing',
            label: 'Billing',
            content: (
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ padding: 16, borderRadius: 14, background: '#f5f8fb' }}>
                  <strong style={{ display: 'block', marginBottom: 6 }}>Current plan</strong>
                  <span style={{ color: '#5c6c7a', fontSize: 15 }}>Team Pro Annual</span>
                </div>
                <div style={{ padding: 16, borderRadius: 14, background: '#f5f8fb' }}>
                  <strong style={{ display: 'block', marginBottom: 6 }}>Next invoice</strong>
                  <span style={{ color: '#5c6c7a', fontSize: 15 }}>May 01, 2026</span>
                </div>
              </div>
            ),
          },
          {
            id: 'security',
            label: 'Security',
            content: (
              <p style={{ margin: 0, color: '#47627a', fontSize: 16, lineHeight: 1.75 }}>
                Keep session controls, 2FA policies, and access approvals in a separate settings area.
              </p>
            ),
          },
          {
            id: 'audit',
            label: 'Audit log',
            disabled: true,
            content: <p style={{ margin: 0 }}>Disabled tab content</p>,
          },
        ]}
      />
    </div>
  );
}

function TableDefaultCase() {
  return (
    <div style={panelStyle}>
      <Table
        caption="Team performance"
        columns={teamTableColumns}
        data={teamTableRows}
        hoverable
      />
    </div>
  );
}

function TableCompactCase() {
  return (
    <div style={panelStyle}>
      <Table
        caption="Recent invoices"
        columns={[
          { key: 'invoice', header: 'Invoice' },
          { key: 'date', header: 'Date', width: '160px' },
          { key: 'amount', header: 'Amount', align: 'right', width: '140px' },
        ]}
        data={[
          { id: 'invoice-1', invoice: 'INV-2401', date: 'Apr 02, 2026', amount: '$1,200.00' },
          { id: 'invoice-2', invoice: 'INV-2402', date: 'Apr 05, 2026', amount: '$860.00' },
          { id: 'invoice-3', invoice: 'INV-2403', date: 'Apr 07, 2026', amount: '$540.00' },
        ]}
        striped
        compact
      />
    </div>
  );
}

function TextFieldOutlinedCase() {
  const [value, setValue] = React.useState('');

  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 280 }}>
        <TextField id="case-textfield-outlined" label="아웃라인" value={value} onChange={setValue} />
      </div>
    </div>
  );
}

function TextFieldStatesCase() {
  const [password, setPassword] = React.useState('');

  return (
    <div style={panelStyle}>
      <div style={{ ...stackStyle, maxWidth: 320 }}>
        <TextField id="case-textfield-filled" label="Filled" variant="filled" value="" onChange={() => {}} />
        <TextField id="case-textfield-password" label="Password" type="password" value={password} onChange={setPassword} />
        <TextField
          id="case-textfield-error"
          label="Error"
          value="invalid value"
          onChange={() => {}}
          error
          helperText="Please review the input value."
        />
      </div>
    </div>
  );
}

function TextareaBasicCase() {
  const [value, setValue] = React.useState('');

  return (
    <div style={centeredPanelStyle}>
      <div style={{ width: 320 }}>
        <Textarea
          id="case-textarea-basic"
          label="프로젝트 메모"
          value={value}
          onChange={setValue}
          placeholder="세부 내용을 입력하세요"
          rows={5}
        />
      </div>
    </div>
  );
}

function TextareaStatesCase() {
  const [feedback, setFeedback] = React.useState('이번 릴리스에서 확인한 이슈와 개선 포인트를 정리합니다.');

  return (
    <div style={panelStyle}>
      <div style={{ ...stackStyle, maxWidth: 360 }}>
        <Textarea
          id="case-textarea-filled"
          label="회의 노트"
          variant="filled"
          value="Filled variant works well in dense form layouts."
          onChange={() => {}}
          rows={4}
          resize="none"
        />
        <Textarea
          id="case-textarea-feedback"
          label="상세 피드백"
          value={feedback}
          onChange={setFeedback}
          helperText="핵심 이슈를 간단히 정리해 주세요."
          maxLength={160}
          showCount
          rows={5}
        />
        <Textarea
          id="case-textarea-error"
          label="검토 코멘트"
          value="Too short"
          onChange={() => {}}
          error
          helperText="최소 한 가지 구체적인 예시를 포함해 주세요."
          rows={4}
        />
      </div>
    </div>
  );
}

function ToastDefaultCase() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={panelStyle}>
      <div style={{ minHeight: 180 }}>
        <div style={rowStyle}>
          <Button label="Show Toast" onClick={() => setOpen(true)} />
          <Button label="Force Close" variant="secondary" onClick={() => setOpen(false)} />
        </div>
        <Toast
          open={open}
          message="I love snacks."
          actionLabel="UNDO"
          onAction={() => {}}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

function ToastVariantsCase() {
  const [variant, setVariant] = React.useState<'success' | 'error' | null>(null);

  return (
    <div style={panelStyle}>
      <div style={{ minHeight: 180 }}>
        <div style={rowStyle}>
          <Button label="Success" onClick={() => setVariant('success')} />
          <Button label="Error" variant="danger" onClick={() => setVariant('error')} />
        </div>
        <Toast
          open={variant !== null}
          message={variant === 'success' ? 'Saved successfully.' : 'Something went wrong.'}
          variant={variant ?? 'default'}
          actionLabel={variant === 'success' ? 'UNDO' : 'RETRY'}
          onAction={() => {}}
          onClose={() => setVariant(null)}
        />
      </div>
    </div>
  );
}

function TooltipPlacementsCase() {
  return (
    <div style={centeredPanelStyle}>
      <div style={rowStyle}>
        <TooltipDemo id="tooltip-top-case" content="Top tooltip" buttonLabel="Top" />
        <TooltipDemo id="tooltip-right-case" content="Right tooltip" place="right" buttonLabel="Right" />
        <TooltipDemo id="tooltip-bottom-case" content="Bottom tooltip" place="bottom" buttonLabel="Bottom" />
      </div>
    </div>
  );
}

function TooltipClickCase() {
  return (
    <div style={centeredPanelStyle}>
      <TooltipDemo id="tooltip-click-case" content="Tooltip opened on click" openOnClick buttonLabel="Click me" />
    </div>
  );
}

const componentCaseCodeMap: Record<string, Record<string, string>> = {
  accordion: {
    single: `const items = [
  { id: 'panel1', title: 'Shipping details', content: <p>Orders ship within 2 to 3 business days.</p> },
  { id: 'panel2', title: 'Returns and exchanges', content: <p>Requests can be submitted within 7 days after delivery.</p> },
  { id: 'panel3', title: 'Member benefits', content: <p>Points, coupons, and member pricing are supported.</p> },
];

<Accordion mode="single" defaultOpenId="panel2" items={items} />`,
    multiple: `const items = [
  { id: 'guide1', title: 'Usage guide', content: <p>You can open more than one section at a time.</p> },
  { id: 'guide2', title: 'Accessibility', content: <p>Button and region relationships are announced with aria attributes.</p> },
  { id: 'guide3', title: '비활성화 state', disabled: true, content: <p>비활성화 item</p> },
];

<Accordion mode="multiple" defaultOpenIds={['guide1']} items={items} />`,
    checkboxHeader: `const [checked, setChecked] = useState(false);

<div className="accordion-panel accordion-checkbox-panel">
  <div className="accordion-checkbox-header">
    <Checkbox
      className="accordion-header-checkbox"
      id="accordion-header-checkbox"
      size="medium"
      label="Select shipping details"
      checked={checked}
      onChange={setChecked}
    />

    <button
      type="button"
      className="accordion-trigger"
      aria-expanded={checked}
      onClick={() => setChecked(prev => !prev)}
    >
      <span className="accordion-trigger-label">Shipping details confirmation</span>
      <span className="accordion-trigger-chevron" aria-hidden="true" />
    </button>
  </div>

  <div className="accordion-content" aria-hidden={!checked}>
    <div>
      <p>Check the header control to open the section.</p>
    </div>
  </div>
</div>`,
  },
  button: {
    primary: `<Button label="기본 버튼 Button" />`,
    scale: `<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <Button label="Small" size="small" />
  <Button label="Medium" size="medium" variant="secondary" />
  <Button label="Large" size="large" variant="danger" />
</div>`,
    disabled: `<Button label="비활성화 Button" disabled />`,
  },
  card: {
    default: `<Card title="Content card">
  Use this pattern to group summary information inside a clear surface.
</Card>`,
    image: `<Card
  title="Image card"
  imageUrl="https://via.placeholder.com/400x200/dae7f2/33556f?text=Preview"
>
  This variation combines media and text content in one card layout.
</Card>`,
  },
  'date-picker': {
    default: `const [value, setValue] = useState<Date | undefined>(new Date('2026-04-08'));

<DatePicker
  id="case-datepicker-default"
  label="체크인"
  value={value}
  onChange={setValue}
  helperText="기본 단일 날짜 선택 예제입니다."
/>`,
    bounded: `const [value, setValue] = useState<Date | undefined>();

<DatePicker
  id="case-datepicker-bounded"
  label="예약일"
  value={value}
  onChange={setValue}
  helperText="오늘부터 30일 안의 평일만 예약 가능하도록 제한했습니다."
  fromDate={new Date('2026-04-08')}
  toDate={new Date('2026-05-08')}
  disabledDays={{ dayOfWeek: [0, 6] }}
/>`,
  },
  checkbox: {
    basic: `const [checked, setChecked] = useState(false);

<Checkbox
  id="case-checkbox-basic"
  size="medium"
  label="I agree to the terms."
  checked={checked}
  onChange={setChecked}
/>`,
    sizes: `const [values, setValues] = useState({ small: false, medium: true, large: false });

<div className="checkbox-group">
  <Checkbox
    id="case-checkbox-small"
    size="small"
    label="small"
    checked={values.small}
    onChange={next => setValues(prev => ({ ...prev, small: next }))}
  />
  <Checkbox
    id="case-checkbox-medium"
    size="medium"
    label="medium"
    checked={values.medium}
    onChange={next => setValues(prev => ({ ...prev, medium: next }))}
  />
  <Checkbox
    id="case-checkbox-large"
    size="large"
    label="large"
    checked={values.large}
    onChange={next => setValues(prev => ({ ...prev, large: next }))}
  />
</div>`,
  },
  dialog: {
    default: `const [open, setOpen] = useState(false);

<>
  <Button label="Open dialog" onClick={() => setOpen(true)} />
  <Dialog isOpen={open} onRequestClose={() => setOpen(false)} title="기본형 dialog">
    <p>Use this dialog for short confirmation or guidance flows.</p>
    <Button label="Close" onClick={() => setOpen(false)} />
  </Dialog>
</>`,
    variants: `const [variant, setVariant] = useState<'bottomsheet' | 'full' | null>(null);

<>
  <Button label="Bottom Sheet" variant="secondary" onClick={() => setVariant('bottomsheet')} />
  <Button label="Full Dialog" variant="danger" onClick={() => setVariant('full')} />

  <Dialog
    isOpen={variant !== null}
    onRequestClose={() => setVariant(null)}
    title={variant === 'full' ? 'Full screen dialog' : 'Bottom sheet'}
    variant={variant ?? 'dialog'}
  >
    <p>One component can support several layouts based on context.</p>
  </Dialog>
</>`,
  },
  pagination: {
    default: `const [page, setPage] = useState(6);

<>
  <Pagination count={12} page={page} onChange={setPage} />
  <div>current page: {page}</div>
</>`,
    edges: `const [page, setPage] = useState(9);

<>
  <Pagination
    count={24}
    page={page}
    onChange={setPage}
    boundaryCount={2}
    showFirstButton
    showLastButton
    size="large"
  />
  <div>archive page {page} of 24</div>
</>`,
  },
  'radio-group': {
    default: `const [value, setValue] = useState('male');

<RadioGroup
  name="gender-case"
  size="medium"
  value={value}
  onChange={setValue}
  options={[
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'none', label: '비활성화 option', disabled: true },
  ]}
/>`,
  },
  select: {
    default: `const [value, setValue] = useState('');

<Select
  id="case-select-default"
  value={value}
  onChange={setValue}
  options={selectOptions}
  placeholder="Age"
/>`,
    preselected: `const [value, setValue] = useState('30');

<Select
  id="case-select-preselected"
  value={value}
  onChange={setValue}
  options={selectOptions}
  placeholder="Age"
/>`,
  },
  skeleton: {
    showcase: `<div style={{ display: 'grid', gap: 16 }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <Skeleton variant="circle" width={56} height={56} />
    <div style={{ display: 'grid', gap: 10, width: '100%' }}>
      <Skeleton variant="line" width="45%" height={14} />
      <Skeleton variant="line" width="80%" height={14} />
    </div>
  </div>
  <Skeleton variant="rect" width="100%" height={120} />
</div>`,
  },
  slider: {
    default: `const [value, setValue] = useState(40);

<Slider id="case-slider-default" value={value} onChange={setValue} />`,
    range: `const [value, setValue] = useState(25);

<>
  <Slider id="case-slider-range" min={10} max={50} step={5} value={value} onChange={setValue} />
  <div>current value: {value}</div>
</>`,
  },
  switch: {
    default: `const [checked, setChecked] = useState(false);

<Switch
  id="case-switch-default"
  checked={checked}
  onChange={setChecked}
  label="Marketing emails"
/>`,
    settings: `const [darkMode, setDarkMode] = useState(false);

<>
  <Switch
    id="case-switch-settings"
    checked={darkMode}
    onChange={setDarkMode}
    label="Dark mode"
  />
  <span>{darkMode ? 'ON' : 'OFF'}</span>
</>`,
  },
  table: {
    default: `<Table
  caption="Team performance"
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'team', header: 'Team' },
    { key: 'status', header: 'Status', align: 'center', width: '120px' },
    { key: 'score', header: 'Score', align: 'right', width: '120px' },
  ]}
  data={[
    { id: 'member-1', name: 'Avery Kim', team: 'Design', status: 'Active', score: '92' },
    { id: 'member-2', name: 'Mina Lee', team: 'Frontend', status: 'Review', score: '88' },
    { id: 'member-3', name: 'Joon Park', team: 'QA', status: 'Pending', score: '76' },
  ]}
  hoverable
/>`,
    compact: `<Table
  caption="Recent invoices"
  columns={[
    { key: 'invoice', header: 'Invoice' },
    { key: 'date', header: 'Date', width: '160px' },
    { key: 'amount', header: 'Amount', align: 'right', width: '140px' },
  ]}
  data={[
    { id: 'invoice-1', invoice: 'INV-2401', date: 'Apr 02, 2026', amount: '$1,200.00' },
    { id: 'invoice-2', invoice: 'INV-2402', date: 'Apr 05, 2026', amount: '$860.00' },
    { id: 'invoice-3', invoice: 'INV-2403', date: 'Apr 07, 2026', amount: '$540.00' },
  ]}
  striped
  compact
/>`,
  },
  textarea: {
    basic: `const [value, setValue] = useState('');

<Textarea
  id="case-textarea-basic"
  label="프로젝트 메모"
  value={value}
  onChange={setValue}
  placeholder="세부 내용을 입력하세요"
  rows={5}
/>`,
    states: `const [feedback, setFeedback] = useState('이번 릴리스에서 확인한 이슈와 개선 포인트를 정리합니다.');

<div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
  <Textarea
    id="case-textarea-filled"
    label="회의 노트"
    variant="filled"
    value="Filled variant works well in dense form layouts."
    onChange={() => {}}
    rows={4}
    resize="none"
  />
  <Textarea
    id="case-textarea-feedback"
    label="상세 피드백"
    value={feedback}
    onChange={setFeedback}
    helperText="핵심 이슈를 간단히 정리해 주세요."
    maxLength={160}
    showCount
    rows={5}
  />
  <Textarea
    id="case-textarea-error"
    label="검토 코멘트"
    value="Too short"
    onChange={() => {}}
    error
    helperText="최소 한 가지 구체적인 예시를 포함해 주세요."
    rows={4}
  />
</div>`,
  },
  tabs: {
    underline: `const items = [
  {
    id: 'overview',
    label: 'Overview',
    content: <p>Tabs let you switch between related content without leaving the current page.</p>,
  },
  {
    id: 'details',
    label: 'Details',
    content: <p>Use separate panels for grouped details or status information.</p>,
  },
  {
    id: 'history',
    label: 'History',
    content: <p>Recent activity can stay in a dedicated panel.</p>,
  },
];

<Tabs defaultActiveId="overview" items={items} />`,
    vertical: `const items = [
  { id: 'profile', label: 'Profile settings', content: <p>Profile content</p> },
  { id: 'billing', label: 'Billing', content: <p>Billing content</p> },
  { id: 'security', label: 'Security', content: <p>Security content</p> },
  { id: 'audit', label: 'Audit log', disabled: true, content: <p>Disabled tab</p> },
];

<Tabs
  orientation="vertical"
  defaultActiveId="billing"
  items={items}
/>`,
  },
  'text-field': {
    outlined: `const [value, setValue] = useState('');

<TextField
  id="case-textfield-outlined"
  label="아웃라인"
  value={value}
  onChange={setValue}
/>`,
    states: `const [password, setPassword] = useState('');

<div style={{ display: 'grid', gap: 16, maxWidth: 320 }}>
  <TextField id="case-textfield-filled" label="Filled" variant="filled" value="" onChange={() => {}} />
  <TextField id="case-textfield-password" label="Password" type="password" value={password} onChange={setPassword} />
  <TextField
    id="case-textfield-error"
    label="Error"
    value="invalid value"
    onChange={() => {}}
    error
    helperText="Please review the input value."
  />
</div>`,
  },
  toast: {
    default: `const [open, setOpen] = useState(false);

<>
  <Button label="Show Toast" onClick={() => setOpen(true)} />
  <Button label="Force Close" variant="secondary" onClick={() => setOpen(false)} />
  <Toast
    open={open}
    message="I love snacks."
    actionLabel="UNDO"
    onAction={() => {}}
    onClose={() => setOpen(false)}
  />
</>`,
    variants: `const [variant, setVariant] = useState<'success' | 'error' | null>(null);

<>
  <Button label="Success" onClick={() => setVariant('success')} />
  <Button label="Error" variant="danger" onClick={() => setVariant('error')} />
  <Toast
    open={variant !== null}
    message={variant === 'success' ? 'Saved successfully.' : 'Something went wrong.'}
    variant={variant ?? 'default'}
    actionLabel={variant === 'success' ? 'UNDO' : 'RETRY'}
    onAction={() => {}}
    onClose={() => setVariant(null)}
  />
</>`,
  },
  tooltip: {
    placements: `<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <TooltipDemo id="tooltip-top-case" content="Top tooltip" buttonLabel="Top" />
  <TooltipDemo id="tooltip-right-case" content="Right tooltip" place="right" buttonLabel="Right" />
  <TooltipDemo id="tooltip-bottom-case" content="Bottom tooltip" place="bottom" buttonLabel="Bottom" />
</div>`,
    click: `<TooltipDemo
  id="tooltip-click-case"
  content="Tooltip opened on click"
  openOnClick
  buttonLabel="Click me"
/>`,
  },
};

const componentCases: Record<string, ComponentCaseCollection> = {
  accordion: {
    summary: '접기와 펼치기 패턴을 다양한 방식으로 확인할 수 있는 아코디언 케이스 모음입니다.',
    cases: [
      { id: 'single', title: '단일 열림', description: '한 번에 하나의 패널만 열리도록 구성한 기본 아코디언 예제입니다.', preview: <AccordionSingleCase /> },
      { id: 'multiple', title: '복수 토글', description: '여러 섹션을 동시에 펼쳐 놓을 수 있는 아코디언 예제입니다.', preview: <AccordionMultipleCase /> },
      { id: 'checkboxHeader', title: '체크박스 헤더', description: '헤더에 공용 Checkbox 컴포넌트를 배치하고, 체크하면 섹션이 열리도록 구성한 예제입니다.', preview: <AccordionCheckboxHeaderCase /> },
    ],
  },
  button: {
    summary: '기본 버튼, 크기 변화, 비활성화 상태를 한 번에 비교할 수 있는 버튼 케이스 모음입니다.',
    cases: [
      { id: 'primary', title: '기본 버튼', description: '기본 상태에서 사용하는 대표 액션 버튼 예제입니다.', preview: <ButtonPrimaryCase /> },
      { id: 'scale', title: '크기와 변형', description: '크기와 시각적 변형을 한 번에 비교할 수 있는 예제입니다.', preview: <ButtonScaleCase /> },
      { id: 'disabled', title: '비활성화', description: '비활성화 상태의 버튼 동작을 보여주는 예제입니다.', preview: <ButtonDisabledCase /> },
    ],
  },
  card: {
    summary: '기본 카드와 이미지 카드 레이아웃을 비교할 수 있는 카드 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '간단한 정보를 하나의 묶음으로 정리하는 기본 카드 예제입니다.', preview: <CardDefaultCase /> },
      { id: 'image', title: '이미지 포함', description: '이미지와 텍스트를 하나의 카드 안에서 함께 보여주는 예제입니다.', preview: <CardImageCase /> },
    ],
  },
  'date-picker': {
    summary: '기본 날짜 선택과 선택 가능한 범위를 제한한 예약형 예제를 함께 확인할 수 있는 데이트피커 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '폼 입력에 바로 연결할 수 있는 기본 단일 날짜 선택 예제입니다.', preview: <DatePickerDefaultCase /> },
      { id: 'bounded', title: '예약 가능 범위 제한', description: '선택 가능한 기간과 요일을 제한한 예약형 데이트피커 예제입니다.', preview: <DatePickerBoundedCase /> },
    ],
  },
  checkbox: {
    summary: '단일 동의 흐름과 크기 변형을 확인할 수 있는 체크박스 케이스 모음입니다.',
    cases: [
      { id: 'basic', title: '기본형', description: '기본 선택 흐름에 사용하는 단일 체크박스 예제입니다.', preview: <CheckboxBasicCase /> },
      { id: 'sizes', title: '크기 변형', description: 'small, medium, large 크기를 비교할 수 있는 체크박스 예제입니다.', preview: <CheckboxSizeCase /> },
    ],
  },
  dialog: {
    summary: '기본 다이얼로그와 바텀시트, 전체 화면 레이아웃을 함께 확인할 수 있는 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형 Dialog', description: '짧은 확인이나 안내에 사용하는 기본 모달 예제입니다.', preview: <DialogDefaultCase /> },
      { id: 'variants', title: '바텀시트와 전체 화면', description: '같은 컴포넌트로 서로 다른 레이아웃을 전환해 보는 예제입니다.', preview: <DialogVariantsCase /> },
    ],
  },
  pagination: {
    summary: '목록 이동과 대량 페이지 탐색에 맞춘 기본형, 양끝 버튼 포함 예제를 확인할 수 있는 페이지네이션 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '현재 페이지와 인접 페이지를 중심으로 이동하는 기본 Pagination 예제입니다.', preview: <PaginationDefaultCase /> },
      { id: 'edges', title: '양끝 이동 포함', description: '처음과 마지막 페이지로 빠르게 이동할 수 있는 대량 목록용 Pagination 예제입니다.', preview: <PaginationEdgesCase /> },
    ],
  },
  'radio-group': {
    summary: '비활성 옵션을 포함한 기본 라디오 그룹 예제입니다.',
    cases: [{ id: 'default', title: '기본형', description: '하나의 값을 선택하는 기본 라디오 그룹 예제입니다.', preview: <RadioGroupCase /> }],
  },
  select: {
    summary: '기본 상태와 초기 선택 상태를 확인할 수 있는 셀렉트 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '초기값 없이 플레이스홀더로 시작하는 기본 셀렉트 예제입니다.', preview: <SelectDefaultCase /> },
      { id: 'preselected', title: '초기 선택', description: '초기 선택값이 들어간 상태를 보여주는 셀렉트 예제입니다.', preview: <SelectPreselectedCase /> },
    ],
  },
  skeleton: {
    summary: '아바타, 텍스트, 콘텐츠 플레이스홀더를 함께 보여주는 스켈레톤 케이스입니다.',
    cases: [{ id: 'showcase', title: '로딩 구성', description: '로딩 화면 구성을 한 번에 확인할 수 있는 스켈레톤 예제입니다.', preview: <SkeletonShowcaseCase /> }],
  },
  slider: {
    summary: '기본 슬라이더와 범위 제한 예제를 비교할 수 있는 슬라이더 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '값을 자유롭게 조절하는 기본 슬라이더 예제입니다.', preview: <SliderDefaultCase /> },
      { id: 'range', title: '범위 예제', description: '최소값, 최대값, step 값을 함께 보여주는 슬라이더 예제입니다.', preview: <SliderRangeCase /> },
    ],
  },
  switch: {
    summary: '기본 토글과 설정형 사용 예시를 확인할 수 있는 스위치 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '라벨 포함', description: '켜짐과 꺼짐을 전환하는 기본 스위치 예제입니다.', preview: <SwitchDefaultCase /> },
      { id: 'settings', title: '설정형 예제', description: '스위치와 ON/OFF 상태 표시를 함께 보여주는 설정형 예제입니다.', preview: <SwitchSettingsCase /> },
    ],
  },
  table: {
    summary: '기본 테이블과 밀도 높은 요약형 테이블을 비교할 수 있는 데이터 테이블 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '상태와 수치를 한 번에 비교하는 기본 데이터 테이블 예제입니다.', preview: <TableDefaultCase /> },
      { id: 'compact', title: '컴팩트 요약형', description: '줄무늬 배경과 compact 밀도를 적용한 요약 테이블 예제입니다.', preview: <TableCompactCase /> },
    ],
  },
  textarea: {
    summary: '기본 다중 행 입력과 상태 변형, 글자 수 표시를 확인할 수 있는 텍스트 영역 케이스 모음입니다.',
    cases: [
      { id: 'basic', title: '기본형', description: '여러 줄 텍스트를 입력하는 기본 Textarea 예제입니다.', preview: <TextareaBasicCase /> },
      { id: 'states', title: '상태 변형', description: 'Filled, helper text, count, error 상태를 함께 보여주는 Textarea 예제입니다.', preview: <TextareaStatesCase /> },
    ],
  },
  tabs: {
    summary: '기본 탭 전환과 세로형 설정 레이아웃을 확인할 수 있는 Tabs 케이스 모음입니다.',
    cases: [
      { id: 'underline', title: '기본 탭', description: '관련 콘텐츠를 가볍게 전환하는 기본 underline 스타일 Tabs 예제입니다.', preview: <TabsUnderlineCase /> },
      { id: 'vertical', title: '세로형 설정 탭', description: '설정 화면처럼 좌측 목록과 우측 패널을 함께 쓰는 vertical Tabs 예제입니다.', preview: <TabsVerticalCase /> },
    ],
  },
  'text-field': {
    summary: '아웃라인, filled, password, and error states collected into one section.',
    cases: [
      { id: 'outlined', title: '아웃라인', description: '아웃라인 스타일의 기본 입력 필드 예제입니다.', preview: <TextFieldOutlinedCase /> },
      { id: 'states', title: '상태 변형', description: 'Filled, Password, Error 상태를 한 번에 보여주는 입력 필드 예제입니다.', preview: <TextFieldStatesCase /> },
    ],
  },
  toast: {
    summary: '기본 토스트와 성공, 오류 피드백 흐름을 확인할 수 있는 토스트 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '액션과 닫기 기능이 포함된 기본 토스트 예제입니다.', preview: <ToastDefaultCase /> },
      { id: 'variants', title: '성공과 오류', description: '상태에 따라 톤과 액션 라벨이 바뀌는 토스트 예제입니다.', preview: <ToastVariantsCase /> },
    ],
  },
  tooltip: {
    summary: '위치별 동작과 클릭 트리거를 확인할 수 있는 툴팁 케이스 모음입니다.',
    cases: [
      { id: 'placements', title: '위치별 예제', description: 'top, right, bottom 위치를 비교할 수 있는 툴팁 예제입니다.', preview: <TooltipPlacementsCase /> },
      { id: 'click', title: '클릭 트리거', description: 'hover 대신 클릭으로 열리는 툴팁 예제입니다.', preview: <TooltipClickCase /> },
    ],
  },
};

function getCaseCode(slug: string, caseId: string) {
  return componentCaseCodeMap[slug]?.[caseId] ?? '// Code example will be added soon.';
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', 'true');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function ComponentCaseArticle({ slug, componentCase }: { slug: string; componentCase: ComponentCase }) {
  const [activeTab, setActiveTab] = React.useState<CaseTab>('preview');
  const [copied, setCopied] = React.useState(false);
  const code = getCaseCode(slug, componentCase.id);

  const handleCopy = async () => {
    try {
      await copyText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error(error);
      setCopied(false);
    }
  };

  return (
    <article key={componentCase.id} id={`case-${componentCase.id}`} className="component-case-card">
      <div className="component-case-copy">
        <h3>{componentCase.title}</h3>
        <p>{componentCase.description}</p>
      </div>

      <div className="component-case-toolbar">
        <div className="component-case-tablist" role="tablist" aria-label={`${componentCase.title} tabs`}>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'preview'}
            className={activeTab === 'preview' ? 'component-case-tab is-active' : 'component-case-tab'}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'code'}
            className={activeTab === 'code' ? 'component-case-tab is-active' : 'component-case-tab'}
            onClick={() => setActiveTab('code')}
          >
            Code
          </button>
        </div>

        <button type="button" className="component-case-copy-btn" onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy code'}
        </button>
      </div>

      <div className="component-case-body">
        {activeTab === 'preview' ? (
          <div className="component-case-preview">{componentCase.preview}</div>
        ) : (
          <div className="component-case-code-shell" role="tabpanel" aria-label={`${componentCase.title} code example`}>
            <div className="component-case-code-topbar" aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>{componentCase.id}.tsx</strong>
            </div>
            <pre className="component-case-code">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </article>
  );
}

export function ComponentCaseSections({ slug }: { slug: string }) {
  const entry = componentCases[slug];

  if (!entry) {
    return null;
  }

  return (
    <section className="component-case-layout">
      <div className="component-case-grid">
        {entry.cases.map(componentCase => (
          <ComponentCaseArticle key={componentCase.id} slug={slug} componentCase={componentCase} />
        ))}
      </div>
    </section>
  );
}



