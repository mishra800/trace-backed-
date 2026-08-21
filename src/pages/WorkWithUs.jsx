import React, { useState, useEffect } from "react";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
import { API_ENDPOINTS } from '../config/api';
import './WorkWithUs.css';

export default function WorkWithUs() {
  const seoData = getSEOData('workWithUs');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [activeJobTab, setActiveJobTab] = useState("tab1");
  const [activeSlide, setActiveSlide] = useState(0);
  const [readMoreStates, setReadMoreStates] = useState({ 1: false, 2: false, 3: false, job1: false, job2: false });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleReadMore = (id) => {
    setReadMoreStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(API_ENDPOINTS.CONTACT_CAREER, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        e.target.reset();
        setMessage("");
        // Close bootstrap modal if open
        const closeBtn = document.querySelector('#careerApplyModal .btn-close');
        if (closeBtn) closeBtn.click();
        // Show custom success popup modal
        setShowSuccessModal(true);
      } else {
        setMessage("❌ Error: " + data.message);
      }
    } catch (err) {
      setMessage("❌ Error submitting form.");
    }
    setLoading(false);
  };
  return (
    <>

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />

      



<section className="page-header">
<div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
</div>
<div className="container">
<div className="page-header__inner">
<h1>Work With Us</h1>
<div className="thm-breadcrumb__box">
<ul className="thm-breadcrumb list-unstyled">
<li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
<li><span className="icon-right-arrow-1"></span></li>
<li>Work With Us</li>
</ul>
</div>
</div>
</div>
</section>

<section className="ngfw-section">
<div className="ngfw-container">
<div className="ngfw-solution">
<img loading="lazy" alt="Our Commitment - Trace Network" className="ngfw-img" src="/assets/images/commitment.jpg" title="best company work culture"/>
<div className="ngfw-solution-content">
<div className="section-title text-center sec-title-animation animation-style2">
<h2 className="section-title__title title-animation">
                Our<span> Commitment</span> to<span> Excellence</span>
</h2>
</div>
<p>
              For over two decades, Trace Network has ensured uninterrupted operations for leading high-growth
              enterprises, international educational institutions, and IT/ITES companies across South India. By joining
              Trace, you will contribute to solutions that uphold cyber resilience while advancing your own expertise
              through clearly defined growth pathways and industry-leading resources.
            </p>
</div>
</div>
</div>
</section>

<section className="culture-section">
<div className="culture-container">
<div className="section-title text-center sec-title-animation animation-style2">
<h2 className="section-title__title title-animation">
            Celebration of<span> Culture</span>
</h2>
</div>
<div className="culture-slider">
<div className={`culture-slide ${activeSlide === 0 ? "active" : ""}`}>
<img loading="lazy" alt="Learning Sessions" src="/assets/images/cricket1.jpg" title="Cricket office culture"/>
<div className="culture-caption"></div>
</div>
<div className={`culture-slide ${activeSlide === 1 ? "active" : ""}`}>
<img loading="lazy" alt="Team Fun Activities" src="/assets/images/cricket2.jpg" title="Team fun"/>
<div className="culture-caption"></div>
</div>
<div className={`culture-slide ${activeSlide === 2 ? "active" : ""}`}>
<img loading="lazy" alt="Workshops" src="/assets/images/cricket3.jpg" title="Workshops"/>
<div className="culture-caption"></div>
</div>

<div className={`culture-slide ${activeSlide === 3 ? "active" : ""}`}>
<img loading="lazy" alt="Celebration Event" src="/assets/images/cricket4.jpg" title="Celebration event"/>
<div className="culture-caption"></div>
</div>
</div>

<div className="culture-dots">
<span className={`dot ${activeSlide === 0 ? "active-dot" : ""}`} onClick={() => setActiveSlide(0)}></span>
<span className={`dot ${activeSlide === 1 ? "active-dot" : ""}`} onClick={() => setActiveSlide(1)}></span>
<span className={`dot ${activeSlide === 2 ? "active-dot" : ""}`} onClick={() => setActiveSlide(2)}></span>
<span className={`dot ${activeSlide === 3 ? "active-dot" : ""}`} onClick={() => setActiveSlide(3)}></span> 
</div>
</div>
</section>
<section className="wtp-section py-5">
<div className="container">
<div className="section-title text-center sec-title-animation animation-style2">
<h2 className="section-title__title title-animation">
            Why High<span> Calibre Professionals</span> Choose Trace?
          </h2>
</div>
<div className="row g-4">
<div className="col-md-6 col-lg-4">
<div className="wtp-card h-100">
<h5>Collaborative and Growth Oriented Environment</h5>
<p>An environment where your ideas and creativity never go unnoticed. Your every effort and wins are
                celebrated with everyone in the team.</p>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="wtp-card h-100">
<h5>Investment in Innovation</h5>
<p>Dedicated SOC/ NOC labs, AI-driven monitoring platforms, annual continuous-learning allowance and a lot
                more!</p>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="wtp-card h-100">
<h5>People-Centric Culture</h5>
<p>Weekly town halls, open communication channels, and quarterly well-being days that support sustainable
                high performance.</p>
</div>
</div>
<div className="col-md-6 col-lg-6">
<div className="wtp-card h-100">
<h5>Direct Ownership &amp; Accountability</h5>
<p>Operate within focused cross-functional teams. Present designs to client leadership and see your
                solutions deployed in production environments.</p>
</div>
</div>
<div className="col-md-6 col-lg-6">
<div className="wtp-card h-100">
<h5>Transparent Career Progression</h5>
<p>Clearly articulated tracks to higher roles, with quarterly reviews and mentorship from senior
                leadership.</p>
</div>
</div>
</div>
</div>
</section>
<section className="blog-page">
<div className="blog-page__shape-1"></div>
<div className="blog-page__shape-2"></div>
<div className="container">
<div className="row">
<div className="section-title text-center sec-title-animation animation-style2">
<h2 className="section-title__title title-animation">
              In our <span>team’s words</span>
</h2>
</div>

<div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms">
<div className="blog-one__single">
<div className="blog-one__img">
<img loading="lazy" alt="Ravi Senior Marketing Leader" src="/assets/images/ravi.jpg" title="Ravi Senior Marketing Leader"/>
</div>
<div className="blog-one__content">
<h3 className="blog-one__title" style={{ color: 'white' }}>Ravi, Senior Marketing Leader</h3>
<p className="blog-one__text">

                  What makes Trace truly stand out is its culture and innovative at its core, yet deeply human.
                  <span className="extra-text" style={{ display: readMoreStates[1] ? 'inline' : 'none' }}>
                    As a marketing professional, I’ve seen firsthand how every idea is encouraged, every effort
                    recognized, and every small win celebrated. We thrive in a collaborative environment where technical
                    and sales teams work in sync to create real impact. Trace doesn’t just support growth, it actively
                    fuels it, both for clients and for the people who build it.
                  </span>
</p>
<div className="blog-one__btn-box">
<a className="btn-get-started read-more-btn" onClick={(e) => { e.preventDefault(); toggleReadMore(1); }} href="#" title="best top data security company in hyderabad">
<span className="btn-text">{readMoreStates[1] ? 'Read Less' : 'Read More'}</span>
<span className="btn-arrow"></span>
</a>
</div>
</div>
</div>
</div>

<div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
<div className="blog-one__single">
<div className="blog-one__img">
<img loading="lazy" alt=" Taraka Ram Founder's Office" src="/assets/images/taraka ram.png" title="Taraka Ram"/>
</div>
<div className="blog-one__content">
<h3 className="blog-one__title" style={{ color: 'white' }}>Taraka Ram, Founder’s Office</h3>
<p className="blog-one__text">
                  Trace is where innovation meets execution.Every small win is celebrated, every effort appreciated.
                  <span className="extra-text" style={{ display: readMoreStates[2] ? 'inline' : 'none' }}>
                    The culture is deeply collaborative, with
                    strong technical and sales expertise driving real impact. It’s a place that rewards ideas, supports
                    growth, and empowers you to thrive.
                  </span>
</p>
<div className="blog-one__btn-box">
<a className="btn-get-started read-more-btn" onClick={(e) => { e.preventDefault(); toggleReadMore(2); }} href="#">
<span className="btn-text">{readMoreStates[2] ? 'Read Less' : 'Read More'}</span>
<span className="btn-arrow"></span>
</a>
</div>
</div>
</div>
</div>

<div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms">
<div className="blog-one__single">
<div className="blog-one__img">
<img loading="lazy" alt="rajashekar account manager" src="/assets/images/rajashekar.png" title="rajashekar account manager"/>
</div>
<div className="blog-one__content">
<h3 className="blog-one__title" style={{ color: 'white' }}>MN Rajasekhar, Account Manager</h3>
<p className="blog-one__text">
                  At Trace, I’ve found the perfect balance between ownership and collaboration.
                  <span className="extra-text" style={{ display: readMoreStates[3] ? 'inline' : 'none' }}>
                    As an Account Manager, I’m empowered to take the lead with clients, backed by a team that’s always
                    aligned and supportive. What sets Trace apart is its culture and every effort is acknowledged, every
                    small win is celebrated, and new ideas are always welcomed. The blend of strong technical and sales
                    expertise here makes it easy to deliver real value to customers. It’s a place where growth isn’t
                    just encouraged – it’s made possible every single day.
                  </span>
</p>
<div className="blog-one__btn-box">
<a className="btn-get-started read-more-btn" onClick={(e) => { e.preventDefault(); toggleReadMore(3); }} href="#">
<span className="btn-text">{readMoreStates[3] ? 'Read Less' : 'Read More'}</span>
<span className="btn-arrow"></span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-5">
<div className="container">
<div className="section-title text-center sec-title-animation animation-style2">
<h2 className="section-title__title title-animation">
            Benefits That <span>Ignite Your Ambition</span>
</h2>
</div>

<div className="benefit-timeline-wrapper">
<div className="timeline-line"></div>
<div className="row text-center g-5 justify-content-center">
<div className="col-md-6 col-lg-3">
<div className="timeline-item-custom">
<div className="timeline-icon"><span>👥</span></div>
<div className="timeline-text">
<h5>Work with Industry Leaders</h5>
<p>Mentorship that propels your career to new heights.</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="timeline-item-custom">
<div className="timeline-icon"><span>🏆</span></div>
<div className="timeline-text">
<h5>Quarterly Incentives</h5>
<p>Rewards for those who surpass expectations.</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="timeline-item-custom">
<div className="timeline-icon"><span>🎓</span></div>
<div className="timeline-text">
<h5>Your Skill, Our Growth</h5>
<p>Skill-building programs to redefine your career.</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="timeline-item-custom">
<div className="timeline-icon"><span>❤</span></div>
<div className="timeline-text">
<h5>Health &amp; Term Covers</h5>
<p>Comprehensive care for you and your loved ones.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="thrive-section">
<div className="thrive-container">
<div className="thrive-image">
<img loading="lazy" alt="Thriving team illustration" src="/assets/images/teamm.JPG" title="best networking company" />
</div>
<div className="thrive-text">
<div className="section-title text-center sec-title-animation animation-style2">
<h2 className="section-title__title title-animation">
              Who<strong> Thrives at Trace?</strong>
</h2>
</div>
<ul>
<li><strong>Relentless Learners</strong> who earn the next certificate before we ask.</li>
<li><strong>Ownership Mindset</strong> that treats client resilience as a personal mission.</li>
<li><strong>Clear Communicators</strong> who can speak to both technical and business teams.</li>
<li><strong>Problem Solvers</strong> aligned with zero-downtime goals.</li>
</ul>
</div>
</div>
</section>
<section className="job-tabs-section">
<div className="tabs-container">
<div className="section-title text-center sec-title-animation animation-style2">
<h2 className="section-title__title title-animation">
            Explore <span>Job Descriptions</span>
</h2>
</div>

<div className="tab-buttons">
<button className={`tab-btn${activeJobTab === "tab1" ? " active" : ""}`} onClick={() => setActiveJobTab("tab1")}>Inside Sales Executive</button>
<button className={`tab-btn${activeJobTab === "tab2" ? " active" : ""}`} onClick={() => setActiveJobTab("tab2")}>Business Development Executive</button>
</div>

<div className={`tab-content${activeJobTab === "tab1" ? " active-tab" : ""}`} id="tab1">
<div className="job-layout">
<div className="job-image">
<img loading="lazy" alt="Inside Sales" src="/assets/images/indian sale-girl.png" title="inside sales" />
</div>
<div className="job-details">
<h2>Inside Sales Executive</h2>
<h3>Responsibilities</h3>
<ul>
<li>Source new sales opportunities through inbound lead follow-up and outbound cold calls and emails
                </li>
<li>Route qualified opportunities to the appropriate sales executives for further development and
                  closure</li>
<li>Maintain and expand database of prospects within your assigned territory</li>
{readMoreStates.job1 && (
  <>
    <li>Team with channel partners to build pipeline and close deals</li>
    <li>Responsible for managing customer relations and sales with existing customers and creating new
                      accounts</li>
    <li>Responsible for selling complete Hardware and Networking solutions and targeted corporate accounts
                      through Sales &amp; Marketing Executives</li>
    <li>Estimation, preparation of techno-commercial proposals in co-ordination with the pre-sales
                      executives</li>
  </>
)}
</ul>
{readMoreStates.job1 && (
  <>
    <h3>Qualifications</h3>
    <ul>
    <li>Bachelor's degree or equivalent</li>
    <li>2+ years' previous relevant experience</li>
    <li>Good verbal &amp; written communication skills</li>
    <li>Hands on experience in MS Office</li>
    </ul>
  </>
)}
<div className="blog-one__btn-box" style={{ marginTop: '20px' }}>
  <a className="btn-get-started" onClick={(e) => { e.preventDefault(); toggleReadMore("job1"); }} href="#">
    <span className="btn-text">{readMoreStates.job1 ? 'Read Less' : 'Read More'}</span>
    <span className="btn-arrow"></span>
  </a>
</div>
</div>
</div>
</div>

<div className={`tab-content${activeJobTab === "tab2" ? " active-tab" : ""}`} id="tab2">
<div className="job-layout">
<div className="job-image">
<img loading="lazy" alt="Business Development" src="/assets/images/bussiness sale.jpg" title="business development" />
</div>
<div className="job-details">
<h2>Business Development Executive</h2>
<h3>Roles &amp; Responsibilities</h3>
<ul>
<li>Phenomenal will to learn</li>
<li>Generating own leads. Achieving the sales targets set for new accounts acquisition and development
                  of existing accounts within the sales territory</li>
<li>Pursue and develop sales opportunities including sales visits, product presentations, proposals and
                  negotiations, closing of sales and involvement of after sales service delivery throughout the entire
                  implementation processes</li>
{readMoreStates.job2 && (
  <>
    <li>Manage existing accounts professionally by continually developing the accounts through profitable
                      business propositions</li>
    <li>Be pro-active and collaborative with other team members to ensure that overall company objectives
                      are met</li>
    <li>Develop individual selling strategy designed to generate sales to ensure attainment of 100% of sales
                      target for assigned shows/products</li>
    <li>Promote and sell products, services and solutions through direct contacts, Deliver sales
                      presentations to customer, senior management and demonstrate products</li>
    <li>Identification, research and successful closing of new accounts</li>
  </>
)}
</ul>
{readMoreStates.job2 && (
  <>
    <h3>Preferred Candidate Profile</h3>
    <ul>
    <li>Looking for Male Candidates</li>
    <li>Good Communication Skills</li>
    <li>Freshers/ 1 to 2 years Experience in B2B Sales</li>
    <li>A minimum knowledge on Networking, Cybersecurity solutions and IT Infrastructure</li>
    <li>Proven track record of achieving sales targets and clear communication, interpersonal, and
                      presentation skills</li>
    <li>Ability to lead and manage multiple projects and priorities</li>
    <li>MBA in Business Administration, Marketing, or related field</li>
    <li>Strong analytical and problem-solving skills</li>
    <li>Ability to work independently and in a team environment</li>
    </ul>
    <p className="note">If your expertise is not reflected above, we always welcome creativity, brilliance, and
                    innovative applications throughout the year. Submit your application below.</p>
  </>
)}
<div className="blog-one__btn-box" style={{ marginTop: '20px' }}>
  <a className="btn-get-started" onClick={(e) => { e.preventDefault(); toggleReadMore("job2"); }} href="#">
    <span className="btn-text">{readMoreStates.job2 ? 'Read Less' : 'Read More'}</span>
    <span className="btn-arrow"></span>
  </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="career-cta-section">
<div className="career-cta-container">
<h2 className="career-cta-title">Embark on Your Next Professional Chapter</h2>
<p className="career-cta-text">
          Every configuration you secure, every vulnerability you remediate, and every strategy you craft strengthens
          the digital backbone of India. If you are committed to excellence in high-availability infrastructure and
          cybersecurity, we invite you to apply and advance your career with Trace.
        </p>
<div className="about-two__btn-box">
<a className="btn-get-started career-cta-btn" data-bs-target="#careerApplyModal" data-bs-toggle="modal" href="#">
<span className="btn-text">Apply Now</span>
<span className="btn-arrow"></span>
</a>
</div>
</div>
</section>

<div aria-hidden="true" className="modal fade" id="careerApplyModal" tabindex="-1">
<div className="modal-dialog modal-dialog-centered modal-lg">
<div className="modal-content">

<div className="modal-header">
<h5 className="modal-title">Apply for a Career at Trace</h5>
<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>

<div className="modal-body">
<form id="careerForm" onSubmit={handleSubmit}>
<div className="mb-3">
<label className="form-label" htmlFor="name">Full Name</label>
<input className="form-control" id="name" name="name" placeholder="Enter your full name" required="" type="text"/>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="email">Email Address</label>
<input className="form-control" id="email" name="email" placeholder="Enter your email" required="" type="email"/>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="resume">Upload CV/Resume (PDF only)</label>
<input accept=".pdf" className="form-control" id="resume" name="resume" required="" type="file"/>
</div>
<div className="mb-3">
<label className="form-label" htmlFor="whyTrace">Why do you want to be part of Team Trace?</label>
<textarea className="form-control" id="whyTrace" name="whyTrace" placeholder="Write your motivation here..." required="" rows="4"></textarea>
</div>
<div className="text-end">
<button className="btn-get-started" type="submit" disabled={loading}>
<span className="btn-text">{loading ? "Submitting..." : "Submit"}</span>
<span className="btn-arrow"></span>
</button>
</div>
<div className="result mt-3" style={{ textAlign: 'center', fontWeight: 'bold' }}>{message}</div>
</form>
</div>
</div>
</div>
</div>

{showSuccessModal && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backdropFilter: 'blur(5px)'
  }}>
    <div style={{
      background: '#1a1a2e',
      border: '2.5px solid #ff7a00',
      borderRadius: '16px',
      padding: '40px 30px',
      maxWidth: '480px',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        width: '70px',
        height: '70px',
        background: 'rgba(255, 122, 0, 0.12)',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto 24px',
        color: '#ff7a00',
        fontSize: '36px',
        fontWeight: 'bold',
        border: '2px solid rgba(255, 122, 0, 0.3)'
      }}>
        ✓
      </div>
      <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '14px', color: '#fff', letterSpacing: '0.5px' }}>
        Thank You!
      </h3>
      <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
        Your application has been submitted successfully. Our HR team will review your CV and contact you shortly.
      </p>
      <div style={{
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px dashed rgba(255, 122, 0, 0.4)',
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '28px'
      }}>
        <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#9ca3af', fontWeight: '500' }}>
          For immediate inquiries or status updates, email us:
        </p>
        <a href="mailto:hr@tracenetwork.in" style={{
          color: '#ff7a00',
          fontSize: '16px',
          fontWeight: '700',
          textDecoration: 'none',
          letterSpacing: '0.5px',
          display: 'inline-block'
        }}>
          hr@tracenetwork.in
        </a>
      </div>
      <button 
        onClick={() => setShowSuccessModal(false)}
        style={{
          background: '#ff7a00',
          color: '#fff',
          border: 'none',
          padding: '12px 36px',
          borderRadius: '25px',
          fontSize: '15px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          outline: 'none',
          boxShadow: '0 4px 15px rgba(255, 122, 0, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#e65c00';
          e.target.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#ff7a00';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        Close
      </button>
    </div>
  </div>
)}




    </>
  );
}
