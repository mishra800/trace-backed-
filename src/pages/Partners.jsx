import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';
import './Partners.css';

// Lazy load all modular partner pages
const Sophos = lazy(() => import('./partners/Sophos'));
const Hpe = lazy(() => import('./partners/Hpe'));
const Aruba = lazy(() => import('./partners/Aruba'));
const Nutanix = lazy(() => import('./partners/Nutanix'));
const Veeam = lazy(() => import('./partners/Veeam'));
const Tenable = lazy(() => import('./partners/Tenable'));
const Dell = lazy(() => import('./partners/Dell'));
const Seceon = lazy(() => import('./partners/Seceon'));
const FortyTwoGears = lazy(() => import('./partners/FortyTwoGears'));
const Sify = lazy(() => import('./partners/Sify'));
const Accops = lazy(() => import('./partners/Accops'));
const Cymmetri = lazy(() => import('./partners/Cymmetri'));
const Motadata = lazy(() => import('./partners/Motadata'));
const Paloalto = lazy(() => import('./partners/Paloalto'));
const Peoplelink = lazy(() => import('./partners/Peoplelink'));
const Qualys = lazy(() => import('./partners/Qualys'));
const Safetica = lazy(() => import('./partners/Safetica'));
const ManageEngine = lazy(() => import('./partners/ManageEngine'));
const Acronis = lazy(() => import('./partners/Acronis'));
const Arcon = lazy(() => import('./partners/Arcon'));
const Apple = lazy(() => import('./partners/Apple'));
const GfiSoftware = lazy(() => import('./partners/GfiSoftware'));
const Hp = lazy(() => import('./partners/Hp'));
const Lenovo = lazy(() => import('./partners/Lenovo'));
const Vmware = lazy(() => import('./partners/Vmware'));
const SolarWinds = lazy(() => import('./partners/SolarWinds'));
const LogRhythm = lazy(() => import('./partners/LogRhythm'));
const Microsoft365 = lazy(() => import('./partners/Microsoft365'));
const Poly = lazy(() => import('./partners/Poly'));
const Azure = lazy(() => import('./partners/Azure'));
const Forcepoint = lazy(() => import('./partners/Forcepoint'));
const Greythr = lazy(() => import('./partners/Greythr'));
const Ims = lazy(() => import('./partners/Ims'));
const Zoho = lazy(() => import('./partners/Zoho'));
const K7Security = lazy(() => import('./partners/K7Security'));
const Jiocloud = lazy(() => import('./partners/Jiocloud'));

