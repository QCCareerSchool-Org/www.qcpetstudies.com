import type { FC } from 'react';

import styles from './comparisonTable.module.scss';
import { Check } from '@/components/check';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

const dgColor = '#ff0074';
const gtColor = '#061F3A';

interface Props {
  gtPrice: Price;
  dgPrice: Price;
}

export const ComparisonTable: FC<Props> = ({ gtPrice, dgPrice }) => (
  <>
    <table className={`table table-bordered ${styles.comparisonTable}`}>
      <thead>
        <tr>
          <th />
          <th className="text-md-center">Certified Grooming Technician™</th>
          <th className="text-md-center">International Dog Grooming Professional™</th>
        </tr>
      </thead>
      <tfoot>
        <tr className="bg-navy text-white">
          <td className="align-middle">Course Tuition</td>
          <td className="align-middle text-center">{gtPrice.currency.symbol}{formatPrice(gtPrice.plans.part.total)}</td>
          <td className="align-middle text-center">{dgPrice.currency.symbol}{formatPrice(dgPrice.plans.part.total)}</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <th scope="row" className="align-middle">Average Annual Salary*</th>
          <td className="align-middle text-center">$36,000</td>
          <td className="align-middle text-center">$61,000</td>
        </tr>
        <tr>
          <th colSpan={3} className="bg-light">Services</th>
        </tr>
        <tr>
          <td className="align-middle">Nail clipping</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Brushing</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Dematting</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Bathing</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Drying</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Pet cuts</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Breed-specific cuts</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Professional styling</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Specialized grooms</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Creative grooms</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <th colSpan={3} className="bg-light">Course Bonus Kit</th>
        </tr>
        <tr>
          <td className="align-middle">2 slicker brushes (soft and hard)</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">2 nail clippers (large and small)</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">2 mat breakers (large and small)</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">An undercoat rake</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">A greyhound rake</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">A fine-toothed comb</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">A curry comb</td>
          <td className="align-middle text-center"><Check color={gtColor} /></td>
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">WAHL 5-n-1 cordless clippers</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Comb attachments</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
        <tr>
          <td className="align-middle">Professional-grade grooming scissors</td>
          <td className="align-middle text-center" />
          <td className="align-middle text-center"><Check color={dgColor} /></td>
        </tr>
      </tbody>
    </table>
    <p className="small">* These rates are based on the median hourly rate <a target="_blank" rel="noreferrer" href="https://www.payscale.com/research/US/Job=Dog_Grooming_Assistant/Hourly_Rate">reported by Payscale in 2024</a>. Rates will vary according to location and years of experience.</p>
  </>
);
