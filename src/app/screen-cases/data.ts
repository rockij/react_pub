export type ScreenCaseItem = {
  slug: string;
  title: string;
  summary: string;
  status: '준비중' | '완료';
  components: string[];
  category: string;
};

export const screenCaseItems: ScreenCaseItem[] = [
  {
    slug: 'banking-home',
    title: '모바일 뱅킹 홈',
    summary:
      '알림 배너, 계좌 요약, 주요 액션 버튼, 빠른 메뉴 타일로 구성된 홈 화면 케이스입니다. 가능한 범위에서 기존 Button, Card 컴포넌트를 재사용했습니다.',
    status: '완료',
    category: '금융',
    components: ['Button', 'Card'],
  },
  {
    slug: 'signup-flow',
    title: '회원가입 플로우',
    summary:
      '약관 동의, 본인 인증, 프로필 입력까지 포함하는 다단계 가입 흐름용 화면 케이스입니다.',
    status: '준비중',
    category: '폼 플로우',
    components: ['Checkbox', 'TextField', 'Select', 'Button', 'Dialog'],
  },
  {
    slug: 'login-assistance',
    title: '로그인 지원',
    summary:
      '로그인, 비밀번호 찾기, 오류 피드백 상태를 함께 다루는 인증 지원 화면 케이스입니다.',
    status: '준비중',
    category: '인증',
    components: ['TextField', 'Button', 'Toast', 'Dialog'],
  },
  {
    slug: 'product-filter',
    title: '상품 필터 탐색',
    summary:
      '상품 카드, 정렬 컨트롤, 범위 선택을 포함한 검색 및 필터 레이아웃 케이스입니다.',
    status: '준비중',
    category: '탐색',
    components: ['Card', 'Select', 'Checkbox', 'Slider', 'Button'],
  },
  {
    slug: 'settings-panel',
    title: '설정 패널',
    summary:
      '알림, 개인정보 옵션, 환경설정을 하나의 흐름으로 묶은 설정 중심 화면 케이스입니다.',
    status: '완료',
    category: '설정',
    components: ['Switch', 'RadioGroup', 'Accordion', 'Button'],
  },
  {
    slug: 'checkout-summary',
    title: '결제 요약',
    summary:
      '주문 상품, 결제 정보, 확인 액션을 결제 직전 단계에서 묶어 보여주는 화면 케이스입니다.',
    status: '준비중',
    category: '커머스',
    components: ['Card', 'Accordion', 'Checkbox', 'Button'],
  },
  {
    slug: 'dashboard-feedback',
    title: '대시보드 피드백',
    summary:
      '운영 대시보드에서 스켈레톤, 토스트, 툴팁을 조합해 피드백을 주는 화면 케이스입니다.',
    status: '완료',
    category: '피드백',
    components: ['Skeleton', 'Toast', 'Tooltip', 'Card'],
  },
];
