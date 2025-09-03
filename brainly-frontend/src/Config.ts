export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

if (!import.meta.env.VITE_BACKEND_URL) {
    console.warn('VITE_BACKEND_URL is not defined in environment variables. Using default:', BACKEND_URL);
}