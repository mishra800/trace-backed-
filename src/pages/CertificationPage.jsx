import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CertAuthModal from '../components/CertAuthModal';
import { getCurrentCertUser, logoutCertUser } from '../utils/userAuth';
import './CertificationPage.css';

const coursesData = [
  {
    id: 1,
    title: 'Sophos Certified Engineer & Security Architect',
    category: 'Cybersecurity',
    badge: 'Platinum Partner',
    duration: '5 hours',
    image: '/assets/images/partners/SOPHOS.jpg',
    tags: ['Sophos', 'XG Firewall', 'MDR Defense'],
    level: 'Certification'
  },
  {
    id: 2,
    title: 'Aruba Certified Mobility & Switching Specialist',
    category: 'Network Security',
    badge: 'Enterprise',
    duration: '4 hours',
    image: '/assets/images/partners/HPE-Aruba.jpg',
    tags: ['HPE Aruba', 'Wireless', 'SD-WAN'],
    level: 'Certification'
  },
  {
    id: 3,
    title: 'Nutanix Certified Professional (NCP) & HCI Specialist',
    category: 'Cloud & Infra',
    badge: 'Featured',
    duration: '6 hours',
    image: '/assets/images/partners/nutanix.png',
    tags: ['Nutanix', 'HCI Infrastructure', 'Prism Central'],
    level: 'Certification'
  },
  {
    id: 4,
    title: 'Qualys Certified Vulnerability Management & VMDR',
    category: 'Compliance & VAPT',
    badge: 'ISO Standard',
    duration: '4 hours',
    image: '/assets/images/partners/QUALYS.jpg',
    tags: ['Qualys', 'VMDR', 'Cyber Risk Assessment'],
    level: 'Certification'
  }
];

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [highContrast, setHighContrast] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [studentName, setStudentName] = useState('Alex Johnson');

  // Auth & Details state
  const [currentUser, setCurrentUser] = useState(getCurrentCertUser());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authCourse, setAuthCourse] = useState(null);

  const handleViewDetails = (course) => {
    setAuthCourse(course);
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
  };

  const categories = ['All', 'Cybersecurity', 'Cloud & Infra', 'Network Security', 'Compliance & VAPT'];

  const filteredCourses = coursesData.filter((course) => {
    const matchesTab = activeTab === 'All' || course.category === activeTab;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Certifications & Training Academy | Trace Network</title>
        <meta
          name="description"
          content="Explore globally recognized cybersecurity, cloud infrastructure, and network security training certifications from Trace Network Academy."
        />
      </Helmet>

      <div className={`cert-page ${highContrast ? 'high-contrast' : ''}`}>
        
        {/* ── Hero Section & Category Tabs ── */}
        <section className="cert-hero">
          <div className="container">
            <h1 className="cert-hero__title">Popular Training & Certifications</h1>
            <p className="cert-hero__subtitle">
              Advance your career and secure your enterprise with industry-accredited training programs and globally recognized certification courses.
            </p>
          </div>
        </section>

        {/* ── Course / Certification Grid Section ── */}
        <section className="cert-grid-section">
          <div className="container">
            <div className="cert-grid">
              {displayedCourses.map((course) => (
                <div className="cert-card" key={course.id}>
                  <div className="cert-card__img-box">
                    <img src={course.image} alt={course.title} loading="lazy" />
                    <span className={`cert-card__badge ${course.badge.toLowerCase().replace(' ', '-')}`}>
                      {course.badge}
                    </span>
                  </div>

                  <div className="cert-card__body">
                    <h3 className="cert-card__title">{course.title}</h3>

                    <button
                      className="cert-card__action-btn"
                      onClick={() => handleViewDetails(course)}
                    >
                      <i className="fas fa-certificate"></i> View Certification Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length > 8 && (
              <div className="cert-view-all-box">
                <button
                  className="btn-cert-view-all"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? 'Show Fewer Courses' : 'View All Training'}
                </button>
              </div>
            )}
          </div>
        </section>



        {/* ── Sample Certificate Preview Modal ── */}
        {selectedCourse && (
          <div className="cert-modal-overlay" onClick={() => setSelectedCourse(null)}>
            <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal__close" onClick={() => setSelectedCourse(null)}>
                <i className="fas fa-times"></i>
              </button>

              <div className="cert-document">
                <div className="cert-document__header">Trace Network Academy</div>
                <div className="cert-document__sub">Certificate of Completion</div>

                <p className="cert-document__presented">This is proudly presented to</p>
                <input
                  type="text"
                  className="cert-document__recipient-input"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter Student Name"
                />

                <p className="cert-document__presented">for successfully completing the official certification course</p>
                <h3 className="cert-document__course-title">{selectedCourse.title}</h3>

                <div className="cert-document__footer">
                  <div style={{ textAlign: 'left', fontSize: '12px', color: '#64748B' }}>
                    <strong>Certificate ID:</strong> TRACE-CERT-{selectedCourse.id}892<br />
                    <strong>Issued:</strong> August 2026<br />
                    <strong>Accreditation:</strong> ISO 27001 & Trace Network Certified
                  </div>
                  <div className="cert-document__seal">
                    <i className="fas fa-award"></i>
                  </div>
                </div>
              </div>

              <div className="cert-modal__actions">
                <button
                  className="btn-cert-login"
                  onClick={() => alert(`Certificate for ${studentName} verified!`)}
                >
                  Verify Certificate ID
                </button>
                <button
                  className="btn-cert-signup"
                  onClick={() => alert(`Downloading Certificate for ${studentName}...`)}
                >
                  Download PDF Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Authentication & Sign Up Pop-Up Modal ── */}
        <CertAuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          course={authCourse}
          onSuccess={handleAuthSuccess}
        />
      </div>
    </>
  );
}
