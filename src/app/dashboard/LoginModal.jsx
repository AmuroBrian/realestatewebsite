'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTimes, FaEnvelope, FaLock, FaGoogle, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';

import { auth, db } from '../script/firebaseConfig';
import { signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

// LoginModal now accepts an additional prop: showAlert
const LoginModal = ({ isOpen, onClose, showAlert }) => { // Added showAlert prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(''); // This error is for inline display in the modal

  // Use useEffect to clear inputs when the modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');
      setError('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous inline errors
    setIsSubmitting(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);

      showAlert('Login successful!', 'success'); // Use the passed showAlert for success
      onClose(); // Close modal on successful login

    } catch (firebaseError) {
      console.error('Firebase login error:', firebaseError);
      let errorMessage = 'Login failed. Please try again.';
      let alertType = 'error'; // Default alert type for errors

      switch (firebaseError.code) {
        case 'auth/invalid-credential':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage = 'Invalid email or password.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Your account has been disabled.';
          break;
        default:
          errorMessage = firebaseError.message;
          break;
      }
      // Display error message inline in the modal (for immediate feedback)
      setError(errorMessage);
      // Also show the enhanced alert for errors if desired, or rely solely on inline error
      // showAlert(errorMessage, alertType); // Uncomment this line if you want the custom modal to pop up on error too
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle Google Sign-in
  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    setError(''); // Clear previous inline errors
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google login successful:', user);
      showAlert('Login successful with Google!', 'success'); // Use custom alert
      onClose();
    } catch (error) {
      console.error('Google sign-in error:', error);
      let errorMessage = 'Failed to log in with Google. Please try again.';
      if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Google login window closed.';
      }
      setError(errorMessage); // Display error inline
      // showAlert(errorMessage, 'error'); // Uncomment if you want the custom modal on Google error too
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle Facebook Sign-in
  const handleFacebookSignIn = async () => {
    setIsSubmitting(true);
    setError(''); // Clear previous inline errors
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Facebook login successful:', user);
      showAlert('Login successful with Facebook!', 'success'); // Use custom alert
      onClose();
    } catch (error) {
      console.error('Facebook sign-in error:', error);
      let errorMessage = 'Failed to log in with Facebook. Please try again.';
       if (error.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Facebook login window closed.';
      }
      setError(errorMessage); // Display error inline
      // showAlert(errorMessage, 'error'); // Uncomment if you want the custom modal on Facebook error too
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 bg-opacity-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-auto relative transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back!</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                    placeholder="your@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-gray-600">
                    Remember me
                  </label>
                </div>
                <Link href="#" className="text-amber-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold py-3 rounded-md shadow-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 01-8 8z"
                    ></path>
                  </svg>
                ) : (
                  'Log In'
                )}
              </motion.button>
            </form>

            <div className="relative flex items-center justify-center my-6">
              <span className="absolute bg-white px-3 text-gray-500">Or log in with</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
                disabled={isSubmitting}
              >
                <FaGoogle className="mr-3 text-red-500" />
                Log In with Google
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleFacebookSignIn}
                className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                <FaFacebookF className="mr-3" />
                Log In with Facebook
              </motion.button>
            </div>

            <p className="text-center text-gray-600 text-sm mt-8">
              Don't have an account?{' '}
              <Link href="#" className="text-amber-600 hover:underline" onClick={onClose}>
                Sign Up
              </Link>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;