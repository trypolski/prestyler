import React, { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';
import PaginationItem from './PaginationItem/PaginationItem';
import PaginationLink from './PaginationLink/PaginationLink';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    // Pagination props
    isSmall: { control: 'boolean', defaultValue: false },
    isLarge: { control: 'boolean', defaultValue: false },
    className: { control: 'text' },

    // Demo controls
    numPages: { control: { type: 'number', min: 1, step: 1 }, defaultValue: 5 },
    currentPage: { control: { type: 'number', min: 1, step: 1 }, defaultValue: 1 },
    showPrevNext: { control: 'boolean', defaultValue: true },
    showFirstLast: { control: 'boolean', defaultValue: true },
  },
};

export function PaginationExample(args) {
  const [page, setPage] = useState(args.currentPage);
  useEffect(() => setPage(args.currentPage), [args.currentPage]);

  const goTo = (p) => (e) => {
    e.preventDefault();
    setPage(Math.max(1, Math.min(args.numPages, p)));
  };

  const isFirst = page <= 1;
  const isLast = page >= args.numPages;

  const pages = Array.from({ length: Math.max(1, args.numPages) }, (_, i) => i + 1);
  return (
    <div className="bs-container-fluid" style={{ padding: 16 }}>
      <Pagination isSmall={args.isSmall} isLarge={args.isLarge} className={args.className}>
        {args.showFirstLast && (
          <PaginationItem disabled={isFirst}>
            <PaginationLink href="#" aria-label="First" disabled={isFirst} onClick={goTo(1)}>
              « First
            </PaginationLink>
          </PaginationItem>
        )}

        {args.showPrevNext && (
          <PaginationItem disabled={isFirst}>
            <PaginationLink
              href="#"
              aria-label="Previous"
              disabled={isFirst}
              onClick={goTo(page - 1)}
            >
              ‹ Prev
            </PaginationLink>
          </PaginationItem>
        )}

        {pages.map((p) => (
          <PaginationItem key={p} isActive={p === page}>
            <PaginationLink
              href="#"
              aria-current={p === page ? 'page' : undefined}
              onClick={goTo(p)}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {args.showPrevNext && (
          <PaginationItem disabled={isLast}>
            <PaginationLink href="#" aria-label="Next" disabled={isLast} onClick={goTo(page + 1)}>
              Next ›
            </PaginationLink>
          </PaginationItem>
        )}

        {args.showFirstLast && (
          <PaginationItem disabled={isLast}>
            <PaginationLink
              href="#"
              aria-label="Last"
              disabled={isLast}
              onClick={goTo(args.numPages)}
            >
              Last »
            </PaginationLink>
          </PaginationItem>
        )}
      </Pagination>
    </div>
  );
}

PaginationExample.args = {
  isSmall: false,
  isLarge: false,
  className: '',
  numPages: 5,
  currentPage: 1,
  showPrevNext: true,
  showFirstLast: true,
};
