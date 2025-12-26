import React from 'react';
import '../../assets/css/accordion.css';

export type AccordionMode = 'single' | 'multiple';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** 'single': 하나만 열림(클릭하면 나머지 닫힘), 'multiple': 개별 토글 */
  mode?: AccordionMode;

  /** 최초 오픈(단일) */
  defaultOpenId?: string;

  /** 최초 오픈(복수) */
  defaultOpenIds?: string[];

  className?: string;

  /** aria 라벨(선택) */
  ariaLabel?: string;
}

export function Accordion({
  items,
  mode = 'single',
  defaultOpenId,
  defaultOpenIds,
  className,
  ariaLabel = 'Accordion',
}: AccordionProps) {
  // 초기 open 상태
  const [openIds, setOpenIds] = React.useState<string[]>(() => {
    if (mode === 'multiple') return defaultOpenIds ?? [];
    return defaultOpenId ? [defaultOpenId] : [];
  });

  // mode 변경 시 초기값 정책(필요 시 유지/리셋 정책을 바꿔도 됨)
  React.useEffect(() => {
    setOpenIds(() => {
      if (mode === 'multiple') return defaultOpenIds ?? [];
      return defaultOpenId ? [defaultOpenId] : [];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const onToggle = (id: string, disabled?: boolean) => {
    if (disabled) return;

    setOpenIds(prev => {
      const isOpen = prev.includes(id);

      if (mode === 'multiple') {
        // 개별 토글
        return isOpen ? prev.filter(x => x !== id) : [...prev, id];
      }

      // single: 하나만 열림(같은 걸 누르면 닫힘도 허용)
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className={['accordion', className].filter(Boolean).join(' ')} aria-label={ariaLabel}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const titleId = `${item.id}-title`;
        const panelId = `${item.id}-content`;

        return (
          <div key={item.id} className="accordion-panel">
            <h2 id={titleId} className="accordion-heading">
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => onToggle(item.id, item.disabled)}
              >
                {item.title}
              </button>
            </h2>

            <div
              id={panelId}
              className="accordion-content"
              role="region"
              aria-labelledby={titleId}
              aria-hidden={!isOpen}
            >
              <div>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
