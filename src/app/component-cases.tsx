'use client';

import React from 'react';
import { Clock3 } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { Accordion } from '../components/Accordion/Accordion';
import { Badge } from '../components/Badge/Badge';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Chart } from '../components/Chart/Chart';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { DatePicker } from '../components/DatePicker/DatePicker';
import { DateRangeFieldDemo } from '../components/DatePicker/DateRangeFieldDemo';
import { Dialog } from '../components/Dialog/DialogIcon';
import { Pagination } from '../components/Pagination/Pagination';
import { RadioGroup } from '../components/RadioGroup/RadioGroup';
import { Select } from '../components/Select/Select';
import { Skeleton } from '../components/Skeleton/Skeleton';
import { Slider } from '../components/Slider/Slider';
import { Swipe } from '../components/Swipe/Swipe';
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

const demoTitleStyle: React.CSSProperties = {
  color: 'var(--theme-brand-strong)',
};

const demoBodyTextStyle: React.CSSProperties = {
  color: 'var(--app-text-secondary)',
};

const demoMetaTextStyle: React.CSSProperties = {
  color: 'var(--app-text-secondary)',
};

const demoSurfaceCardStyle: React.CSSProperties = {
  background: 'var(--app-demo-surface)',
  boxShadow: '0 18px 40px var(--app-demo-shadow)',
};

const demoMutedPanelStyle: React.CSSProperties = {
  padding: 16,
  borderRadius: 14,
  background: 'var(--app-surface-muted)',
  border: '1px solid var(--app-demo-border)',
};

function CasePanel({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'component-case-demo-panel is-centered' : 'component-case-demo-panel'}>
      {children}
    </div>
  );
}

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

const chartTrendData = [
  { label: 'Jan', users: 8400 },
  { label: 'Feb', users: 9100 },
  { label: 'Mar', users: 10400 },
  { label: 'Apr', users: 9800 },
  { label: 'May', users: 12100 },
  { label: 'Jun', users: 13400 },
];

const chartRevenueData = [
  { label: 'Search', spend: 1200, revenue: 4200 },
  { label: 'Display', spend: 860, revenue: 2780 },
  { label: 'CRM', spend: 520, revenue: 2310 },
  { label: 'Social', spend: 970, revenue: 3560 },
];

const chartShareData = [
  { label: 'Organic', share: 38 },
  { label: 'Paid', share: 27 },
  { label: 'Referral', share: 18 },
  { label: 'Direct', share: 17 },
];

