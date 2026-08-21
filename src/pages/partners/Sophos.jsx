import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';
import UseCaseSlider from '../../components/UseCaseSlider';
import { useAwardsSlider } from '../../hooks/useAwardsSlider';
import './Sophos.css';
import './Aruba-Products-POC.css';


// ── Scroll-reveal hook ──────────────────────────────────────────────────────
// Adds .sph-visible to any element with .sph-reveal once it enters the viewport.
function useSophosScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sph-reveal');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('sph-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '200px 0px 200px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}



export default function Sophos({ showSophosAward }) {
  const canvasRef = useRef(null);
  useSophosScrollReveal();
  useAwardsSlider();
  const seoData = getSEOData('partnerSophos');

  // ── POC Carousel ──────────────────────────────────────────────────────────
  useEffect(() => {
    const track = document.getElementById('sophosCarouselTrack');
    const dotsContainer = document.getElementById('sophosCarouselDots');
    const prevBtn = document.getElementById('sophosCarouselPrev');
    const nextBtn = document.getElementById('sophosCarouselNext');
    if (!track) return;

    const total = 10;
    let current = 0;
    let timer;

    const goTo = (idx) => {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.sph-dot').forEach((d, i) => {
          d.classList.toggle('active', i === current);
        });
      }
    };

    const startAuto = () => {
      timer = setInterval(() => goTo(current + 1), 3500);
    };
    const stopAuto = () => clearInterval(timer);

    startAuto();

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.sph-dot').forEach((dot) => {
        dot.addEventListener('click', () => {
          stopAuto();
          goTo(parseInt(dot.dataset.slide, 10));
          startAuto();
        });
      });
    }

    return () => stopAuto();
  }, []);

  // Use case data for the slider - matching the Aruba design pattern across 7 key sectors
  const useCases = [
    {
      id: 'defence',
      category: 'DEFENCE & GOVERNMENT',
      icon: 'fas fa-shield-alt',
      title: 'Defence & Government Sector (High-Security Perimeter & Threat Protection)',
      description: 'Problem: Defence and government entities require isolated, tamper-proof network perimeters with real-time zero-day threat prevention and strict compliance.',
      image: '/assets/images/use-cases/usecase1.png',
      linkTo: '/case-studies#sophos-defence'
    },
    {
      id: 'education',
      category: 'EDUCATION',
      icon: 'fas fa-graduation-cap',
      title: 'Education Sector (Campus-Wide Endpoint & Web Security)',
      description: 'Problem: Educational institutions require comprehensive web filtering, endpoint protection, and safe internet access for thousands of students and faculty devices.',
      image: '/assets/images/use-cases/usecase2.png',
      linkTo: '/case-studies#sophos-education'
    },
    {
      id: 'retail',
      category: 'RETAIL',
      icon: 'fas fa-shopping-cart',
      title: 'Shopping / Retail Sector (Multi-Store POS & Branch Security)',
      description: 'Problem: Retail chains with hundreds of stores need centralized firewall management, PCI-DSS compliance, and protection for POS devices against malware.',
      image: '/assets/images/use-cases/usecase3.png',
      linkTo: '/case-studies#sophos-retail'
    },
    {
      id: 'banking',
      category: 'BANKING',
      icon: 'fas fa-university',
      title: 'Banking Sector (Secure Financial Data & MDR Threat Hunting)',
      description: 'Problem: Financial institutions require 24/7 Managed Detection and Response (MDR), encrypted branch connectivity, and strict data loss prevention.',
      image: '/assets/images/use-cases/usecase4.png',
      linkTo: '/case-studies#sophos-banking'
    },
    {
      id: 'healthcare',
      category: 'HEALTHCARE',
      icon: 'fas fa-hospital',
      title: 'Healthcare Sector (Hospital Network & HIPAA-Compliant Endpoint Security)',
      description: 'Problem: Hospital networks need continuous protection for electronic medical records (EMR), patient databases, and connected medical IoT devices against ransomware.',
      image: '/assets/images/use-cases/usecase5.png',
      linkTo: '/case-studies#sophos-healthcare'
    },
    {
      id: 'enterprise',
      category: 'ENTERPRISE FIREWALL',
      icon: 'fas fa-building',
      title: 'Large-Scale Enterprise (30,000+ Users High-Performance Firewall & XDR)',
      description: 'Problem: Large enterprise networks require high-throughput next-generation firewalls (XGS Series) and XDR threat telemetry across distributed hybrid work environments.',
      image: '/assets/images/use-cases/usecase6.png',
      linkTo: '/case-studies#sophos-enterprise'
    },
    {
      id: 'manufacturing',
      category: 'MANUFACTURING',
      icon: 'fas fa-industry',
      title: 'Manufacturing Industry (Smart Factory OT/IT Protection & Ransomware Shield)',
      description: 'Problem: Smart factories demand synchronized OT/IT security to stop ransomware from spreading to production lines and critical industrial control systems.',
      image: '/assets/images/use-cases/usecase7.png',
      linkTo: '/case-studies#sophos-manufacturing'
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let isVisible = true;

    // Pause animation when canvas section is off-screen
    const observer = new IntersectionObserver(
      (entries) => { isVisible = entries[0].isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // Set canvas size — cap at section height, not full window
    const resizeCanvas = () => {
      canvas.width = canvas.offsetParent ? canvas.offsetParent.offsetWidth : window.innerWidth;
      canvas.height = canvas.offsetParent ? canvas.offsetParent.offsetHeight : window.innerHeight;
    };
    resizeCanvas();

    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 200);
    };
    window.addEventListener('resize', debouncedResize, { passive: true });

    // Particle class — simplified, no shadowBlur (very expensive)
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 0.8;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.015 + 0.008;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        const pulseFactor = Math.sin(this.pulsePhase) * 0.25 + 1;
        const r = this.radius * pulseFactor;
        // Simple filled circle — no radial gradient, no shadowBlur
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Cap particle count at 60 for performance
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connections — use solid stroke, no gradient, reduced max distance
    const drawConnections = () => {
      const maxDistance = 130;
      const maxDistSq = maxDistance * maxDistance;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const opacity = (1 - Math.sqrt(distSq) / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop — skip frames when section not visible
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', debouncedResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
    };
  }, []);

  // New Sophos certification images from /assets/soph/sop-1.png to sop-7.png
  const sophosCerts = [
    { src: '/assets/soph/sop-1.png', alt: 'Sophos Certified Architect', title: 'Sophos Certified Architect' },
    { src: '/assets/soph/sop-2.png', alt: 'Sophos Certified Engineer', title: 'Sophos Certified Engineer' },
    { src: '/assets/soph/sop-3.png', alt: 'Sophos Certified Technician', title: 'Sophos Certified Technician' },
    { src: '/assets/soph/sop-4.png', alt: 'Sophos XG Firewall Certified', title: 'Sophos XG Firewall Certified' },
    { src: '/assets/soph/sop-5.png', alt: 'Sophos Intercept X Certified', title: 'Sophos Intercept X Certified' },
    { src: '/assets/soph/sop-6.png', alt: 'Sophos Central Admin Certified', title: 'Sophos Central Admin Certified' },
    { src: '/assets/soph/sop-7.png', alt: 'Sophos MDR Certified', title: 'Sophos MDR Certified' },
  ];

  // ── Hero Award Slider ─────────────────────────────────────────────────────
  const heroImages = [
    { src: '/assets/team-1sophose (1).jpeg', alt: 'Sophos Partner of the Year 2025 - India & SAARC' },
    { src: '/assets/images/sophos/1 (2).jpeg', alt: 'Sophos Partner of the Year Award Ceremony' },
    { src: '/assets/team-1sophose.jpeg', alt: 'Sophos Team Award Recognition' }
  ];
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="sophos-page partner-sophos">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />
      {showSophosAward && (
        <section className="sophos-award-highlight">
          {/* Animated Background Canvas - Only for this section */}
          <canvas ref={canvasRef} className="animated-bg-canvas" />
          <div className="container">
            <div className="award-celebration">
              <div className="award-content sph-reveal sph-fade-left">
                <h1 className="award-title">
                  <span className="gradient-text">Sophos Partner</span>
                  <br />
                  <span className="gradient-text">of the Year 2025</span>
                  <br />
                  <span className="white-text">India & SAARC</span>
                </h1>
                <p className="award-description">
                  We are honored to receive the prestigious Sophos Partner of the Year 2025 award for India & SAARC region, 
                  recognizing our commitment to delivering exceptional cybersecurity solutions and outstanding customer service.
                </p>

                <p className="award-mdr-tagline">
                  <i className="fas fa-shield-alt"></i> Helping Businesses secure 24x7 with MDR &amp; Advisory services.
                </p>

                <div className="award-stats-boxes">
                  <div className="stat-box sph-reveal sph-fade-up sph-d1">
                    <div className="stat-icon-circle">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-number">20+</span>
                      <span className="stat-label">YEARS OF<br />EXCELLENCE</span>
                    </div>
                  </div>
                  <div className="stat-box sph-reveal sph-fade-up sph-d2">
                    <div className="stat-icon-circle">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-number">1000+</span>
                      <span className="stat-label">SOPHOS<br />DEPLOYMENTS</span>
                    </div>
                  </div>
                  <div className="stat-box sph-reveal sph-fade-up sph-d3">
                    <div className="stat-icon-circle">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">CERTIFIED SOPHOS<br />ENGINEERS</span>
                    </div>
                  </div>
                  <div className="stat-box sph-reveal sph-fade-up sph-d4">
                    <div className="stat-icon-circle">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="stat-content">
                      <span className="stat-number">#1</span>
                      <span className="stat-label">PARTNER IN<br />SAARC</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="award-image-container sph-reveal sph-fade-right">
                <div className="award-image-slider">
                  <div className="award-image-slides" style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}>
                    {heroImages.map((img, idx) => (
                      <div className={`award-slide-item ${idx === currentHeroSlide ? 'active' : ''}`} key={idx}>
                        <img loading="lazy" src={img.src} alt={img.alt} />
                      </div>
                    ))}
                  </div>
                  <div className="award-glow"></div>
                  <div className="award-slider-dots">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`award-slider-dot ${idx === currentHeroSlide ? 'active' : ''}`}
                        onClick={() => setCurrentHeroSlide(idx)}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Certifications - Premium Carousel */}
      <section className="certifications-carousel-premium">
        <div className="container">
          {/* Header with Golden Badge */}
          <div className="cert-carousel-header sph-reveal sph-fade-up">
            <div className="cert-badge-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h2>Team Certifications</h2>
            <p>Recognized expertise across all <span className="sophos-highlight">Sophos</span> technologies</p>
          </div>

          {/* Horizontal Infinite Marquee of Certification Images */}
          <div className="cert-marquee-outer">
            <div className="cert-marquee-track">
              {['a', 'b', 'c', 'd'].map((prefix) =>
                sophosCerts.map((cert, idx) => (
                  <div className="cert-marquee-item" key={`${prefix}-${idx}`}>
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      loading="lazy"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section with Cybersecurity Background */}
      <section
        className="aruba-cta-with-bg"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 60, 140, 0.82), rgba(0, 40, 110, 0.90)), url(/assets/images/bggg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="aruba-cta-content">
            <h2 className="aruba-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
            <p className="aruba-cta-subtitle">Speak with a senior consultant today. In 30 minutes you'll know:</p>

            <ul className="aruba-cta-list">
              <li>
                <i className="fas fa-check-circle cta-check-icon"></i>
                <span>The top three risks hiding in your current stack</span>
              </li>
              <li>
                <i className="fas fa-check-circle cta-check-icon"></i>
                <span>Quick wins that boost performance without new hardware</span>
              </li>
              <li>
                <i className="fas fa-check-circle cta-check-icon"></i>
                <span>An exact timeline &amp; cost estimate - no obligations</span>
              </li>
            </ul>

            <div className="aruba-cta-btn-wrapper">
              <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="aruba-cta-btn">
                <span className="aruba-cta-btn-text">Book Your Free Strategy Call</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Slider - Professional Design matching Aruba */}
      <UseCaseSlider 
        useCases={useCases}
        partnerColor="#eb5a0f"
      />

      {/* Awards Section */}
      <section className="awards-section">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Awards</span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <h2 className="section-title__title">
            Recognized & Trusted <span>for Delivering </span><br />
            Value & Excellence
          </h2>
        </div>

        <div className="awards-slider">
          <div className="awards-track">
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/new.jpeg" alt="Trace Excellence & Leadership Award" title="Trace Excellence & Leadership Award" />
              <span>Trace Excellence & Leadership Award</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/1.png" alt="Sophos Best Performing Partner (2024)" title="Sophos Best Performing Partner (2024)" />
              <span>Sophos Best Performing Partner (2024)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/2.png" alt="Certification of Completion Aruba Instant (2023)" title="Certification of Completion Aruba Instant (2023)" />
              <span>Certification of Completion Aruba Instant (2023)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/3.png" alt="Core Champion HPE Aruba Networking (2023)" title="Core Champion HPE Aruba Networking (2023)" />
              <span>Core Champion HPE Aruba Networking (2023)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/4.png" alt="Sophos Top Performer of the Region" title="Sophos Top Performer of the Region" />
              <span>Sophos Top Performer of the Region</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/5.png" alt="Sophos Best Solution Partner" title="Sophos Best Solution Partner" />
              <span>Sophos Best Solution Partner</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/6.png" alt="Certified by SonicWall (2022)" title="Certified by SonicWall (2022)" />
              <span>Certified by SonicWall (2022)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/7.png" alt="HPE Aruba Accelerating Next (2022)" title="HPE Aruba Accelerating Next (2022)" />
              <span>HPE Aruba Accelerating Next (2022)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/11.png" alt="Sophos Best Top Performing Partner (2020)" title="Sophos Best Top Performing Partner (2020)" />
              <span>Sophos Best Top Performing Partner (2020)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/12.png" alt="Sophos Platinum Partner (2019)" title="Sophos Platinum Partner (2019)" />
              <span>Sophos Platinum Partner (2019)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/13.png" alt="Sophos Best Performing Partner (2018)" title="Sophos Best Performing Partner (2018)" />
              <span>Sophos Best Performing Partner (2018)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/14.png" alt="Sophos Best Solution Partner (2018)" title="Sophos Best Solution Partner (2018)" />
              <span>Sophos Best Solution Partner (2018)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/15.png" alt="Sophos Best Solution Partner (2017)" title="Sophos Best Solution Partner (2017)" />
              <span>Sophos Best Solution Partner (2017)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/16.png" alt="Sophos Best Solution Partner (2016)" title="Sophos Best Solution Partner (2016)" />
              <span>Sophos Best Solution Partner (2016)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/17.png" alt="Sophos Highest Achiever Business Partner (2015)" title="Sophos Highest Achiever Business Partner (2015)" />
              <span>Sophos Highest Achiever Business Partner (2015)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/18.png" alt="Cyberoam Authorized Goal Partner (2015)" title="Cyberoam Authorized Goal Partner (2015)" />
              <span>Cyberoam Authorized Goal Partner (2015)</span>
            </div>
            <div className="award-card">
              <img loading="lazy" src="/assets/images/award/19.png" alt="Sophos Top Performer Of the Region" title="Sophos Top Performer Of the Region" />
              <span>Sophos Top Performer Of the Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Leading Brands Choose Trace Section */}
      <section className="premium-cards-section" style={{ marginTop: '-20px' }}>
        <div className="premium-container">
          <div className="section-title text-center pb-4">
            <h2 className="section-title__title">
              Why Leading<span> Brands</span> Choose<span> Trace</span>
            </h2>
          </div>
          <div className="premium-card-grid">
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/certified.png" alt="certified" title="certified" />
              </div>
              <p><strong>Multi‑vendor, Certified Network Security Expertise</strong>
                Partnering with 40+ global OEMs, Trace Network offers multi-vendor cybersecurity and network solutions that are future-proof, scalable, and tailored to your exact IT security needs.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/leadership.png" alt="leadership" title="leadership" />
              </div>
              <p><strong>20+ Years of Cybersecurity Leadership</strong>
                With two decades of proven expertise, we provide penetration testing, vulnerability assessments, and enterprise IT security solutions for Top Campuses, Global Capability Centres or Special Economic Zones, data centres, and enterprises across India.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/luxury.png" alt="luxury" title="luxury" />
              </div>
              <p><strong>Customer‑First, Value‑Driven</strong>
                Our cost-effective cybersecurity services ensure maximum protection with right-sized solutions, reducing risks and delivering the lowest total cost of ownership (TCO) for businesses.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/technical-support.png" title="technical-support" alt="technical-support" />
              </div>
              <p><strong>Local Presence with Rapid IT Support</strong>
                Trace Network engineers are available in Hyderabad, Bengaluru, Chennai, Vijayawada, and Vizag, ensuring quick on-site support and reliable network security services whenever you need them.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/iso-certificate.png" alt="iso-certificate" title="iso-certificate" />
              </div>
              <p><strong>ISO 27001‑Certified Cybersecurity Provider</strong>
                As an ISO 27001-certified company, we follow stringent change management and compliance practices, aligning with global information security standards to protect your business.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/frame.png" alt="frame" title="frame" />
              </div>
              <p><strong>Proven Cybersecurity Deployment Framework</strong>
                Our structured approach, Assess → Design → Deploy → Optimise → Support, minimises downtime, enhances performance, and ensures maximum ROI from your IT and cybersecurity investments.
              </p>
            </div>
            <div className="premium-service-card">
              <div className="premium-icon-wrapper">
                <img loading="lazy" src="/assets/images/agile.png" title="agile" alt="agile" />
              </div>
              <p><strong>Flexible MSSP & Security Pricing Models</strong>
                Choose from CapEx, OpEx, or Managed Security Service Provider (MSSP) models to align IT security investments with your organisation's business goals and cash-flow requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & POC Section */}
      <section className="aruba-products-poc-section">
        <div className="container">
          <div className="aruba-products-poc-grid">
            {/* Left Side - Auto-Sliding Product Carousel */}
            <div className="sph-poc-carousel-container">
              <div className="sph-carousel-wrapper">
                <div className="sph-carousel-track" id="sophosCarouselTrack">
                  {[
                    { img: '/assets/1.jpg',  name: 'XGS-138'  },
                    { img: '/assets/2.jpg',  name: 'XGS-2100' },
                    { img: '/assets/3.jpg',  name: 'XGS-2300' },
                    { img: '/assets/4.jpg',  name: 'XGS-3100' },
                    { img: '/assets/5.jpg',  name: 'XGS-3300' },
                    { img: '/assets/6.jpg',  name: 'XGS-4300' },
                    { img: '/assets/7.jpg',  name: 'XGS-5500' },
                    { img: '/assets/8.jpg',  name: 'XGS-6500' },
                    { img: '/assets/9.jpg',  name: 'XGS-7500' },
                    { img: '/assets/10.jpg', name: 'XGS-8500' },
                  ].map((slide, idx) => (
                    <div className="sph-carousel-slide" key={idx}>
                      <div className="sph-carousel-image-box">
                        <img loading="lazy" src={slide.img} alt={slide.name} className="sph-carousel-img" />
                      </div>
                      <div className="sph-carousel-info">
                        <h3 className="sph-carousel-title">{slide.name}</h3>
                        <div className="sph-carousel-underline"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="sph-carousel-dots" id="sophosCarouselDots">
                {Array.from({ length: 10 }, (_, i) => (
                  <span
                    key={i}
                    className={`sph-dot${i === 0 ? ' active' : ''}`}
                    data-slide={i}
                  ></span>
                ))}
              </div>

              {/* Arrows */}
              <button className="sph-carousel-arrow sph-carousel-prev" id="sophosCarouselPrev" aria-label="Previous">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="sph-carousel-arrow sph-carousel-next" id="sophosCarouselNext" aria-label="Next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Right Side - POC Offer */}
            <div className="aruba-poc-offer-box">
              <div className="aruba-poc-header">
                <h2 className="aruba-poc-main-title">
                  FREE <span className="aruba-orange-text">POC</span> Available
                </h2>
                <p className="aruba-poc-tagline">EXCLUSIVE OFFERS ON SOPHOS SECURITY SOLUTIONS</p>
              </div>

              <p className="aruba-poc-intro-text">
                Experience the power of Sophos cybersecurity firsthand - zero risk, zero commitment.
                Our team will set up a complete proof of concept tailored to your environment so
                you can see the results before you invest.
              </p>

              <div className="aruba-poc-benefits-grid">
                <div className="aruba-benefit-item">
                  <div className="aruba-benefit-icon">
                    <i className="fas fa-rupee-sign"></i>
                  </div>
                  <div className="aruba-benefit-text">
                    <h4>No upfront cost for POC</h4>
                    <p>Evaluate with confidence.</p>
                  </div>
                </div>

                <div className="aruba-benefit-item">
                  <div className="aruba-benefit-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="aruba-benefit-text">
                    <h4>Tailored to your security needs</h4>
                    <p>Built for your environment.</p>
                  </div>
                </div>

                <div className="aruba-benefit-item">
                  <div className="aruba-benefit-icon">
                    <i className="fas fa-tags"></i>
                  </div>
                  <div className="aruba-benefit-text">
                    <h4>Exclusive pricing on Sophos solutions</h4>
                    <p>Unbeatable value.</p>
                  </div>
                </div>

                <div className="aruba-benefit-item">
                  <div className="aruba-benefit-icon">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <div className="aruba-benefit-text">
                    <h4>Expert guidance throughout</h4>
                    <p>We're with you at every step.</p>
                  </div>
                </div>
              </div>

              <div className="aruba-cta-btn-wrapper">
                <Link to="/contact-us" className="aruba-cta-btn">
                  <span className="aruba-cta-btn-text">Book Your Free Strategy Call</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              <p className="aruba-closing-text">
                Let's build a <span className="aruba-highlight">smarter, stronger</span> security posture - together.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}