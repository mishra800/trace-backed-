import React from "react";


import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
export default function Industries() {
  const seoData = getSEOData('industries');

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
<h2>Industries</h2>
<div className="thm-breadcrumb__box">
<ul className="thm-breadcrumb list-unstyled">
<li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
<li><span className="icon-right-arrow-1"></span></li>
<li>Industries</li>
</ul>
</div>
</div>
</div>
</section>

<section className="trace-partner-sec m-3">
<div className="trace-partner-wrap">
<div className="section-title text-center mb-1">
<div className="section-title__tagline-box">
<div className="section-title__tagline-shape-1"></div>
<span className="section-title__tagline">Trace</span>
<div className="section-title__tagline-shape-2"></div>
</div>
<h2 className="section-title__title">
                        Industries We <span>Transform </span>
</h2>
</div>
<section className="thrive-section">
<div className="thrive-container">
<div className="thrive-image">
<img loading="lazy" alt="Thriving team illustration" src="/assets/images/teamm.JPG" />
</div>
<div className="thrive-text">
<p>Proven expertise. Measurable outcomes. One trusted partner for
                                the IT, Managed Services, Networking and Cybersecurity needs. </p>
<p className="pb-2">How We Earn Your Confidence - Across Every Vertical?
                            </p>
<ul>
<li><strong>End-to-End Capability -</strong> Networking, endpoints, servers, storage,
                                    cloud, collaboration, and cybersecurity, delivered as an integrated stack. </li>
<li><strong>Seamless Support – </strong> 20 + certified technical engineers, spread
                                    across south India, and 24 × 7 support closing your tickets zero-day! </li>
<li><strong>Documented Results – </strong> Large rollouts completed on schedule and
                                    above SLA for uptime, throughput, and compliance. </li>
<li><strong>Industry Leading</strong> consultants designing you the futureproof
                                    solutions </li>
</ul>
</div>
</div>
</section>
<div className="trace-partner-grid">
<div className="trace-partner-item">
<div className="trace-partner-imgwrap">
<img loading="lazy" alt="Education" src="/assets/images/education.jpg"/>
</div>
<div className="trace-partner-content">
<h3>Education</h3>
<p>Connected campuses. Protected data. Engaged classrooms.</p>
<a href="/industries-details">
<div className="contact-one__btn-box pt-4">
<button className="thm-btn" type="button"><span>Know More</span><i className="icon-right-arrow"></i></button>
</div>
</a>
</div>
</div>
<div className="trace-partner-item">
<div className="trace-partner-imgwrap">
<img loading="lazy" alt="BFSI" src="/assets/images/bfsi.webp"/>
</div>
<div className="trace-partner-content">
<h3>Banking, Financial Services &amp; Insurance (BFSI)</h3>
<p>Milliseconds saved, compliance assured.</p>
<a href="/industries-details">
<div className="contact-one__btn-box pt-4">
<button className="thm-btn" type="button"><span>Know More</span><i className="icon-right-arrow"></i></button>
</div>
</a>
</div>
</div>
<div className="trace-partner-item">
<div className="trace-partner-imgwrap">
<img loading="lazy" alt="IT &amp; ITES" src="/assets/images/it.png"/>
</div>
<div className="trace-partner-content">
<h3>IT &amp; ITES</h3>
<p>Global delivery needs global-grade infrastructure.</p>
<a href="/industries-details;ites">
<div className="contact-one__btn-box pt-4">
<button className="thm-btn" type="button"><span>Know More</span><i className="icon-right-arrow"></i></button>
</div>
</a>
</div>
</div>
<div className="trace-partner-item">
<div className="trace-partner-imgwrap">
<img loading="lazy" alt="Government &amp; PSU" src="/assets/images/government.webp"/>
</div>
<div className="trace-partner-content">
<h3>Government &amp; PSU</h3>
<p>Mission-critical networks for national programmes.</p>
<a href="/industries-details;psu">
<div className="contact-one__btn-box pt-4">
<button className="thm-btn" type="button"><span>Know More</span><i className="icon-right-arrow"></i></button>
</div>
</a>
</div>
</div>
<div className="trace-partner-item">
<div className="trace-partner-imgwrap">
<img loading="lazy" alt="Hospitality" src="/assets/images/hospitality.png"/>
</div>
<div className="trace-partner-content">
<h3>Hospitality</h3>
<p>Flawless guest experience is non-negotiable.</p>
<a href="/industries-details">
<div className="contact-one__btn-box pt-4">
<button className="thm-btn" type="button"><span>Know More</span><i className="icon-right-arrow"></i></button>
</div>
</a>
</div>
</div>
<div className="trace-partner-item">
<div className="trace-partner-imgwrap">
<img loading="lazy" alt="Hospitals &amp; Healthcare" src="/assets/images/pharma.jpg"/>
</div>
<div className="trace-partner-content">
<h3>Hospitals &amp; Healthcare</h3>
<p>Secure patient data. Uninterrupted critical care operations.</p>
<a href="/industries-details">
<div className="contact-one__btn-box pt-4">
<button className="thm-btn" type="button"><span>Know More</span><i className="icon-right-arrow"></i></button>
</div>
</a>
</div>
</div>
<div className="trace-partner-item">
<div className="trace-partner-imgwrap">
<img loading="lazy" alt="Pharma &amp; Life Sciences" src="/assets/images/pharma.jpg"/>
</div>
<div className="trace-partner-content">
<h3>Pharma &amp; Life Sciences</h3>
<p>Protect IP. Accelerate discovery. Pass every audit.</p>
<a href="/industries-details;lifesciences">
<div className="contact-one__btn-box pt-4">
<button className="thm-btn" type="button"><span>Know More</span><i className="icon-right-arrow"></i></button>
</div>
</a>
</div>
</div>
</div>
</div>
      {/* Career CTA Section */}
      <section className="career-cta-section">
        <div className="career-cta-container">
          <h2 className="career-cta-title">Ready to Build a Future-Ready IT Environment?</h2>
          <p className="career-cta-text">
            Speak with a senior consultant today. In 30 minutes you'll know:
            <br /><br />
            • The top three risks hiding in your current stack<br />
            • Quick wins that boost performance without new hardware<br />
            • An exact timeline & cost estimate—no obligations
          </p>

          <div className="about-two__btn-box">
            <a href="https://wame.pro/tracenetwork" target="_blank" rel="noopener noreferrer" className="btn-get-started">
              <span className="btn-text">Book Your Free Strategy Call </span>
              <span className="btn-arrow"></span>
            </a>
          </div>
        </div>
      </section>


</section>




    </>
  );
}