const swipeHeroSlides = [
  {
    id: 'hero-editorial',
    content: (
      <div
        style={{
          minHeight: 220,
          padding: 24,
          borderRadius: 24,
          background: 'var(--app-demo-hero-1)',
          display: 'grid',
          alignContent: 'space-between',
          gap: 18,
        }}
      >
        <div style={{ display: 'grid', gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Main hero
          </span>
          <strong style={{ ...demoTitleStyle, fontSize: 28, lineHeight: 1.24 }}>Editorial campaign</strong>
          <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            메인 비주얼 배너를 한 장씩 넘기며 핵심 메시지를 전달하는 기본형 스와이프 예제입니다.
          </p>
        </div>
        <span style={{ ...demoTitleStyle, fontSize: 14, fontWeight: 700 }}>View campaign</span>
      </div>
    ),
  },
  {
    id: 'hero-members',
    content: (
      <div
        style={{
          minHeight: 220,
          padding: 24,
          borderRadius: 24,
          background: 'var(--app-demo-hero-2)',
          display: 'grid',
          alignContent: 'space-between',
          gap: 18,
        }}
      >
        <div style={{ display: 'grid', gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Members only
          </span>
          <strong style={{ ...demoTitleStyle, fontSize: 28, lineHeight: 1.24 }}>Spring rewards</strong>
          <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            프로모션 문구, 이미지 영역, CTA를 퍼블리셔가 직접 구성할 수 있습니다.
          </p>
        </div>
        <span style={{ ...demoTitleStyle, fontSize: 14, fontWeight: 700 }}>See benefits</span>
      </div>
    ),
  },
  {
    id: 'hero-drop',
    content: (
      <div
        style={{
          minHeight: 220,
          padding: 24,
          borderRadius: 24,
          background: 'var(--app-demo-hero-3)',
          display: 'grid',
          alignContent: 'space-between',
          gap: 18,
        }}
      >
        <div style={{ display: 'grid', gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Limited drop
          </span>
          <strong style={{ ...demoTitleStyle, fontSize: 28, lineHeight: 1.24 }}>Studio capsule</strong>
          <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            터치 스와이프와 버튼 네비게이션을 함께 제공하는 배너 패턴입니다.
          </p>
        </div>
        <span style={{ ...demoTitleStyle, fontSize: 14, fontWeight: 700 }}>Shop now</span>
      </div>
    ),
  },
];

const swipeCardSlides = [
  {
    id: 'card-bag',
    content: (
      <article
        style={{
          minHeight: 252,
          borderRadius: 24,
          overflow: 'hidden',
          ...demoSurfaceCardStyle,
        }}
      >
        <div style={{ height: 148, background: 'var(--app-demo-card-1)' }} />
        <div style={{ display: 'grid', gap: 8, padding: 20 }}>
          <strong style={{ ...demoTitleStyle, fontSize: 18 }}>Weekend bag</strong>
          <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            카드가 살짝 다음 장을 미리 보여주는 커머스형 스와이프 레일 예제입니다.
          </p>
          <span style={{ ...demoTitleStyle, fontSize: 16, fontWeight: 700 }}>$148.00</span>
        </div>
      </article>
    ),
  },
  {
    id: 'card-hoodie',
    content: (
      <article
        style={{
          minHeight: 252,
          borderRadius: 24,
          overflow: 'hidden',
          ...demoSurfaceCardStyle,
        }}
      >
        <div style={{ height: 148, background: 'var(--app-demo-card-2)' }} />
        <div style={{ display: 'grid', gap: 8, padding: 20 }}>
          <strong style={{ ...demoTitleStyle, fontSize: 18 }}>Soft hoodie</strong>
          <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            배너보다 정보가 많은 카드형 콘텐츠 묶음에도 무리 없이 적용할 수 있습니다.
          </p>
          <span style={{ ...demoTitleStyle, fontSize: 16, fontWeight: 700 }}>$82.00</span>
        </div>
      </article>
    ),
  },
  {
    id: 'card-sneakers',
    content: (
      <article
        style={{
          minHeight: 252,
          borderRadius: 24,
          overflow: 'hidden',
          ...demoSurfaceCardStyle,
        }}
      >
        <div style={{ height: 148, background: 'var(--app-demo-card-3)' }} />
        <div style={{ display: 'grid', gap: 8, padding: 20 }}>
          <strong style={{ ...demoTitleStyle, fontSize: 18 }}>Canvas sneakers</strong>
          <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            align start 설정과 함께 사용하면 레일형 리스트를 쉽게 만들 수 있습니다.
          </p>
          <span style={{ ...demoTitleStyle, fontSize: 16, fontWeight: 700 }}>$96.00</span>
        </div>
      </article>
    ),
  },
  {
    id: 'card-tumbler',
    content: (
      <article
        style={{
          minHeight: 252,
          borderRadius: 24,
          overflow: 'hidden',
          ...demoSurfaceCardStyle,
        }}
      >
        <div style={{ height: 148, background: 'var(--app-demo-card-4)' }} />
        <div style={{ display: 'grid', gap: 8, padding: 20 }}>
          <strong style={{ ...demoTitleStyle, fontSize: 18 }}>Daily tumbler</strong>
          <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            여러 장의 카드가 이어지는 리스트에서도 여백과 폭을 직접 제어할 수 있습니다.
          </p>
          <span style={{ ...demoTitleStyle, fontSize: 16, fontWeight: 700 }}>$24.00</span>
        </div>
      </article>
    ),
  },
];

function ButtonPrimaryCase() {
  return (
    <CasePanel centered>
      <Button label="기본 버튼 Button" />
    </CasePanel>
  );
}

function BadgeBasicCase() {
  return (
    <CasePanel centered>
      <div style={rowStyle}>
        <Badge label="신규" tone="brand" />
        <Badge label="승인 완료" tone="success" />
        <Badge label="검토 필요" tone="warning" />
      </div>
    </CasePanel>
  );
}

function BadgeVariantCase() {
  return (
    <CasePanel centered>
      <div style={rowStyle}>
        <Badge label="Solid" tone="brand" variant="solid" />
        <Badge label="Soft" tone="brand" variant="soft" />
        <Badge label="Outline" tone="brand" variant="outline" leadingDot />
      </div>
    </CasePanel>
  );
}

function BadgeFilterCase() {
  const [items, setItems] = React.useState(['서울', '모바일', '실시간']);

  return (
    <CasePanel>
      <div style={{ ...stackStyle, gap: 20 }}>
        <div style={{ ...rowStyle, justifyContent: 'flex-start' }}>
          {items.map(item => (
            <Badge
              key={item}
              label={item}
              tone="neutral"
              variant="soft"
              removable
              onRemove={() => setItems(prev => prev.filter(value => value !== item))}
            />
          ))}
        </div>
        <p style={{ ...demoMetaTextStyle, margin: 0, fontSize: 14, lineHeight: 1.6 }}>
          검색 필터, 태그 선택, 상태 라벨처럼 여러 값을 짧게 노출해야 할 때 사용하는 패턴입니다.
        </p>
      </div>
    </CasePanel>
  );
}

function ButtonScaleCase() {
  return (
    <CasePanel centered>
      <div style={rowStyle}>
        <Button label="Small" size="small" />
        <Button label="Medium" size="medium" variant="secondary" />
        <Button label="Large" size="large" variant="danger" />
      </div>
    </CasePanel>
  );
}

function ButtonDisabledCase() {
  return (
    <CasePanel centered>
      <Button label="비활성화 Button" disabled />
    </CasePanel>
  );
}

function AccordionSingleCase() {
  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function AccordionMultipleCase() {
  return (
    <CasePanel>
      <Accordion
        mode="multiple"
        defaultOpenIds={['guide1']}
        items={[
          { id: 'guide1', title: 'Usage guide', content: <p>You can open more than one section at a time.</p> },
          { id: 'guide2', title: 'Accessibility', content: <p>Button and region relationships are announced with aria attributes.</p> },
          { id: 'guide3', title: '비활성화 state', disabled: true, content: <p>비활성화 item</p> },
        ]}
      />
    </CasePanel>
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
    <CasePanel>
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
    </CasePanel>
  );
}

function CardDefaultCase() {
  return (
    <CasePanel centered>
      <div style={{ width: 320 }}>
        <Card title="Content card">Use this pattern to group summary information inside a clear surface.</Card>
      </div>
    </CasePanel>
  );
}

function CardImageCase() {
  return (
    <CasePanel centered>
      <div style={{ width: 320 }}>
        <Card title="Image card" imageUrl="https://via.placeholder.com/400x200/dae7f2/33556f?text=Preview">
          This variation combines media and text content in one card layout.
        </Card>
      </div>
    </CasePanel>
  );
}

function ChartLineCase() {
  return (
    <CasePanel>
      <Chart
        variant="line"
        title="Monthly traffic trend"
        description="월별 방문자 추이를 기본 라인 차트로 보여주는 예제입니다."
        data={chartTrendData}
        xKey="label"
        series={[{ key: 'users', label: 'Users', color: '#1f78b4' }]}
        valueFormatter={value => `${Number(value).toLocaleString()} users`}
      />
    </CasePanel>
  );
}

function ChartBarCase() {
  return (
    <CasePanel>
      <Chart
        variant="bar"
        title="Campaign performance"
        description="채널별 집행비와 매출을 비교하는 바 차트 예제입니다."
        data={chartRevenueData}
        xKey="label"
        series={[
          { key: 'spend', label: 'Spend', color: '#7ca6c8' },
          { key: 'revenue', label: 'Revenue', color: '#0c5a86' },
        ]}
        valueFormatter={value => `$${Number(value).toLocaleString()}`}
      />
    </CasePanel>
  );
}

function ChartDonutCase() {
  return (
    <CasePanel>
      <Chart
        variant="donut"
        title="Traffic share"
        description="유입 채널 비중을 한눈에 보여주는 도넛 차트 예제입니다."
        data={chartShareData}
        xKey="label"
        series={[
          { key: 'share', label: 'Organic', color: '#0c5a86' },
          { key: 'share', label: 'Paid', color: '#5b8fb8' },
          { key: 'share', label: 'Referral', color: '#99bdd8' },
          { key: 'share', label: 'Direct', color: '#d6e6f2' },
        ]}
        valueFormatter={value => `${value}%`}
        height={340}
      />
    </CasePanel>
  );
}

function CheckboxBasicCase() {
  const [checked, setChecked] = React.useState(false);

  return (
    <CasePanel centered>
      <Checkbox
        id="case-checkbox-basic"
        size="medium"
        label="I agree to the terms."
        checked={checked}
        onChange={setChecked}
      />
    </CasePanel>
  );
}

function CheckboxSizeCase() {
  const [values, setValues] = React.useState({ small: false, medium: true, large: false });

  return (
    <CasePanel centered>
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
    </CasePanel>
  );
}

function DatePickerDefaultCase() {
  const [value, setValue] = React.useState<Date | undefined>(new Date('2026-04-08'));

  return (
    <CasePanel centered>
      <div style={{ width: 280 }}>
        <DatePicker
          id="case-datepicker-default"
          label="체크인"
          value={value}
          onChange={setValue}
          helperText="기본 단일 날짜 선택 예제입니다."
        />
      </div>
    </CasePanel>
  );
}

function DatePickerBoundedCase() {
  const [value, setValue] = React.useState<Date | undefined>();

  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function DatePickerInlineCase() {
  const [value, setValue] = React.useState<Date | undefined>(new Date('2026-04-21'));

  return (
    <CasePanel>
      <div style={{ ...stackStyle, maxWidth: 340 }}>
        <DatePicker
          id="case-datepicker-inline"
          label="선택날짜"
          value={value}
          onChange={setValue}
          placeholder="방문 날짜를 선택해 주세요."
          formatString="yyyy년 M월 d일"
          inline
          defaultMonth={new Date('2026-04-01')}
        />
      </div>
    </CasePanel>
  );
}

function DatePickerRangeFieldCase() {
  const [value, setValue] = React.useState<DateRange | undefined>({
    from: new Date('2025-03-05'),
    to: new Date('2025-06-05'),
  });

  return (
    <CasePanel centered>
      <div style={{ width: 340 }}>
        <DateRangeFieldDemo
          id="case-datepicker-range-field"
          label="조회 기간"
          value={value}
          onChange={setValue}
          defaultMonth={new Date('2025-03-01')}
        />
      </div>
    </CasePanel>
  );
}

function DialogDefaultCase() {
  const [open, setOpen] = React.useState(false);

  return (
    <CasePanel centered>
      <Button label="Open dialog" onClick={() => setOpen(true)} />
      <Dialog isOpen={open} onRequestClose={() => setOpen(false)} title="기본형 dialog">
        <p>Use this dialog for short confirmation or guidance flows.</p>
        <div style={{ marginTop: 12 }}>
          <Button label="Close" onClick={() => setOpen(false)} />
        </div>
      </Dialog>
    </CasePanel>
  );
}

function DialogVariantsCase() {
  const [variant, setVariant] = React.useState<'bottomsheet' | 'full' | null>(null);

  return (
    <CasePanel centered>
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
    </CasePanel>
  );
}

function PaginationDefaultCase() {
  const [page, setPage] = React.useState(6);

  return (
    <CasePanel centered>
      <div style={{ ...stackStyle, justifyItems: 'center' }}>
        <Pagination count={12} page={page} onChange={setPage} />
        <div style={{ ...demoMetaTextStyle, fontSize: 14 }}>
          current page: <strong>{page}</strong>
        </div>
      </div>
    </CasePanel>
  );
}

function PaginationEdgesCase() {
  const [page, setPage] = React.useState(9);

  return (
    <CasePanel centered>
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
        <div style={{ ...demoMetaTextStyle, fontSize: 14 }}>
          archive page <strong>{page}</strong> of 24
        </div>
      </div>
    </CasePanel>
  );
}

function RadioGroupCase() {
  const [value, setValue] = React.useState('male');

  return (
    <CasePanel centered>
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
    </CasePanel>
  );
}

function SelectDefaultCase() {
  const [value, setValue] = React.useState('');

  return (
    <CasePanel centered>
      <div style={{ width: 280 }}>
        <Select id="case-select-default" value={value} onChange={setValue} options={selectOptions} placeholder="Age" />
      </div>
    </CasePanel>
  );
}

function SelectPreselectedCase() {
  const [value, setValue] = React.useState('30');

  return (
    <CasePanel centered>
      <div style={{ width: 280 }}>
        <Select id="case-select-preselected" value={value} onChange={setValue} options={selectOptions} placeholder="Age" />
      </div>
    </CasePanel>
  );
}

function SkeletonShowcaseCase() {
  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function SliderDefaultCase() {
  const [value, setValue] = React.useState(40);

  return (
    <CasePanel centered>
      <div style={{ width: 320 }}>
        <Slider id="case-slider-default" value={value} onChange={setValue} />
      </div>
    </CasePanel>
  );
}

function SliderRangeCase() {
  const [value, setValue] = React.useState(25);

  return (
    <CasePanel centered>
      <div style={{ width: 320, display: 'grid', gap: 12 }}>
        <Slider id="case-slider-range" min={10} max={50} step={5} value={value} onChange={setValue} />
        <div style={{ ...demoMetaTextStyle, fontSize: 14 }}>
          current value: <strong>{value}</strong>
        </div>
      </div>
    </CasePanel>
  );
}

function SwipeDefaultCase() {
  return (
    <CasePanel>
      <Swipe ariaLabel="메인 배너 스와이프" slides={swipeHeroSlides} />
    </CasePanel>
  );
}

function SwipeCardRailCase() {
  return (
    <CasePanel>
      <Swipe
        ariaLabel="카드 레일 스와이프"
        slides={swipeCardSlides}
        slideSize="78%"
        slideGap="20px"
        options={{ align: 'start', containScroll: 'trimSnaps' }}
      />
    </CasePanel>
  );
}

function SwipeLoopCase() {
  return (
    <CasePanel>
      <Swipe
        ariaLabel="루프형 프로모션 스와이프"
        slides={swipeHeroSlides}
        options={{ loop: true }}
      />
    </CasePanel>
  );
}

function SwitchDefaultCase() {
  const [checked, setChecked] = React.useState(false);

  return (
    <CasePanel centered>
      <Switch id="case-switch-default" checked={checked} onChange={setChecked} label="Marketing emails" />
    </CasePanel>
  );
}

function SwitchSettingsCase() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <CasePanel centered>
      <div style={rowStyle}>
        <Switch id="case-switch-settings" checked={darkMode} onChange={setDarkMode} label="Dark mode" />
        <span style={{ ...demoMetaTextStyle, fontSize: 14 }}>{darkMode ? 'ON' : 'OFF'}</span>
      </div>
    </CasePanel>
  );
}

function TabsUnderlineCase() {
  return (
    <CasePanel>
      <Tabs
        defaultActiveId="overview"
        items={[
          {
            id: 'overview',
            label: 'Overview',
            content: (
              <div style={{ display: 'grid', gap: 12 }}>
                <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 16, lineHeight: 1.75 }}>
                  Tabs let you switch between related content without moving away from the current page.
                </p>
                <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 16, lineHeight: 1.75 }}>
                  This example uses the default underline style for product or summary sections.
                </p>
              </div>
            ),
          },
          {
            id: 'details',
            label: 'Details',
            content: (
              <ul style={{ ...demoBodyTextStyle, margin: 0, paddingLeft: 20, fontSize: 16, lineHeight: 1.8 }}>
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
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 16, lineHeight: 1.75 }}>
                Recent changes, audit notes, or secondary records can be grouped into separate tab panels.
              </p>
            ),
          },
        ]}
      />
    </CasePanel>
  );
}

function TabsVerticalCase() {
  return (
    <CasePanel>
      <Tabs
        orientation="vertical"
        defaultActiveId="billing"
        items={[
          {
            id: 'profile',
            label: 'Profile settings',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 16, lineHeight: 1.75 }}>
                Manage account basics, notification defaults, and member profile information.
              </p>
            ),
          },
          {
            id: 'billing',
            label: 'Billing',
            content: (
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={demoMutedPanelStyle}>
                  <strong style={{ display: 'block', marginBottom: 6 }}>Current plan</strong>
                  <span style={{ ...demoMetaTextStyle, fontSize: 15 }}>Team Pro Annual</span>
                </div>
                <div style={demoMutedPanelStyle}>
                  <strong style={{ display: 'block', marginBottom: 6 }}>Next invoice</strong>
                  <span style={{ ...demoMetaTextStyle, fontSize: 15 }}>May 01, 2026</span>
                </div>
              </div>
            ),
          },
          {
            id: 'security',
            label: 'Security',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 16, lineHeight: 1.75 }}>
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
    </CasePanel>
  );
}

