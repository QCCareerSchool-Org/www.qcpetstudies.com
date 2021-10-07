import Link from 'next/link';
import { ReactElement } from 'react';

type Props = {
  className?: string;
};

export const Footer = ({ className }: Props): ReactElement => (
  <footer style={{ borderTop: '1px solid rgb(255,255,255,0.1)' }} className={`bg-dark text-light py-4 ${className}`}>
    <div className="container">
      <small>&copy; {new Date().getFullYear()} QC Pet Studies &nbsp;|&nbsp; <Link href="/privacy-policy"><a className="text-light">Privacy Policy</a></Link></small>
    </div>
  </footer>
);
