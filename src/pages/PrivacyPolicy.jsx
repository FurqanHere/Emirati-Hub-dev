import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <section className="policy-hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="content-card" data-aos="fade-up">
              <h1 className="section-title">Privacy Policy</h1>
              <p className="policy-last-updated">Last Updated: <strong>18/12/2024</strong></p>
              
              <div className="policy-content">
                <h2 className="h4">1. Introduction</h2>
                <p>Emirati Hub (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the “App”).</p>
                <p>By using the App, you agree to the terms of this Privacy Policy.</p>
                
                <h2 className="h4">2. Information We Collect</h2>
                <p>We collect various types of information to provide and improve our services.</p>
                
                <h3 className="h5">2.1 Personal Information</h3>
                <p>When you register or use the App, we may collect:</p>
                <ul>
                  <li><strong>Identity Data:</strong> Full name, Emirates ID details, date of birth, gender, and nationality.</li>
                  <li><strong>Contact Data:</strong> Email address, phone number, and physical address.</li>
                  <li><strong>Professional Data:</strong> Resume/CV, education history, work experience, skills, certifications, and job preferences.</li>
                </ul>
                
                <h3 className="h5">2.2 Usage Data</h3>
                <p>We automatically collect information about how you access and use the App, including:</p>
                <ul>
                  <li>Device information (model, OS version, unique device identifiers)</li>
                  <li>IP address and location data (if permitted)</li>
                  <li>App usage logs, clickstream data, and interaction history</li>
                </ul>
                
                <h2 className="h4">3. How We Use Your Information</h2>
                <p>We use your data for the following purposes:</p>
                <ul>
                  <li><strong>To Provide Services:</strong> Creating and managing accounts, processing job applications, and connecting job seekers with employers.</li>
                  <li><strong>To Improve the App:</strong> Analyzing usage trends to enhance user experience and functionality.</li>
                  <li><strong>Communication:</strong> Sending updates, job alerts, security notifications, and support messages.</li>
                  <li><strong>Security & Compliance:</strong> Verifying identity (UAE National status), preventing fraud, and complying with legal obligations.</li>
                </ul>
                
                <h2 className="h4">4. Sharing Your Information</h2>
                <p>We do not sell your personal data. However, we may share your information with:</p>
                <ul>
                  <li><strong>Employers:</strong> When you apply for a job or make your profile visible to recruiters.</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist with app hosting, analytics, and customer support (under strict confidentiality agreements).</li>
                  <li><strong>Legal Authorities:</strong> If required by law, regulation, or legal process within the UAE.</li>
                </ul>
                
                <h2 className="h4">5. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
                
                <h2 className="h4">6. Data Retention</h2>
                <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. You may request account deletion at any time.</p>
                
                <h2 className="h4">7. Your Rights</h2>
                <p>Depending on applicable laws, you may have the right to:</p>
                <ul>
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p>To exercise these rights, please contact us at <a href="mailto:info@emirati-hub.ae">info@emirati-hub.ae</a>.</p>
                
                <h2 className="h4">8. Third-Party Links</h2>
                <p>The App may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.</p>
                
                <h2 className="h4">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Revised” date. Continued use of the App constitutes acceptance of the changes.</p>
                
                <h2 className="h4">10. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <p>
                  <strong>Emirati Hub</strong><br />
                  📧 Email: <a href="mailto:info@emirati-hub.ae">info@emirati-hub.ae</a><br />
                  📍 United Arab Emirates
                </p>
                
                <div className="mt-5 d-flex align-items-center justify-content-center gap-3 flex-wrap">
                  <Link to="/terms-conditions" className="btn btn-outline-primary btn-lg rounded-pill px-4" style={{ fontSize: '16px' }}>View Terms</Link>
                  <Link to="/" className="btn btn-primary btn-lg rounded-pill px-4" style={{ backgroundColor: '#073F9D', borderColor: '#073F9D', fontSize: '16px' }}>Go Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
