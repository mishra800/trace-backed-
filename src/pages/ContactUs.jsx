import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
import { API_ENDPOINTS } from '../config/api';

export default function ContactUs() {
  const seoData = getSEOData('contactUs');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Phone: '',
    subject: 'Network Solutions',
    message: ''
  });


  // Initialize nice-select plugin
  useEffect(() => {
    // Wait for jQuery to be available
    const initNiceSelect = () => {
      if (window.$ && window.$.fn.niceSelect) {
        window.$('select:not(.ignore)').niceSelect();
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initNiceSelect, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup nice-select on unmount
      if (window.$ && window.$.fn.niceSelect) {
        window.$('select:not(.ignore)').niceSelect('destroy');
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get subject directly from DOM select element to bypass nice-select event binding issues
    const form = e.target;
    const subject = form.subject?.value || 'Network Solutions';

    const finalFormData = {
      ...formData,
      subject
    };

    // Validate required fields
    const requiredFields = ['name', 'email', 'Phone', 'message'];
    const isValid = requiredFields.every(field => finalFormData[field].trim());
    if (!isValid) return;

    // Fire-and-forget: send to backend but don't block navigation on failure
    fetch(API_ENDPOINTS.CONTACT_SEND, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalFormData)
    }).catch((err) => console.warn('Contact API unavailable:', err));

    // Always navigate to thank-you page after validation passes
    navigate('/thank-you');
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
<h2>Contact Us</h2>
<div className="thm-breadcrumb__box">
<ul className="thm-breadcrumb list-unstyled">
<li><a href="/" title="best cybersecurity companies in hyd"><i className="fas fa-home"></i>Home</a></li>
<li><span className="icon-right-arrow-1"></span></li>
<li>Contact Us</li>
</ul>
</div>
</div>
</div>
</section>


<section className="contact-two">
<div className="contact-two__bg">
</div>
<div className="contact-two__shape-2"></div>
<div className="container">
<div className="row">
<div className="col-xl-6">
<div className="contact-two__right" data-wow-delay="100ms" data-wow-duration="2500ms">
<form className="contact-form-validated contact-one__form" id="contactForm" onSubmit={handleSubmit}>
<div className="row">
<div className="col-xl-6 col-lg-6">
<h4 className="contact-one__input-title">Full Name</h4>
<div className="contact-one__input-box">
<div className="contact-one__input-icon">
<span className="icon-user-1"></span>
</div>
<input 
  name="name" 
  placeholder="Enter your name" 
  required 
  type="text"
  value={formData.name}
  onChange={handleChange}
/>
</div>
</div>
<div className="col-xl-6 col-lg-6">
<h4 className="contact-one__input-title">Email Address</h4>
<div className="contact-one__input-box">
<div className="contact-one__input-icon">
<span className="icon-email"></span>
</div>
<input 
  name="email" 
  placeholder="example@gmail.com" 
  required 
  type="email"
  value={formData.email}
  onChange={handleChange}
/>
</div>
</div>
<div className="col-xl-6 col-lg-6">
<h4 className="contact-one__input-title">Phone Number</h4>
<div className="contact-one__input-box">
<div className="contact-one__input-icon">
<span className="icon-phone-call"></span>
</div>
<input 
  name="Phone" 
  placeholder="+91 **********" 
  required 
  type="text"
  value={formData.Phone}
  onChange={handleChange}
/>
</div>
</div>
<div className="col-xl-6 col-lg-6">
<h4 className="contact-one__input-title">Services</h4>
<div className="contact-one__input-box">
<select 
  name="subject" 
  required
  value={formData.subject}
  onChange={handleChange}
>
<option value="Network Solutions">Network Solutions</option>
<option value="Cloud Infrastructure">Cloud Infrastructure</option>
<option value="Cybersecurity/VAPT">Cybersecurity/VAPT</option>
<option value="Data Center Services">Data Center Services</option>
<option value="General Inquiry">General Inquiry</option>
</select>
</div>
</div>
</div>
<div className="col-xl-12">
<h4 className="contact-one__input-title">Inquiry about</h4>
<div className="contact-one__input-box text-message-box">
<div className="contact-one__input-icon">
<span className="icon-edit"></span>
</div>
<textarea 
  name="message" 
  placeholder="Write your message" 
  required
  value={formData.message}
  onChange={handleChange}
></textarea>
</div>

<p className="form-note">
                                        Submit your project brief today—your next 99.999 % uptime starts with one
                                        conversation.
                                    </p>
<div className="contact-one__btn-box">
<button className="thm-btn" type="submit">
  <span>Submit Now</span>
  <i className="icon-right-arrow"></i>
</button>
</div>
</div>
</form>

</div>
</div>

<div className="col-xl-6 col-lg-6">
<div className="contact-one__right">
<div className="section-title text-left">
<div className="section-title__tagline-box">
<div className="section-title__tagline-shape-1"></div>
<span className="section-title__tagline">Get In Touch</span>
<div className="section-title__tagline-shape-2"></div>
</div>
<h2 className="section-title__title">Tell Us <span>Your Most Pressing</span> IT Challenge</h2>
</div>
<p className="contact-one__text">
                                Whether you need to modernize a campus network, eliminate chronic downtime, deploy a
                                hybrid-cloud stack,
                                roll out hundreds of high performing PCs, close critical vulnerabilities, bullet-proof
                                your cyber-defenses
                                or scale securely into new regions – our architects, security specialists, and business
                                strategists are
                                ready to help.
                            </p>
<p className="contact-one__text">
                                Send us a short brief and our consultants will get back to you at the earliest with a
                                clear actionable step.
                            </p>

<h4 className="contact-one__input-title mt-4">What happens after you submit the form?</h4>
<ul className="contact-one__arrow-list list-unstyled">
<li> Response in ≤ 24 hours from a consultant</li>
<li> Discovery call to refine objectives, scope, timelines, and success metrics.</li>
<li> Tailored proposal with phased delivery options and transparent pricing.</li>
<li> Project launch with a dedicated account manager and weekly execution updates.</li>
</ul>
</div>
</div>
</div>
</div>
</section>


<section className="conversation-section-dark">
<div className="container">
<h2 className="section-title">Why Start the <span>Conversation?</span></h2>
<div className="conversation-grid">

<div className="conversation-card">
<h3>30-Minute Strategy Call</h3>
<p>A no-obligation meeting with a certified technical engineer to define the problem and discuss
                            the solution with clear execution steps.</p>
</div>

<div className="conversation-card">
<h3>Outcome-Focused Roadmap</h3>
<p>Receive a phased proposal linking every recommendation to measurable uptime, enhanced user
                            experience, and cost-optimization.</p>
</div>

<div className="conversation-card">
<h3>Seamless Support</h3>
<p>Get immediate access to certified specialists for accelerated troubleshooting and smooth
                            knowledge transfer.</p>
</div>

<div className="conversation-card">
<h3>Pre-Assessment Checklist</h3>
<p>A tailored list of artefacts (IPs, branches, critical assets) that speeds up analysis and
                            shortens project kick-off by up to 20%.</p>
</div>
</div>
</div>
</section>

<section className="map-section">
<iframe allowFullScreen="" className="map-frame" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100388.15268636234!2d78.391977!3d17.450815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91839cc5c417%3A0x6300c3b57aff6f19!2sTrace%20Network%20%26%20Engineering%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1754045754661!5m2!1sen!2sin"></iframe>
</section>
<div className="branch-grid pt-5 pb-5">

<div className="branch-card">
<iframe allowFullScreen="" className="branch-map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.820546398663!2d77.59592318968771!3d13.048561487681765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178f85e09fd1%3A0x9755221d11726ebd!2sChiranjeevi%20Layout%2C%20Hebbal%20Kempapura%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1761558519538!5m2!1sen!2sin"></iframe>
<div className="branch-details">
<h4>Bangalore</h4>
<p>
                Ground Floor, No.67, 3rd Main,<br/>
                Chiranjeevi Layout, Hebbal Kempapura,<br/>
                Bengaluru, Karnataka – 560024
            </p>
</div>
</div>

<div className="branch-card">
<iframe allowFullScreen="" className="branch-map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.08490065738!2d83.3028262!3d17.7275456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394324bde6b6df%3A0x556a07a5affc6bf1!2sSai%20Sadan%20Apartments!5e1!3m2!1sen!2sin!4v1761557468256!5m2!1sen!2sin"></iframe>
<div className="branch-details">
<h4>Visakhapatnam</h4>
<p>
                Door No-47-9-39/2, Flat Ground B,<br/>
                Sai Sadan Apartments, 3rd lane, Dwaraka Nagar,<br/>
                Visakhapatnam – 16<br/>
                Andhra Pradesh – 530016<br/>
</p>
</div>
</div>

<div className="branch-card">
<iframe allowFullScreen="" className="branch-map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.4921866218374!2d80.20712577373322!3d13.049163513175706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658a72449ae3%3A0x1cb7888219174663!2sInspire%20Network%20Technology%20Solutions%20Pvt%20Ltd.!5e1!3m2!1sen!2sin!4v1761557341975!5m2!1sen!2sin"></iframe>
<div className="branch-details">
<h4>Chennai</h4>
<p>
                INSPIRE NETWORK TECHNOLOGY SOLUTIONS PRIVATE LIMITED<br/>
                No. 158, 2nd Floor, Gulecha Tower,<br/>
                Arcot Road, Vadapalani, Chennai – 26<br/>
                Chennai – 600026, Tamil Nadu<br/>
</p>
</div>
</div>

<div className="branch-card">
<iframe allowFullScreen="" className="branch-map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.85008816093!2d80.6618070738067!3d16.49050462802505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fae821663db5%3A0xd7616926bcc65e97!2sSai%20Towers!5e1!3m2!1sen!2sin!4v1761557600099!5m2!1sen!2sin"></iframe>
<div className="branch-details">
<h4>Vijayawada</h4>
<p>
                3rd Floor, Sai Towers, Benz Circle<br/>
                Vijayawada, Andhra Pradesh – 520010<br/>
</p>
</div>
</div>
</div>




    </>
  );
}
