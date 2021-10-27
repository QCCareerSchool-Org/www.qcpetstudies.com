import { NextPage } from 'next';
import React from 'react';
import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';

const TermsPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Privacy Policy"
        description="This is Terms Page"
        canonical="/about/terms"
      />

      <section id="firstSection" className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Privacy Policy</h3>
              <hr />
              <p className="h4"><strong>What information do we collect?</strong></p>
              <p className="mb-2">We collect information from you when you register on our site, place an order, subscribe to our newsletter or respond to a survey.</p>
              <p className="mb-2">When ordering or registering on our site, as appropriate, you may be asked to enter your: name, email address, mailing address, phone number, or credit card information. You may, however, visit our site anonymously.</p>
              <p className="h4 mb-2"><strong>What do we use your information for?</strong></p>
              <p className="mb-2">Any of the information we collect from you may be used in one of the following ways:</p>
              <ul>
                <li className="mb-2">To personalize your experience: Your information helps us to better respond to your individual needs.</li>
                <li className="mb-2">To improve our website: We continually strive to improve our website offerings based on the information and feedback we receive from you.</li>
                <li className="mb-2">To improve customer service: Your information helps us to more effectively respond to your customer service requests and support needs.</li>
                <li className="mb-2">To process transactions: Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
                <li className="mb-2">To administer a contest, promotion, survey or other site feature.</li>
                <li className="mb-4">To send periodic email: The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</li>
              </ul>
              <p className="mb-4"><strong>Note: If at any time you would like to unsubscribe from receiving future email, we include detailed unsubscribe instructions at the bottom of each message.</strong></p>
              <p className="h4 mb-2"><strong>How do we protect your information?</strong></p>
              <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
              <p>We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.</p>
              <p className="mb-4">After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.</p>
              <p className="h4 mb-2"><strong>Do we use cookies?</strong></p>
              <p>Yes. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information</p>
              <p className="mb-4">We use cookies to keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.</p>
              <p className="h4 mb-2"><strong>Do we disclose any information to outside parties?</strong></p>
              <p className="mb-4">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
              <p className="h4 mb-2"><strong>Children&apos;s Online Privacy Protection Act Compliance</strong></p>
              <p className="mb-4">We are in compliance with the requirements of COPPA (Children&apos;s Online Privacy Protection Act). We do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</p>
              <p className="h4 mb-2"><strong>Your Consent</strong></p>
              <p>By using our site, you consent to our web site privacy policy.</p>
              <p className="h4 mb-2"><strong>Changes to our Privacy Policy</strong></p>
              <p className="mb-2">If we decide to change our privacy policy, we will update the Privacy Policy modification date below.</p>
              <p className="mb-4">This policy was last modified on March 10, 2017.</p>
              <p className="h4 mb-2"><strong>Contacting Us</strong></p>
              <p className="mb-4">If there are any questions regarding this privacy policy you may contact us using the information below.</p>
              <p className="mb-2">QC Career School <br />38 McArthur Ave <br />Ottawa ON  K1L 6R2 <br />Canada</p>
              <p className="mb-2">Email: info@qccareerschool.com</p>
              <p className="mb-4">Phone: 1-613-749-8248</p>
              <p><i>This policy is powered by Free Privacy Policy and Rhino Support helpdesk software.</i></p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default TermsPage;
