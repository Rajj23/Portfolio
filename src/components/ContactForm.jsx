import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-form section">
      <div className="container">
        <div className="section-title">
          <span className="section-title__number">06.</span>
          <h2 className="section-title__text">Let's Connect</h2>
          <div className="section-title__line" />
        </div>

        <div className="contact-form__wrapper">
          <div className="contact-form__left">
            <p className="contact-form__desc">
              Backend engineer focused on distributed systems and clean API design. Looking for a team where I can contribute and grow fast.
            </p>
            <div className="contact-form__info">
              <div className="contact-form__info-item">
                <span className="contact-form__info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span>Responds within 24 hours</span>
              </div>
              <div className="contact-form__info-item">
                <span className="contact-form__info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span>Available for internships &amp; full-time</span>
              </div>
              <div className="contact-form__info-item">
                <span className="contact-form__info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>Based in India · Open to remote</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form__form glass-card" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label className="contact-form__label">Name</label>
                <input
                  className="contact-form__input"
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-form__field">
                <label className="contact-form__label">Email</label>
                <input
                  className="contact-form__input"
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label">Message</label>
              <textarea
                className="contact-form__input contact-form__textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
              />
            </div>

            <button
              className="contact-form__btn"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <><span className="contact-form__spinner" /> Sending...</>
              ) : status === 'success' ? (
                <><CheckIcon /> Message sent!</>
              ) : (
                <><SendIcon /> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <p className="contact-form__feedback contact-form__feedback--success">
                Got it! I'll get back to you within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__feedback contact-form__feedback--error">
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