function TabsImageDesignCase() {
  return (
    <CasePanel>
      <Tabs
        variant="pill"
        className="tabs--category-pill"
        ariaLabel="투자 카테고리 탭"
        defaultActiveId="holding"
        items={[
          {
            id: 'etf',
            label: 'ETF',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                상장지수펀드 상품군을 빠르게 전환할 때 쓰기 좋은 카테고리 탭 예제입니다.
              </p>
            ),
          },
          {
            id: 'fund',
            label: '펀드',
            content: (
              <div style={demoMutedPanelStyle}>
                <strong style={{ display: 'block', marginBottom: 6 }}>추천 펀드</strong>
                <span style={{ ...demoMetaTextStyle, fontSize: 15 }}>
                  테마형, 채권형, 글로벌 분산 상품을 한 영역에 정리할 때 자연스럽게 붙는 칩 탭 패턴입니다.
                </span>
              </div>
            ),
          },
          {
            id: 'deposit',
            label: '예금',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                금리형 상품 탭으로 연결해 만기, 우대금리, 자동이체 혜택 같은 정보를 안정적으로 구분할 수 있습니다.
              </p>
            ),
          },
          {
            id: 'cash',
            label: '현금성',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                MMF나 CMA처럼 현금성 자산군을 별도로 노출할 때도 버튼형 필터보다 덜 무겁게 사용할 수 있습니다.
              </p>
            ),
          },
          {
            id: 'holding',
            label: '보유',
            content: (
              <div
                style={{
                  display: 'grid',
                  gap: 12,
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                }}
              >
                <div style={demoMutedPanelStyle}>
                  <strong style={{ display: 'block', marginBottom: 6 }}>총 보유 자산</strong>
                  <span style={{ ...demoTitleStyle, fontSize: 20, fontWeight: 700 }}>128,420,000원</span>
                </div>
                <div style={demoMutedPanelStyle}>
                  <strong style={{ display: 'block', marginBottom: 6 }}>오늘 변동</strong>
                  <span style={{ ...demoTitleStyle, fontSize: 20, fontWeight: 700 }}>+2.14%</span>
                </div>
              </div>
            ),
          },
          {
            id: 'interest',
            label: '관심',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                관심 종목, 즐겨찾기, 추적 중인 상품을 따로 묶는 상단 필터형 탭 패턴으로 그대로 확장할 수 있습니다.
              </p>
            ),
          },
        ]}
      />
    </CasePanel>
  );
}

