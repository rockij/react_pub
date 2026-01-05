export type Row = {
  id: string;
  depth2: string;
  depth3: string;
  depth4: string;
  screen: string;
  kubun: string;
  url: string;
  completeDate: string;
  modifyDate: string;
  person: string;
  done: boolean;
};

export const SAMPLE_ROWS: Row[] = [
  ...Array.from({ length: 94 }, (_, i) => {
    const index = i + 73; // ID 시작 보정
    return {
      id: `ID12345${index}`,
      depth2: '회원가입',
      depth3:
        index % 4 === 0
          ? '약관'
          : index % 4 === 1
          ? '본인인증'
          : index % 4 === 2
          ? '정보입력'
          : '완료',
      depth4:
        index % 4 === 0 ? '약관상세' : index % 4 === 1 ? '' : index % 4 === 2 ? '기본정보' : '',
      screen:
        index % 4 === 0
          ? '약관 상세보기'
          : index % 4 === 1
          ? '인증 선택'
          : index % 4 === 2
          ? '회원정보 입력'
          : '가입완료',
      kubun: 'page',
      url: `ID12345${index}`,
      completeDate: `01-${String((index % 28) + 1).padStart(2, '0')}-24`,
      modifyDate: `24-02-${String((index % 28) + 1).padStart(2, '0')}`,
      person: '김익중',
      done: index % 7 !== 0, // 일부 미완료 케이스 포함
    };
  }),
];
