'use client';
import Link from 'next/link';
import {useState} from 'react';

export default function Login(){
  const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState('');
  function enter(e:React.FormEvent){e.preventDefault();if(!email.includes('@')||password.length<1){setError('Enter a valid email address and a password to continue to the demo.');return}if(!sessionStorage.getItem('medico-demo-name'))sessionStorage.setItem('medico-demo-name','Samira Khan');window.location.href='/dashboard'}
  return <main className="auth-page signin-page">
    <Link href="/" className="brand signin-brand"><span className="logo logo-small" aria-hidden="true">✚</span><span>medico</span></Link>
    <section className="signin-shell" aria-label="Sign in to Medico demo">
      <aside className="signin-story" aria-label="About your Medico space">
        <div className="signin-story-top"><span className="signin-spark" aria-hidden="true">✳</span><span>YOUR HEALTH, IN ONE PLACE</span></div>
        <div><p className="signin-kicker">A calmer way to keep track</p><h1>Your health story,<br/><em>all together.</em></h1><p className="signin-story-copy">Keep records, lab history and the details that matter close at hand, so you can focus on the care ahead.</p></div>
        <div className="signin-story-card"><span className="signin-card-icon" aria-hidden="true">▤</span><span><b>A space that’s yours</b><small>Organised around your choices</small></span><span className="signin-card-arrow" aria-hidden="true">↗</span></div>
        <div className="signin-story-foot"><span>✦ &nbsp; PRIVATE BY DESIGN</span><span>MADE FOR EVERYDAY CARE</span></div>
      </aside>
      <div className="signin-form-panel">
        <div className="signin-form-heading"><span className="signin-welcome">WELCOME BACK</span><h2>Sign in</h2><p>Pick up where you left off in your demo space.</p></div>
        <form onSubmit={enter}>
          <label htmlFor="signin-email">Email address</label>
          <input id="signin-email" autoComplete="email" value={email} onChange={e=>{setEmail(e.target.value);setError('')}} type="email" placeholder="you@example.com" required />
          <div className="signin-password-label"><label htmlFor="signin-password">Password</label><Link href="/forgot-password">Forgot password?</Link></div>
          <input id="signin-password" autoComplete="current-password" value={password} onChange={e=>{setPassword(e.target.value);setError('')}} type="password" placeholder="Enter your demo password" required />
          <div className="signin-demo-note"><span aria-hidden="true">ⓘ</span><span>Demo access: use any email and password. No credentials are saved.</span></div>
          {error&&<p className="form-error" role="alert">{error}</p>}
          <button className="button" type="submit">Enter demo workspace <span aria-hidden="true">↗</span></button>
        </form>
        <div className="auth-switch">New to the demo? <Link href="/signup">Create a profile</Link></div>
        <div className="signin-privacy"><span aria-hidden="true">⌑</span><span>Use sample data only. Don’t enter real medical information.</span></div>
      </div>
    </section>
    <Link href="/" className="signin-back">← Back to Medico</Link>
  </main>
}
