'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

type AuthMode = 'login' | 'signup';

export function AuthPage({ mode }: { mode: AuthMode }) {
  const signingUp = mode === 'signup';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [healthConsent, setHealthConsent] = useState(false);
  const [aiConsent, setAiConsent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  function continueWithGoogle() {
    setError('Google sign-in will be available when Medico connects an authentication provider. This prototype does not create accounts.');
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (signingUp) {
      if (!name.trim() || !email.includes('@') || phone.replace(/\D/g, '').length < 10 || password.length < 10 || !healthConsent) {
        setError('Add your name, valid email and phone number, a password of at least 10 characters, and accept the health data terms to continue.');
        return;
      }
      sessionStorage.setItem('medico-demo-name', name.trim());
      sessionStorage.setItem('medico-demo-email', email.trim());
      sessionStorage.setItem('medico-demo-phone', phone.trim());
      sessionStorage.setItem('medico-demo-ai-consent', String(aiConsent));
      localStorage.setItem('medico-demo-ai-consent', String(aiConsent));
      localStorage.setItem('medico-demo-health-consent', 'true');
      window.location.href = '/verify-email';
      return;
    }
    if (!email.includes('@') || !password) {
      setError('Enter a valid email address and password to continue to the demo.');
      return;
    }
    if (!sessionStorage.getItem('medico-demo-name')) sessionStorage.setItem('medico-demo-name', 'Samira Khan');
    window.location.href = '/dashboard';
  }

  return (
    <main className="auth-page signin-page">
      <Link href="/" className="brand signin-brand"><span className="logo logo-small" aria-hidden="true">✚</span><span>medico</span></Link>
      <section className="signin-shell" aria-label={signingUp ? 'Create your Medico profile' : 'Sign in to Medico'}>
        <aside className="signin-story" aria-label="About your Medico space">
          <Link href="/" className="brand signin-story-brand"><span className="logo logo-small" aria-hidden="true">✚</span><span>medico</span></Link>
          <div className="signin-story-top"><span className="signin-spark" aria-hidden="true">✳</span><span>YOUR HEALTH, IN ONE PLACE</span></div>
          <div>
            <p className="signin-kicker">{signingUp ? 'A thoughtful place to begin' : 'A calmer way to keep track'}</p>
            <h1>{signingUp ? <>Make room for<br /><em>peace of mind.</em></> : <>Your health story,<br /><em>all together.</em></>}</h1>
            <p className="signin-story-copy">{signingUp ? 'Create a personal space for your records, lab history and the health details you choose to keep together.' : 'Keep records, lab history and the details that matter close at hand, so you can focus on the care ahead.'}</p>
          </div>
          <div className="signin-story-card"><span className="signin-card-icon" aria-hidden="true">▤</span><span><b>A space that’s yours</b><small>Organised around your choices</small></span><span className="signin-card-arrow" aria-hidden="true">↗</span></div>
          <div className="signin-story-foot"><span>✦ &nbsp; PRIVATE BY DESIGN</span><span>MADE FOR EVERYDAY CARE</span></div>
        </aside>

        <div className="signin-form-panel">
          <div className="signin-form-heading"><span className="signin-welcome">{signingUp ? 'YOUR PERSONAL HEALTH SPACE' : 'WELCOME BACK'}</span><h2>{signingUp ? 'Create your account' : 'Sign in'}</h2><p>{signingUp ? 'A few details to set up your Medico demo profile.' : 'Sign in to continue to your Medico demo space.'}</p></div>
          <button className="auth-google" type="button" onClick={continueWithGoogle}><GoogleMark />Continue with Google</button>
          <div className="auth-divider"><span />OR CONTINUE WITH EMAIL<span /></div>
          <form onSubmit={submit}>
            {signingUp && <label htmlFor="auth-name">Full name<input id="auth-name" autoComplete="name" value={name} onChange={event => setName(event.target.value)} placeholder="Your name" required /></label>}
            <label htmlFor="auth-email">Email address<input id="auth-email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="you@example.com" required /></label>
            {signingUp && <label htmlFor="auth-phone">Phone number<input id="auth-phone" autoComplete="tel" inputMode="tel" value={phone} onChange={event => setPhone(event.target.value)} type="tel" placeholder="+91 98765 43210" required /></label>}
            <div className="signin-password-label"><label htmlFor="auth-password">Password</label>{!signingUp && <Link href="/forgot-password">Forgot password?</Link>}</div>
            <div className="signin-password-field"><input id="auth-password" autoComplete={signingUp ? 'new-password' : 'current-password'} value={password} onChange={event => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} minLength={signingUp ? 10 : undefined} placeholder={signingUp ? 'At least 10 characters' : 'Enter your demo password'} required /><button type="button" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword}>{showPassword ? 'Hide' : 'Show'}</button></div>
            {signingUp ? <>
              <label className="auth-consent"><input checked={healthConsent} onChange={event => setHealthConsent(event.target.checked)} type="checkbox" /><span>I am authorised to store this health information and agree to the <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link>.</span></label>
              <label className="auth-consent"><input checked={aiConsent} onChange={event => setAiConsent(event.target.checked)} type="checkbox" /><span>I separately consent to AI use of selected health information. <b>Optional</b></span></label>
            </> : <div className="signin-demo-note"><span aria-hidden="true">ⓘ</span><span>Local demo only: use any email and password to preview the workspace. Your password is discarded; this demo session stays in this tab.</span></div>}
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="button" type="submit">{signingUp ? 'Create demo account' : 'Preview dashboard'} <span aria-hidden="true">↗</span></button>
          </form>
          <div className="auth-switch">{signingUp ? 'Already have an account? ' : 'Don’t have a profile? '}<Link href={signingUp ? '/login' : '/signup'}>{signingUp ? 'Sign in' : 'Create one'}</Link></div>
          <div className="signin-privacy"><span aria-hidden="true">⌑</span><span>{signingUp ? 'Demo only · no account or personal data is sent to a server.' : 'Use sample data only. Don’t enter real medical information.'}</span></div>
        </div>
      </section>
      <Link href="/" className="signin-back">← Back to Medico</Link>
    </main>
  );
}

function GoogleMark() {
  return <svg aria-hidden="true" viewBox="0 0 48 48" className="auth-google-mark"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" transform="translate(0 4)"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.4-4.55H24v9.02h12.93a11.05 11.05 0 0 1-4.8 7.24l7.73 6C44.37 38.08 46.98 31.93 46.98 24.55Z"/><path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.75-4.59l-7.98-6.2A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z" transform="translate(0 4)"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.75l-7.73-6c-2.14 1.44-4.87 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.2C6.51 42.62 14.62 48 24 48Z"/></svg>;
}