function TabsSlidingPillCase() {
  return (
    <CasePanel>
      <Tabs
        variant="pill"
        fullWidth
        className="tabs--sliding-pill tabs--sliding-pill-4"
        ariaLabel="기간 수익률 탭"
        defaultActiveId="1y"
        items={[
          {
            id: '1m',
            label: '1개월',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                단기 수익률 추이를 빠르게 비교할 때 사용하는 1개월 구간 예시입니다.
              </p>
            ),
          },
          {
            id: '3m',
            label: '3개월',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                분기 단위로 변동성을 점검하는 3개월 구간 예시입니다.
              </p>
            ),
          },
          {
            id: '6m',
            label: '6개월',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                반기 추세를 확인하며 전략을 조정할 때 사용하는 6개월 구간 예시입니다.
              </p>
            ),
          },
          {
            id: '1y',
            label: '1년',
            content: (
              <p style={{ ...demoBodyTextStyle, margin: 0, fontSize: 15, lineHeight: 1.7 }}>
                연간 성과를 벤치마크와 비교해 판단하는 1년 구간 예시입니다.
              </p>
            ),
          },
        ]}
      />
    </CasePanel>
  );
}

function TableDefaultCase() {
  return (
    <CasePanel>
      <Table
        caption="Team performance"
        columns={teamTableColumns}
        data={teamTableRows}
        hoverable
      />
    </CasePanel>
  );
}

