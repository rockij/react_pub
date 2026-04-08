import React from 'react';
import '../../assets/css/component/tabs.css';

export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsVariant = 'underline' | 'pill';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  className?: string;
  ariaLabel?: string;
  orientation?: TabsOrientation;
  variant?: TabsVariant;
  fullWidth?: boolean;
}

const getFirstEnabledTabId = (items: TabItem[]) => items.find(item => !item.disabled)?.id;

export function Tabs({
  items,
  activeId,
  defaultActiveId,
  onChange,
  className,
  ariaLabel = 'Tabs',
  orientation = 'horizontal',
  variant = 'underline',
  fullWidth = false,
}: TabsProps) {
  const reactId = React.useId();
  const isControlled = activeId !== undefined;
  const initialTabId = React.useMemo(
    () => defaultActiveId ?? getFirstEnabledTabId(items) ?? '',
    [defaultActiveId, items]
  );
  const [internalActiveId, setInternalActiveId] = React.useState(initialTabId);
  const currentActiveId = isControlled ? activeId : internalActiveId;
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  React.useEffect(() => {
    if (isControlled) return;

    const hasValidActiveTab = items.some(item => item.id === internalActiveId && !item.disabled);
    if (!hasValidActiveTab) {
      setInternalActiveId(defaultActiveId ?? getFirstEnabledTabId(items) ?? '');
    }
  }, [defaultActiveId, internalActiveId, isControlled, items]);

  const enabledItems = React.useMemo(() => items.filter(item => !item.disabled), [items]);

  const selectTab = React.useCallback(
    (nextId: string, disabled?: boolean) => {
      if (disabled || !nextId) return;

      if (!isControlled) {
        setInternalActiveId(nextId);
      }

      onChange?.(nextId);
    },
    [isControlled, onChange]
  );

  const moveFocus = React.useCallback(
    (currentIndex: number, direction: 'next' | 'prev' | 'first' | 'last') => {
      if (enabledItems.length === 0) return;

      let nextItem: TabItem | undefined;

      if (direction === 'first') {
        nextItem = enabledItems[0];
      } else if (direction === 'last') {
        nextItem = enabledItems[enabledItems.length - 1];
      } else {
        const enabledIndex = enabledItems.findIndex(item => item.id === items[currentIndex]?.id);
        const nextEnabledIndex =
          direction === 'next'
            ? (enabledIndex + 1) % enabledItems.length
            : (enabledIndex - 1 + enabledItems.length) % enabledItems.length;

        nextItem = enabledItems[nextEnabledIndex];
      }

      if (!nextItem) return;

      const nextIndex = items.findIndex(item => item.id === nextItem?.id);
      tabRefs.current[nextIndex]?.focus();
      selectTab(nextItem.id);
    },
    [enabledItems, items, selectTab]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isHorizontal = orientation === 'horizontal';

    if ((isHorizontal && event.key === 'ArrowRight') || (!isHorizontal && event.key === 'ArrowDown')) {
      event.preventDefault();
      moveFocus(index, 'next');
      return;
    }

    if ((isHorizontal && event.key === 'ArrowLeft') || (!isHorizontal && event.key === 'ArrowUp')) {
      event.preventDefault();
      moveFocus(index, 'prev');
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      moveFocus(index, 'first');
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      moveFocus(index, 'last');
    }
  };

  return (
    <div
      className={[
        'tabs',
        `tabs--${orientation}`,
        `tabs--${variant}`,
        fullWidth ? 'tabs--full-width' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="tabs__list-wrap">
        <div
          className="tabs__list"
          role="tablist"
          aria-label={ariaLabel}
          aria-orientation={orientation}
        >
          {items.map((item, index) => {
            const isSelected = item.id === currentActiveId;
            const tabId = `${reactId}-${item.id}-tab`;
            const panelId = `${reactId}-${item.id}-panel`;

            return (
              <button
                key={item.id}
                ref={node => {
                  tabRefs.current[index] = node;
                }}
                id={tabId}
                type="button"
                role="tab"
                className="tabs__tab"
                tabIndex={isSelected ? 0 : -1}
                aria-selected={isSelected}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => selectTab(item.id, item.disabled)}
                onKeyDown={event => handleKeyDown(event, index)}
              >
                <span className="tabs__tab-label">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="tabs__panels">
        {items.map(item => {
          const isSelected = item.id === currentActiveId;
          const tabId = `${reactId}-${item.id}-tab`;
          const panelId = `${reactId}-${item.id}-panel`;

          return (
            <div
              key={item.id}
              id={panelId}
              role="tabpanel"
              className="tabs__panel"
              tabIndex={0}
              aria-labelledby={tabId}
              hidden={!isSelected}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
