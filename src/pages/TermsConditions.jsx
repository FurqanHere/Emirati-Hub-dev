import { Link } from 'react-router-dom';

export default function TermsConditions() {
  return (
    <section className="policy-hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="content-card" data-aos="fade-up">
              <h1 className="section-title">Terms & Conditions</h1>
              <p className="policy-last-updated">Last Updated: <strong>18/12/2024</strong></p>
              
              <div className="policy-content">
                <h2 className="h4">1. Introduction</h2>
                <p>Welcome to <strong>Emirati Hub</strong> (“we,” “our,” or “us”). By accessing or using our mobile application and website (collectively, the “App”), you agree to comply with and be bound by these Terms and Conditions (“Terms”). If you do not agree to these Terms, please do not use our services.</p>
                <p>Emirati Hub is a digital career and recruitment platform designed exclusively for <strong>UAE Nationals</strong>, connecting job seekers with employers across government, semi-government, and private sectors within the United Arab Emirates.</p>
                
                <h2 className="h4">2. Eligibility</h2>
                <p>To use Emirati Hub, you must:</p>
                <ul>
                  <li>Be a <strong>UAE National</strong></li>
                  <li>Be at least <strong>18 years old</strong> or the legal working age in the UAE</li>
                  <li>Provide accurate and complete registration information</li>
                </ul>
                <p>We reserve the right to suspend or terminate accounts that do not meet these eligibility requirements.</p>
                
                <h2 className="h4">3. User Accounts</h2>
                
                <h3 className="h5">3.1 Registration</h3>
                <p>You must create an account to access certain features of the App. You are responsible for maintaining the confidentiality of your login credentials.</p>
                
                <h3 className="h5">3.2 Account Responsibility</h3>
                <p>You agree to:</p>
                <ul>
                  <li>Provide truthful and up-to-date information</li>
                  <li>Not impersonate another individual or entity</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                
                <h2 className="h4">4. User Content</h2>
                
                <h3 className="h5">4.1 Content You Provide</h3>
                <p>Users may submit content including profiles, resumes, job applications, messages, and other information (“User Content”).</p>
                <p>By submitting User Content, you grant Emirati Hub a <strong>non-exclusive, royalty-free, worldwide license</strong> to use, store, display, reproduce, and distribute such content within the App solely for recruitment and platform-related purposes.</p>
                
                <h3 className="h5">4.2 Content Standards</h3>
                <p>You agree not to upload or share content that:</p>
                <ul>
                  <li>Is false, misleading, or fraudulent</li>
                  <li>Violates any law or regulation</li>
                  <li>Infringes intellectual property or privacy rights</li>
                  <li>Contains offensive, abusive, or inappropriate material</li>
                </ul>
                <p>We reserve the right to remove any content that violates these Terms.</p>
                
                <h2 className="h4">5. Employer Content and Job Listings</h2>
                <p>Employers are responsible for the accuracy, legality, and authenticity of job listings and related content. Emirati Hub does not guarantee employment outcomes and is not responsible for hiring decisions made by employers.</p>
                
                <h2 className="h4">6. Communication and Messaging</h2>
                <p>The App allows users to communicate with employers through in-app messaging. You agree to use messaging features professionally and lawfully.</p>
                <p>Harassment, spam, or misuse of messaging tools may result in account suspension or termination.</p>
                
                <h2 className="h4">7. Prohibited Activities</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Use the App for unlawful purposes</li>
                  <li>Attempt to gain unauthorized access to systems or data</li>
                  <li>Scrape, copy, or misuse App content or data</li>
                  <li>Introduce malware or harmful code</li>
                </ul>
                
                <h2 className="h4">8. Intellectual Property</h2>
                <p>All App content, branding, trademarks, and software are owned by or licensed to Emirati Hub. You may not copy, modify, distribute, or reverse-engineer any part of the App without written permission.</p>
                
                <h2 className="h4">9. Privacy</h2>
                <p>Your use of the App is also governed by our <strong>Privacy Policy</strong>, which explains how we collect and use your personal data.</p>
                
                <h2 className="h4">10. Termination</h2>
                <p>We may suspend or terminate your access to the App at any time if you violate these Terms or applicable laws. You may also delete your account at any time.</p>
                
                <h2 className="h4">11. Disclaimer of Warranties</h2>
                <p>The App is provided on an “as is” and “as available” basis. Emirati Hub makes no warranties regarding job availability, employment outcomes, or uninterrupted access.</p>
                
                <h2 className="h4">12. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Emirati Hub shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>
                
                <h2 className="h4">13. Governing Law</h2>
                <p>These Terms are governed by and construed in accordance with the laws of the <strong>United Arab Emirates</strong>.</p>
                
                <h2 className="h4">14. Changes to These Terms</h2>
                <p>We may update these Terms from time to time. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.</p>
                
                <h2 className="h4">15. Contact Us</h2>
                <p>If you have questions about these Terms, please contact us at:</p>
                <p>
                  <strong>Emirati Hub</strong><br />
                  📧 Email: <a href="mailto:info@emirati-hub.ae">info@emirati-hub.ae</a><br />
                  📍 United Arab Emirates
                </p>
                <p>By using Emirati Hub, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>
                
                <div className="mt-5 d-flex justify-content-center">
                  <Link to="/" className="btn btn-outline-primary rounded-pill px-5">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
