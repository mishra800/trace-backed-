import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to handle scrolling to hash anchors in React Router.
 * Accounts for fixed header height and waits for the DOM to fully render.
 */
export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    let hash = location.hash;

    if (!hash) {
      if (location.pathname === '/network-security/firewall') {
        hash = '#firewallsolutions';
      } else if (location.pathname === '/networking/network-switches') {
        hash = '#wirelessswitching';
      } else if (location.pathname === '/wireless-access-points' || location.pathname === '/networking/wireless-access-points') {
        hash = '#wirelessswitching';
      } else if (location.pathname === '/it-infrastructure/laptops-desktops-servers' || location.pathname === '/infrastructure/laptops-desktops-servers') {
        hash = '#laptops-desktops-servers';
      } else if (location.pathname === '/email-solutions/microsoft-365-google-workspace' || location.pathname === '/data-security/email-security') {
        hash = '#emailsecurity';
      } else if (location.pathname === '/collaboration/boardroom-solutions') {
        hash = '#roomsolutions';
      } else if (location.pathname === '/collaboration/interactive-panels') {
        hash = '#interactivepanels';
      } else if (location.pathname === '/network-security/endpoint-security-edr-xdr') {
        hash = '#edrxdr';
      } else if (location.pathname === '/access-security/mobile-device-management') {
        hash = '#mdm';
      } else if (location.pathname === '/data-security/data-loss-prevention') {
        hash = '#dlp';
      } else if (location.pathname === '/data-security/it-asset-management' || location.pathname === '/data-security/patch-management') {
        hash = '#assetpatchmanagement';
      } else if (location.pathname === '/visibility/siem') {
        hash = '#siem';
      } else if (location.pathname === '/networking/load-balancer') {
        hash = '#multiwanloadbalancer';
      } else if (location.pathname === '/networking/sd-wan') {
        hash = '#sdwan';
      } else if (location.pathname === '/access-security/privileged-access-management') {
        hash = '#pam';
      } else if (location.pathname === '/network-security/network-access-control') {
        hash = '#nac';
      } else if (location.pathname === '/it-infrastructure/hyperconverged-infrastructure') {
        hash = '#hypercovergedinfrastructure';
      } else if (location.pathname === '/it-infrastructure/storage-solutions') {
        hash = '#storage';
      } else if (location.pathname === '/network-security/ztna') {
        hash = '#ztna';
      }
    }

    if (!hash) {
      // No hash — scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elementId = decodeURIComponent(hash.substring(1)); // strip the leading # and decode URL encoding

    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (!element) return false;

      const header =
        document.querySelector('.stricky-header.stricky-fixed') ||
        document.querySelector('.main-header') ||
        document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;

      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 24;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      return true;
    };

    // Retry with increasing delays to handle async/lazy renders after page navigation
    const delays = [100, 300, 600, 1000, 1500];
    const timers = [];

    for (const delay of delays) {
      const t = setTimeout(() => {
        scrollToElement();
      }, delay);
      timers.push(t);
    }

    return () => timers.forEach(clearTimeout);
  // location.key changes on every navigation, ensuring this fires even when
  // pathname + hash are the same but the page was re-navigated to
  }, [location.key, location.pathname, location.hash]);
}
