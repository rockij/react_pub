import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react';
import '../../assets/css/component/pagination.css';

export interface PaginationProps {
  count: number;
  page?: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  disabled?: boolean;
  size?: 'medium' | 'large';
  className?: string;
  ariaLabel?: string;
}

type PaginationItem = number | 'start-ellipsis' | 'end-ellipsis';

const clampPage = (page: number, count: number) => Math.min(Math.max(page, 1), count);

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const getPaginationItems = (
  count: number,
  page: number,
  siblingCount: number,
  boundaryCount: number
): PaginationItem[] => {
  if (count <= 0) {
    return [];
  }

  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2;

  if (count <= totalNumbers) {
    return range(1, count);
  }

  const startPages = range(1, boundaryCount);
  const endPages = range(count - boundaryCount + 1, count);

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    count - boundaryCount - 1
  );

  const items: PaginationItem[] = [...startPages];

  if (siblingsStart > boundaryCount + 2) {
    items.push('start-ellipsis');
  } else if (boundaryCount + 1 < siblingsStart) {
    items.push(boundaryCount + 1);
  }

  items.push(...range(siblingsStart, siblingsEnd));

  if (siblingsEnd < count - boundaryCount - 1) {
    items.push('end-ellipsis');
  } else if (siblingsEnd + 1 < count - boundaryCount + 1) {
    items.push(count - boundaryCount);
  }

  items.push(...endPages);

  return items;
};

export function Pagination({
  count,
  page,
  defaultPage = 1,
  onChange,
  siblingCount = 1,
  boundaryCount = 1,
  showFirstButton = false,
  showLastButton = false,
  disabled = false,
  size = 'medium',
  className,
  ariaLabel = 'Pagination',
}: PaginationProps) {
  const safeCount = Math.max(0, Math.floor(count));
  const isControlled = page !== undefined;
  const initialPage = React.useMemo(
    () => clampPage(defaultPage, Math.max(safeCount, 1)),
    [defaultPage, safeCount]
  );
  const [internalPage, setInternalPage] = React.useState(initialPage);

  React.useEffect(() => {
    if (isControlled || safeCount === 0) {
      return;
    }

    setInternalPage(prev => clampPage(prev, safeCount));
  }, [isControlled, safeCount]);

  const currentPage = isControlled
    ? clampPage(page ?? 1, Math.max(safeCount, 1))
    : clampPage(internalPage, Math.max(safeCount, 1));

  const items = React.useMemo(
    () =>
      getPaginationItems(
        safeCount,
        currentPage,
        Math.max(0, Math.floor(siblingCount)),
        Math.max(0, Math.floor(boundaryCount))
      ),
    [boundaryCount, currentPage, safeCount, siblingCount]
  );

  const selectPage = (nextPage: number) => {
    if (disabled || safeCount === 0) {
      return;
    }

    const normalizedPage = clampPage(nextPage, safeCount);

    if (!isControlled) {
      setInternalPage(normalizedPage);
    }

    if (normalizedPage !== currentPage) {
      onChange?.(normalizedPage);
    }
  };

  if (safeCount <= 1) {
    return null;
  }

  const isPreviousDisabled = disabled || currentPage <= 1;
  const isNextDisabled = disabled || currentPage >= safeCount;
  const iconStrokeWidth = size === 'large' ? 2.2 : 2;
  const iconSize = size === 'large' ? 18 : 16;

  return (
    <nav
      className={['pagination', `pagination--${size}`, disabled ? 'pagination--disabled' : '', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <ul className="pagination__list">
        {showFirstButton && (
          <li>
            <button
              type="button"
              className="pagination__button pagination__button--edge"
              onClick={() => selectPage(1)}
              disabled={isPreviousDisabled}
              aria-label="Go to first page"
            >
              <ChevronsLeft className="pagination__icon" size={iconSize} strokeWidth={iconStrokeWidth} aria-hidden="true" />
            </button>
          </li>
        )}

        <li>
          <button
            type="button"
            className="pagination__button pagination__button--edge"
            onClick={() => selectPage(currentPage - 1)}
            disabled={isPreviousDisabled}
            aria-label="Go to previous page"
          >
            <ChevronLeft className="pagination__icon" size={iconSize} strokeWidth={iconStrokeWidth} aria-hidden="true" />
          </button>
        </li>

        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            {typeof item === 'number' ? (
              <button
                type="button"
                className="pagination__button"
                onClick={() => selectPage(item)}
                aria-current={item === currentPage ? 'page' : undefined}
                aria-label={`Go to page ${item}`}
                disabled={disabled}
              >
                {item}
              </button>
            ) : (
              <span className="pagination__ellipsis" aria-hidden="true">
                <MoreHorizontal className="pagination__icon" size={iconSize} strokeWidth={iconStrokeWidth} />
              </span>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            className="pagination__button pagination__button--edge"
            onClick={() => selectPage(currentPage + 1)}
            disabled={isNextDisabled}
            aria-label="Go to next page"
          >
            <ChevronRight className="pagination__icon" size={iconSize} strokeWidth={iconStrokeWidth} aria-hidden="true" />
          </button>
        </li>

        {showLastButton && (
          <li>
            <button
              type="button"
              className="pagination__button pagination__button--edge"
              onClick={() => selectPage(safeCount)}
              disabled={isNextDisabled}
              aria-label="Go to last page"
            >
              <ChevronsRight className="pagination__icon" size={iconSize} strokeWidth={iconStrokeWidth} aria-hidden="true" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
