// src/utils/userAuth.js
// Certification & Training User Authentication & Admin Management Utility

import { API_ENDPOINTS } from '../config/api';

const USERS_STORAGE_KEY = 'registered_cert_users';

const CURRENT_USER_KEY = 'current_cert_user';
const LAST_REGISTRATION_KEY = 'last_cert_registration_data';

export const getLastRegistrationData = () => {
  return null;
};

export const saveLastRegistrationData = (data) => {
  // No-op: Do not persist registration inputs so subsequent sign-ups start fresh
};

export const clearLastRegistrationData = () => {
  try {
    localStorage.removeItem(LAST_REGISTRATION_KEY);
  } catch (err) {
    console.error('Error clearing last registration data:', err);
  }
};

const INITIAL_USERS = [
  {
    id: 'usr_demo_1',
    fullName: 'Rajesh Kumar',
    email: 'rajesh@enterprise.com',
    phone: '+91 9876543210',
    company: 'Enterprise Security Solutions',
    passwordHash: '••••••••',
    passwordPlain: 'Password123',
    status: 'active',
    accessAllowed: true,
    createdAt: '2026-08-16T10:00:00.000Z'
  }
];

export const getRegisteredUsers = () => {
  try {
    const data = localStorage.getItem(USERS_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_USERS));
      return INITIAL_USERS;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading registered users from localStorage:', err);
    return INITIAL_USERS;
  }
};

export const saveRegisteredUsers = (users) => {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (err) {
    console.error('Error saving registered users to localStorage:', err);
  }
};

const DISALLOWED_FREE_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'yahoo.co.in',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'aol.com',
  'protonmail.com',
  'zoho.com',
  'rediffmail.com',
  'ymail.com',
  'mail.com',
  'gmx.com'
];

export const isOfficialEmail = (email) => {
  if (!email || typeof email !== 'string' || !email.includes('@')) return false;
  const parts = email.trim().toLowerCase().split('@');
  if (parts.length !== 2 || !parts[0] || !parts[1]) return false;
  const domain = parts[1];
  return !DISALLOWED_FREE_DOMAINS.includes(domain);
};

export const registerUser = ({ fullName, email, phone, company, password }) => {
  const cleanEmail = (email || '').trim().toLowerCase();
  const users = getRegisteredUsers();

  // Validate all fields mandatory
  if (!fullName || !cleanEmail || !phone || !company || !password) {
    return {
      success: false,
      message: 'All fields are mandatory. Please provide Full Name, Official Email ID, Contact Number, Company Name, and Password.'
    };
  }

  // Validate official domain email (no gmail or personal webmail domains)
  if (!isOfficialEmail(cleanEmail)) {
    return {
      success: false,
      isInvalidEmail: true,
      message: 'Only official corporate domain emails are allowed. Personal webmail domains (like @gmail.com) cannot be used to register.'
    };
  }

  // Clear saved draft registration data on submission
  clearLastRegistrationData();

  // Check if existing customer attempts to sign up again
  const existingUser = users.find((u) => u.email === cleanEmail);
  if (existingUser) {
    if (existingUser.status === 'pending' || !existingUser.accessAllowed) {
      return {
        success: false,
        isPending: true,
        message: 'Thank you for submitting your details- Trace team shortly contact you.'
      };
    }
    if (existingUser.status === 'deactivated') {
      return {
        success: false,
        isDeactivated: true,
        message: 'Your account is currently Deactivated. Please contact Admin for activation.'
      };
    }
    return {
      success: false,
      isExisting: true,
      message: 'Existing account found. Your account is Active / Allowed. Please log in using your credentials.'
    };
  }

  const newUser = {
    id: 'usr_' + Date.now(),
    fullName: (fullName || '').trim(),
    email: cleanEmail,
    phone: (phone || '').trim(),
    company: (company || '').trim(),
    passwordHash: '••••••••',
    passwordPlain: password,
    status: 'pending',
    accessAllowed: false,
    createdAt: new Date().toISOString()
  };

  const updatedUsers = [newUser, ...users];
  saveRegisteredUsers(updatedUsers);

  // Trigger backend email service to notify Vaibhav@tracenetwork.in, ranadeep@tracenetwork.in, ravi@tracenetwork.in
  try {
    fetch(API_ENDPOINTS.CONTACT_CERTIFICATE_REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: newUser.fullName,
        email: newUser.email,
        phone: newUser.phone,
        company: newUser.company
      })
    }).catch((err) => console.warn('Certificate registration mail API error:', err));
  } catch (err) {
    console.warn('Certificate registration API exception:', err);
  }

  return {
    success: true,
    user: newUser,
    message: 'Thank you for submitting your details- Trace team shortly contact you.'
  };
};

export const loginUser = ({ email, password }) => {
  const cleanEmail = (email || '').trim().toLowerCase();
  const users = getRegisteredUsers();

  const user = users.find((u) => u.email === cleanEmail);

  if (!user || user.passwordPlain !== password) {
    return {
      success: false,
      message: 'Invalid email ID or password. Please check your credentials.'
    };
  }

  // Check if administrator has not yet approved or deactivated access
  if (user.status === 'pending' || !user.accessAllowed) {
    return {
      success: false,
      isPending: true,
      message: 'Your account is pending Admin approval. You will be able to log in once Admin sets your status to "Active / Allowed".'
    };
  }

  if (user.status === 'deactivated') {
    return {
      success: false,
      isDeactivated: true,
      message: 'Your account is Deactivated by Admin. Access is currently disabled.'
    };
  }

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return {
    success: true,
    user
  };
};

export const getCurrentCertUser = () => {
  try {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    if (!data) return null;
    const current = JSON.parse(data);
    
    // Validate that current user is still active in master users list
    const users = getRegisteredUsers();
    const match = users.find((u) => u.id === current.id || u.email === current.email);

    if (!match || match.status !== 'active' || !match.accessAllowed) {
      logoutCertUser();
      return null;
    }
    return match;
  } catch (err) {
    return null;
  }
};

export const logoutCertUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// ── Admin Operations ──

export const approveUser = (userId) => {
  const users = getRegisteredUsers();
  const updated = users.map((u) => {
    if (u.id === userId) {
      return {
        ...u,
        status: 'active',
        accessAllowed: true
      };
    }
    return u;
  });
  saveRegisteredUsers(updated);
  return updated;
};

export const toggleUserAccess = (userId) => {
  const users = getRegisteredUsers();
  const updated = users.map((u) => {
    if (u.id === userId) {
      const nextStatus = u.status === 'active' ? 'deactivated' : 'active';
      return {
        ...u,
        status: nextStatus,
        accessAllowed: nextStatus === 'active'
      };
    }
    return u;
  });
  saveRegisteredUsers(updated);
  return updated;
};

export const deleteUser = (userId) => {
  const users = getRegisteredUsers();
  const updated = users.filter((u) => u.id !== userId);
  saveRegisteredUsers(updated);
  return updated;
};

export const resetUserPassword = (userId, newPassword) => {
  const users = getRegisteredUsers();
  const updated = users.map((u) => {
    if (u.id === userId) {
      return {
        ...u,
        passwordPlain: newPassword
      };
    }
    return u;
  });
  saveRegisteredUsers(updated);
  return updated;
};
