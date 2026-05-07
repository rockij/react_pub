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

const getFirstEnabledTabId = (items: TabItem[]) => items.find(item => !item.disabled)?.id ?? '';

const getValidTabId = (items: TabItem[], preferredId?: string) => {
  if (preferredId && items.some(item => item.id === preferredId && !item.disabled)) {
    return preferredId;
  }

  return getFirstEnabledTabId(items);
};

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
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const [internalActiveId, setInternalActiveId] = React.useState(() =>
    getValidTabId(items, activeId ?? defaultActiveId)
  );
  const currentActiveId = getValidTabId(items, isControlled ? activeId : internalActiveId);

  React.useEffect(() => {
    if (!isControlled) {
      setInternalActiveId(prevActiveId => getValidTabId(items, prevActiveId || defaultActiveId));
    }
  }, [defaultActiveId, isControlled, items]);

  const selectTab = (nextItem: TabItem) => {
    if (nextItem.disabled) return;

    if (!isControlled) {
      setInternalActiveId(nextItem.id);
    }

    onChange?.(nextItem.id);
  };

  const moveFocus = (currentIndex: number, direction: 'next' | 'prev' | 'first' | 'last') => {
    const enabledIndexes = items.reduce<number[]>((acc, item, index) => {
      if (!item.disabled) acc.push(index);
      return acc;
    }, []);

    if (enabledIndexes.length === 0) return;

    let nextIndex = enabledIndexes[0];

    if (direction === 'last') {
      nextIndex = enabledIndexes[enabledIndexes.length - 1];
    } else if (direction === 'next' || direction === 'prev') {
      const currentEnabledPosition = enabledIndexes.indexOf(currentIndex);
      const startPosition = currentEnabledPosition === -1 ? 0 : currentEnabledPosition;
      const offset = direction === 'next' ? 1 : -1;
      const nextPosition =
        (startPosition + offset + enabledIndexes.length) % enabledIndexes.length;

      nextIndex = enabledIndexes[nextPosition];
    }

    tabRefs.current[nextIndex]?.focus();
    selectTab(items[nextIndex]);
  };

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
                onClick={() => selectTab(item)}
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
