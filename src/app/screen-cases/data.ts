export type ScreenCaseStatus = '준비중' | '완료';

export type ScreenCaseItem = {
  slug: string;
  title: string;
  summary: string;
  status: ScreenCaseStatus;
  components: string[];
  category: string;
};

export const screenCaseItems: ScreenCaseItem[] = [
  {
    slug: 'consult-inquiry',
    title: '문의 접수',
    summary:
      '문의 유형 선택, 제목/내용 입력, 개인정보 동의, 전화상담 예약까지 한 흐름으로 구성한 모바일 문의 접수 화면 케이스입니다.',
    status: '완료',
    category: '고객지원',
    components: ['Select', 'TextField', 'Textarea', 'Checkbox', 'DatePicker'],
  },
  {
    slug: 'banking-home',
    title: '모바일 뱅킹 홈',
    summary:
      '알림 배너, 계좌 요약, 주요 액션 버튼, 빠른 메뉴 타일로 구성한 모바일 뱅킹 홈 화면 케이스입니다.',
    status: '완료',
    category: '금융',
    components: ['Button', 'Swipe'],
  },
  {
    slug: 'first-trade-saving',
    title: '첫거래 손님 적금 배너',
    summary:
      '첫 거래 고객 대상 적금 혜택을 스와이프로 탐색하고 하단 페이저로 이동하는 프로모션 배너 화면 케이스입니다.',
    status: '완료',
    category: '금융',
    components: ['Swipe'],
  },
  {
    slug: 'id-login',
    title: '아이디 로그인',
    summary:
      '아이디와 비밀번호 입력, 계정 찾기 링크, 로그인 안내, 다른 로그인 진입 버튼까지 담은 모바일 로그인 화면 케이스입니다.',
    status: '완료',
    category: '인증',
    components: ['TextField', 'Button'],
  },
  {
    slug: 'signup-agreement',
    title: '회원가입 전체동의',
    summary:
      '약관 전체동의, 필수/선택 약관 체크, 동의 완료 후 가입 진행 버튼 활성화 흐름을 담은 회원가입 동의 화면 케이스입니다.',
    status: '완료',
    category: '인증',
    components: ['Checkbox', 'Button'],
  },
  {
    slug: 'notice-bottomsheet',
    title: '유의사항 확인 바텀시트',
    summary:
      '선물 보험 결제 전 필수 유의사항을 체크하고 확인/취소 액션을 수행하는 모바일 바텀시트 화면 케이스입니다.',
    status: '완료',
    category: '보험',
    components: ['Dialog', 'Checkbox', 'Button'],
  },
  {
    slug: 'find-id',
    title: '아이디 찾기',
    summary:
      '계좌번호, 계좌비밀번호, 생년월일을 입력해 아이디를 확인하는 모바일 본인확인 폼 화면 케이스입니다.',
    status: '완료',
    category: '인증',
    components: ['TextField', 'Button'],
  },
  {
    slug: 'insurance-signup-complete',
    title: '보험 가입 완료',
    summary:
      '보험 상품 가입 완료 후 가입자/상품/납입 정보를 확인하고 하단 확인 버튼으로 완료하는 화면 케이스입니다.',
    status: '완료',
    category: '보험',
    components: ['Accordion', 'Button'],
  },
  {
    slug: 'signup-period-bottomsheet',
    title: '가입기간 선택 바텀시트',
    summary: '썸네일 클릭 직후 가입기간을 선택하고 확인 버튼으로 닫는 모바일 바텀시트 화면 케이스입니다.',
    status: '완료',
    category: '보험',
    components: ['Dialog', 'Button'],
  },
  {
    slug: 'portfolio-return',
    title: '기간수익률/포트폴리오',
    summary:
      '기간별 수익률 탭, 신탁/벤치마킹 추이 라인차트, 종목 비중 테이블을 결합한 투자 현황 화면 케이스입니다.',
    status: '완료',
    category: '투자',
    components: ['Tabs', 'Chart', 'Table'],
  },
  {
    slug: 'transaction-filter-bottomsheet',
    title: '조회조건 선택 바텀시트',
    summary:
      '조회기간 퀵 버튼, 직접입력 날짜 범위, 거래구분, 정렬순서를 한 번에 조정하는 모바일 조회조건 바텀시트 화면 케이스입니다.',
    status: '완료',
    category: '뱅킹',
    components: ['Dialog', 'Button', 'DatePicker'],
  },
];
