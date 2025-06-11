// app/dashboard/SignupModal.js
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react'; // Import useEffect
import { FaTimes, FaUser, FaEnvelope, FaLock, FaBuilding, FaRoad, FaVenusMars, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

// Import Firebase services
import { auth, db } from '../script/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const SignupModal = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [agentNumber, setAgentNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // --- useEffect to clear form fields and messages on close ---
  useEffect(() => {
    if (!isOpen) {
      setFirstName('');
      setLastName('');
      setAgentNumber('');
      setAddress('');
      setGender('');
      setAge('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');      // Clear error message
      setSuccess('');    // Clear success message
      setIsSubmitting(false); // Reset submitting state
    }
  }, [isOpen]); // Re-run this effect whenever the 'isOpen' prop changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      setIsSubmitting(false);
      return;
    }

    if (!firstName || !lastName || !email || !password || !address || !gender || !age) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Create user with email and password using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);

      // 2. Store additional user details in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid, // Store the Firebase Auth UID
        firstName,
        lastName,
        agentNumber: agentNumber || null, // Store as null if empty
        address,
        gender,
        age: parseInt(age, 10), // Convert age to a number
        email: user.email, // Use the email from Firebase Auth
        registrationDate: new Date(), // Add a timestamp
      });

      setSuccess('Registration successful! You can now log in.');
      // Form fields are now cleared by the useEffect when onClose is called
      // No need to manually clear them here anymore

      setTimeout(() => {
        onClose(); // Close modal after a short delay on success
      }, 1500);

    } catch (firebaseError) {
      // Handle Firebase errors
      console.error('Firebase registration error:', firebaseError);
      let errorMessage = 'Registration failed. Please try again.';

      switch (firebaseError.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'The email address is already in use by another account.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password accounts are not enabled. Enable them in Firebase console.';
          break;
        case 'auth/weak-password':
          errorMessage = 'The password is too weak. It must be at least 6 characters.';
          break;
        default:
          errorMessage = firebaseError.message;
          break;
      }
      setError(errorMessage);
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 bg-opacity-50 p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg mx-auto relative transform transition-all duration-300 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Your Account</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="agentNumber" className="block text-gray-700 text-sm font-semibold mb-2">
                  Agent # (Optional)
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="agentNumber"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                    placeholder="e.g., AGENT123"
                    value={agentNumber}
                    onChange={(e) => setAgentNumber(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2">
                  Address
                </label>
                <div className="relative">
                  <FaRoad className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="address"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                    placeholder="123 Main St, City, Country"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gender" className="block text-gray-700 text-sm font-semibold mb-2">
                    Gender
                  </label>
                  <div className="relative">
                    <FaVenusMars className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      id="gender"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none text-black font-bold"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="age" className="block text-gray-700 text-sm font-semibold mb-2">
                    Age
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      id="age"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                      placeholder="e.g., 30"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      min="18"
                      required
                    />
                  </div>
                </div>
              </div>

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

              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-black font-bold"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {success && <p className="text-green-600 text-sm text-center">{success}</p>}

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
                  'Register Account'
                )}
              </motion.button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-8">
              Already have an account?{' '}
              <Link href="#" className="text-amber-600 hover:underline" onClick={onClose}>
                Log In
              </Link>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;