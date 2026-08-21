// API Configuration — ensuring absolute URL in production and preventing duplicate /api suffixes
const getBaseUrl = () => {
  const url = import.meta.env.PROD 
    ? (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL !== '/api' 
        ? import.meta.env.VITE_API_URL 
        : 'https://trace-backed-1.onrender.com/api')
    : (import.meta.env.VITE_API_URL || '/api');
  
  // Strip trailing /api if it exists because the endpoints below already prepend /api/
  return url.endsWith('/api') ? url.substring(0, url.length - 4) : url;
};

const API_BASE_URL = getBaseUrl();

export const API_ENDPOINTS = {
  // Contact endpoints
  CONTACT_SEND: `${API_BASE_URL}/api/contact/send`,
  CONTACT_CAREER: `${API_BASE_URL}/api/contact/submit`,
  CONTACT_SERVICE_REQUEST: `${API_BASE_URL}/api/contact/service-request`,
  CONTACT_CERTIFICATE_REGISTER: `${API_BASE_URL}/api/contact/certificate-register`,
  
  // Auth endpoints
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  
  // Blog endpoints
  BLOGS_LIST: `${API_BASE_URL}/api/blogs`,
  BLOGS_CREATE: `${API_BASE_URL}/api/blogs`,
  BLOGS_UPDATE: (id) => `${API_BASE_URL}/api/blogs/${id}`,
  BLOGS_DELETE: (id) => `${API_BASE_URL}/api/blogs/${id}`,
  
  // Event endpoints
  EVENTS_LIST: `${API_BASE_URL}/api/events`,
  EVENTS_CREATE: `${API_BASE_URL}/api/events`,
  EVENTS_UPDATE: (id) => `${API_BASE_URL}/api/events/${id}`,
  EVENTS_DELETE: (id) => `${API_BASE_URL}/api/events/${id}`,
};

export default API_BASE_URL;
