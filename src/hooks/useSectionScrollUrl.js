import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Mapping of pages and section IDs to target URLs as defined in header dropdowns.
 */
const SECTION_URL_MAP = {
  // ── Network Security / Cybersecurity Page ──
  '/network-security': {
    base: '/network-security',
    sections: [
      { id: 'firewallsolutions', url: '/network-security/firewall' },
      { id: 'edrxdr', url: '/network-security/endpoint-security-edr-xdr' },
      { id: 'mdr', url: '/network-security#mdr' },
      { id: 'ztna', url: '/network-security/ztna' }
    ]
  },
  '/network-security/firewall': {
    base: '/network-security',
    sections: [
      { id: 'firewallsolutions', url: '/network-security/firewall' },
      { id: 'edrxdr', url: '/network-security/endpoint-security-edr-xdr' },
      { id: 'mdr', url: '/network-security#mdr' },
      { id: 'ztna', url: '/network-security/ztna' }
    ]
  },
  '/network-security/endpoint-security-edr-xdr': {
    base: '/network-security',
    sections: [
      { id: 'firewallsolutions', url: '/network-security/firewall' },
      { id: 'edrxdr', url: '/network-security/endpoint-security-edr-xdr' },
      { id: 'mdr', url: '/network-security#mdr' },
      { id: 'ztna', url: '/network-security/ztna' }
    ]
  },
  '/network-security/ztna': {
    base: '/network-security',
    sections: [
      { id: 'firewallsolutions', url: '/network-security/firewall' },
      { id: 'edrxdr', url: '/network-security/endpoint-security-edr-xdr' },
      { id: 'mdr', url: '/network-security#mdr' },
      { id: 'ztna', url: '/network-security/ztna' }
    ]
  },

  // ── Advanced Threat ──
  '/advancedthreat': {
    base: '/advancedthreat',
    sections: [
      { id: 'nac', url: '/network-security/network-access-control' },
      { id: 'ndr', url: '/advancedthreat#ndr' },
      { id: 'sse', url: '/advancedthreat#sse' },
      { id: 'sase', url: '/advancedthreat#sase' }
    ]
  },
  '/network-security/network-access-control': {
    base: '/network-security/network-access-control',
    sections: [
      { id: 'nac', url: '/network-security/network-access-control' },
      { id: 'ndr', url: '/advancedthreat#ndr' },
      { id: 'sse', url: '/advancedthreat#sse' },
      { id: 'sase', url: '/advancedthreat#sase' }
    ]
  },

  // ── Networking Page ──
  '/networking': {
    base: '/networking',
    sections: [
      { id: 'sdwan', url: '/networking/sd-wan' },
      { id: 'wirelessswitching', url: '/networking/network-switches' },
      { id: 'multiwanloadbalancer', url: '/networking/load-balancer' },
      { id: 'datacenterswitching', url: '/networking#datacenterswitching' },
      { id: 'private5g', url: '/networking#private5g' }
    ]
  },
  '/networking/sd-wan': {
    base: '/networking',
    sections: [
      { id: 'sdwan', url: '/networking/sd-wan' },
      { id: 'wirelessswitching', url: '/networking/network-switches' },
      { id: 'multiwanloadbalancer', url: '/networking/load-balancer' },
      { id: 'datacenterswitching', url: '/networking#datacenterswitching' },
      { id: 'private5g', url: '/networking#private5g' }
    ]
  },
  '/networking/network-switches': {
    base: '/networking',
    sections: [
      { id: 'sdwan', url: '/networking/sd-wan' },
      { id: 'wirelessswitching', url: '/networking/network-switches' },
      { id: 'multiwanloadbalancer', url: '/networking/load-balancer' },
      { id: 'datacenterswitching', url: '/networking#datacenterswitching' },
      { id: 'private5g', url: '/networking#private5g' }
    ]
  },
  '/wireless-access-points': {
    base: '/networking',
    sections: [
      { id: 'sdwan', url: '/networking/sd-wan' },
      { id: 'wirelessswitching', url: '/wireless-access-points' },
      { id: 'multiwanloadbalancer', url: '/networking/load-balancer' },
      { id: 'datacenterswitching', url: '/networking#datacenterswitching' },
      { id: 'private5g', url: '/networking#private5g' }
    ]
  },
  '/networking/wireless-access-points': {
    base: '/networking',
    sections: [
      { id: 'sdwan', url: '/networking/sd-wan' },
      { id: 'wirelessswitching', url: '/wireless-access-points' },
      { id: 'multiwanloadbalancer', url: '/networking/load-balancer' },
      { id: 'datacenterswitching', url: '/networking#datacenterswitching' },
      { id: 'private5g', url: '/networking#private5g' }
    ]
  },
  '/networking/load-balancer': {
    base: '/networking',
    sections: [
      { id: 'sdwan', url: '/networking/sd-wan' },
      { id: 'wirelessswitching', url: '/networking/network-switches' },
      { id: 'multiwanloadbalancer', url: '/networking/load-balancer' },
      { id: 'datacenterswitching', url: '/networking#datacenterswitching' },
      { id: 'private5g', url: '/networking#private5g' }
    ]
  },

  // ── Infrastructure Page ──
  '/infrastructure': {
    base: '/infrastructure',
    sections: [
      { id: 'hypercovergedinfrastructure', url: '/it-infrastructure/hyperconverged-infrastructure' },
      { id: 'datacenterdisasterrecovery', url: '/infrastructure#datacenterdisasterrecovery' },
      { id: 'storage', url: '/it-infrastructure/storage-solutions' },
      { id: 'cloudstorage', url: '/infrastructure#cloudstorage' },
      { id: 'laptops-desktops-servers', url: '/it-infrastructure/laptops-desktops-servers' }
    ]
  },
  '/it-infrastructure/hyperconverged-infrastructure': {
    base: '/infrastructure',
    sections: [
      { id: 'hypercovergedinfrastructure', url: '/it-infrastructure/hyperconverged-infrastructure' },
      { id: 'datacenterdisasterrecovery', url: '/infrastructure#datacenterdisasterrecovery' },
      { id: 'storage', url: '/it-infrastructure/storage-solutions' },
      { id: 'cloudstorage', url: '/infrastructure#cloudstorage' },
      { id: 'laptops-desktops-servers', url: '/it-infrastructure/laptops-desktops-servers' }
    ]
  },
  '/it-infrastructure/storage-solutions': {
    base: '/infrastructure',
    sections: [
      { id: 'hypercovergedinfrastructure', url: '/it-infrastructure/hyperconverged-infrastructure' },
      { id: 'datacenterdisasterrecovery', url: '/infrastructure#datacenterdisasterrecovery' },
      { id: 'storage', url: '/it-infrastructure/storage-solutions' },
      { id: 'cloudstorage', url: '/infrastructure#cloudstorage' },
      { id: 'laptops-desktops-servers', url: '/it-infrastructure/laptops-desktops-servers' }
    ]
  },
  '/it-infrastructure/laptops-desktops-servers': {
    base: '/infrastructure',
    sections: [
      { id: 'hypercovergedinfrastructure', url: '/it-infrastructure/hyperconverged-infrastructure' },
      { id: 'datacenterdisasterrecovery', url: '/infrastructure#datacenterdisasterrecovery' },
      { id: 'storage', url: '/it-infrastructure/storage-solutions' },
      { id: 'cloudstorage', url: '/infrastructure#cloudstorage' },
      { id: 'laptops-desktops-servers', url: '/it-infrastructure/laptops-desktops-servers' }
    ]
  },
  '/infrastructure/laptops-desktops-servers': {
    base: '/infrastructure',
    sections: [
      { id: 'hypercovergedinfrastructure', url: '/it-infrastructure/hyperconverged-infrastructure' },
      { id: 'datacenterdisasterrecovery', url: '/infrastructure#datacenterdisasterrecovery' },
      { id: 'storage', url: '/it-infrastructure/storage-solutions' },
      { id: 'cloudstorage', url: '/infrastructure#cloudstorage' },
      { id: 'laptops-desktops-servers', url: '/it-infrastructure/laptops-desktops-servers' }
    ]
  },

  // ── Visibility Page ──
  '/visibility': {
    base: '/visibility',
    sections: [
      { id: 'siem', url: '/visibility/siem' },
      { id: 'soar', url: '/visibility#soar' },
      { id: 'nms', url: '/visibility#nms' }
    ]
  },
  '/visibility/siem': {
    base: '/visibility',
    sections: [
      { id: 'siem', url: '/visibility/siem' },
      { id: 'soar', url: '/visibility#soar' },
      { id: 'nms', url: '/visibility#nms' }
    ]
  },

  // ── Collaboration Page ──
  '/collaboration': {
    base: '/collaboration',
    sections: [
      { id: 'roomsolutions', url: '/collaboration/boardroom-solutions' },
      { id: 'interactivepanels', url: '/collaboration/interactive-panels' },
      { id: 'podiums', url: '/collaboration#podiums' },
      { id: 'avconferencing', url: '/collaboration#avconferencing' }
    ]
  },
  '/collaboration/boardroom-solutions': {
    base: '/collaboration',
    sections: [
      { id: 'roomsolutions', url: '/collaboration/boardroom-solutions' },
      { id: 'interactivepanels', url: '/collaboration/interactive-panels' },
      { id: 'podiums', url: '/collaboration#podiums' },
      { id: 'avconferencing', url: '/collaboration#avconferencing' }
    ]
  },
  '/collaboration/interactive-panels': {
    base: '/collaboration',
    sections: [
      { id: 'roomsolutions', url: '/collaboration/boardroom-solutions' },
      { id: 'interactivepanels', url: '/collaboration/interactive-panels' },
      { id: 'podiums', url: '/collaboration#podiums' },
      { id: 'avconferencing', url: '/collaboration#avconferencing' }
    ]
  },

  // ── Data Solutions Page ──
  '/datasolutions': {
    base: '/datasolutions',
    sections: [
      { id: 'dlp', url: '/data-security/data-loss-prevention' },
      { id: 'emailsecurity', url: '/data-security/email-security' },
      { id: 'assetpatchmanagement', url: '/data-security/it-asset-management' },
      { id: 'backuprecovery', url: '/datasolutions#backuprecovery' }
    ]
  },
  '/data-security/data-loss-prevention': {
    base: '/datasolutions',
    sections: [
      { id: 'dlp', url: '/data-security/data-loss-prevention' },
      { id: 'emailsecurity', url: '/data-security/email-security' },
      { id: 'assetpatchmanagement', url: '/data-security/it-asset-management' },
      { id: 'backuprecovery', url: '/datasolutions#backuprecovery' }
    ]
  },
  '/data-security/email-security': {
    base: '/datasolutions',
    sections: [
      { id: 'dlp', url: '/data-security/data-loss-prevention' },
      { id: 'emailsecurity', url: '/data-security/email-security' },
      { id: 'assetpatchmanagement', url: '/data-security/it-asset-management' },
      { id: 'backuprecovery', url: '/datasolutions#backuprecovery' }
    ]
  },
  '/data-security/it-asset-management': {
    base: '/datasolutions',
    sections: [
      { id: 'dlp', url: '/data-security/data-loss-prevention' },
      { id: 'emailsecurity', url: '/data-security/email-security' },
      { id: 'assetpatchmanagement', url: '/data-security/it-asset-management' },
      { id: 'backuprecovery', url: '/datasolutions#backuprecovery' }
    ]
  },

  // ── Cloud Security Page ──
  '/cloudsecurity': {
    base: '/cloudsecurity',
    sections: [
      { id: 'casb', url: '/cloudsecurity#casb' },
      { id: 'swg', url: '/cloudsecurity#swg' },
      { id: 'cloudsecurityposture', url: '/cloudsecurity#cloudsecurityposture' }
    ]
  },

  // ── Access Security Page ──
  '/accesssecurity': {
    base: '/accesssecurity',
    sections: [
      { id: 'waf', url: '/accesssecurity#waf' },
      { id: 'mdm', url: '/access-security/mobile-device-management' },
      { id: 'iam', url: '/accesssecurity#iam' },
      { id: 'pam', url: '/access-security/privileged-access-management' }
    ]
  },
  '/access-security/mobile-device-management': {
    base: '/accesssecurity',
    sections: [
      { id: 'waf', url: '/accesssecurity#waf' },
      { id: 'mdm', url: '/access-security/mobile-device-management' },
      { id: 'iam', url: '/accesssecurity#iam' },
      { id: 'pam', url: '/access-security/privileged-access-management' }
    ]
  },
  '/access-security/privileged-access-management': {
    base: '/accesssecurity',
    sections: [
      { id: 'waf', url: '/accesssecurity#waf' },
      { id: 'mdm', url: '/access-security/mobile-device-management' },
      { id: 'iam', url: '/accesssecurity#iam' },
      { id: 'pam', url: '/access-security/privileged-access-management' }
    ]
  },

  // ── Software Licensing Page ──
  '/software-licensing-productivity-solutions': {
    base: '/software-licensing-productivity-solutions',
    sections: [
      { id: 'googleworkspace', url: '/software-licensing-productivity-solutions#googleworkspace' },
      { id: 'office365', url: '/software-licensing-productivity-solutions#office365' },
      { id: 'zoom', url: '/software-licensing-productivity-solutions#zoom' },
      { id: 'adobe', url: '/software-licensing-productivity-solutions#adobe' },
      { id: 'bulksms', url: '/software-licensing-productivity-solutions#bulksms' },
      { id: 'businesswhatsapp', url: '/software-licensing-productivity-solutions#businesswhatsapp' },
      { id: 'cloudtelephony', url: '/software-licensing-productivity-solutions#cloudtelephony' }
    ]
  },

  // ── Security Audits Page ──
  '/security-audits': {
    base: '/security-audits',
    sections: [
      { id: 'network&wifiaudit', url: '/security-audits#network&wifiaudit' },
      { id: 'network&serverhardening', url: '/security-audits#network&serverhardening' }
    ]
  },

  // ── Professional Services Page ──
  '/professional-services': {
    base: '/professional-services',
    sections: [
      { id: 'disasterrecoveryplanning', url: '/professional-services#disasterrecoveryplanning' },
      { id: 'vciso', url: '/professional-services#vciso' },
      { id: 'crisismanagement', url: '/professional-services#crisismanagement' },
      { id: 'securityposture', url: '/professional-services#securityposture' },
      { id: 'configurationreview', url: '/professional-services#configurationreview' },
      { id: 'digitalforensics', url: '/professional-services#digitalforensics' },
      { id: 'diskandmemoryanalysis', url: '/professional-services#diskandmemoryanalysis' }
    ]
  },

  // ── Industries Details Page ──
  '/industries-details': {
    base: '/industries-details',
    sections: [
      { id: 'education', url: '/industries-details#education' },
      { id: 'bfsi', url: '/industries-details#bfsi' },
      { id: 'it&ites', url: '/industries-details#it&ites' },
      { id: 'goverment&psu', url: '/industries-details#goverment&psu' },
      { id: 'healthcare', url: '/industries-details#healthcare' },
      { id: 'pharma&lifesciences', url: '/industries-details#pharma&lifesciences' }
    ]
  }
};

/**
 * Custom hook that updates the browser address bar (via replaceState)
 * as the user scrolls into different sections of solution pages.
 */
export function useSectionScrollUrl() {
  const location = useLocation();

  useEffect(() => {
    const pageConfig = SECTION_URL_MAP[location.pathname];
    if (!pageConfig || !pageConfig.sections || pageConfig.sections.length === 0) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;

        const scrollY = window.scrollY || window.pageYOffset;

        // If near top of page (above first section)
        if (scrollY < 180) {
          const currentUrl = window.location.pathname + window.location.hash;
          if (currentUrl !== pageConfig.base) {
            window.history.replaceState(window.history.state, '', pageConfig.base);
          }
          return;
        }

        let activeSection = null;
        const triggerThreshold = 260; // offset below top viewport for sticky header

        for (const sec of pageConfig.sections) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // Active if top edge of section heading is at/above trigger point
            // and section bottom is still visible in lower screen
            if (rect.top <= triggerThreshold && rect.bottom > 120) {
              activeSection = sec;
            }
          }
        }

        if (activeSection) {
          const currentUrl = window.location.pathname + window.location.hash;
          if (currentUrl !== activeSection.url) {
            window.history.replaceState(window.history.state, '', activeSection.url);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial check once mounted
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
}
