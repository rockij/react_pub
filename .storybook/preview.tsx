import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/assets/css/global.css';
import 'react-tooltip/dist/react-tooltip.css';

const axeRuleLocaleKo = {
  'area-alt': {
    description: '이미지 맵의 <area> 요소는 대체 텍스트를 제공해야 합니다.',
    help: '이미지 맵 영역에는 식별 가능한 대체 텍스트가 필요합니다.',
  },
  'aria-allowed-attr': {
    description: '요소의 role은 해당 ARIA 속성을 지원해야 합니다.',
    help: 'role과 호환되지 않는 aria-* 속성 사용을 제거하세요.',
  },
  'aria-braille-equivalent': {
    description:
      'aria-braillelabel과 aria-brailleroledescription에는 일반 텍스트 기반의 동등한 정보가 있어야 합니다.',
    help: '점자 전용 이름/설명만 두지 말고 일반 접근 가능한 이름도 함께 제공하세요.',
  },
  'aria-command-name': {
    description: 'ARIA button, link, menuitem은 접근 가능한 이름을 가져야 합니다.',
    help: 'aria-label, aria-labelledby 또는 텍스트 콘텐츠로 이름을 제공하세요.',
  },
  'aria-conditional-attr': {
    description: 'ARIA 속성은 해당 role 명세에 맞는 방식으로 사용되어야 합니다.',
    help: '현재 role에서 허용되거나 요구되는 조건에 맞게 ARIA 속성을 사용하세요.',
  },
  'aria-deprecated-role': {
    description: '더 이상 권장되지 않는 deprecated role은 사용하지 않아야 합니다.',
    help: 'deprecated role 대신 현재 권장되는 role로 교체하세요.',
  },
  'aria-hidden-body': {
    description: 'document body에 aria-hidden="true"를 지정하면 안 됩니다.',
    help: 'body 전체를 aria-hidden 처리하지 마세요.',
  },
  'aria-hidden-focus': {
    description:
      'aria-hidden 요소는 포커스를 받을 수 없고, 포커스 가능한 자식을 포함해서도 안 됩니다.',
    help: 'aria-hidden 영역 안의 포커스 가능 요소를 제거하거나 aria-hidden 사용을 재검토하세요.',
  },
  'aria-input-field-name': {
    description: 'ARIA 입력 필드는 접근 가능한 이름을 가져야 합니다.',
    help: 'textbox, combobox, searchbox 등에는 명확한 accessible name을 제공하세요.',
  },
  'aria-meter-name': {
    description: 'ARIA meter 요소는 접근 가능한 이름을 가져야 합니다.',
    help: 'meter 역할 요소에 라벨을 제공하세요.',
  },
  'aria-progressbar-name': {
    description: 'ARIA progressbar 요소는 접근 가능한 이름을 가져야 합니다.',
    help: 'progressbar 역할 요소에 라벨을 제공하세요.',
  },
  'aria-prohibited-attr': {
    description: '요소의 role에서 금지된 ARIA 속성은 사용하면 안 됩니다.',
    help: '현재 role에서 허용되지 않는 aria-* 속성을 제거하세요.',
  },
  'aria-required-attr': {
    description: 'ARIA role이 요구하는 필수 속성은 모두 제공되어야 합니다.',
    help: '해당 role에 필요한 aria-* 필수 속성을 빠짐없이 지정하세요.',
  },
  'aria-required-children': {
    description: '특정 자식 role이 필요한 ARIA role은 그 자식 요소를 포함해야 합니다.',
    help: '예: listbox에는 option, tree에는 treeitem 등 필수 자식 구조를 맞추세요.',
  },
  'aria-required-parent': {
    description: '특정 부모 role이 필요한 ARIA role은 올바른 부모 아래에 있어야 합니다.',
    help: '예: option은 listbox 안에 위치해야 합니다.',
  },
  'aria-roles': {
    description: 'role 속성에는 유효한 ARIA role 값만 사용해야 합니다.',
    help: '오탈자나 비표준 role 값을 제거하고 표준 role만 사용하세요.',
  },
  'aria-toggle-field-name': {
    description: 'ARIA 토글 필드는 접근 가능한 이름을 가져야 합니다.',
    help: 'checkbox, switch, radio 등 토글 계열 요소에 라벨을 제공하세요.',
  },
  'aria-tooltip-name': {
    description: 'ARIA tooltip 요소는 접근 가능한 이름을 가져야 합니다.',
    help: 'tooltip 역할 요소에 식별 가능한 이름 또는 설명을 제공하세요.',
  },
  'aria-valid-attr-value': {
    description: 'ARIA 속성값은 명세에 맞는 유효한 값이어야 합니다.',
    help: 'aria-* 값의 타입, 형식, 허용 값 범위를 확인하세요.',
  },
  'aria-valid-attr': {
    description: 'aria-로 시작하는 속성은 유효한 ARIA 속성이어야 합니다.',
    help: '존재하지 않는 aria-* 속성이나 오탈자를 제거하세요.',
  },
  blink: {
    description: '<blink> 요소는 사용하면 안 됩니다.',
    help: '깜빡이는 표현은 제거하고 CSS/JS로도 동일한 문제를 만들지 않도록 하세요.',
  },
  'button-name': {
    description: '버튼은 식별 가능한 텍스트 또는 접근 가능한 이름을 가져야 합니다.',
    help: 'button 요소에 텍스트, aria-label, aria-labelledby 등을 제공하세요.',
  },
  bypass: {
    description: '페이지에는 반복 내비게이션을 건너뛰고 본문으로 이동하는 수단이 있어야 합니다.',
    help: '스킵 링크 또는 landmark 구조를 제공하세요.',
  },
  'color-contrast': {
    description: '전경색과 배경색의 명암비가 WCAG 2 AA 최소 기준을 충족해야 합니다.',
    help: '일반 텍스트는 최소 4.5:1, 큰 텍스트는 최소 3:1 명암비를 확보하세요.',
  },
  'definition-list': {
    description: '<dl> 요소는 올바른 구조로 작성되어야 합니다.',
    help: '<dl> 내부에는 의미에 맞는 <dt>와 <dd> 구조를 사용하세요.',
  },
  dlitem: {
    description: '<dt>와 <dd> 요소는 <dl> 안에 포함되어야 합니다.',
    help: '정의 목록 항목은 반드시 <dl>의 자식으로 배치하세요.',
  },
  'document-title': {
    description: 'HTML 문서는 비어 있지 않은 <title> 요소를 가져야 합니다.',
    help: '문서 목적을 설명하는 고유한 제목을 title에 설정하세요.',
  },
  'duplicate-id-aria': {
    description: 'ARIA 참조 및 label에 사용되는 id 값은 문서 내에서 고유해야 합니다.',
    help: 'aria-labelledby, aria-describedby, for와 연결되는 id 중복을 제거하세요.',
  },
  'form-field-multiple-labels': {
    description: '하나의 폼 필드에 불필요하게 여러 label 요소가 연결되면 안 됩니다.',
    help: '의도하지 않은 중복 label 연결을 정리하세요.',
  },
  'frame-focusable-content': {
    description: '포커스 가능한 콘텐츠를 가진 frame/iframe에 tabindex="-1"을 주면 안 됩니다.',
    help: 'iframe 내부 상호작용이 필요하다면 키보드 포커스가 가능해야 합니다.',
  },
  'frame-title-unique': {
    description: '여러 frame/iframe은 서로 구분 가능한 고유한 title을 가져야 합니다.',
    help: 'iframe title을 용도별로 다르게 작성하세요.',
  },
  'frame-title': {
    description: 'frame/iframe은 접근 가능한 이름을 가져야 합니다.',
    help: 'iframe에 title 속성을 제공해 목적을 설명하세요.',
  },
  'html-has-lang': {
    description: 'HTML 문서 최상위 요소에는 lang 속성이 있어야 합니다.',
    help: '<html lang="ko">처럼 문서 기본 언어를 지정하세요.',
  },
  'html-lang-valid': {
    description: '<html> 요소의 lang 값은 유효한 언어 코드여야 합니다.',
    help: 'BCP 47 형식의 올바른 언어 코드를 사용하세요.',
  },
  'html-xml-lang-mismatch': {
    description: 'lang과 xml:lang이 함께 있을 경우 기본 언어가 서로 일치해야 합니다.',
    help: '두 속성의 언어 코드가 충돌하지 않도록 맞추세요.',
  },
  'image-alt': {
    description: '<img> 요소는 대체 텍스트를 제공하거나 장식용 역할이어야 합니다.',
    help: '의미 있는 이미지는 alt를 제공하고, 장식용이면 alt="" 또는 presentation/none을 사용하세요.',
  },
  'input-button-name': {
    description: 'input 버튼은 식별 가능한 텍스트를 가져야 합니다.',
    help: 'type="button", "submit", "reset" 등에 value 또는 접근 가능한 이름을 제공하세요.',
  },
  'input-image-alt': {
    description: '<input type="image"> 요소는 대체 텍스트를 가져야 합니다.',
    help: 'input image에 alt를 제공하세요.',
  },
  label: {
    description: '모든 폼 요소는 label을 가져야 합니다.',
    help: 'label, aria-label, aria-labelledby 중 적절한 방식으로 이름을 제공하세요.',
  },
  'link-in-text-block': {
    description: '본문 내 링크는 색상만으로 구분되어서는 안 됩니다.',
    help: '밑줄, 굵기, 배경, 충분한 대비 차이 등 비색상 단서를 제공하세요.',
  },
  'link-name': {
    description: '링크는 식별 가능한 텍스트를 가져야 합니다.',
    help: '링크 목적을 이해할 수 있는 텍스트나 accessible name을 제공하세요.',
  },
  list: {
    description: '목록은 올바른 구조로 작성되어야 합니다.',
    help: '<ul>/<ol> 안에는 <li>를 사용하고, 목록 의미가 없으면 목록 마크업을 사용하지 마세요.',
  },
  listitem: {
    description: '<li> 요소는 의미에 맞게 목록 안에서 사용되어야 합니다.',
    help: '<li>는 반드시 <ul> 또는 <ol>의 자식이어야 합니다.',
  },
  marquee: {
    description: '<marquee> 요소는 사용하면 안 됩니다.',
    help: '자동으로 움직이는 구식 마크업은 제거하세요.',
  },
  'meta-refresh': {
    description: '지연 새로고침을 위한 <meta http-equiv="refresh"> 사용은 피해야 합니다.',
    help: '자동 새로고침/리다이렉트 대신 명시적 사용자 제어 방식을 사용하세요.',
  },
  'meta-viewport': {
    description: '<meta name="viewport">는 확대/축소와 텍스트 크기 조정을 막아서는 안 됩니다.',
    help: 'user-scalable=no, maximum-scale=1 등 확대 제한 설정을 피하세요.',
  },
  'nested-interactive': {
    description: '상호작용 요소 안에 또 다른 상호작용 요소를 중첩하면 안 됩니다.',
    help: 'button 안에 a, a 안에 button 같은 구조를 제거하세요.',
  },
  'no-autoplay-audio': {
    description: '3초 이상 자동 재생되는 오디오는 중지 또는 음소거 수단이 있어야 합니다.',
    help: '자동 재생을 제거하거나 정지/음소거 컨트롤을 제공하세요.',
  },
  'object-alt': {
    description: '<object> 요소는 대체 텍스트를 가져야 합니다.',
    help: 'object의 목적을 이해할 수 있는 대체 정보를 제공하세요.',
  },
  'role-img-alt': {
    description: 'role="img" 요소는 대체 텍스트를 가져야 합니다.',
    help: 'aria-label, aria-labelledby 등으로 이미지 의미를 제공하세요.',
  },
  'scrollable-region-focusable': {
    description: '스크롤 가능한 영역은 키보드로 접근 가능해야 합니다.',
    help: '필요한 경우 tabindex="0" 등을 사용해 스크롤 영역에 포커스를 부여하세요.',
  },
  'select-name': {
    description: 'select 요소는 접근 가능한 이름을 가져야 합니다.',
    help: 'select에 연결된 label 또는 aria-label/aria-labelledby를 제공하세요.',
  },
  'server-side-image-map': {
    description: '서버사이드 이미지 맵은 사용하지 않아야 합니다.',
    help: '클라이언트 사이드 이미지 맵 또는 다른 접근 가능한 구조로 대체하세요.',
  },
  'summary-name': {
    description: 'summary 요소는 식별 가능한 텍스트를 가져야 합니다.',
    help: '<summary> 안에 사용자가 이해할 수 있는 제목을 넣으세요.',
  },
  'svg-img-alt': {
    description:
      'img/graphics-document/graphics-symbol 역할의 <svg>는 접근 가능한 텍스트를 가져야 합니다.',
    help: 'title, aria-label, aria-labelledby 등으로 SVG 의미를 제공하세요.',
  },
  'td-headers-attr': {
    description:
      'headers 속성을 사용하는 테이블 셀은 같은 테이블의 올바른 헤더 셀만 참조해야 합니다.',
    help: 'td[headers]가 유효한 <th> id만 참조하도록 수정하세요.',
  },
  'th-has-data-cells': {
    description:
      '<th> 또는 columnheader/rowheader 역할 요소는 자신이 설명하는 데이터 셀을 가져야 합니다.',
    help: '실제 데이터와 연결되지 않은 헤더 셀을 제거하거나 구조를 수정하세요.',
  },
  'valid-lang': {
    description: 'lang 속성값은 유효한 언어 코드여야 합니다.',
    help: '요소별 lang 값도 올바른 BCP 47 형식으로 지정하세요.',
  },
  'video-caption': {
    description: '<video> 요소는 자막을 제공해야 합니다.',
    help: '동기화된 captions track을 제공하세요.',
  },
  'autocomplete-valid': {
    description: 'autocomplete 속성은 폼 필드 목적에 맞고 올바른 값이어야 합니다.',
    help: '필드 의미에 맞는 표준 autocomplete 토큰을 사용하세요.',
  },
  'avoid-inline-spacing': {
    description:
      '인라인 스타일로 지정한 텍스트 간격은 사용자 정의 스타일시트로 조정 가능해야 합니다.',
    help: 'letter-spacing, line-height 등을 사용자 재정의가 어렵게 고정하지 마세요.',
  },
  'target-size': {
    description: '터치 대상은 충분한 크기와 간격을 가져야 합니다.',
    help: '클릭/터치 가능한 컨트롤의 크기와 간격을 확대하세요.',
  },
  accesskeys: {
    description: 'accesskey 값은 문서 내에서 고유해야 합니다.',
    help: '중복 accesskey를 제거하세요.',
  },
  'aria-allowed-role': {
    description: '요소에 지정한 role 값은 해당 요소에 적절해야 합니다.',
    help: '기본 시맨틱과 충돌하는 부적절한 role 사용을 피하세요.',
  },
  'aria-dialog-name': {
    description: 'ARIA dialog 및 alertdialog는 접근 가능한 이름을 가져야 합니다.',
    help: '대화상자 제목을 aria-label, aria-labelledby 또는 제목 요소와 연결하세요.',
  },
  'aria-text': {
    description: 'role="text"는 포커스 가능한 자손이 없는 요소에만 사용해야 합니다.',
    help: '상호작용 요소를 포함한 곳에는 role="text"를 사용하지 마세요.',
  },
  'aria-treeitem-name': {
    description: 'ARIA treeitem은 접근 가능한 이름을 가져야 합니다.',
    help: 'treeitem에 사용자가 식별 가능한 라벨을 제공하세요.',
  },
  'empty-heading': {
    description: '제목 요소는 식별 가능한 텍스트를 가져야 합니다.',
    help: '빈 h1~h6 또는 빈 heading role 요소를 제거하거나 텍스트를 넣으세요.',
  },
  'empty-table-header': {
    description: '테이블 헤더는 식별 가능한 텍스트를 가져야 합니다.',
    help: '비어 있는 <th>는 제거하거나 의미 있는 제목을 제공하세요.',
  },
  'frame-tested': {
    description: '<iframe> 및 <frame> 요소는 axe-core 검사 대상에 포함되어야 합니다.',
    help: '테스트 환경에서 프레임 내부도 접근성 검사가 가능하도록 구성하세요.',
  },
  'heading-order': {
    description: '제목 레벨 순서는 의미적으로 올바르게 구성되어야 합니다.',
    help: 'h1 다음에 h3로 건너뛰는 식의 구조를 지양하세요.',
  },
  'image-redundant-alt': {
    description: '이미지 대체 텍스트는 주변 텍스트와 중복되지 않아야 합니다.',
    help: '같은 정보를 반복하는 alt는 축약하거나 제거하세요.',
  },
  'label-title-only': {
    description: '폼 요소는 보이는 label을 가져야 하며 title이나 숨김 라벨에만 의존하면 안 됩니다.',
    help: '시각적으로도 확인 가능한 레이블을 제공하세요.',
  },
  'landmark-banner-is-top-level': {
    description: 'banner 랜드마크는 최상위 수준에 있어야 합니다.',
    help: 'banner를 다른 landmark 내부에 중첩하지 마세요.',
  },
  'landmark-complementary-is-top-level': {
    description: 'complementary/aside 랜드마크는 최상위 수준에 있어야 합니다.',
    help: 'aside landmark의 중첩 구조를 점검하세요.',
  },
  'landmark-contentinfo-is-top-level': {
    description: 'contentinfo 랜드마크는 최상위 수준에 있어야 합니다.',
    help: 'footer landmark를 부적절하게 중첩하지 마세요.',
  },
  'landmark-main-is-top-level': {
    description: 'main 랜드마크는 최상위 수준에 있어야 합니다.',
    help: 'main을 다른 landmark 내부에 중첩하지 마세요.',
  },
  'landmark-no-duplicate-banner': {
    description: '문서에는 banner 랜드마크가 하나만 있어야 합니다.',
    help: '중복 banner를 제거하세요.',
  },
  'landmark-no-duplicate-contentinfo': {
    description: '문서에는 contentinfo 랜드마크가 하나만 있어야 합니다.',
    help: '중복 footer landmark를 제거하세요.',
  },
  'landmark-no-duplicate-main': {
    description: '문서에는 main 랜드마크가 하나만 있어야 합니다.',
    help: '중복 main을 제거하세요.',
  },
  'landmark-one-main': {
    description: '문서에는 main 랜드마크가 있어야 합니다.',
    help: '주요 본문 영역에 main을 제공하세요.',
  },
  'landmark-unique': {
    description: '랜드마크는 서로 구분 가능해야 합니다.',
    help: '동일 유형의 랜드마크가 여러 개라면 aria-label 등으로 구분하세요.',
  },
  'meta-viewport-large': {
    description: '<meta name="viewport">는 충분한 확대 배율을 허용해야 합니다.',
    help: '사용자가 필요 시 충분히 확대할 수 있도록 설정하세요.',
  },
  'page-has-heading-one': {
    description: '페이지 또는 프레임에는 최소 하나의 h1 수준 제목이 있어야 합니다.',
    help: '페이지 주제를 대표하는 최상위 제목을 제공하세요.',
  },
  'presentation-role-conflict': {
    description: 'presentational 처리된 요소에 전역 ARIA 속성이나 tabindex가 있으면 안 됩니다.',
    help: 'presentation/none 역할과 상호작용/의미 부여 속성을 함께 사용하지 마세요.',
  },
  region: {
    description: '모든 페이지 콘텐츠는 랜드마크 안에 포함되어야 합니다.',
    help: 'header, nav, main, aside, footer 등의 landmark 구조로 콘텐츠를 감싸세요.',
  },
  'scope-attr-valid': {
    description: '테이블의 scope 속성은 올바르게 사용되어야 합니다.',
    help: 'scope는 th에 적절한 값(row, col 등)으로만 사용하세요.',
  },
  'skip-link': {
    description: '스킵 링크는 실제로 포커스 가능한 대상에 연결되어야 합니다.',
    help: 'href 대상이 존재하고 키보드 포커스 이동이 가능해야 합니다.',
  },
  tabindex: {
    description: 'tabindex 값은 0보다 크게 사용하지 않는 것이 좋습니다.',
    help: '양수 tabindex 대신 DOM 순서와 자연스러운 포커스 흐름을 사용하세요.',
  },
  'table-duplicate-name': {
    description: '<caption>과 summary 속성에 같은 텍스트를 중복해서 쓰면 안 됩니다.',
    help: '테이블 이름 정보가 중복되지 않도록 조정하세요.',
  },
  'color-contrast-enhanced': {
    description: '전경색과 배경색의 명암비가 WCAG 2 AAA 향상 기준을 충족해야 합니다.',
    help: '일반 텍스트는 최소 7:1, 큰 텍스트는 최소 4.5:1 명암비를 확보하세요.',
  },
  'identical-links-same-purpose': {
    description: '동일한 접근 가능한 이름의 링크는 유사한 목적을 가져야 합니다.',
    help: '같은 링크 텍스트가 서로 다른 목적지/의미를 갖지 않도록 하세요.',
  },
  'meta-refresh-no-exceptions': {
    description: '지연 새로고침용 meta refresh는 예외 없이 사용하지 않아야 합니다.',
    help: '자동 갱신/이동을 제거하고 사용자 제어 방식으로 대체하세요.',
  },
  'css-orientation-lock': {
    description:
      '콘텐츠는 특정 화면 방향으로 고정되지 않아야 하며 모든 방향에서 사용 가능해야 합니다.',
    help: '세로/가로 방향 전환 시 사용 불가 상태가 되지 않도록 하세요.',
  },
  'focus-order-semantics': {
    description: '포커스 순서에 포함된 요소는 상호작용 콘텐츠에 적절한 역할을 가져야 합니다.',
    help: '포커스 가능한 요소가 의미 없는 div/span으로만 구성되지 않도록 하세요.',
  },
  'hidden-content': {
    description: '숨겨진 콘텐츠의 존재와 처리 방식은 사용자 관점에서 문제를 만들지 않아야 합니다.',
    help: '숨김 콘텐츠가 접근성 트리, 포커스, 읽기 순서에 어떤 영향을 주는지 점검하세요.',
  },
  'label-content-name-mismatch': {
    description:
      '콘텐츠 기반 라벨을 가진 요소는 보이는 텍스트가 접근 가능한 이름에 포함되어야 합니다.',
    help: '버튼/링크의 시각적 텍스트와 accessible name이 불일치하지 않게 하세요.',
  },
  'p-as-heading': {
    description: '<p> 요소를 시각적으로만 제목처럼 스타일링해서는 안 됩니다.',
    help: '제목 의미가 있다면 실제 heading 태그를 사용하세요.',
  },
  'table-fake-caption': {
    description: '캡션이 있는 테이블은 실제 <caption> 요소를 사용해야 합니다.',
    help: '테이블 제목을 단순 텍스트가 아닌 caption으로 마크업하세요.',
  },
  'td-has-header': {
    description:
      '3x3보다 큰 테이블의 비어 있지 않은 데이터 셀은 하나 이상의 헤더와 연결되어야 합니다.',
    help: '복잡한 테이블에는 th, scope, headers/id 구조를 정확히 제공하세요.',
  },
  'aria-roledescription': {
    description:
      'aria-roledescription은 암시적 또는 명시적 role이 있는 요소에서만 사용해야 합니다.',
    help: 'role이 없는 요소에 aria-roledescription을 사용하지 마세요.',
  },
  'audio-caption': {
    description: '<audio> 요소에는 캡션이 제공되어야 합니다.',
    help: '오디오 콘텐츠에 대체 텍스트/자막/대본 제공 방식을 검토하세요.',
  },
  'duplicate-id-active': {
    description: '활성 요소의 id 값은 고유해야 합니다.',
    help: '포커스/상호작용 가능한 요소의 id 중복을 제거하세요.',
  },
  'duplicate-id': {
    description: '문서 내 모든 id 값은 고유해야 합니다.',
    help: '중복된 id를 제거하고 유일한 값으로 수정하세요.',
  },
} as const;

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        locale: {
          lang: 'ko',
          rules: axeRuleLocaleKo,
        },
      },
    },
  },
};

export default preview;
