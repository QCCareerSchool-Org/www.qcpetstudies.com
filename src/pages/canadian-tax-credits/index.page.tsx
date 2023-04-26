import { DefaultLayout } from '../../components/layouts/DefaultLayout';
import { NextPageWithLayout } from '../_app.page';

const CanadianTaxCreditsPage: NextPageWithLayout = () => (
  <>
    <section id="top">
      <div className="container">
        <h1>Canadian Eh?</h1>
        <p className="lead">QC is a certified educational institution with Employment and Social Development Canada. At the end of the year, we'll be sending you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund.</p>
        <p>You'll be able to claim:</p>
        <ul>
          <li>The Canada Training Credit and</li>
          <li>The Tuition Tax Credit</li>
        </ul>
        <h3>Canada Training Credit</h3>
        <p>Most QC students can benefit from the Canada Training Credit. Starting in 2020, the federal government puts $250 into your training account each year you filed a tax return. You can draw on the account to get a tax refund. Check out the rules here. If you qualify, you can get as much as 50% of your course fees back.</p>
        <p>See details <a className="link-primary" href="https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-training-credit.html" target="_blank" rel="noreferrer">here</a>.</p>
        <h3>Tuition Tax Credit</h3>
        <p>Any amount of your tuition that you don't claim under the Canada Training Credit can be claimed under the Tuition Tax Credit. You can get back 15% of the amount claimed from the federal government. Your province may also provide a tax credit.</p>
        <p>Learn more <a className="link-primary" href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/provincial-territorial-tax-credits-individuals.html" target="_blank" rel="noreferrer">here</a>.</p>
        <h3>Getting Your T2202 Receipt</h3>
        <p>At tax time you'll be able to access your T2202 receipt in the My Account section of your online student center. We also send a copy to the CRA.</p>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <h2>Sample Calculation</h2>
        <p className="lead">Tania's Course Enrollment Details</p>
        <p>Tania decides to enroll in QC's Dog Training course. She saves $400 by paying in full.</p>
        <p><strong>Course Cost:</strong> $2498<br /><strong>Pay-in-Full Discount:</strong> $400</p>
        <p>$2498 &minus; $400 discount = $2098</p>
        <h3>Canada Training Credit</h3>
        <p>She wants to use the Canada Training Credit. Her Canada Training Credit Limit (CTCL) is valued at $1000 for the tax year. She can claim the lesser of her CTCL or 50% of eligible tuition fees.</p>
        <p>$2098 &times; 50% = $1049</p>
        <p>Her CTCL valued at $1000 is less than 50% of her eligible tuition fees.</p>
        <p>Tania receives a refund of $1000 at tax time.</p>
        <h3>Tution Tax Credit</h3>
        <p>Next, Tania would like to claim the Tuition Tax Credit on the unclaimed $1098 balance. The lowest federal tax rate of 15% is applied to this amount:</p>
        <p>$1098 &times; 15% = $164.70</p>
        <p>Tania is able to reduce the amount of tax that she owes at tax time by $164.70.</p>
        <h3>Total Savings</h3>
        <p>In this case Tania was able to use tax credits to reduce the cost of her tuition by $1164.70. With her full payment discount, Tania was able to save a total of $1564.70.</p>
        <p>Rules for the way the credits work reflect your personal tax situation. Please reach out to your personal accountant for further guidance.</p>
      </div>
    </section>
  </>
);

CanadianTaxCreditsPage.getLayout = page => <DefaultLayout noHero={true}>{page}</DefaultLayout>;

export default CanadianTaxCreditsPage;
