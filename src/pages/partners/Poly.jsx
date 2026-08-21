import React from 'react';

import { Link } from 'react-router-dom';

import SEO from '../../components/SEO';
import { getSEOData } from '../../config/seoConfig';

import UseCaseSlider from '../../components/UseCaseSlider';

import { useAwardsSlider } from '../../hooks/useAwardsSlider';

import './Poly.css';



const polyUseCases = [

  { id: "enterprise", category: "ENTERPRISE", icon: "fas fa-building", title: "Corporate Enterprises & Hybrid Workforce (Professional Collaboration)", description: "Problem: Organizations require professional collaboration solutions for hybrid teams, boardrooms, remote employees, and executive communication.", image: "/assets/images/use-cases/usecase6.png", linkTo: "/case-studies#poly-enterprise" },

  { id: "healthcare", category: "HEALTHCARE", icon: "fas fa-hospital", title: "Healthcare & Government Hospitals (Telemedicine Solutions)", description: "Problem: Hospitals require reliable communication and telemedicine solutions for doctors, administrators, and patient consultations.", image: "/assets/images/use-cases/usecase5.png", linkTo: "/case-studies#poly-healthcare" },

  { id: "education", category: "EDUCATION", icon: "fas fa-graduation-cap", title: "Education Sector (Virtual Classrooms & Collaboration)", description: "Problem: Educational institutions require reliable communication and collaboration infrastructure for online learning, virtual classrooms, and faculty coordination.", image: "/assets/images/use-cases/usecase2.png", linkTo: "/case-studies#poly-education" },

  { id: "banking", category: "BANKING", icon: "fas fa-university", title: "Banking & Financial Services (Secure Executive Communication)", description: "Problem: Banks require secure and high-quality communication systems for executive meetings, branch coordination, and customer interactions.", image: "/assets/images/use-cases/usecase4.png", linkTo: "/case-studies#poly-banking" },

  { id: "it", category: "IT & SOFTWARE", icon: "fas fa-laptop", title: "IT & Software Companies (Hybrid Team Collaboration)", description: "Problem: IT companies require seamless communication infrastructure for hybrid teams, project collaboration, and global meetings.", image: "/assets/images/use-cases/usecase3.png", linkTo: "/case-studies#poly-it" },

  { id: "government", category: "GOVERNMENT", icon: "fas fa-university", title: "Government Organizations (Secure Meeting Infrastructure)", description: "Problem: Government departments require reliable and secure communication systems for meetings, collaboration, and operational coordination.", image: "/assets/images/use-cases/usecase1.png", linkTo: "/case-studies#poly-government" },

  { id: "bpo", category: "BPO & CALL CENTER", icon: "fas fa-phone-alt", title: "BPO & Call Center Industry (High-Quality Communication Devices)", description: "Problem: BPOs and customer support centers require high-quality communication devices for uninterrupted customer interaction and workforce productivity.", image: "/assets/images/use-cases/usecase7.png", linkTo: "/case-studies#poly-bpo" },

];



