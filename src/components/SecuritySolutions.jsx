import React, { useEffect, useRef } from 'react';
import './SecuritySolutions.css';

const SecuritySolutions = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all cards
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    // Observe stats
    statsRef.current.forEach(stat => {
      if (stat) observer.observe(stat);
    });

    return () => observer.disconnect();
  }, []);

  const securityCategories = [
    {
      title: 'Network Security',
      icon: '🔥',
      solutions: [
        {
          icon: '🔥',
          title: 'Next-Gen Firewall (XGS Series)',
          description: 'High-performance threat protection with AI-powered detection'
        },
        {
          icon: '👥',
          title: 'Zero Trust Network Access (ZTNA)',
          description: 'Secure remote access with identity-based verification'
        }
      ]
    },
    {
      title: 'Endpoint Protection',
      icon: '💻',
      solutions: [
        {
          icon: '💻',
          title: 'Endpoint Protection (Intercept X)',
          description: 'Advanced ransomware protection with deep learning AI'
        },
        {
          icon: '📱',
          title: 'Mobile Device Management (MDM)',
          description: 'Complete device lifecycle and security management'
        }
      ]
    },
    {
      title: 'Threat Detection',
      icon: '🔍',
      solutions: [
        {
          icon: '🔍',
          title: 'Managed Detection & Response (MDR)',
          description: '24/7 threat hunting and incident response services'
        },
        {
          icon: '🛡️',
          title: 'Extended Detection & Response (XDR)',
          description: 'Unified visibility across endpoints, networks, and cloud'
        }
      ]
    },
    {
      title: 'Cloud & Email Security',
      icon: '📧',
      solutions: [
        {
          icon: '📧',
          title: 'Email Security',
          description: 'Advanced phishing and malware protection for email'
        },
        {
          icon: '☁️',
          title: 'Cloud Security & Workload Protection',
          description: 'Comprehensive security for cloud infrastructure'
        }
      ]
    }
  ];

  const stats = [
    {
      icon: '✓',
      value: '99.9%',
      label: 'UPTIME GUARANTEE'
    },
    {
      icon: '🕐',
      value: '24/7',
      label: 'SECURITY MONITORING'
    },
    {
      icon: '⚡',
      value: '<1min',
      label: 'THREAT RESPONSE'
    },
    {
      icon: '🏆',
      value: '2025',
      label: 'PARTNER OF YEAR'
    }
  ];

  return (
    <section className="security-solutions-section" ref={sectionRef}>
      <div className="security-container">
        {/* Award Badge */}
        <div className="award-badge" data-aos="fade-down">
          🏆 Award-Winning Security Solutions
        </div>

        {/* Main Heading */}
        <div className="security-heading" data-aos="fade-up">
          <h1>
            From 30,000-user enterprise networks to multi-branch hospitals and retail chains — we deliver
            security that <span className="highlight-text">scales, performs, and protects.</span>
          </h1>
          <p className="subtitle">
            Comprehensive cybersecurity ecosystem powered by AI-driven threat intelligence
          </p>
        </div>

        {/* Security Categories Grid */}
        <div className="security-grid">
          {securityCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="security-category"
              ref={el => cardsRef.current[categoryIndex] = el}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="category-header">
                <h3>{category.title}</h3>
                <div className="category-line"></div>
              </div>
              
              <div className="solutions-list">
                {category.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="solution-item">
                    <div className="solution-icon">{solution.icon}</div>
                    <div className="solution-content">
                      <h4>{solution.title}</h4>
                      <p>{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="security-stats">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
              ref={el => statsRef.current[index] = el}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;
