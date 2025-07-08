import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

export default function Terms() {
  const navigate = useNavigate();
  return (
    <main style={{ maxWidth: 700, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 12, color: '#2563eb', marginBottom: 16 }}>
        <button onClick={() => navigate(-1)} title="Back" style={{ border: 'none', background: 'none', color: '#2563eb', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0, fontSize: 13 }}>
          <span style={{ marginRight: 4 }}>&#8592;</span>Back
        </button>
        <Link to="/terms" style={{ margin: '0 4px', textDecoration: 'underline', color: '#2563eb' }}>Terms of Service</Link>
        <span style={{ color: '#60a5fa' }}>|</span>
        <Link to="/privacy" style={{ margin: '0 4px', textDecoration: 'underline', color: '#2563eb' }}>Privacy Policy</Link>
        <span style={{ color: '#60a5fa' }}>|</span>
        <Link to="/guide" style={{ margin: '0 4px', textDecoration: 'underline', color: '#2563eb' }}>User Guide</Link>
        <span style={{ marginLeft: 8, color: '#60a5fa' }}>&copy; {new Date().getFullYear()} Tonde Kawere (Tondev)</span>
      </div>
      <Helmet>
        <title>Terms of Service – Offline AI Mentor Chat</title>
        <meta name="description" content="Read the Terms of Service for the Offline AI Mentor Chat app. Learn about user responsibilities, AI limitations, and more." />
      </Helmet>
      <h1>Terms of Service</h1>
      <section>
        <h2>Introduction</h2>
        <p>Welcome to the Offline AI Mentor Chat app. By using this app, you agree to these Terms of Service. Please read them carefully.</p>
      </section>
      <section>
        <h2>User Responsibilities</h2>
        <ul>
          <li>Use the app for educational and personal development purposes only.</li>
          <li>Do not use the app for illegal, harmful, or abusive activities.</li>
          <li>Respect the privacy and rights of others.</li>
        </ul>
      </section>
      <section>
        <h2>AI Limitations</h2>
        <ul>
          <li>The AI mentors provide information and guidance, but are not a substitute for professional advice.</li>
          <li>Answers may not always be accurate or up-to-date. Always verify critical information independently.</li>
        </ul>
      </section>
      <section>
        <h2>Changes to Terms</h2>
        <p>We may update these Terms of Service from time to time. Continued use of the app means you accept the new terms.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>For questions about these terms, contact <a href="mailto:tondev@protonmail.com">tondev@protonmail.com</a>.</p>
      </section>
    </main>
  );
} 