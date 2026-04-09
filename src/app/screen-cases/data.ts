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
    slug: 'id-login',
    title: '아이디 로그인',
    summary:
      '아이디와 비밀번호 입력, 계정 찾기 링크, 로그인 안내, 다른 로그인 진입 버튼까지 담은 모바일 로그인 화면 케이스입니다.',
    status: '완료',
    category: '인증',
    components: ['TextField', 'Button'],
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
];
