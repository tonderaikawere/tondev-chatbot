import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

export default function Privacy() {
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
        <title>Privacy Policy – Offline AI Mentor Chat</title>
        <meta name="description" content="Read the Privacy Policy for the Offline AI Mentor Chat app. Learn about data collection, usage, and your privacy rights." />
      </Helmet>
      <h1>Privacy Policy</h1>
      <section>
        <h2>Data Collection</h2>
        <p>This app does not collect or transmit any personal data. All conversations and usage remain on your device.</p>
      </section>
      <section>
        <h2>Data Usage</h2>
        <p>Any information you enter is used solely to provide AI mentor responses and is not shared or stored externally.</p>
      </section>
      <section>
        <h2>Offline Use</h2>
        <p>The app is designed to work fully offline. No data is sent to any server or third party.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>For privacy questions, contact <a href="mailto:tondev@protonmail.com">tondev@protonmail.com</a>.</p>
      </section>
    </main>
  );
} 