function TableCompactCase() {
  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function TextFieldOutlinedCase() {
  const [value, setValue] = React.useState('');

  return (
    <CasePanel centered>
      <div style={{ width: 280 }}>
        <TextField id="case-textfield-outlined" label="아웃라인" value={value} onChange={setValue} />
      </div>
    </CasePanel>
  );
}

function TextFieldStatesCase() {
  const [password, setPassword] = React.useState('');

  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function TextFieldTimeSelectCase() {
  const [value, setValue] = React.useState('');
  const timeInputRef = React.useRef<HTMLInputElement>(null);

  const openTimePicker = () => {
    const input = timeInputRef.current;

    if (!input) {
      return;
    }

    if (typeof input.showPicker === 'function') {
      input.showPicker();
      return;
    }

    input.focus();
    input.click();
  };

  return (
    <CasePanel centered>
      <div
        style={{ position: 'relative', width: 280 }}
        role="button"
        tabIndex={0}
        aria-label="시간 선택 열기"
        onClick={openTimePicker}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openTimePicker();
          }
        }}
      >
        <TextField
          id="case-textfield-time-select"
          label="시간 선택"
          value={value}
          onChange={setValue}
          readOnly
          endAdornment={<Clock3 strokeWidth={2} />}
          className="textfield-case-time-select"
        />
        <input
          ref={timeInputRef}
          type="time"
          value={value}
          aria-label="시간 선택"
          onChange={event => setValue(event.target.value)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
          }}
        />
      </div>
    </CasePanel>
  );
}

