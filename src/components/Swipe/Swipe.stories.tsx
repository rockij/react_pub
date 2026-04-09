import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Swipe } from './Swipe';

const createPromoSlide = (eyebrow: string, title: string, body: string, accent: string) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  content: (
    <div
      style={{
        minHeight: 220,
        borderRadius: 24,
        padding: 24,
        color: '#11263a',
        background: accent,
        display: 'grid',
        alignContent: 'space-between',
        gap: 20,
      }}
    >
      <div style={{ display: 'grid', gap: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {eyebrow}
        </span>
        <strong style={{ fontSize: 28, lineHeight: 1.2 }}>{title}</strong>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>{body}</p>
      </div>
      <span style={{ fontSize: 14, fontWeight: 600 }}>Learn more</span>
    </div>
  ),
});

const createProductSlide = (title: string, price: string, tone: string) => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  content: (
    <article
      style={{
        minHeight: 260,
        borderRadius: 24,
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 18px 40px rgba(17, 38, 58, 0.08)',
      }}
    >
      <div
        style={{
          height: 150,
          background: tone,
        }}
      />
      <div style={{ display: 'grid', gap: 8, padding: 20 }}>
        <strong style={{ fontSize: 18, color: '#11263a' }}>{title}</strong>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#526273' }}>
          카드형 콘텐츠, 프로모션 묶음, 상품 리스트 등에 바로 붙일 수 있는 레이아웃입니다.
        </p>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#11263a' }}>{price}</span>
      </div>
    </article>
  ),
});

const meta: Meta<typeof Swipe> = {
  title: 'Components/Swipe',
  component: Swipe,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
    onSelect: { action: 'select' },
  },
  decorators: [
    Story => (
      <div style={{ width: '100%', maxWidth: 720, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Swipe>;

export const Default: Story = {
  args: {
    ariaLabel: '프로모션 배너 스와이프',
    slides: [
      createPromoSlide('New collection', 'Editorial hero', '강한 첫 화면 배너나 메인 프로모션 섹션에 맞춘 기본 스와이프 예제입니다.', 'linear-gradient(135deg, #e4f1ff 0%, #f6fbff 100%)'),
      createPromoSlide('Members only', 'Spring rewards', '배너 단위 콘텐츠를 한 장씩 넘기며 핵심 메시지를 전달할 수 있습니다.', 'linear-gradient(135deg, #fcecd9 0%, #fff7ee 100%)'),
      createPromoSlide('Limited drop', 'Studio capsule', '텍스트 중심 슬라이드와 CTA를 자유롭게 조합할 수 있습니다.', 'linear-gradient(135deg, #e4f5ec 0%, #f6fcf8 100%)'),
    ],
  },
};

export const CardRail: Story = {
  args: {
    ariaLabel: '카드 레일 스와이프',
    slideSize: '78%',
    slideGap: '20px',
    options: { align: 'start', containScroll: 'trimSnaps' },
    slides: [
      createProductSlide('Weekend bag', '$148.00', 'linear-gradient(135deg, #c9dff5 0%, #eef5fb 100%)'),
      createProductSlide('Soft hoodie', '$82.00', 'linear-gradient(135deg, #f0d8c9 0%, #fbf1ea 100%)'),
      createProductSlide('Canvas sneakers', '$96.00', 'linear-gradient(135deg, #d8ead8 0%, #f3faf3 100%)'),
      createProductSlide('Daily tumbler', '$24.00', 'linear-gradient(135deg, #e4dff7 0%, #f7f5fd 100%)'),
    ],
  },
};

export const Looping: Story = {
  args: {
    ariaLabel: '루프형 스와이프',
    options: { loop: true, align: 'start' },
    slides: [
      createPromoSlide('Campaign', 'Loop enabled', '양 끝에서 끊기지 않고 계속 순환하는 프로모션 케이스입니다.', 'linear-gradient(135deg, #d9eef5 0%, #f3fbfd 100%)'),
      createPromoSlide('Benefit', 'Always in motion', '반복 배너, 이벤트 티저, 온보딩 슬라이드에 적합한 설정입니다.', 'linear-gradient(135deg, #f5e5d8 0%, #fdf7f2 100%)'),
      createPromoSlide('Onboarding', 'Three-step flow', '컨트롤과 도트는 그대로 유지하면서 루프만 활성화할 수 있습니다.', 'linear-gradient(135deg, #e1ead7 0%, #f8fbf4 100%)'),
    ],
  },
};
