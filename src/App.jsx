import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import VaptPopup from './components/VaptPopup'
import StickySocial from './components/StickySocial'
import { useStickyHeader } from './hooks/useStickyHeader'
import { useAOS } from './hooks/useAOS'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useScrollToHash } from './hooks/useScrollToHash'
import { useSectionScrollUrl } from './hooks/useSectionScrollUrl'

// Lazy load page components
const Home = lazy(() => import('./pages/Home'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminBlogs = lazy(() => import('./pages/admin/AdminBlogs'))
const CreateBlog = lazy(() => import('./pages/admin/CreateBlog'))
const EditBlog = lazy(() => import('./pages/admin/EditBlog'))
const AdminEvents = lazy(() => import('./pages/admin/AdminEvents'))
const CreateEvent = lazy(() => import('./pages/admin/CreateEvent'))
const EditEvent = lazy(() => import('./pages/admin/EditEvent'))
const ChangePassword = lazy(() => import('./pages/admin/ChangePassword'))
const AdminNews = lazy(() => import('./pages/admin/AdminNews'))
const CreateNews = lazy(() => import('./pages/admin/CreateNews'))
const EditNews = lazy(() => import('./pages/admin/EditNews'))
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'))
const ViewBlog = lazy(() => import('./pages/ViewBlog'))
const ViewEvent = lazy(() => import('./pages/ViewEvent'))
const Blogs = lazy(() => import('./pages/Blogs'))
const Accesssecurity = lazy(() => import('./pages/Accesssecurity'))
const Advancedthreat = lazy(() => import('./pages/Advancedthreat'))
const Allsectionspage = lazy(() => import('./pages/Allsectionspage'))
const AwardsAccreditations = lazy(() => import('./pages/AwardsAccreditations'))
const CertificationPage = lazy(() => import('./pages/CertificationPage'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CloudPenetrationTesting = lazy(() => import('./pages/CloudPenetrationTesting'))
const Cloudsecurity = lazy(() => import('./pages/Cloudsecurity'))
const Collaboration = lazy(() => import('./pages/Collaboration'))
const CompanyProfile = lazy(() => import('./pages/CompanyProfile'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const ThankYou = lazy(() => import('./pages/ThankYou'))
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'))
const Cybersecurityy = lazy(() => import('./pages/Cybersecurityy'))
const Datasolutions = lazy(() => import('./pages/Datasolutions'))
const Events = lazy(() => import('./pages/Events'))
const Eventss = lazy(() => import('./pages/Eventss'))
const Firewallsolutions = lazy(() => import('./pages/Firewallsolutions'))
const Fms = lazy(() => import('./pages/Fms'))
const Grc = lazy(() => import('./pages/Grc'))
const IndustriesDetails = lazy(() => import('./pages/IndustriesDetails'))
const Industries = lazy(() => import('./pages/Industries'))
const Infrastructure = lazy(() => import('./pages/Infrastructure'))
const InternationalSchoolsItAvUpgrades = lazy(() => import('./pages/InternationalSchoolsItAvUpgrades'))
const Iso = lazy(() => import('./pages/Iso'))
const MobileApplicationsSecurityTesting = lazy(() => import('./pages/MobileApplicationsSecurityTesting'))
const NetworkPenetrationTesting = lazy(() => import('./pages/NetworkPenetrationTesting'))
const Networking = lazy(() => import('./pages/Networking'))
const Networksecurity = lazy(() => import('./pages/Networksecurity'))
const News = lazy(() => import('./pages/News'))
const Noc = lazy(() => import('./pages/Noc'))
const Partners = lazy(() => import('./pages/Partners'))
const PharmaceuticalNetworkInfrastructure = lazy(() => import('./pages/PharmaceuticalNetworkInfrastructure'))
const ProfessionalServices = lazy(() => import('./pages/ProfessionalServices'))
const SecureCodeReview = lazy(() => import('./pages/SecureCodeReview'))
const SecurityAudits = lazy(() => import('./pages/SecurityAudits'))
const SoftwareLicensingProductivitySolutions = lazy(() => import('./pages/SoftwareLicensingProductivitySolutions'))
const UniversityItLearningEcosystem = lazy(() => import('./pages/UniversityItLearningEcosystem'))
const Visibility = lazy(() => import('./pages/Visibility'))
const WebApplicationSecurityTesting = lazy(() => import('./pages/WebApplicationSecurityTesting'))
const WorkWithUs = lazy(() => import('./pages/WorkWithUs'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Sleek loading fallback spinner matching the branding
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#111827',
    zIndex: 9999,
    color: '#fff',
    fontFamily: 'system-ui, sans-serif'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        border: '4px solid rgba(255,255,255,0.1)',
        borderLeftColor: '#d44a00',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px'
      }}></div>
      <p style={{ fontSize: '16px', fontWeight: '500', color: '#9ca3af' }}>Loading Trace...</p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}

function ExternalRedirect({ to }) {
  React.useEffect(() => {
    window.location.href = to;
  }, [to]);
  return null;
}

function AppContent() {
  // Initialize global hooks inside Router and AuthProvider context
  useStickyHeader();
  useAOS();
  useCustomCursor();
  useScrollToHash();
  useSectionScrollUrl();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Admin routes — no Header/Footer */}
        <Route path="/login" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/blogs" element={
          <ProtectedRoute>
            <AdminBlogs />
          </ProtectedRoute>
        } />
        <Route path="/admin/blogs/create" element={
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
        } />
        <Route path="/admin/blogs/edit/:id" element={
          <ProtectedRoute>
            <EditBlog />
          </ProtectedRoute>
        } />
        <Route path="/admin/events" element={
          <ProtectedRoute>
            <AdminEvents />
          </ProtectedRoute>
        } />
        <Route path="/admin/events/create" element={
          <ProtectedRoute>
            <CreateEvent />
          </ProtectedRoute>
        } />
        <Route path="/admin/events/edit/:id" element={
          <ProtectedRoute>
            <EditEvent />
          </ProtectedRoute>
        } />
        <Route path="/admin/change-password" element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        } />
        <Route path="/admin/news" element={
          <ProtectedRoute>
            <AdminNews />
          </ProtectedRoute>
        } />
        <Route path="/admin/news/create" element={
          <ProtectedRoute>
            <CreateNews />
          </ProtectedRoute>
        } />
        <Route path="/admin/news/edit/:id" element={
          <ProtectedRoute>
            <EditNews />
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute>
            <AdminUsers />
          </ProtectedRoute>
        } />

        {/* Public routes — with Header/Footer */}
        <Route path="*" element={<PublicLayout />} />
      </Routes>
    </Suspense>
  );
}

function PublicLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname.toLowerCase().includes('admin') ||
    location.pathname.toLowerCase().includes('login') ||
    location.pathname.toLowerCase().startsWith('/admin');

  return (
    <div className="page-wrapper">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/view-blog/:id" element={<ViewBlog />} />
          <Route path="/view-event/:id" element={<ViewEvent />} />
          <Route path="/accesssecurity" element={<Accesssecurity />} />
          <Route path="/access-security/mobile-device-management" element={<Accesssecurity />} />
          <Route path="/access-security/privileged-access-management" element={<Accesssecurity />} />
          <Route path="/advancedthreat" element={<Advancedthreat />} />
          <Route path="/allsectionspage" element={<Allsectionspage />} />
          <Route path="/awards&accreditations" element={<AwardsAccreditations />} />
          {/* Certification & Training */}
          <Route path="/certificate" element={<CertificationPage />} />
          <Route path="/certifications" element={<CertificationPage />} />
          <Route path="/academy" element={<CertificationPage />} />
          <Route path="/marketplace" element={<ExternalRedirect to="https://firewall-store.com/" />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/cloud-penetration-testing" element={<CloudPenetrationTesting />} />
          <Route path="/cloudsecurity" element={<Cloudsecurity />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/collaboration/boardroom-solutions" element={<Collaboration />} />
          <Route path="/collaboration/interactive-panels" element={<Collaboration />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/cybersecurityy" element={<Cybersecurityy />} />
          <Route path="/datasolutions" element={<Datasolutions />} />
          <Route path="/data-security/data-loss-prevention" element={<Datasolutions />} />
          <Route path="/data-security/it-asset-management" element={<Datasolutions />} />
          <Route path="/data-security/patch-management" element={<Datasolutions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventss" element={<Eventss />} />
          <Route path="/firewallsolutions" element={<Navigate to="/network-security/firewall" replace />} />
          <Route path="/fms" element={<Fms />} />
          <Route path="/grc" element={<Grc />} />
          <Route path="/industries-details" element={<IndustriesDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/it-infrastructure/hyperconverged-infrastructure" element={<Infrastructure />} />
          <Route path="/it-infrastructure/storage-solutions" element={<Infrastructure />} />
          <Route path="/international-schools-it-av-upgrades" element={<InternationalSchoolsItAvUpgrades />} />
          <Route path="/iso" element={<Iso />} />
          <Route path="/mobile-applications-security-testing" element={<MobileApplicationsSecurityTesting />} />
          <Route path="/network-penetration-testing" element={<NetworkPenetrationTesting />} />
          <Route path="/security-testing/vapt-services" element={<NetworkPenetrationTesting />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/networking/network-switches" element={<Networking />} />
          <Route path="/networking/load-balancer" element={<Networking />} />
          <Route path="/networking/sd-wan" element={<Networking />} />
          <Route path="/wireless-access-points" element={<Networking />} />
          <Route path="/networking/wireless-access-points" element={<Networking />} />
          <Route path="/network-security" element={<Networksecurity />} />
          <Route path="/network-security/firewall" element={<Networksecurity />} />
          <Route path="/network-security/endpoint-security-edr-xdr" element={<Networksecurity />} />
          <Route path="/network-security/ztna" element={<Networksecurity />} />
          <Route path="/network-security/network-access-control" element={<Advancedthreat />} />
          <Route path="/networksecurity" element={<Navigate to="/network-security" replace />} />
          <Route path="/email-solutions/microsoft-365-google-workspace" element={<Datasolutions />} />
          <Route path="/data-security/email-security" element={<Datasolutions />} />
          <Route path="/emailsecurity" element={<Navigate to="/data-security/email-security" replace />} />
          <Route path="/it-infrastructure/laptops-desktops-servers" element={<Infrastructure />} />
          <Route path="/infrastructure/laptops-desktops-servers" element={<Infrastructure />} />
          <Route path="/news" element={<News />} />
          <Route path="/noc" element={<Noc />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/pharmaceutical-network-infrastructure" element={<PharmaceuticalNetworkInfrastructure />} />
          <Route path="/professional-services" element={<ProfessionalServices />} />
          <Route path="/secure-code-review" element={<SecureCodeReview />} />
          <Route path="/security-audits" element={<SecurityAudits />} />
          <Route path="/software-licensing-productivity-solutions" element={<SoftwareLicensingProductivitySolutions />} />
          <Route path="/university-it-learning-ecosystem" element={<UniversityItLearningEcosystem />} />
          <Route path="/visibility" element={<Visibility />} />
          <Route path="/visibility/siem" element={<Visibility />} />
          <Route path="/web-application-security-testing" element={<WebApplicationSecurityTesting />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      {!isAdminPage && <VaptPopup />}
      <StickySocial />
    </div>
  );
}

export default App
