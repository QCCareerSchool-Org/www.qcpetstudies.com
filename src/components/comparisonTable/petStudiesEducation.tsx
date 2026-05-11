import type { FC, PropsWithChildren } from 'react';

import type { ComparisonTableColumn, ComparisonTableRow } from '.';
import { ComparisonTable } from '.';

const Heading: FC<PropsWithChildren> = ({ children }) => <div className="fw-bold mb-1" style={{ color: 'oklch(0.21 0.034 264.665)' }}>{children}</div>;

const columns = [
  {
    key: 'qc',
    eyebrow: 'QC Pet School',
    mobileLabel: 'QC Pet School IEWP™ Certification',
    heading: <h3>IEWP&trade; Certification</h3>,
  },
  {
    key: 'tradeschools',
    mobileLabel: 'In-Person Trade Schools',
    navLabel: 'vs. In-Person Trade Schools',
    heading: <><h3>In-Person Trade Schools</h3>(E.g. Local Grooming Academies)</>,
  },
  {
    key: 'other',
    mobileLabel: 'Other Online Courses & Certificates',
    navLabel: 'vs. Other Courses',
    heading: <><h3>Other Online Courses &amp; Certificates</h3>(E.g., IAP, ABC, Paragon, JKL Grooming)</>,
  },
] as const satisfies readonly ComparisonTableColumn[];

type ColumnKey = typeof columns[number]['key'];

const rows: ComparisonTableRow<ColumnKey>[] = [
  {
    feature: 'Program Focus',
    qc: 'Comprehensive training',
    tradeschools: 'Hands-on basics in a classroom setting',
    other: 'Varies from advanced technical skills to basic overview',
  },
  {
    feature: 'Career Outcome',
    qc: 'Business ownership and salon stylist roles',
    tradeschools: 'Entry-level positions and apprenticeships',
    other: 'Assistant roles or entry-level salon work',
  },
  {
    feature: 'Mentorship',
    qc: <><Heading>1-on-1 Mentorship:</Heading> 12 personalized reviews from an expert groomer</>,
    tradeschools: <><Heading>Group Instruction:</Heading> Limited individual attention</>,
    other: <><Heading>Third Party/Mixed:</Heading> May rely on local externships or email-only support</>,
  },
  {
    feature: 'Grooming Kit',
    qc: <><Heading>Included:</Heading> Professional 11-piece set, 3-piece shear kit & leather case included for every student </>,
    tradeschools: <><Heading>Often Extra::</Heading> Usually requires a separate purchase of $500-$1,000+</>,
    other: <><Heading>Often Extra:</Heading> Some include basic kits; others require a separate purchase</>,
  },
  {
    feature: 'Course Format',
    qc: 'Self-paced & flexible with 100% online lessons, expert-led videos, hands-on assignments and mentor feedback',
    tradeschools: 'In-person training fixed schedules, deadline and daily commutes',
    other: 'Online lessons; completion time and deadlines vary by program and instructor availability',
  },
  {
    feature: 'Business Training',
    qc: 'Complete Start-Up Kit (Marketing, Pricing, Legal templates)',
    tradeschools: 'Minimal to none',
    other: 'Basic theory or general career advice',
  },
  {
    feature: 'Credential',
    qc: <><strong>International Dog Grooming Professional (IDGP™) Certification</strong></>,
    tradeschools: 'Diploma or Certificate',
    other: 'Career Diploma / Certificate',
  },
  {
    feature: 'Duration',
    qc: <>
      <p>3-6 Months</p>
      <p> *Self-paced with up to a year to complete your course</p>
    </>,
    tradeschools: '3-12 Months',
    other: ' 6 weeks - 12 months',
  },
  {
    feature: 'Total Investment',
    qc: <><Heading>High Value:</Heading> $2,498 to $3,648 (Flexible Plans)</>,
    tradeschools: <><Heading>High Cost:</Heading> $6,000-$15,000+</>,
    other: <><Heading>Broad Investment:</Heading> $500-$5,000+ (Varies by school)</>,
  },
];

const caption = 'Comparison of Event Planning Education Paths: QC Event School vs. Universities vs. Career Diplomas';

export const PetStudiesEducationComparisonTable: FC = () => (
  <ComparisonTable columns={columns} rows={rows} caption={caption} />
);