function TextareaBasicCase() {
  const [value, setValue] = React.useState('');

  return (
    <CasePanel centered>
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
    </CasePanel>
  );
}

function TextareaStatesCase() {
  const [feedback, setFeedback] = React.useState('이번 릴리스에서 확인한 이슈와 개선 포인트를 정리합니다.');

  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function ToastDefaultCase() {
  const [open, setOpen] = React.useState(false);

  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function ToastVariantsCase() {
  const [variant, setVariant] = React.useState<'success' | 'error' | null>(null);

  return (
    <CasePanel>
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
    </CasePanel>
  );
}

function TooltipPlacementsCase() {
  return (
    <CasePanel centered>
      <div style={rowStyle}>
        <TooltipDemo id="tooltip-top-case" content="Top tooltip" buttonLabel="Top" />
        <TooltipDemo id="tooltip-right-case" content="Right tooltip" place="right" buttonLabel="Right" />
        <TooltipDemo id="tooltip-bottom-case" content="Bottom tooltip" place="bottom" buttonLabel="Bottom" />
      </div>
    </CasePanel>
  );
}

function TooltipClickCase() {
  return (
    <CasePanel centered>
      <TooltipDemo id="tooltip-click-case" content="Tooltip opened on click" openOnClick buttonLabel="Click me" />
    </CasePanel>
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
  badge: {
    basic: `<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <Badge label="신규" tone="brand" />
  <Badge label="승인 완료" tone="success" />
  <Badge label="검토 필요" tone="warning" />
</div>`,
    variants: `<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <Badge label="Solid" tone="brand" variant="solid" />
  <Badge label="Soft" tone="brand" variant="soft" />
  <Badge label="Outline" tone="brand" variant="outline" leadingDot />
</div>`,
    removable: `const [items, setItems] = useState(['서울', '모바일', '실시간']);

<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  {items.map(item => (
    <Badge
      key={item}
      label={item}
      removable
      onRemove={() => setItems(prev => prev.filter(value => value !== item))}
    />
  ))}
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
  chart: {
    line: `<Chart
  variant="line"
  title="Monthly traffic trend"
  data={[
    { label: 'Jan', users: 8400 },
    { label: 'Feb', users: 9100 },
    { label: 'Mar', users: 10400 },
    { label: 'Apr', users: 9800 },
    { label: 'May', users: 12100 },
    { label: 'Jun', users: 13400 },
  ]}
  xKey="label"
  series={[{ key: 'users', label: 'Users', color: '#1f78b4' }]}
  valueFormatter={value => \`\${Number(value).toLocaleString()} users\`}
/>`,
    bar: `<Chart
  variant="bar"
  title="Campaign performance"
  data={[
    { label: 'Search', spend: 1200, revenue: 4200 },
    { label: 'Display', spend: 860, revenue: 2780 },
    { label: 'CRM', spend: 520, revenue: 2310 },
    { label: 'Social', spend: 970, revenue: 3560 },
  ]}
  xKey="label"
  series={[
    { key: 'spend', label: 'Spend', color: '#7ca6c8' },
    { key: 'revenue', label: 'Revenue', color: '#0c5a86' },
  ]}
  valueFormatter={value => \`$\${Number(value).toLocaleString()}\`}
/>`,
    donut: `<Chart
  variant="donut"
  title="Traffic share"
  data={[
    { label: 'Organic', share: 38 },
    { label: 'Paid', share: 27 },
    { label: 'Referral', share: 18 },
    { label: 'Direct', share: 17 },
  ]}
  xKey="label"
  series={[
    { key: 'share', label: 'Organic', color: '#0c5a86' },
    { key: 'share', label: 'Paid', color: '#5b8fb8' },
    { key: 'share', label: 'Referral', color: '#99bdd8' },
    { key: 'share', label: 'Direct', color: '#d6e6f2' },
  ]}
  valueFormatter={value => \`\${value}%\`}
  height={340}
/>`,
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
    inline: `const [value, setValue] = useState<Date | undefined>(new Date('2026-04-21'));

<DatePicker
  id="case-datepicker-inline"
  label="선택날짜"
  value={value}
  onChange={setValue}
  placeholder="방문 날짜를 선택해 주세요."
  formatString="yyyy년 M월 d일"
  inline
  defaultMonth={new Date('2026-04-01')}
/>`,
    rangeField: `const [value, setValue] = useState({
  from: new Date('2025-03-05'),
  to: new Date('2025-06-05'),
});

<DateRangeFieldDemo
  id="case-datepicker-range-field"
  label="조회 기간"
  value={value}
  onChange={setValue}
  defaultMonth={new Date('2025-03-01')}
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
  swipe: {
    default: `const slides = [
  { id: 'hero-1', content: <BannerCard title="Editorial campaign" /> },
  { id: 'hero-2', content: <BannerCard title="Spring rewards" /> },
  { id: 'hero-3', content: <BannerCard title="Studio capsule" /> },
];

<Swipe ariaLabel="메인 배너 스와이프" slides={slides} />`,
    cardRail: `const slides = [
  { id: 'card-1', content: <ProductCard title="Weekend bag" price="$148.00" /> },
  { id: 'card-2', content: <ProductCard title="Soft hoodie" price="$82.00" /> },
  { id: 'card-3', content: <ProductCard title="Canvas sneakers" price="$96.00" /> },
];

<Swipe
  ariaLabel="카드 레일 스와이프"
  slides={slides}
  slideSize="78%"
  slideGap="20px"
  options={{ align: 'start', containScroll: 'trimSnaps' }}
/>`,
    loop: `const slides = [
  { id: 'hero-1', content: <BannerCard title="Loop enabled" /> },
  { id: 'hero-2', content: <BannerCard title="Always in motion" /> },
  { id: 'hero-3', content: <BannerCard title="Three-step flow" /> },
];

<Swipe
  ariaLabel="루프형 프로모션 스와이프"
  slides={slides}
  options={{ loop: true }}
/>`,
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
    imageDesign: `const items = [
  { id: 'etf', label: 'ETF', content: <p>ETF category content</p> },
  { id: 'fund', label: '펀드', content: <p>Fund category content</p> },
  { id: 'deposit', label: '예금', content: <p>Deposit category content</p> },
  { id: 'cash', label: '현금성', content: <p>Cash-like product content</p> },
  { id: 'holding', label: '보유', content: <HoldingSummary /> },
  { id: 'interest', label: '관심', content: <p>Interest list content</p> },
];

<Tabs
  variant="pill"
  className="tabs--category-pill"
  defaultActiveId="holding"
  ariaLabel="투자 카테고리 탭"
  items={items}
/>`,
    slidingPill: `const items = [
  { id: '1m', label: '1개월', content: <p>1개월 구간 콘텐츠</p> },
  { id: '3m', label: '3개월', content: <p>3개월 구간 콘텐츠</p> },
  { id: '6m', label: '6개월', content: <p>6개월 구간 콘텐츠</p> },
  { id: '1y', label: '1년', content: <p>1년 구간 콘텐츠</p> },
];

<Tabs
  variant="pill"
  fullWidth
  className="tabs--sliding-pill tabs--sliding-pill-4"
  ariaLabel="기간 수익률 탭"
  defaultActiveId="1y"
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
    timeSelect: `const [value, setValue] = useState('');

<div style={{ position: 'relative', width: 280 }}>
  <TextField
    id="case-textfield-time-select"
    label="시간 선택"
    value={value}
    onChange={setValue}
    readOnly
    endAdornment={<Clock3 strokeWidth={2} />}
  />
  <input
    type="time"
    value={value}
    aria-label="시간 선택"
    onChange={event => setValue(event.target.value)}
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      cursor: 'pointer',
    }}
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
  badge: {
    summary: '상태 라벨, 톤 변형, 제거 가능한 필터 태그 패턴을 함께 확인할 수 있는 배지 케이스 모음입니다.',
    cases: [
      { id: 'basic', title: '기본 상태 라벨', description: '목록, 카드, 테이블에서 짧은 상태를 강조할 때 쓰는 기본 Badge 예제입니다.', preview: <BadgeBasicCase /> },
      { id: 'variants', title: '톤과 스타일 변형', description: 'solid, soft, outline과 leading dot 조합을 비교할 수 있는 Badge 예제입니다.', preview: <BadgeVariantCase /> },
      { id: 'removable', title: '제거 가능한 필터 태그', description: '검색 조건이나 선택된 속성을 해제 가능한 태그로 노출하는 Badge 예제입니다.', preview: <BadgeFilterCase /> },
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
  chart: {
    summary: '라인, 바, 도넛 패턴으로 수치 흐름과 비교, 비중을 확인할 수 있는 차트 케이스 모음입니다.',
    cases: [
      { id: 'line', title: '라인 차트', description: '기간별 추이를 부드러운 선으로 보여주는 기본 라인 차트 예제입니다.', preview: <ChartLineCase /> },
      { id: 'bar', title: '바 차트', description: '채널별 수치를 나란히 비교하는 막대 차트 예제입니다.', preview: <ChartBarCase /> },
      { id: 'donut', title: '도넛 차트', description: '비중 데이터를 요약형으로 표현하는 도넛 차트 예제입니다.', preview: <ChartDonutCase /> },
    ],
  },
  'date-picker': {
    summary: '기본 날짜 선택, 예약 범위 제한, 인라인 달력, 조회 기간 범위 선택 패턴을 함께 확인할 수 있는 데이트피커 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본형', description: '폼 입력에 바로 연결할 수 있는 기본 단일 날짜 선택 예제입니다.', preview: <DatePickerDefaultCase /> },
      { id: 'bounded', title: '예약 가능 범위 제한', description: '선택 가능한 기간과 요일을 제한한 예약형 데이트피커 예제입니다.', preview: <DatePickerBoundedCase /> },
      { id: 'inline', title: '인라인 달력', description: '필드를 누르지 않아도 달력이 화면에 바로 노출되는 인라인 데이트피커 예제입니다.', preview: <DatePickerInlineCase /> },
      { id: 'rangeField', title: '기간 범위 선택', description: '조회 시작일과 종료일을 하나의 필드에서 선택하는 범위형 데이트피커 예제입니다.', preview: <DatePickerRangeFieldCase /> },
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
  swipe: {
    summary: '메인 배너형, 카드 레일형, 루프형 구성을 함께 확인할 수 있는 스와이프 케이스 모음입니다.',
    cases: [
      { id: 'default', title: '기본 배너형', description: '한 장씩 넘기는 메인 비주얼 배너용 스와이프 예제입니다.', preview: <SwipeDefaultCase /> },
      { id: 'cardRail', title: '카드 레일형', description: '다음 카드가 살짝 보이는 레일형 리스트 스와이프 예제입니다.', preview: <SwipeCardRailCase /> },
      { id: 'loop', title: '루프형 프로모션', description: '양 끝에서 끊기지 않고 반복 순환하는 배너 스와이프 예제입니다.', preview: <SwipeLoopCase /> },
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
    summary: '기본 탭, 이미지 시안형 칩 탭, 선택 배경 슬라이딩 탭, 세로형 설정 탭을 함께 확인할 수 있는 Tabs 케이스 모음입니다.',
    cases: [
      { id: 'underline', title: '기본 탭', description: '관련 콘텐츠를 가볍게 전환하는 기본 underline 스타일 Tabs 예제입니다.', preview: <TabsUnderlineCase /> },
      { id: 'imageDesign', title: '이미지 시안형 칩 탭', description: '첨부 시안처럼 연한 회색 칩과 진한 활성 상태를 사용하는 투자 카테고리 Tabs 예제입니다.', preview: <TabsImageDesignCase /> },
      { id: 'slidingPill', title: '선택 배경 슬라이딩 탭', description: '선택된 탭의 배경 원이 좌우로 따라다니는 4분할 기간 탭 예제입니다.', preview: <TabsSlidingPillCase /> },
      { id: 'vertical', title: '세로형 설정 탭', description: '설정 화면처럼 좌측 목록과 우측 패널을 함께 쓰는 vertical Tabs 예제입니다.', preview: <TabsVerticalCase /> },
    ],
  },
  'text-field': {
    summary: '아웃라인, filled, password, and error states collected into one section.',
    cases: [
      { id: 'outlined', title: '아웃라인', description: '아웃라인 스타일의 기본 입력 필드 예제입니다.', preview: <TextFieldOutlinedCase /> },
      { id: 'states', title: '상태 변형', description: 'Filled, Password, Error 상태를 한 번에 보여주는 입력 필드 예제입니다.', preview: <TextFieldStatesCase /> },
      { id: 'timeSelect', title: '시간 선택', description: '시안처럼 시계 아이콘을 포함하고 native time picker를 여는 입력 필드 예제입니다.', preview: <TextFieldTimeSelectCase /> },
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



