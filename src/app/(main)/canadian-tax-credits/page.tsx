import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { getServerData } from '@/lib/getServerData';

export const metadata: Metadata = {
  title: 'Canadian Tax Credits',
  description: 'Canadian students can use tax credits to save over 50% of their course fees',
  alternates: { canonical: '/canadian-tax-credits' },
};

const CanadianTaxCreditsPage: PageComponent = async props => {
  const { date } = await getServerData(props.searchParams);
  const year = new Date(date).getFullYear();

  return (
    <>
      <section>
        <div className="container">
          <h1>Canadian Eh?</h1>
          <p className="lead">QC is a certified educational institution with Employment and Social Development Canada. At the end of the year, we'll be sending you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund.</p>
          <p>You'll be able to claim:</p>
          <ul>
            <li>The Canada Training Credit and</li>
            <li>The Tuition Tax Credit</li>
          </ul>
          <h3>Canada Training Credit</h3>
          <p>Most QC students can benefit from the Canada Training Credit. Starting in 2020, the federal government puts $250 into your training account each year you filed a tax return. You can draw on the account to get a tax refund. If you qualify, you can get as much as 50% of your course fees back.</p>
          <p>See details <a href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-training-credit.html" target="_blank" rel="noreferrer">here</a>.</p>
          <h3>Tuition Tax Credit</h3>
          <p>Any amount of your tuition that you don't claim under the Canada Training Credit can be claimed under the Tuition Tax Credit. You can get back 15% of the amount claimed from the federal government. Your province may also provide a tax credit.</p>
          <p>Learn more <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/provincial-territorial-tax-credits-individuals.html" target="_blank" rel="noreferrer">here</a>.</p>
          <h3>Getting Your T2202 Receipt</h3>
          <p>At tax time you'll be able to access your T2202 receipt in the My Account section of your online student center. We also send a copy to the CRA.</p>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <h2>Sample Calculation</h2>
          <p>Tania decides to enroll in QC's Dog Grooming course for $2398.</p>
          <h3>Canada Training Credit</h3>
          <p>She can use the Canada Training Credit (CTC) to claim a refund of up to 50% of her eligible tuition fees. Half of her eligible tuition fees is $1199. Her Canada Training Credit Limit (CTCL) for the {year} tax year is $1500, which is greater than $1199, so she can claim the full $1199.</p>
          <h3>Tuition Tax Credit</h3>
          <p>Next, Tania would like to claim the federal Tuition Tax Credit for the remaining $1199 balance. The federal tax rate of 15% is applied, giving a refund of $179.85.</p>
          <h3>Total Savings</h3>
          <p>Tania will get a refund of $1378.85 at tax time, making the effective cost of her course only $1019.15.</p>
          <div className="mb-3 py-3 px-4 bg-white d-inline-block">
            <table>
              <tbody>
                <tr><td className="text-end pe-2">$2398.00</td><th scope="row">Cost of Course</th></tr>
                <tr><td className="text-end pe-2">&minus; $1199.00</td><th scope="row">CTC</th></tr>
                <tr><td className="text-end pe-2">&minus; $179.85</td><th scope="row">Tuition Tax Credit</th></tr>
                <tr><td colSpan={2}><hr className="my-1" /></td></tr>
                <tr><td className="text-end pe-2">$1019.15</td><th scope="row">Effective Cost ✔</th></tr>
              </tbody>
            </table>
          </div>
          <p>Your personal tax situation may be different. Please reach out to your personal accountant for further guidance.</p>
        </div>
      </section>
    </>
  );
};

export default CanadianTaxCreditsPage;
