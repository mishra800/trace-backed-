import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [openSourceOpen, setOpenSourceOpen] = useState(false);
  const location = useLocation();

  const whyTraceRoutes = [
    '/awards&accreditations', '/work-with-us', '/company-profile',
    '/case-studies', '/industries', '/industries-details', '/contact-us'
  ];
  const solutionsRoutes = [
    '/network-security', '/advancedthreat', '/datasolutions', '/cloudsecurity',
    '/accesssecurity', '/networking', '/infrastructure', '/visibility', '/collaboration',
    '/data-security', '/access-security', '/it-infrastructure'
  ];
  const servicesRoutes = [
    '/noc', '/fms', '/security-audits', '/iso', '/grc',
    '/software-licensing-productivity-solutions', '/network-penetration-testing',
    '/web-application-security-testing', '/mobile-applications-security-testing',
    '/cloud-penetration-testing', '/secure-code-review', '/professional-services',
    '/security-testing'
  ];
  const eventsRoutes = ['/events', '/blogs', '/news', '/view-blog', '/view-event'];

  const isActive = (routes) => routes.some(r => location.pathname.startsWith(r));
  const isHome = location.pathname === '/';

  const openMenu = () => setMobileMenuOpen(true);
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(prev => prev === id ? null : id);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {/* ── Desktop Header ── */}
      <header className="main-header-two">
        <nav className="main-menu main-menu-two">
          <div className="main-menu-two__wrapper">
            <div className="main-menu-two__wrapper-inner">

              {/* Logo */}
              <div className="main-menu-two__left">
                <div className="main-menu-two__logo">
                  <Link to="/">
                    <img loading="lazy" src="/assets/images/logoo.png"
                      style={{ width: '180px', height: 'auto' }}
                      alt="Trace Network & Engineering Pvt Ltd" />
                  </Link>
                </div>
              </div>

              {/* Desktop nav + hamburger */}
              <div className="main-menu-two__main-menu-box">
                {/* Hamburger — visible only on mobile via CSS */}
                <button
                  className="mobile-nav__toggler"
                  aria-label="Open navigation menu"
                  onClick={openMenu}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/* Desktop menu list */}
                <ul className="main-menu__list">
                  <li className={isHome ? 'activity' : ''}>
                    <Link to="/">Home</Link>
                  </li>

                  <li className={`dropdown${isActive(whyTraceRoutes) ? ' activity' : ''}`}>
                    <a href="#" onClick={e => e.preventDefault()}>Why Trace</a>
                    <ul>
                      <li><Link to="/awards&accreditations">Awards &amp; Accreditations</Link></li>
                      <li><Link to="/work-with-us">Work With Us</Link></li>
                      <li><Link to="/company-profile">Company Profile</Link></li>
                      <li><Link to="/case-studies">Case Studies</Link></li>
                      <li className="dropdown">
                        <Link to="/industries">Industries</Link>
                        <ul>
                          <li><Link to="/industries-details#education">Education</Link></li>
                          <li><Link to="/industries-details#bfsi">Banking, Financial Services &amp; Insurance (BFSI)</Link></li>
                          <li><Link to="/industries-details#it&ites">IT &amp; ITES</Link></li>
                          <li><Link to="/industries-details#goverment&psu">Government &amp; PSU</Link></li>
                          <li><Link to="/industries-details#healthcare">Hospitals &amp; Healthcare</Link></li>
                          <li><Link to="/industries-details#pharma&lifesciences">Pharma &amp; Life Sciences</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                  </li>

                  <li className={`dropdown${isActive(solutionsRoutes) ? ' activity' : ''}`}>
                    <a href="#" onClick={e => e.preventDefault()}>Solutions</a>
                    <ul>
                      <li className="dropdown">
                        <Link to="/network-security">Cybersecurity</Link>
                        <ul>
                          <li><Link to="/network-security/firewall">Firewall Solutions</Link></li>
                          <li><Link to="/network-security/endpoint-security-edr-xdr">EDR &amp; XDR</Link></li>
                          <li><Link to="/network-security/network-access-control">NAC</Link></li>
                          <li><Link to="/network-security#mdr">MDR</Link></li>
                          <li><Link to="/network-security/ztna">ZTNA</Link></li>
                          <li><Link to="/data-security/data-loss-prevention">DLP</Link></li>
                          <li><Link to="/data-security/email-security">Email Security</Link></li>
                          <li><Link to="/data-security/it-asset-management">Asset &amp; Patch Management</Link></li>
                          <li><Link to="/advancedthreat#ndr">NDR</Link></li>
                          <li><Link to="/cloudsecurity#casb">CASB</Link></li>
                          <li><Link to="/cloudsecurity#swg">SWG</Link></li>
                          <li><Link to="/accesssecurity#waf">WAF</Link></li>
                          <li><Link to="/access-security/mobile-device-management">MDM</Link></li>
                          <li><Link to="/datasolutions#backuprecovery">Backup &amp; Recovery</Link></li>
                          <li><Link to="/accesssecurity#iam">IAM</Link></li>
                          <li><Link to="/advancedthreat#sse">SSE</Link></li>
                          <li><Link to="/cloudsecurity#cloudsecurityposture">Cloud Security Posture Management</Link></li>
                          <li><Link to="/advancedthreat#sase">SASE</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/networking">Networking</Link>
                        <ul>
                          <li><Link to="/networking/sd-wan">SD WAN</Link></li>
                          <li><Link to="/wireless-access-points">Wireless Access Points</Link></li>
                          <li><Link to="/networking/network-switches">Network Switches</Link></li>
                          <li><Link to="/networking/load-balancer">Multi-WAN Load Balancer</Link></li>
                          <li><Link to="/networking#datacenterswitching">Data Center Switching</Link></li>
                          <li><Link to="/networking#private5g">Private 5G</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/infrastructure">Infrastructure</Link>
                        <ul>
                          <li><Link to="/it-infrastructure/hyperconverged-infrastructure">Hyper Converged Infrastructure</Link></li>
                          <li><Link to="/infrastructure#datacenterdisasterrecovery">Data Center-Disaster Recovery</Link></li>
                          <li><Link to="/it-infrastructure/storage-solutions">Storage</Link></li>
                          <li><Link to="/it-infrastructure/laptops-desktops-servers">Laptops &amp; Desktops</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/visibility">Visibility</Link>
                        <ul>
                          <li><Link to="/visibility/siem">SIEM</Link></li>
                          <li><Link to="/visibility#soar">SOAR</Link></li>
                          <li><Link to="/visibility#nms">NMS</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/collaboration">Collaboration</Link>
                        <ul>
                          <li><Link to="/collaboration/boardroom-solutions">Room Solutions</Link></li>
                          <li><Link to="/collaboration/interactive-panels">Interactive Panels</Link></li>
                          <li><Link to="/collaboration#podiums">Podiums</Link></li>
                          <li><Link to="/collaboration#avconferencing">AV Conferencing</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className={`dropdown${isActive(servicesRoutes) ? ' activity' : ''}`}>
                    <a href="#" onClick={e => e.preventDefault()}>Services</a>
                    <ul>
                      <li className="dropdown">
                        <Link to="/noc">Managed Services</Link>
                        <ul>
                          <li><Link to="/noc">NOC</Link></li>
                          <li><Link to="/fms">FMS</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/security-audits">Security Audits</Link>
                        <ul>
                          <li><Link to="/security-audits#network&wifiaudit">Network &amp; Wi-Fi Audit</Link></li>
                          <li><Link to="/security-audits#network&serverhardening">Network &amp; Server Hardening</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/iso">Compliance &amp; Risk</Link>
                        <ul>
                          <li><Link to="/iso">ISO 27001</Link></li>
                          <li><Link to="/grc">GRC</Link></li>
                          <li
                            className="open-source-tool-menu"
                            style={{ position: 'relative', listStyle: 'none' }}
                            onMouseEnter={() => setOpenSourceOpen(true)}
                            onMouseLeave={() => setOpenSourceOpen(false)}
                          >
                            <a
                              href="#"
                              onClick={e => e.preventDefault()}
                              style={{
                                display: 'block',
                                padding: '12px',
                                color: '#C5C8CD',
                                backgroundColor: '#0B192C',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontSize: '16px',
                                lineHeight: '1.4',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              Open Source TOOL
                            </a>
                            {openSourceOpen && (
                              <ul style={{
                                position: 'absolute',
                                top: 0,
                                left: '100%',
                                minWidth: '200px',
                                backgroundColor: '#0B192C',
                                borderRadius: '15px',
                                padding: '15px 10px',
                                zIndex: 99999,
                                boxShadow: '5px 10px 30px rgba(0,0,0,0.6)',
                                listStyle: 'none',
                                margin: 0,
                              }}>
                                <li style={{ listStyle: 'none', marginBottom: '4px' }}><Link to="/visibility#nms" style={{ display: 'block', padding: '10px 20px', color: '#C5C8CD', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', transition: 'all 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}>NMS</Link></li>
                                <li style={{ listStyle: 'none', marginBottom: '4px' }}><Link to="/accesssecurity#iam" style={{ display: 'block', padding: '10px 20px', color: '#C5C8CD', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', transition: 'all 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}>IAM</Link></li>
                                <li style={{ listStyle: 'none', marginBottom: '4px' }}><Link to="/data-security/it-asset-management" style={{ display: 'block', padding: '10px 20px', color: '#C5C8CD', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', transition: 'all 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}>Asset Management</Link></li>
                                <li style={{ listStyle: 'none', marginBottom: '4px' }}><Link to="/access-security/privileged-access-management" style={{ display: 'block', padding: '10px 20px', color: '#C5C8CD', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', transition: 'all 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}>PAM</Link></li>
                                <li style={{ listStyle: 'none' }}><Link to="/visibility/siem" style={{ display: 'block', padding: '10px 20px', color: '#C5C8CD', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', transition: 'all 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}>Syslog</Link></li>
                              </ul>
                            )}
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/software-licensing-productivity-solutions">Software Licensing &amp; Productivity</Link>
                        <ul>
                          <li><Link to="/software-licensing-productivity-solutions#googleworkspace">Google Workspace</Link></li>
                          <li><Link to="/software-licensing-productivity-solutions#office365">Office 365</Link></li>
                          <li><Link to="/software-licensing-productivity-solutions#zoom">Zoom</Link></li>
                          <li><Link to="/software-licensing-productivity-solutions#adobe">Adobe</Link></li>
                          <li><Link to="/software-licensing-productivity-solutions#bulksms">Bulk SMS</Link></li>
                          <li><Link to="/software-licensing-productivity-solutions#businesswhatsapp">Business WhatsApp</Link></li>
                          <li><Link to="/software-licensing-productivity-solutions#cloudtelephony">Cloud Telephone</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/network-penetration-testing">VAPT</Link>
                        <ul>
                          <li><Link to="/network-penetration-testing">Network Pen Testing</Link></li>
                          <li><Link to="/web-application-security-testing">Web App Security</Link></li>
                          <li><Link to="/mobile-applications-security-testing">Mobile App Security</Link></li>
                          <li><Link to="/cloud-penetration-testing">Cloud Pen Testing</Link></li>
                          <li><Link to="/secure-code-review">Secure Code Review</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/professional-services">Professional Services</Link>
                        <ul>
                          <li><Link to="/professional-services#disasterrecoveryplanning">Disaster Recovery Planning</Link></li>
                          <li><Link to="/professional-services#vciso">vCISO</Link></li>
                          <li><Link to="/professional-services#crisismanagement">Crisis Management Advisory</Link></li>
                          <li><Link to="/professional-services#securityposture">Security Posture Advisory</Link></li>
                          <li><Link to="/professional-services#configurationreview">Configuration Review Advisory</Link></li>
                          <li><Link to="/professional-services#digitalforensics">Digital Forensics</Link></li>
                          <li><Link to="/professional-services#diskandmemoryanalysis">Disk and Memory Analysis</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className={`dropdown${isActive(eventsRoutes) ? ' activity' : ''}`}>
                    <a href="#" onClick={e => e.preventDefault()}>Events &amp; Blogs</a>
                    <ul>
                      <li><Link to="/events">Events</Link></li>
                      <li><Link to="/blogs">Blogs</Link></li>
                      <li><Link to="/news">News</Link></li>
                    </ul>
                  </li>

                  <li
                    className={`custom-partners-menu partners-menu${location.pathname === '/partners' ? ' activity' : ''}`}
                    onMouseEnter={() => setPartnersOpen(true)}
                    onMouseLeave={() => setPartnersOpen(false)}
                  >
                    <a href="#" onClick={e => { e.preventDefault(); setPartnersOpen(prev => !prev); }}>Partners</a>
                  </li>

                  <li className={location.pathname === '/certificate' ? 'activity' : ''}>
                    <Link to="/certificate">Certification &amp; Training</Link>
                  </li>
                </ul>

                {/* Partners mega-menu (desktop hover) */}
                <div
                  className="partners-megamenu partners-desktop-only"
                  style={{ display: partnersOpen ? 'block' : 'none' }}
                  onMouseEnter={() => setPartnersOpen(true)}
                  onMouseLeave={() => setPartnersOpen(false)}
                  onClick={() => setPartnersOpen(false)}
                >
                  <div className="partners-grid">
                    <div className="partner-logo"><Link to="/partners?partner=sophos" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SOPHOS.jpg" alt="Sophos" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=hpearubanetworking" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/HPE-Aruba.jpg" alt="HPE Aruba" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=nutanix" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/nutanix.png" alt="Nutanix" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=veeam" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/VEEAM.jpg" alt="Veeam" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=tenable" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/TENABLE-2.jpg" alt="Tenable" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=hpe" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Hewlett-Packard-Enterprise-2.jpg" alt="HPE" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=zoho" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/zoho.png" alt="Zoho" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=seceon" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SECEON.jpg" alt="Seceon" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=k7security" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/k7.png" alt="K7 Security" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=peoplelink" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/PEOPLE-LINK.jpg" alt="Peoplelink" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=hp" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/HP.jpg" alt="HP" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=lenovo" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/LENOVO.jpg" alt="Lenovo" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=dell" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/DELL-2.jpg" alt="Dell" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=motadata" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/MOTADATA.jpg" alt="Motadata" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=accops" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/ACCOPS.jpg" alt="Accops" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=apple" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/APPLE-2.jpg" alt="Apple" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=jiocloud" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/jio.png" alt="Jio Cloud" style={{backgroundColor:'#fff', padding:'4px', borderRadius:'6px'}} /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=safetica" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SafeticaONE.jpg" alt="Safetica" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=logrythm" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Logrythm.jpg" alt="Logrythm" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=manageengine" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Manage-Engine.jpg" alt="ManageEngine" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=microsoft365" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/MICROSOFT-365-2.jpg" alt="Microsoft 365" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=azure" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/MICROSOFT-AZURE.jpg" alt="Microsoft Azure" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=42gears" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/42-Gears.jpg" alt="42 Gears" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=arcon" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/ARCON.jpg" alt="Arcon" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=cymmetri" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/cymmetri.png" alt="Cymmetri" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=gfisoftware" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/GFI-SOFTWARE.jpg" alt="GFI Software" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=poly" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/POPY.jpg" alt="Poly" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=paloalto" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Palo-Alto-Networks-2.jpg" alt="Palo Alto" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=forcepoint" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Forcepoint.jpg" alt="Forcepoint" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=vmware" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Vmware.jpg" alt="VMware" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=solarwinds" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SOLARWINDS.jpg" alt="Solarwinds" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=sify" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SIFY-2.jpg" alt="Sify" /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=ims" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/ims-logo.png" alt="Everest IMS" style={{backgroundColor:'#fff', padding:'6px', borderRadius:'6px'}} /></Link></div>
                    <div className="partner-logo"><Link to="/partners?partner=greythr" replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/hr/Screenshot 2026-05-26 001758.png" alt="greytHR" /></Link></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Market Place & Get In Touch */}
              <div className="main-menu-two__right">
                <div className="main-menu-two__btn-box" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <a
                    href="https://firewall-store.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-get-started btn-get-started--sm"
                    title="Market Place"
                  >
                    <span className="btn-text">Market Place</span>
                    <span className="btn-arrow"></span>
                  </a>

                  <Link to="/contact-us" className="btn-get-started btn-get-started--sm" title="Get In Touch">
                    <span className="btn-text">Get In Touch</span>
                    <span className="btn-arrow"></span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricked-menu main-menu main-menu-two">
        <div className="sticky-header__content"></div>
      </div>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Mobile Drawer Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <div className={`mobile-nav__wrapper${mobileMenuOpen ? ' expanded' : ''}`}>
        {/* Dark overlay Ã¢â‚¬â€ click to close */}
        <div className="mobile-nav__overlay" onClick={closeMenu}></div>

        <div className="mobile-nav__content">
          {/* Close button */}
          <span className="mobile-nav__close" onClick={closeMenu}>
            <i className="fa fa-times"></i>
          </span>

          {/* Logo */}
          <div className="logo-box">
            <Link to="/" onClick={closeMenu}>
              <img loading="lazy" src="/assets/images/logoo.png" width="150" alt="Trace Network" />
            </Link>
          </div>

          {/* Ã¢â€â‚¬Ã¢â€â‚¬ Nav items Ã¢â€â‚¬Ã¢â€â‚¬ */}
          <nav className="mob-nav">
            <ul className="mob-nav__list">

              {/* Home */}
              <li className="mob-nav__item">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`mob-nav__link${isHome ? ' mob-nav__link--active' : ''}`}
                >
                  Home
                </Link>
              </li>

              <li className="mob-nav__item">
                <Link
                  to="/certificate"
                  onClick={closeMenu}
                  className={`mob-nav__link${location.pathname === '/certificate' ? ' mob-nav__link--active' : ''}`}
                >
                  Certification &amp; Training
                </Link>
              </li>

              {/* Market Place */}
              <li className="mob-nav__item">
                <a
                  href="https://firewall-store.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mob-nav__link"
                >
                  Market Place
                </a>
              </li>

              {/* Why Trace */}
              <li className="mob-nav__item">
                <button
                  className={`mob-nav__toggle${isActive(whyTraceRoutes) ? ' mob-nav__link--active' : ''}`}
                  onClick={() => toggleDropdown('whytrace')}
                >
                  Why Trace
                  <i className={`fa fa-angle-${activeDropdown === 'whytrace' ? 'up' : 'down'}`}></i>
                </button>
                {activeDropdown === 'whytrace' && (
                  <ul className="mob-nav__sub">
                    <li><Link to="/awards&accreditations" onClick={closeMenu} className="mob-nav__sub-link">Awards &amp; Accreditations</Link></li>
                    <li><Link to="/work-with-us" onClick={closeMenu} className="mob-nav__sub-link">Work With Us</Link></li>
                    <li><Link to="/company-profile" onClick={closeMenu} className="mob-nav__sub-link">Company Profile</Link></li>
                    <li><Link to="/case-studies" onClick={closeMenu} className="mob-nav__sub-link">Case Studies</Link></li>
                    <li><Link to="/industries" onClick={closeMenu} className="mob-nav__sub-link">Industries</Link></li>
                    <li><Link to="/contact-us" onClick={closeMenu} className="mob-nav__sub-link">Contact Us</Link></li>
                  </ul>
                )}
              </li>

              {/* Solutions */}
              <li className="mob-nav__item">
                <button
                  className={`mob-nav__toggle${isActive(solutionsRoutes) ? ' mob-nav__link--active' : ''}`}
                  onClick={() => toggleDropdown('solutions')}
                >
                  Solutions
                  <i className={`fa fa-angle-${activeDropdown === 'solutions' ? 'up' : 'down'}`}></i>
                </button>
                {activeDropdown === 'solutions' && (
                  <ul className="mob-nav__sub">
                    <li><Link to="/network-security" onClick={closeMenu} className="mob-nav__sub-link">Cybersecurity</Link></li>
                    <li><Link to="/networking" onClick={closeMenu} className="mob-nav__sub-link">Networking</Link></li>
                    <li><Link to="/infrastructure" onClick={closeMenu} className="mob-nav__sub-link">Infrastructure</Link></li>
                    <li><Link to="/visibility" onClick={closeMenu} className="mob-nav__sub-link">Visibility</Link></li>
                    <li><Link to="/collaboration" onClick={closeMenu} className="mob-nav__sub-link">Collaboration</Link></li>
                  </ul>
                )}
              </li>

              {/* Services */}
              <li className="mob-nav__item">
                <button
                  className={`mob-nav__toggle${isActive(servicesRoutes) ? ' mob-nav__link--active' : ''}`}
                  onClick={() => toggleDropdown('services')}
                >
                  Services
                  <i className={`fa fa-angle-${activeDropdown === 'services' ? 'up' : 'down'}`}></i>
                </button>
                {activeDropdown === 'services' && (
                  <ul className="mob-nav__sub">
                    <li><Link to="/noc" onClick={closeMenu} className="mob-nav__sub-link">NOC</Link></li>
                    <li><Link to="/fms" onClick={closeMenu} className="mob-nav__sub-link">FMS</Link></li>
                    <li><Link to="/security-audits" onClick={closeMenu} className="mob-nav__sub-link">Security Audits</Link></li>
                    <li><Link to="/iso" onClick={closeMenu} className="mob-nav__sub-link">ISO 27001</Link></li>
                    <li><Link to="/grc" onClick={closeMenu} className="mob-nav__sub-link">GRC</Link></li>
                    <li><span className="mob-nav__sub-link" style={{color:'#ff7a00', fontWeight:'600', paddingLeft:'8px'}}>Open Source TOOL</span></li>
                    <li><Link to="/visibility#nms" onClick={closeMenu} className="mob-nav__sub-link" style={{paddingLeft:'24px'}}>↳ NMS</Link></li>
                    <li><Link to="/accesssecurity#iam" onClick={closeMenu} className="mob-nav__sub-link" style={{paddingLeft:'24px'}}>↳ IAM</Link></li>
                    <li><Link to="/data-security/it-asset-management" onClick={closeMenu} className="mob-nav__sub-link" style={{paddingLeft:'24px'}}>↳ Asset Management</Link></li>
                    <li><Link to="/access-security/privileged-access-management" onClick={closeMenu} className="mob-nav__sub-link" style={{paddingLeft:'24px'}}>↳ PAM</Link></li>
                    <li><Link to="/visibility/siem" onClick={closeMenu} className="mob-nav__sub-link" style={{paddingLeft:'24px'}}>↳ Syslog</Link></li>
                    <li><Link to="/software-licensing-productivity-solutions" onClick={closeMenu} className="mob-nav__sub-link">Software Licensing</Link></li>
                    <li><Link to="/security-testing/vapt-services" onClick={closeMenu} className="mob-nav__sub-link">Network Pen Testing</Link></li>
                    <li><Link to="/web-application-security-testing" onClick={closeMenu} className="mob-nav__sub-link">Web App Security</Link></li>
                    <li><Link to="/mobile-applications-security-testing" onClick={closeMenu} className="mob-nav__sub-link">Mobile App Security</Link></li>
                    <li><Link to="/cloud-penetration-testing" onClick={closeMenu} className="mob-nav__sub-link">Cloud Pen Testing</Link></li>
                    <li><Link to="/secure-code-review" onClick={closeMenu} className="mob-nav__sub-link">Secure Code Review</Link></li>
                    <li><Link to="/professional-services" onClick={closeMenu} className="mob-nav__sub-link">Professional Services</Link></li>
                    <li><Link to="/professional-services#digitalforensics" onClick={closeMenu} className="mob-nav__sub-link">Digital Forensics</Link></li>
                    <li><Link to="/professional-services#diskandmemoryanalysis" onClick={closeMenu} className="mob-nav__sub-link">Disk and Memory Analysis</Link></li>
                  </ul>
                )}
              </li>

              {/* Events & Blogs */}
              <li className="mob-nav__item">
                <button
                  className={`mob-nav__toggle${isActive(eventsRoutes) ? ' mob-nav__link--active' : ''}`}
                  onClick={() => toggleDropdown('events')}
                >
                  Events &amp; Blogs
                  <i className={`fa fa-angle-${activeDropdown === 'events' ? 'up' : 'down'}`}></i>
                </button>
                {activeDropdown === 'events' && (
                  <ul className="mob-nav__sub">
                    <li><Link to="/events" onClick={closeMenu} className="mob-nav__sub-link">Events</Link></li>
                    <li><Link to="/blogs" onClick={closeMenu} className="mob-nav__sub-link">Blogs</Link></li>
                    <li><Link to="/news" onClick={closeMenu} className="mob-nav__sub-link">News</Link></li>
                  </ul>
                )}
              </li>

              {/* Partners */}
              <li className="mob-nav__item">
                <button
                  className="mob-nav__toggle"
                  onClick={() => toggleDropdown('partners')}
                >
                  Partners
                  <i className={`fa fa-angle-${activeDropdown === 'partners' ? 'up' : 'down'}`}></i>
                </button>
                {activeDropdown === 'partners' && (
                  <div className="mob-nav__partners-grid">
                    <Link to="/partners?partner=sophos" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SOPHOS.jpg" alt="Sophos" /></Link>
                    <Link to="/partners?partner=hpearubanetworking" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/HPE-Aruba.jpg" alt="HPE Aruba" /></Link>
                    <Link to="/partners?partner=nutanix" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/nutanix.png" alt="Nutanix" /></Link>
                    <Link to="/partners?partner=veeam" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/VEEAM.jpg" alt="Veeam" /></Link>
                    <Link to="/partners?partner=tenable" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/TENABLE-2.jpg" alt="Tenable" /></Link>
                    <Link to="/partners?partner=hpe" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Hewlett-Packard-Enterprise-2.jpg" alt="HPE" /></Link>
                    <Link to="/partners?partner=zoho" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/zoho.png" alt="Zoho" /></Link>
                    <Link to="/partners?partner=seceon" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SECEON.jpg" alt="Seceon" /></Link>
                    <Link to="/partners?partner=k7security" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/k7.png" alt="K7 Security" /></Link>
                    <Link to="/partners?partner=peoplelink" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/PEOPLE-LINK.jpg" alt="Peoplelink" /></Link>
                    <Link to="/partners?partner=hp" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/HP.jpg" alt="HP" /></Link>
                    <Link to="/partners?partner=lenovo" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/LENOVO.jpg" alt="Lenovo" /></Link>
                    <Link to="/partners?partner=dell" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/DELL-2.jpg" alt="Dell" /></Link>
                    <Link to="/partners?partner=motadata" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/MOTADATA.jpg" alt="Motadata" /></Link>
                    <Link to="/partners?partner=accops" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/ACCOPS.jpg" alt="Accops" /></Link>
                    <Link to="/partners?partner=apple" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/APPLE-2.jpg" alt="Apple" /></Link>
                    <Link to="/partners?partner=jiocloud" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/jio.png" alt="Jio Cloud" style={{backgroundColor:'#fff', padding:'4px', borderRadius:'6px'}} /></Link>
                    <Link to="/partners?partner=safetica" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SafeticaONE.jpg" alt="Safetica" /></Link>
                    <Link to="/partners?partner=logrythm" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Logrythm.jpg" alt="Logrythm" /></Link>
                    <Link to="/partners?partner=manageengine" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Manage-Engine.jpg" alt="ManageEngine" /></Link>
                    <Link to="/partners?partner=microsoft365" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/MICROSOFT-365-2.jpg" alt="Microsoft 365" /></Link>
                    <Link to="/partners?partner=azure" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/MICROSOFT-AZURE.jpg" alt="Microsoft Azure" /></Link>
                    <Link to="/partners?partner=42gears" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/42-Gears.jpg" alt="42 Gears" /></Link>
                    <Link to="/partners?partner=arcon" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/ARCON.jpg" alt="Arcon" /></Link>
                    <Link to="/partners?partner=cymmetri" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/cymmetri.png" alt="Cymmetri" /></Link>
                    <Link to="/partners?partner=gfisoftware" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/GFI-SOFTWARE.jpg" alt="GFI Software" /></Link>
                    <Link to="/partners?partner=poly" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/POPY.jpg" alt="Poly" /></Link>
                    <Link to="/partners?partner=paloalto" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Palo-Alto-Networks-2.jpg" alt="Palo Alto" /></Link>
                    <Link to="/partners?partner=forcepoint" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Forcepoint.jpg" alt="Forcepoint" /></Link>
                    <Link to="/partners?partner=vmware" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/Vmware.jpg" alt="VMware" /></Link>
                    <Link to="/partners?partner=solarwinds" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SOLARWINDS.jpg" alt="Solarwinds" /></Link>
                    <Link to="/partners?partner=sify" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/partners/SIFY-2.jpg" alt="Sify" /></Link>
                    <Link to="/partners?partner=ims" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/ims-logo.png" alt="Everest IMS" style={{backgroundColor:'#fff', padding:'6px', borderRadius:'6px'}} /></Link>
                    <Link to="/partners?partner=greythr" onClick={closeMenu} replace={location.pathname === '/partners'}><img loading="lazy" src="/assets/images/hr/Screenshot 2026-05-26 001758.png" alt="greytHR" /></Link>
                  </div>
                )}
              </li>

            </ul>
          </nav>

          {/* Contact info */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:connect@tracenetwork.in">connect@tracenetwork.in</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+919000314411">9000314411</a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="https://www.facebook.com/tracenetworksolutions/" target="_blank" rel="noopener noreferrer" className="facebook">
                <span className="fab fa-facebook-f"></span>
              </a>
              <a href="https://www.youtube.com/@Tracenetworksolutions" target="_blank" rel="noopener noreferrer" className="youtube">
                <span className="fab fa-youtube"></span>
              </a>
              <a href="https://www.linkedin.com/company/tracenetwork/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="linkedin">
                <span className="fab fa-linkedin-in"></span>
              </a>
              <a href="https://wa.me/919000314411" target="_blank" rel="noopener noreferrer" className="whatsapp">
                <span className="fab fa-whatsapp"></span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}



