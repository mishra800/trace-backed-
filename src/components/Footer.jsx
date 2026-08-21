import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="site-footer-two">
            <div className="site-footer-two__shape-1"></div>
            <div className="site-footer-two__shape-2"></div>
            <div className="site-footer-two__shape-3"></div>
            <div className="site-footer-two__top">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms">
                            <div className="site-footer-two__about">
                                <div className="site-footer-two__logo">
                                    <a href="#"><img loading="lazy" src="/assets/images/logoo.png" alt="Trace Network & Engineering Pvt Ltd" title="Trace Network & Engineering Pvt Ltd" width="220px"
                                            height="70px" /></a>
                                </div>
                                <ul className="list-unstyled site-footer-two__contact-list">
                                    <li>
                                        <div className="site-footer-two__contact-icon">
                                            <span className="icon-contact"></span>
                                        </div>
                                        <div className="site-footer-two__contact-content">
                                            <h5 className="site-footer-two__contact-title">Contact Info</h5>
                                            <p className="site-footer-two__contact-info">
                                                <a href="mailto:connect@tracenetwork.in"
                                                    className="site-footer-two__contact-mail" title="mail to">connect@tracenetwork.in</a>
                                                <a href="tel:+919000314411" className="site-footer-two__contact-phone" title="Phone">90003 14411</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="site-footer-two__contact-icon">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="site-footer-two__contact-content">
                                            <h5 className="site-footer-two__contact-title">Head Office</h5>
                                            <p className="site-footer-two__contact-info">
                                                Flat No:101 & 102, Plot No:809,<br />
                                                Venkoti Building, Near 100 Ft Road,<br />
                                                Ayyappa Society, Madhapur,<br />
                                                Hyderabad, Telangana – 500081.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                     
<div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
    <div className="footer-widget-two__quick-links">
        <h4 className="footer-widget-two__title">Quick Links</h4>
        <ul className="footer-widget-two__quick-links-list list-unstyled">
            <li><Link to="/"><span className="icon-right-arrow-2"></span>Home</Link></li>
            <li><Link to="/company-profile"><span className="icon-right-arrow-2"></span>Company Profile</Link></li>
            <li><Link to="/certificate"><span className="icon-right-arrow-2"></span>Certification &amp; Training</Link></li>
            <li><Link to="/events"><span className="icon-right-arrow-2"></span>Events</Link></li>
            <li><Link to="/blogs"><span className="icon-right-arrow-2"></span>Blogs</Link></li>
            <li><Link to="/partners"><span className="icon-right-arrow-2"></span>Partners</Link></li>
            <li><Link to="/contact-us"><span className="icon-right-arrow-2"></span>Contact</Link></li>
        </ul>
    </div>
</div>


<div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
    <div className="footer-widget-two__quick-links">
        <h4 className="footer-widget-two__title">Our Services</h4>
        <ul className="footer-widget-two__quick-links-list list-unstyled">
            <li><a href="/network-security"><span className="icon-right-arrow-2"></span>Cybersecurity</a></li>
            <li><a href="/networking"><span className="icon-right-arrow-2"></span>Networking</a></li>
            <li><a href="/infrastructure"><span className="icon-right-arrow-2"></span>Infrastructure</a></li>
            <li><a href="/visibility"><span className="icon-right-arrow-2"></span>Visibility</a></li>
            <li><a href="/collaboration"><span className="icon-right-arrow-2"></span>Collaboration</a></li>
            <li><a href="/noc"><span className="icon-right-arrow-2"></span>Managed Services</a></li>
            <li><a href="/security-audits"><span className="icon-right-arrow-2"></span>Security Audits</a></li>
            <li><a href="/iso"><span className="icon-right-arrow-2"></span>Compliance & Risk</a></li>
            <li><a href="/software-licensing-productivity-solutions"><span className="icon-right-arrow-2"></span>SL&PS</a></li>
            <li><a href="/security-testing/vapt-services"><span className="icon-right-arrow-2"></span>VAPT</a></li>
            <li><a href="/professional-services"><span className="icon-right-arrow-2"></span>Professional Services</a></li>
        </ul>
    </div>
</div>


                        
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
                            <div className="footer-widget-two__quick-links">
                                <h4 className="footer-widget-two__title">Our Location</h4>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6028.589507933379!2d78.38630706371838!3d17.44972100544268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91839cc5c417%3A0x6300c3b57aff6f19!2sTrace%20Network%20%26%20Engineering%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1749470788042!5m2!1sen!2sin"
                                    width="100%" height="240"  allowFullScreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className="site-footer-two__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer-two__bottom-inner">
                                <div className="site-footer-two__copyright">
                                    <p className="copyright mt-20">© {new Date().getFullYear()} <a
                                            href="/" title="best cybersecurity companies in hyderabad">Trace Network
                                            Engineering Pvt Ltd</a> All rights reserved.
                                    </p>
                                </div>
                                <div className="site-footer-two__social-box">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}
