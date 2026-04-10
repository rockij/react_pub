export type PubsheetStatus = '\uC9C4\uD589' | '\uC644\uB8CC' | '\uAC80\uC218';

export interface PubsheetRow {
  id: string;
  depth2: string;
  depth3: string;
  depth4: string;
  screenName: string;
  category: string;
  url: string;
  completedAt: string;
  updatedAt: string;
  owner: string;
  status: PubsheetStatus;
  note?: string;
}

const statusCycle: PubsheetStatus[] = ['\uC9C4\uD589', '\uAC80\uC218', '\uC644\uB8CC'];

const pubsheetsBaseRows: Omit<PubsheetRow, 'id'>[] = [
  {
    depth2: '\uD68C\uC6D0\uAC00\uC7851',
    depth3: '\uC57D\uAD00',
    depth4: '\uD544\uC218\uB3D9\uC758',
    screenName: '\uC57D\uAD00\uB3D9\uC758',
    category: 'page',
    url: '../charts-apexcharts.html',
    completedAt: '22-05-24',
    updatedAt: '22-05-25',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uC9C4\uD589',
    note: '\uC57D\uAD00 \uBB38\uAD6C \uCD5C\uC885 \uAC80\uC218 \uD6C4 \uBC95\uBB34 \uD655\uC815 \uC608\uC815',
  },
  {
    depth2: '\uD68C\uC6D0\uAC00\uC7852',
    depth3: '\uBCF8\uC778\uC778\uC99D',
    depth4: '\uD734\uB300\uD3F0\uC778\uC99D',
    screenName: '\uC778\uC99D\uC815\uBCF4 \uC785\uB825',
    category: 'popup',
    url: '../charts-chartjs.html',
    completedAt: '22-05-24',
    updatedAt: '22-05-25',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uC9C4\uD589',
    note: '\uBCF8\uC778\uC778\uC99D \uBAA8\uB4C8 \uC5F0\uB3D9 \uC2A4\uD399 \uD655\uC778 \uD544\uC694',
  },
  {
    depth2: '\uD68C\uC6D0\uAC00\uC7853',
    depth3: '\uC815\uBCF4\uC785\uB825',
    depth4: '\uAE30\uBCF8\uC815\uBCF4',
    screenName: '\uD68C\uC6D0\uC815\uBCF4 \uC785\uB825',
    category: 'page',
    url: '../member/profile.html',
    completedAt: '23-01-24',
    updatedAt: '23-01-25',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uAC80\uC218',
    note: '\uD544\uC218 \uC785\uB825 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0 \uB514\uC790\uC778 \uBCF4\uC644 \uC608\uC815',
  },
  {
    depth2: '\uD68C\uC6D0\uAC00\uC7854',
    depth3: '\uAC00\uC785\uC644\uB8CC',
    depth4: '-',
    screenName: '\uAC00\uC785\uC644\uB8CC',
    category: 'page',
    url: '../index.html',
    completedAt: '23-02-14',
    updatedAt: '23-05-25',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uC644\uB8CC',
    note: '\uC644\uB8CC \uD398\uC774\uC9C0 \uBC30\uD3EC \uBC84\uC804 \uBC18\uC601 \uC644\uB8CC',
  },
  {
    depth2: '\uB85C\uADF8\uC778',
    depth3: '\uBA54\uC778',
    depth4: '\uC785\uB825',
    screenName: '\uC544\uC774\uB514 \uB85C\uADF8\uC778',
    category: 'page',
    url: '../login/index.html',
    completedAt: '24-01-12',
    updatedAt: '24-01-18',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uC644\uB8CC',
    note: '\uBC84\uD2BC \uD65C\uC131\uD654 \uC0C1\uD0DC \uAC80\uC218 \uC644\uB8CC',
  },
  {
    depth2: '\uB85C\uADF8\uC778',
    depth3: '\uC624\uB958',
    depth4: '\uC548\uB0B4',
    screenName: '\uB85C\uADF8\uC778 \uC2E4\uD328 \uC548\uB0B4',
    category: 'popup',
    url: '../login/error-popup.html',
    completedAt: '24-01-15',
    updatedAt: '24-01-19',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uC9C4\uD589',
    note: '\uC5D0\uB7EC \uBB38\uAD6C A/B \uC2DC\uC548 \uBE44\uAD50 \uC911',
  },
  {
    depth2: '\uACC4\uC815\uCC3E\uAE30',
    depth3: '\uBCF8\uC778\uD655\uC778',
    depth4: '\uC815\uBCF4\uC785\uB825',
    screenName: '\uC544\uC774\uB514 \uCC3E\uAE30',
    category: 'page',
    url: '../account/find-id.html',
    completedAt: '24-02-03',
    updatedAt: '24-02-08',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uAC80\uC218',
    note: '\uB9C8\uC2A4\uD0B9 \uCC98\uB9AC \uADDC\uCE59 \uAE30\uD68D \uD655\uC778 \uD544\uC694',
  },
  {
    depth2: '\uD68C\uC6D0\uAC00\uC785',
    depth3: '\uC57D\uAD00',
    depth4: '\uC0C1\uC138',
    screenName: '\uC57D\uAD00 \uC0C1\uC138\uBCF4\uAE30',
    category: 'popup',
    url: '../join/terms-detail.html',
    completedAt: '24-02-10',
    updatedAt: '24-02-12',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uC644\uB8CC',
    note: '\uC2A4\uD06C\uB864 \uC601\uC5ED \uB0B4 \uB9C1\uD06C \uC0C9\uC0C1 \uC870\uC815 \uC644\uB8CC',
  },
  {
    depth2: '\uB9C8\uC774\uD398\uC774\uC9C0',
    depth3: '\uD648',
    depth4: '\uC694\uC57D',
    screenName: '\uD648 \uB300\uC2DC\uBCF4\uB4DC',
    category: 'page',
    url: '../mypage/dashboard.html',
    completedAt: '24-03-02',
    updatedAt: '24-03-05',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uC9C4\uD589',
    note: '\uCE74\uB4DC \uC815\uB82C \uAC04\uACA9 \uCD5C\uC885 \uB9C8\uBB34\uB9AC \uC911',
  },
  {
    depth2: '\uB9C8\uC774\uD398\uC774\uC9C0',
    depth3: '\uACF5\uC9C0',
    depth4: '\uC0C1\uC138',
    screenName: '\uACF5\uC9C0 \uD31D\uC5C5',
    category: 'popup',
    url: '../mypage/notice-popup.html',
    completedAt: '24-03-04',
    updatedAt: '24-03-06',
    owner: '\uD64D\uAE38\uB3D9',
    status: '\uAC80\uC218',
    note: '\uB2E4\uAD6D\uC5B4 \uB300\uC751 \uBB38\uAD6C \uCD94\uAC00 \uC608\uC815',
  },
];

export const PUBSHEET_ROWS: PubsheetRow[] = Array.from({ length: 100 }, (_, index) => {
  const baseRow = pubsheetsBaseRows[index % pubsheetsBaseRows.length];
  const sequence = index + 1;
  const paddedSequence = String(sequence).padStart(3, '0');
  const status = statusCycle[(index + (index % pubsheetsBaseRows.length)) % statusCycle.length];

  return {
    ...baseRow,
    id: `pubsheet-${paddedSequence}`,
    url: `${baseRow.url}?item=${paddedSequence}`,
    status,
  };
});