export default function Poly() {

  useAwardsSlider();
  const seoData = getSEOData('partnerPoly');

  return (

    <div className="poly-page poly2-page">

      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />



      {/* Hero */}

      <section className="poly2-hero">

        <div className="poly2-hero-bg" aria-hidden="true"></div>

        <div className="poly2-hero-glow-left" aria-hidden="true"></div>

        <div className="poly2-hero-glow-right" aria-hidden="true"></div>

        <div className="poly2-hero-inner container">



          {/* LEFT */}

          <div className="poly2-left" data-aos="fade-right" data-aos-duration="900">

            <h1 className="poly2-headline">

              Premier Poly Collaboration<br />

              &amp; Communication Solutions<br />

              <span className="poly2-headline-accent">Partner</span>

            </h1>

            <div className="poly2-headline-rule"></div>

            <p className="poly2-desc">

              Professional headsets, video conferencing, and id workplace communication solutions - delivered by{' '}

              <a href="/contact-us" className="poly2-desc-link">Trace Network &amp; Engineering.</a>

            </p>

            <div className="poly2-feature-row">

              <div className="poly2-feat">

                <div className="poly2-feat-icon"><i className="fas fa-microphone"></i></div>

                <div className="poly2-feat-body">

                  <strong>Premium Audio</strong>

                  <span>AI noise cancellation &amp; HD audio.</span>

                </div>

              </div>

              <div className="poly2-feat">

                <div className="poly2-feat-icon"><i className="fas fa-video"></i></div>

                <div className="poly2-feat-body">

                  <strong>Video Conferencing</strong>

                  <span>Smart cameras &amp; meeting rooms.</span>

                </div>

              </div>

              <div className="poly2-feat">

                <div className="poly2-feat-icon"><i className="fas fa-home"></i></div>

                <div className="poly2-feat-body">

                  <strong>Hybrid Workplace</strong>

                  <span>Teams, Zoom &amp; Webex certified.</span>

                </div>

              </div>

            </div>

            <div className="poly2-stats-row">

              <div className="poly2-stat-card">

                <i className="fas fa-building"></i>

                <div>

                  <span className="poly2-stat-num">1000+</span>

                  <span className="poly2-stat-lbl">ENTERPRISE<br />DEPLOYMENTS</span>

                </div>

              </div>

              <div className="poly2-stat-card">

                <i className="fas fa-clock"></i>

                <div>

                  <span className="poly2-stat-num">6hrs</span>

                  <span className="poly2-stat-lbl">ISSUE<br />RESOLUTION</span>

                </div>

              </div>

              <div className="poly2-stat-card poly2-stat-brand">

                <i className="fas fa-headphones" style={{ fontSize: '2rem', color: '#0f3d8c' }}></i>

                <span className="poly2-stat-lbl">POLY CERTIFIED<br />PARTNER</span>

              </div>

            </div>

            <div className="poly2-cta-row">

              <a href="/contact-us" className="poly2-btn-ghost">

                Talk to Our Experts <i className="fas fa-chevron-right"></i>

              </a>

            </div>

          </div>



          {/* RIGHT */}

          <div className="poly2-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

            <div className="poly2-product-glow" aria-hidden="true"></div>

            <div className="poly2-showcase">

              <img loading="lazy" src="/assets/ploy.png" alt="Poly Communication Solutions" className="poly2-hero-product-img" onError={e=>{e.target.style.opacity='0.3';}} />

              <div className="poly2-platform" aria-hidden="true">

                <div className="poly2-plat-ring poly2-plat-ring-1"></div>

                <div className="poly2-plat-ring poly2-plat-ring-2"></div>

                <div className="poly2-plat-ring poly2-plat-ring-3"></div>

                <div className="poly2-plat-surface"></div>

              </div>

            </div>

            <div className="poly2-industry-strip">

              <span className="poly2-ind-item"><i className="fas fa-building"></i> Enterprise</span>

              <span className="poly2-ind-sep"></span>

              <span className="poly2-ind-item"><i className="fas fa-hospital"></i> Healthcare</span>

              <span className="poly2-ind-sep"></span>

              <span className="poly2-ind-item"><i className="fas fa-graduation-cap"></i> Education</span>

              <span className="poly2-ind-sep"></span>

              <span className="poly2-ind-item"><i className="fas fa-university"></i> Banking</span>

              <span className="poly2-ind-sep"></span>

              <span className="poly2-ind-item"><i className="fas fa-phone-alt"></i> BPO</span>

            </div>

          </div>



        </div>

      </section>



      


      


      


      {/* Use Cases Slider */}


      {/* Career CTA — above Use Cases */}
      <section className="career-cta-section partner-cta-upgraded" data-aos="fade-up" data-aos-duration="900">
        <div className="career-cta-container">
          <div className="partner-cta-eyebrow"><i className="fas fa-video"></i><span>FREE COLLAB CONSULT</span></div>
          <h2 className="career-cta-title partner-cta-title">Ready to Elevate Your Collaboration Experience?</h2>
          <p className="career-cta-text partner-cta-subtext">Speak with a senior consultant today. In 30 minutes you'll know:</p>
          <div className="partner-cta-points">
            <div className="partner-cta-point"><i className="fas fa-search"></i><span>Communication bottlenecks affecting your teams today</span></div>
            <div className="partner-cta-point"><i className="fas fa-bolt"></i><span>Quick wins to improve meeting quality and reduce costs</span></div>
            <div className="partner-cta-point"><i className="fas fa-calendar-alt"></i><span>An exact timeline & cost estimate — no obligations</span></div>
          </div>
          <div className="partner-cta-actions">
            <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="partner-cta-primary"><i className="fab fa-whatsapp"></i> Book Your Free Strategy Call</a>
            <a href="/contact-us" className="partner-cta-secondary"><i className="fas fa-envelope"></i> Send Us a Message</a>
          </div>
        </div>
        <div className="partner-cta-glow-l" aria-hidden="true"></div>
        <div className="partner-cta-glow-r" aria-hidden="true"></div>
      </section>

      <UseCaseSlider

        useCases={polyUseCases}

        partnerColor="#0f3d8c"

        title="Poly Collaboration Use Cases"

        subtitle="Successfully Delivered by Trace Network across diverse industry sectors"

      />



      {/* Awards Section */}

      <section className="awards-section">

        <div className="section-title text-center">

          <div className="section-title__tagline-box">

            <div className="section-title__tagline-shape-1"></div>

            <span className="section-title__tagline">Awards</span>

            <div className="section-title__tagline-shape-2"></div>

          </div>

          <h2 className="section-title__title">Recognized &amp; Trusted <span>for Delivering </span><br />Value &amp; Excellence</h2>

        </div>

        <div className="awards-slider">

          <div className="awards-track">

            <div className="award-card"><img loading="lazy" src="/assets/images/award/1.png" alt="Sophos Best Performing Partner (2024)" /><span>Sophos Best Performing Partner (2024)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/2.png" alt="Certification of Completion Aruba Instant (2023)" /><span>Certification of Completion Aruba Instant (2023)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/3.png" alt="Core Champion HPE Aruba Networking (2023)" /><span>Core Champion HPE Aruba Networking (2023)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/4.png" alt="Sophos Top Performer of the Region" /><span>Sophos Top Performer of the Region</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/5.png" alt="Sophos Best Solution Partner" /><span>Sophos Best Solution Partner</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/6.png" alt="Certified by SonicWall (2022)" /><span>Certified by SonicWall (2022)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/7.png" alt="HPE Aruba Accelerating Next (2022)" /><span>HPE Aruba Accelerating Next (2022)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/11.png" alt="Sophos Best Top Performing Partner (2020)" /><span>Sophos Best Top Performing Partner (2020)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/12.png" alt="Sophos Platinum Partner (2019)" /><span>Sophos Platinum Partner (2019)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/13.png" alt="Sophos Best Performing Partner (2018)" /><span>Sophos Best Performing Partner (2018)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/14.png" alt="Sophos Best Solution Partner (2018)" /><span>Sophos Best Solution Partner (2018)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/15.png" alt="Sophos Best Solution Partner (2017)" /><span>Sophos Best Solution Partner (2017)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/16.png" alt="Sophos Best Solution Partner (2016)" /><span>Sophos Best Solution Partner (2016)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/17.png" alt="Sophos Highest Achiever Business Partner (2015)" /><span>Sophos Highest Achiever Business Partner (2015)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/18.png" alt="Cyberoam Authorized Goal Partner (2015)" /><span>Cyberoam Authorized Goal Partner (2015)</span></div>

            <div className="award-card"><img loading="lazy" src="/assets/images/award/19.png" alt="Sophos Top Performer Of the Region" /><span>Sophos Top Performer Of the Region</span></div>

          </div>

        </div>

      </section>

      {/* Special Offer */}
      <section className="greythr-special-offer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="greythr-offer-card">
            <div className="greythr-offer-glow-left" aria-hidden="true"></div>
            <div className="greythr-offer-glow-right" aria-hidden="true"></div>
            <div className="greythr-offer-stars" aria-hidden="true">
              <span className="gt-star gt-star-1">★</span><span className="gt-star gt-star-2">✦</span>
              <span className="gt-star gt-star-3">★</span><span className="gt-star gt-star-4">✦</span>
            </div>
            <div className="greythr-offer-content sify-offer-content-full">
              <div className="greythr-offer-badge"><i className="fas fa-gift"></i> SPECIAL OFFER</div>
              <h2 className="greythr-offer-title"><span className="greythr-offer-free">FREE POC</span> Available</h2>
              <div className="greythr-offer-pill"><span className="greythr-offer-pill-dot"></span>Exclusive Collaboration Offer</div>
              <p className="greythr-offer-desc">Experience Poly's smart collaboration and premium communication systems firsthand. Evaluate video conferencing setups and smart headsets in your meeting rooms under expert guidance.</p>
              <div className="greythr-offer-grid">
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-microphone"></i></div><span>No Upfront Cost<br />for POC Setup</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-video"></i></div><span>Tailored Meeting Room<br />Assessment</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-tag"></i></div><span>Exclusive Partner<br />Pricing Plans</span><div className="greythr-offer-feat-bar"></div></div>
                <div className="greythr-offer-feature"><div className="greythr-offer-feat-icon"><i className="fas fa-headset"></i></div><span>Dedicated Support<br />& Deployment</span><div className="greythr-offer-feat-bar"></div></div>
              </div>
              <div className="greythr-offer-modules-row">
                <span className="greythr-offer-modules-label">POPULAR SOLUTIONS INCLUDED</span>
                <div className="greythr-offer-modules-list">
                  {['Smart Video Conferencing', 'Noise-Canceling Headsets', 'Microsoft Teams & Zoom Rooms', 'Unified Cloud Management'].map((m, i) => (
                    <React.Fragment key={m}>
                      <span className="greythr-offer-module"><i className="fas fa-shield-alt"></i> {m}</span>
                      {i < 3 && <span className="greythr-offer-sep">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Link to="/contact-us" className="greythr-contact-btn">CONTACT TRACE NETWORK <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

    </div>

  );

}

