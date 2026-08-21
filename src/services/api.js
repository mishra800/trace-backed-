import axios from 'axios';

// Base URL for API - uses environment variable with fallback, ensuring absolute URL in production
const getBaseUrl = () => {
  return import.meta.env.PROD 
    ? (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL !== '/api' 
        ? import.meta.env.VITE_API_URL 
        : 'https://trace-backed-1.onrender.com/api')
    : (import.meta.env.VITE_API_URL || '/api');
};

const API_BASE_URL = getBaseUrl();
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT, 10) || 60000;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

// ============================================
// BLOG API CALLS
// ============================================

export const blogAPI = {
  // Get all blogs — cache-busting param prevents stale responses
  getAll: async () => {
    try {
      const response = await api.get('/blogs', {
        params: { _t: Date.now() },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Get single blog by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  // Create new blog
  create: async (blogData) => {
    try {
      const response = await api.post('/blogs', blogData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },

  // Update blog
  update: async (id, blogData) => {
    try {
      const response = await api.put(`/blogs/${id}`, blogData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  },

  // Delete blog
  delete: async (id) => {
    try {
      const response = await api.delete(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  },
};

// ============================================
// EVENT API CALLS
// ============================================

export const eventAPI = {
  // Get all events
  getAll: async () => {
    try {
      const response = await api.get('/events');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Get single event by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/events/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  },

  // Create new event
  create: async (eventData) => {
    try {
      const isFormData = eventData instanceof FormData;
      const response = await api.post('/events', eventData, {
        headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
      });
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  // Update event
  update: async (id, eventData) => {
    try {
      const isFormData = eventData instanceof FormData;
      const response = await api.put(`/events/${id}`, eventData, {
        headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
      });
      return response.data;
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  },

  // Delete event
  delete: async (id) => {
    try {
      const response = await api.delete(`/events/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  },
};

// ============================================
// ADMIN AUTH API CALLS
// ============================================

export const authAPI = {
  // Admin login
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  // Admin logout
  logout: () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin';
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('adminToken');
  },

  // Get current admin info
  getCurrentAdmin: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      console.error('Error fetching admin info:', error);
      throw error;
    }
  },

  // Change admin password
  changePassword: async (passwords) => {
    try {
      const response = await api.post('/auth/change-password', passwords);
      return response.data;
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  },

  // Ping backend to wake it up or check health
  ping: async () => {
    try {
      const response = await api.get('/health', { timeout: 60000 });
      return response.data;
    } catch (error) {
      console.error('Ping error:', error);
      throw error;
    }
  },
};

// ============================================
// NEWS API CALLS
// ============================================

export const newsAPI = {
  getAll: async () => {
    try {
      const response = await api.get('/news', {
        params: { _t: Date.now() },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/news/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news article:', error);
      throw error;
    }
  },

  create: async (newsData) => {
    try {
      const isFormData = newsData instanceof FormData;
      const response = await api.post('/news', newsData, {
        headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
      });
      return response.data;
    } catch (error) {
      console.error('Error creating news article:', error);
      throw error;
    }
  },

  update: async (id, newsData) => {
    try {
      const isFormData = newsData instanceof FormData;
      const response = await api.put(`/news/${id}`, newsData, {
        headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
      });
      return response.data;
    } catch (error) {
      console.error('Error updating news article:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/news/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting news article:', error);
      throw error;
    }
  },
};

// ============================================
// FILE UPLOAD API
// ============================================

export const uploadAPI = {
  // Upload image
  uploadImage: async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await api.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },
};

export default api;