export default function Partners() {
  const location = useLocation();

  // Derive partner directly from URL
  const partnerParam = new URLSearchParams(location.search).get('partner');

  // Dynamic SEO based on partner parameter
  const getSEOForPartner = () => {
    if (partnerParam) {
      const partnerSEOKey = `partner${partnerParam.charAt(0).toUpperCase() + partnerParam.slice(1)}`;
      return getSEOData(partnerSEOKey) || getSEOData('partners');
    }
    return getSEOData('partners');
  };

  const seoData = getSEOForPartner();
  const [scrollProgress, setScrollProgress] = useState(0);

  const getPartnerTheme = (partner) => {
    switch (partner) {
      case 'hpe': return { color: '#00b08b', glow: 'rgba(0, 176, 139, 0.25)' };
      case 'hpearubanetworking': return { color: '#ff8300', glow: 'rgba(255, 131, 0, 0.25)' };
      case 'nutanix': return { color: '#00a4e4', glow: 'rgba(0, 164, 228, 0.25)' };
      case 'veeam': return { color: '#00b159', glow: 'rgba(0, 177, 89, 0.25)' };
      case 'tenable': return { color: '#22c55e', glow: 'rgba(34, 197, 94, 0.25)' };
      case 'sify': return { color: '#BDD70C', glow: 'rgba(189, 215, 12, 0.28)' };
      case 'accops': return { color: '#e81b23', glow: 'rgba(232, 27, 35, 0.25)' };
      case 'cymmetri': return { color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.25)' };
      case 'motadata': return { color: '#2563eb', glow: 'rgba(37, 99, 235, 0.25)' };
      case 'paloalto': return { color: '#ea580c', glow: 'rgba(234, 88, 12, 0.25)' };
      case 'peoplelink': return { color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.25)' };
      case 'qualys': return { color: '#ef4444', glow: 'rgba(239, 68, 68, 0.25)' };
      case 'safetica': return { color: '#00C9FF', glow: 'rgba(0, 201, 255, 0.25)' };
      case 'manageengine': return { color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.25)' };
      case 'dell': return { color: '#0078d4', glow: 'rgba(0, 120, 212, 0.25)' };
      case 'seceon': return { color: '#10b981', glow: 'rgba(16, 185, 129, 0.25)' };
      case '42gears': return { color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.25)' };
      case 'arcon': return { color: '#ef4444', glow: 'rgba(239, 68, 68, 0.25)' };
      case 'apple': return { color: '#a6a6a6', glow: 'rgba(166, 166, 166, 0.25)' };
      case 'gfisoftware': return { color: '#00AEEF', glow: 'rgba(0, 174, 239, 0.25)' };
      case 'hp': return { color: '#0096d6', glow: 'rgba(0, 150, 214, 0.25)' };
      case 'lenovo': return { color: '#e2231a', glow: 'rgba(226, 35, 26, 0.25)' };
      case 'vmware': return { color: '#00C9FF', glow: 'rgba(0, 201, 255, 0.25)' };
      case 'solarwinds': return { color: '#0096d6', glow: 'rgba(0, 150, 214, 0.25)' };
      case 'logrythm': return { color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.25)' };
      case 'microsoft365': return { color: '#ea4335', glow: 'rgba(234, 67, 53, 0.25)' };
      case 'poly': return { color: '#ff5a00', glow: 'rgba(255, 90, 0, 0.25)' };
      case 'azure': return { color: '#0089d0', glow: 'rgba(0, 137, 208, 0.25)' };
      case 'forcepoint': return { color: '#0078d4', glow: 'rgba(0, 120, 212, 0.25)' };
      case 'greythr': return { color: '#0284c7', glow: 'rgba(2, 132, 199, 0.25)' };
      case 'ims': return { color: '#1d6af5', glow: 'rgba(29, 106, 245, 0.25)' };
      case 'zoho': return { color: '#e8232a', glow: 'rgba(232, 35, 42, 0.25)' };
      case 'k7security': return { color: '#e8232a', glow: 'rgba(232, 35, 42, 0.25)' };
      case 'jiocloud': return { color: '#005b9f', glow: 'rgba(0, 91, 159, 0.25)' };
      case 'sophos': return { color: '#eb5a0f', glow: 'rgba(235, 90, 15, 0.25)' };
      default: return { color: '#eb5a0f', glow: 'rgba(235, 90, 15, 0.25)' };
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const theme = getPartnerTheme(partnerParam || 'sophos');
    
    // Set dynamic brand variables on document body
    document.body.style.setProperty('--FuzionIQ-base', theme.color);
    document.body.style.setProperty('--accent-color', theme.color);
    document.body.style.setProperty('--accent-glow', theme.glow);

    // Scroll progress indicator — throttled with requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up body variables on unmount or theme change
      document.body.style.removeProperty('--FuzionIQ-base');
      document.body.style.removeProperty('--accent-color');
      document.body.style.removeProperty('--accent-glow');
    };
  }, [location, partnerParam]);

  // Determine which sub-page to render
  const renderPartnerPage = () => {
    switch (partnerParam) {
      case 'hpe':
        return <Hpe />;
      case 'hpearubanetworking':
        return <Aruba />;
      case 'nutanix':
        return <Nutanix />;
      case 'veeam':
        return <Veeam />;
      case 'tenable':
        return <Tenable />;
      case 'dell':
        return <Dell />;
      case 'seceon':
        return <Seceon />;
      case '42gears':
        return <FortyTwoGears />;
      case 'sify':
        return <Sify />;
      case 'accops':
        return <Accops />;
      case 'cymmetri':
        return <Cymmetri />;
      case 'motadata':
        return <Motadata />;
      case 'paloalto':
        return <Paloalto />;
      case 'peoplelink':
        return <Peoplelink />;
      case 'qualys':
        return <Qualys />;
      case 'safetica':
        return <Safetica />;
      case 'manageengine':
        return <ManageEngine />;
      case 'arcon':
        return <Arcon />;
      case 'apple':
        return <Apple />;
      case 'gfisoftware':
        return <GfiSoftware />;
      case 'hp':
        return <Hp />;
      case 'lenovo':
        return <Lenovo />;
      case 'vmware':
        return <Vmware />;
      case 'solarwinds':
        return <SolarWinds />;
      case 'logrythm':
        return <LogRhythm />;
      case 'microsoft365':
        return <Microsoft365 />;
      case 'poly':
        return <Poly />;
      case 'azure':
        return <Azure />;
      case 'forcepoint':
        return <Forcepoint />;
      case 'greythr':
        return <Greythr />;
      case 'ims':
        return <Ims />;
      case 'zoho':
        return <Zoho />;
      case 'k7security':
        return <K7Security />;
      case 'jiocloud':
        return <Jiocloud />;
      case 'sophos':
        return <Sophos showSophosAward={true} />;
      default:
        // Default page is Sophos without the award highlights (or fallback)
        return <Sophos showSophosAward={false} />;
    }
  };

  return (
    <div className={`${partnerParam === 'sophos' || !partnerParam ? 'sophos-page' : ''} partner-${partnerParam || 'sophos'}`}>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        ></div>
      </div>

      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />
      
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          color: 'var(--accent-color, #eb5a0f)',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              border: '3px solid rgba(255,255,255,0.1)',
              borderLeftColor: 'var(--accent-color, #eb5a0f)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 12px'
            }}></div>
            <p style={{ fontSize: '14px', fontWeight: '500', opacity: 0.8 }}>Loading Partner Content...</p>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      }>
        {renderPartnerPage()}
      </Suspense>
    </div>
  );
}
