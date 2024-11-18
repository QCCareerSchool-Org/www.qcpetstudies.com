import type { FC } from 'react';
import { Fragment } from 'react';

import { formatDate } from '@/lib/formatDate';
import type { Enrollment } from '@/models/enrollment';

type Props = {
  enrollment: Enrollment;
};

export const EnrollmentDetails: FC<Props> = ({ enrollment }) => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Enrollment Details</h2>
            <table id="enrollmentTable" className="mb-4">
              <tbody>
                <tr>
                  <td><strong>Name</strong></td>
                  <td>{enrollment.firstName} {enrollment.lastName}</td>
                </tr>
                <tr>
                  <td><strong>Address</strong></td>
                  <td>
                    {enrollment.address1}<br />
                    {enrollment.address2 && <>{enrollment.address2}<br /></>}
                    {enrollment.city} {enrollment.provinceName} {enrollment.postalCode}<br />
                    {enrollment.countryName}
                  </td>
                </tr>
                <tr>
                  <td><strong>Currency</strong></td>
                  <td>{enrollment.currencyName}</td>
                </tr>
                <tr>
                  <td><strong>Payment Plan</strong></td>
                  <td>{enrollment.paymentPlan === 'full' ? 'Full Payment' : 'Installment Plan'}</td>
                </tr>
                {enrollment.paymentPlan !== 'full' && (
                  <>
                    <tr>
                      <td><strong>Payment Day</strong></td>
                      <td>{enrollment.paymentDay}</td>
                    </tr>
                    <tr>
                      <td><strong>Installments Start</strong></td>
                      <td>{formatDate(new Date(enrollment.paymentDate))}</td>
                    </tr>
                  </>
                )}
                {enrollment.courses.map((c, i) => (
                  <Fragment key={i}>
                    <tr>
                      <td colSpan={2}><h6 className="mt-4 mb-0">{c.name}</h6></td>
                    </tr>
                    <tr>
                      <td><strong>Cost</strong></td>
                      <td>{enrollment.currencySymbol}{c.baseCost.toFixed(2)}</td>
                    </tr>
                    {c.planDiscount > 0 && (
                      <tr>
                        <td><strong>Discount</strong></td>
                        <td>&minus;{enrollment.currencySymbol}{c.planDiscount.toFixed(2)}</td>
                      </tr>
                    )}
                    {c.discount > 0 && (
                      <tr>
                        <td><strong>Special Discount</strong></td>
                        <td>&minus;{enrollment.currencySymbol}{c.discount.toFixed(2)}</td>
                      </tr>
                    )}
                    <tr>
                      <td><strong>Today's Deposit</strong></td>
                      <td>{enrollment.currencySymbol}{c.deposit.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td><strong>Monthly Installment</strong></td>
                      <td>{enrollment.currencySymbol}{c.installment.toFixed(2)}</td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-lg-10">
            <h2>Transaction Details</h2>
            <table className="table table-bordered text-dark bg-white w-auto">
              <tbody>
                <tr>
                  <td>Reference Code</td>
                  <td>{enrollment.authorizationId}</td>
                </tr>
                <tr>
                  <td>PAN</td>
                  <td>{enrollment.maskedPan}</td>
                </tr>
                <tr>
                  <td>Amount Processed</td>
                  <td>{enrollment.deposit.toFixed(2)} {enrollment.currencyCode}</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>{enrollment.transactionTime !== null ? formatDate(enrollment.transactionTime) : ''}</td>
                </tr>
                <tr>
                  <td>Auth Code</td>
                  <td>{enrollment.authCode}</td>
                </tr>
              </tbody>
            </table>
            <p className="mb-0">If you would like to make changes to your account, please contact the School at your earliest convenience by phone or email.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        #enrollmentTable tr td:first-of-type { padding-right: 24px }
      `}</style>
    </section>
  );
};
