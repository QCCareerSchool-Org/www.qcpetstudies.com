'use client';

import type { FC, MouseEventHandler, ReactNode } from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export interface ComparisonTableColumn<T extends string = string> {
  key: T;
  eyebrow?: ReactNode;
  heading: ReactNode;
  mobileLabel: string;
  navLabel?: string;
}

export type ComparisonTableRow<T extends string = string> = {
  feature: string;
} & Record<T, ReactNode>;

interface Props<T extends string = string> {
  columns: readonly ComparisonTableColumn<T>[];
  rows: readonly ComparisonTableRow<T>[];
  caption?: string;
  mobileNav?: boolean;
}

// eslint-disable-next-line @stylistic/comma-dangle
export const ComparisonTable: FC<Props> = <T extends string = string,>({ columns, rows, caption, mobileNav = true }: Props<T>) => {
  const comparisonColumns = columns.slice(1);
  const [ selectedColumnKey, setSelectedColumnKey ] = useState<T>(comparisonColumns[0]?.key ?? columns[0].key);
  const hasMobileSwitcher = mobileNav && comparisonColumns.length > 1;

  const handleMobileSwitcherClick: MouseEventHandler<HTMLButtonElement> = e => {
    setSelectedColumnKey(e.currentTarget.dataset.columnKey as T);
  };

  return (
    <>
      {hasMobileSwitcher && (
        <div className={`${styles.mobileSwitcherSticky} mb-3 d-lg-none`}>
          <div className={`${styles.mobileSwitcher} btn-group rounded-pill gap-1 p-1`} role="group" aria-label="Choose a comparison column">
            {comparisonColumns.map(column => (
              <button type="button" className={`btn btn-sm rounded-pill fw-semibold ${styles.mobileSwitcherButton}`} aria-pressed={selectedColumnKey === column.key} data-column-key={column.key} key={column.key} onClick={handleMobileSwitcherClick}>{column.navLabel ?? column.mobileLabel}</button>
            ))}
          </div>
        </div>
      )}
      <div className={`${styles.tableWrapper} table-responsive ${caption ? 'caption-top' : ''}`}>
        <table className={`${styles.table} table align-middle mb-0`}>
          {caption && <caption className="d-none">{caption}</caption>}
          <thead>
            <tr>
              <th scope="col">Feature</th>
              {columns.map(column => (
                <th scope="col" key={column.key}>
                  <div className={styles.headerEyebrow}>{column.eyebrow}</div>
                  {column.heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.feature}>
                <th scope="row">{row.feature}</th>
                {columns.map((column, index) => (
                  <td key={column.key} data-label={column.mobileLabel} data-mobile-visible={index === 0 || selectedColumnKey === column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
