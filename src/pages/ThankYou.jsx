import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ThankYou.css';

const REDIRECT_SECONDS = 10;

export default function ThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  // Auto-redirect after countdown
  useEffect(() => {
    if (countdown <= 0) {
      navigate('/');
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const steps = [
    {
      icon: '⚡',
      title: 'Response within 24 hours',
      desc: 'A certified consultant will reach out to acknowledge your brief.',
    },
    {
      icon: '📞',
      title: 'Discovery call scheduled',
      desc: 'We refine objectives, scope, timelines, and success metrics together.',
    },
    {
      icon: '📋',
      title: 'Tailored proposal delivered',
      desc: 'Phased delivery options with transparent, outcome-linked pricing.',
    },
    {
      icon: '🚀',
      title: 'Project kick-off',
      desc: 'Dedicated account manager assigned with weekly execution updates.',
    },
  ];

  return (
    <div className="thankyou-page">
      {/* Animated background orbs */}
      <div className="ty-bg-orb ty-bg-orb--1" />
      <div className="ty-bg-orb ty-bg-orb--2" />
      <div className="ty-bg-orb ty-bg-orb--3" />

      {/* Floating particles */}
      <div className="ty-particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="ty-particle" />
        ))}
      </div>

      {/* Main card */}
      <div className="thankyou-card">
        {/* Animated check circle */}
        <div className="ty-check-wrapper">
          <svg className="ty-check-icon" viewBox="0 0 52 52">
            <polyline points="14,27 22,35 38,17" />
          </svg>
        </div>

        <p className="ty-label">Form Submitted</p>

        <h1 className="ty-heading">
          Thank You — <span>We've Got It!</span>
        </h1>

        <p className="ty-subtext">
          Your message has been received. Our team is already on it and will
          get back to you with a clear, actionable next step.
        </p>

        {/* What happens next */}
        <ul className="ty-steps">
          {steps.map((step, i) => (
            <li className="ty-step" key={i}>
              <div className="ty-step-icon">{step.icon}</div>
              <div className="ty-step-text">
                <strong>{step.title}</strong>
                <span>{step.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="ty-divider">
          <span className="ty-divider-text">WHILE YOU WAIT</span>
        </div>

        {/* CTA buttons */}
        <div className="ty-actions">
          <Link to="/" className="ty-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            Back to Home
          </Link>
          <Link to="/case-studies" className="ty-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            Explore Case Studies
          </Link>
        </div>

        {/* Auto-redirect timer */}
        <p className="ty-timer">
          <span className="ty-timer-dot" />
          Redirecting to home in {countdown}s…
        </p>
      </div>
    </div>
  );
}
