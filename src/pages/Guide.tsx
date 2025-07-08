import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

export default function Guide() {
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
        <title>User Guide – Offline AI Mentor Chat</title>
        <meta name="description" content="User Guide for the Offline AI Mentor Chat app. Learn how to get started, ask questions, and use all features offline." />
      </Helmet>
      <h1>User Guide</h1>
      <section>
        <h2>Overview</h2>
        <p>
          Offline AI Mentor Chat is your personal, offline learning assistant. It features multiple AI mentors, each specializing in a different tech field: frontend, backend, cybersecurity, Python, mobile, and cloud/DevOps. You can chat with any mentor, ask questions, and get instant, documentation-based answers—even without an internet connection.
        </p>
      </section>
      <section>
        <h2>Getting Started</h2>
        <ol>
          <li>Open the app. You'll see a sidebar with a list of mentors.</li>
          <li>Click a mentor to start a chat. The chat area will update to show your conversation with that mentor.</li>
          <li>Type your question in the chat box and press Enter or click Send.</li>
        </ol>
      </section>
      <section>
        <h2>Asking Good Questions</h2>
        <ul>
          <li>Be specific: "What is HTML?" or "How do I use React hooks?"</li>
          <li>Ask about concepts, best practices, code examples, or career advice.</li>
          <li>If you get a fallback answer, try rephrasing or using keywords from the mentor's knowledge base.</li>
        </ul>
      </section>
      <section>
        <h2>Switching Mentors</h2>
        <p>
          You can switch mentors at any time by clicking another mentor in the sidebar. Each mentor has a unique knowledge base and personality. For example, ask Python questions to Python Sensei AI, or cloud questions to CloudOps AI.
        </p>
      </section>
      <section>
        <h2>Understanding Mentor Specialties</h2>
        <ul>
          <li><b>Frontend Master AI</b>: HTML, CSS, JavaScript, React, UI/UX</li>
          <li><b>Backend Architect AI</b>: Node.js, APIs, databases, server-side logic</li>
          <li><b>CyberGuard AI</b>: Security, vulnerabilities, best practices</li>
          <li><b>Python Sensei AI</b>: Python, data science, scripting, frameworks</li>
          <li><b>Mobile Dev AI</b>: iOS, Android, cross-platform, mobile UI/UX</li>
          <li><b>CloudOps AI</b>: Cloud platforms, DevOps, automation, CI/CD</li>
        </ul>
      </section>
      <section>
        <h2>Using the Sidebar</h2>
        <p>
          The sidebar lets you:
          <ul>
            <li>Switch between mentors</li>
            <li>See mentor info and specialties (click the Info button)</li>
            <li>Access your chat history with each mentor</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>Accessibility</h2>
        <ul>
          <li>All mentor avatars and images have alt text.</li>
          <li>Keyboard navigation is supported throughout the app.</li>
          <li>High-contrast colors and readable fonts are used for clarity.</li>
        </ul>
      </section>
      <section>
        <h2>Troubleshooting</h2>
        <ul>
          <li>If you get a fallback answer, try rephrasing your question or check the mentor's Info dialog for available topics.</li>
          <li>If the app is blank or unresponsive, refresh or restart it.</li>
          <li>If you see errors, make sure your browser supports modern JavaScript and offline storage.</li>
        </ul>
      </section>
      <section>
        <h2>Feedback & Support</h2>
        <p>
          We welcome your feedback! For help, suggestions, or bug reports, contact <a href="mailto:tondev@protonmail.com">tondev@protonmail.com</a>.
        </p>
      </section>
    </main>
  );
} 