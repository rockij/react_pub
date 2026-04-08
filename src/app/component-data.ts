import { readdir } from 'node:fs/promises';
import path from 'node:path';

export type ComponentMeta = {
  description: string;
  previewClassName: string;
};

export type ComponentCard = {
  name: string;
  title: string;
  slug: string;
  docsUrl: string;
  meta: ComponentMeta;
};

const componentMetaMap: Record<string, ComponentMeta> = {
  Accordion: {
    description:
      '여러 섹션을 접고 펼치며 많은 정보를 간결하게 정리할 수 있는 인터랙션 컴포넌트입니다.',
    previewClassName: 'preview-accordion',
  },
  Button: {
    description: '주요 액션과 보조 액션을 명확하게 구분해 전달하는 기본 클릭 인터페이스입니다.',
    previewClassName: 'preview-button',
  },
  Card: {
    description: '콘텐츠를 하나의 묶음으로 정리해 정보의 우선순위를 쉽게 파악할 수 있게 돕습니다.',
    previewClassName: 'preview-card',
  },
  Checkbox: {
    description: '여러 항목 중 복수 선택이 가능한 상황을 직관적으로 표현하는 입력 요소입니다.',
    previewClassName: 'preview-checkbox',
  },
  Dialog: {
    description:
      '사용자 흐름 위에 중요한 메시지나 확인 액션을 올려 보여주는 모달 인터페이스입니다.',
    previewClassName: 'preview-dialog',
  },
  RadioGroup: {
    description: '단일 선택 옵션을 빠르게 비교하고 하나만 고를 수 있도록 구성한 입력 그룹입니다.',
    previewClassName: 'preview-radiogroup',
  },
  Select: {
    description: '긴 옵션 목록을 드롭다운으로 접어두고 필요한 값만 효율적으로 선택하게 합니다.',
    previewClassName: 'preview-select',
  },
  Skeleton: {
    description: '콘텐츠 로딩 전 자리와 구조를 미리 보여줘 체감 성능과 안정감을 높여줍니다.',
    previewClassName: 'preview-skeleton',
  },
  Slider: {
    description: '범위 값이나 강도를 드래그로 조절할 수 있게 해주는 연속형 입력 컴포넌트입니다.',
    previewClassName: 'preview-slider',
  },
  Switch: {
    description: '설정의 켜짐과 꺼짐 상태를 즉시 이해하고 토글할 수 있는 전환형 컨트롤입니다.',
    previewClassName: 'preview-switch',
  },
  TextField: {
    description: '텍스트 입력, 안내 문구, 상태 메시지를 한 흐름 안에서 제공하는 기본 입력 필드입니다.',
    previewClassName: 'preview-textfield',
  },
  Toast: {
    description: '작업 결과를 화면 흐름을 방해하지 않는 짧은 피드백 메시지로 알려주는 컴포넌트입니다.',
    previewClassName: 'preview-toast',
  },
  Tooltip: {
    description: '짧은 설명이나 보조 정보를 맥락에 맞게 가볍게 보여주는 보조 안내 UI입니다.',
    previewClassName: 'preview-tooltip',
  },
};

const getStorybookDocsUrl = (storybookUrl: string, componentName: string) => {
  const normalizedBaseUrl = storybookUrl.endsWith('/') ? storybookUrl.slice(0, -1) : storybookUrl;
  const storyId = `components-${componentName.toLowerCase()}--docs`;

  return `${normalizedBaseUrl}?path=/docs/${storyId}`;
};

const formatComponentTitle = (componentName: string) =>
  componentName.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

const toComponentSlug = (componentName: string) =>
  componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const getComponentList = async () => {
  const componentsPath = path.join(process.cwd(), 'src', 'components');
  const entries = await readdir(componentsPath, { withFileTypes: true });

  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b));
};

export const getStorybookUrl = () =>
  process.env.NEXT_PUBLIC_STORYBOOK_URL ??
  (process.env.NODE_ENV === 'production' ? '/storybook/' : 'http://localhost:6006');

export const getComponentCards = async (storybookUrl: string): Promise<ComponentCard[]> => {
  const componentList = await getComponentList();

  return componentList.map(componentName => ({
    name: componentName,
    title: formatComponentTitle(componentName),
    slug: toComponentSlug(componentName),
    docsUrl: getStorybookDocsUrl(storybookUrl, componentName),
    meta: componentMetaMap[componentName] ?? {
      description: '디자인 시스템 안에서 재사용되는 공통 UI 컴포넌트입니다.',
      previewClassName: 'preview-generic',
    },
  }));
};
