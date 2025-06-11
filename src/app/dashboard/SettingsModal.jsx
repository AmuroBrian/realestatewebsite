// app/dashboard/SettingsModal.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '../script/firebaseConfig'; // Adjust path as necessary
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { updatePassword, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { FaUserEdit, FaLock, FaSave, FaTimesCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'; // Added FaExclamationTriangle for warning

export default function SettingsModal({ isOpen, onClose }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isReauthenticating, setIsReauthenticating] = useState(false);
    const [reauthPassword, setReauthPassword] = useState('');
    const [isPasswordSectionActive, setIsPasswordSectionActive] = useState(false); // To switch between sections

    useEffect(() => {
        if (!isOpen) {
            // Reset states when modal closes
            setError('');
            setSuccess('');
            setIsReauthenticating(false);
            setReauthPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            return;
        }

        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setCurrentUser(user);
                setEmail(user.email || ''); // Set initial email from Firebase Auth
                // Fetch user's first and last name from Firestore
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDocSnap = await getDoc(userDocRef);
                    if (userDocSnap.exists()) {
                        const userData = userDocSnap.data();
                        setFirstName(userData.firstName || '');
                        setLastName(userData.lastName || '');
                    }
                } catch (err) {
                    console.error("Error fetching user data from Firestore:", err);
                    setError("Failed to load user data.");
                }
            } else {
                // User logged out while modal was open, close it
                onClose();
            }
        });
        return () => unsubscribe();
    }, [isOpen, onClose]); // Re-run effect when modal opens/closes

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!currentUser) {
            setError("You are not logged in.");
            return;
        }

        try {
            // Update Firestore document for first and last name
            const userDocRef = doc(db, 'users', currentUser.uid);
            await updateDoc(userDocRef, {
                firstName: firstName,
                lastName: lastName,
            });

            // If email has changed, re-authentication is required
            if (email !== currentUser.email) {
                setIsReauthenticating(true); // Show re-authentication form
                setSuccess(''); // Clear any previous success message
                setError('Email change requires re-authentication.');
                return;
            }

            setSuccess("Profile updated successfully!");
        } catch (err) {
            console.error("Error updating profile:", err);
            setError(`Failed to update profile: ${err.message}`);
        }
    };

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!currentUser) {
            setError("You are not logged in.");
            return;
        }

        if (!newPassword || !confirmNewPassword) {
            setError("Please fill in both new password fields.");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError("New password and confirm password do not match.");
            return;
        }
        if (newPassword.length < 6) {
            setError("New password must be at least 6 characters long.");
            return;
        }

        setIsReauthenticating(true); // Show re-authentication form
        setSuccess(''); // Clear any previous success message
        setError('Password change requires re-authentication.');
    };

    const handleReauthenticate = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!currentUser || !currentUser.email || !reauthPassword) {
            setError("Email and password are required for re-authentication.");
            return;
        }

        try {
            const credential = EmailAuthProvider.credential(currentUser.email, reauthPassword);
            await reauthenticateWithCredential(currentUser, credential);

            // Re-authentication successful, now perform the actual updates
            let updatePerformed = false;

            if (email !== currentUser.email) {
                await updateEmail(currentUser, email);
                setSuccess(prev => prev ? prev + " and Email updated successfully!" : "Email updated successfully!");
                updatePerformed = true;
            }
            if (newPassword) {
                await updatePassword(currentUser, newPassword);
                setSuccess(prev => prev ? prev + " and Password updated successfully!" : "Password updated successfully!");
                setNewPassword('');
                setConfirmNewPassword('');
                updatePerformed = true;
            }

            if (!updatePerformed) {
                 setSuccess("Re-authentication successful, no email/password changes detected.");
            }

            setIsReauthenticating(false); // Hide re-authentication form
            setReauthPassword(''); // Clear re-auth password
            // Optionally, close modal after successful re-auth and update
            // onClose();

        } catch (err) {
            console.error("Error during re-authentication or update:", err);
            setError(`Re-authentication failed: ${err.message}`);
        }
    };

    const modalVariants = {
        hidden: { opacity: 0, y: "-100vh" },
        visible: { opacity: 1, y: "0", transition: { type: "spring", stiffness: 100, damping: 20 } },
        exit: { opacity: 0, y: "100vh" }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9998] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose} // Close modal when clicking outside
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform scale-95"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                    >
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-amber-500 rounded-t-lg">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                <FaUserEdit className="mr-3" /> Account Settings
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className="text-white hover:text-amber-100 transition-colors text-2xl"
                            >
                                <FaTimesCircle />
                            </motion.button>
                        </div>

                        <div className="p-6">
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center"
                                    role="alert"
                                >
                                    <FaExclamationTriangle className="mr-3 text-red-500" />
                                    <span className="block sm:inline">{error}</span>
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setError('')}>
                                        <FaTimesCircle className="text-red-500" />
                                    </span>
                                </motion.div>
                            )}

                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 flex items-center"
                                    role="alert"
                                >
                                    <FaCheckCircle className="mr-3 text-green-500" />
                                    <span className="block sm:inline">{success}</span>
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setSuccess('')}>
                                        <FaTimesCircle className="text-green-500" />
                                    </span>
                                </motion.div>
                            )}

                            {isReauthenticating && (
                                <motion.form
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                    onSubmit={handleReauthenticate}
                                    className="bg-yellow-50 p-6 rounded-lg mb-6 shadow-inner border border-yellow-200"
                                >
                                    <h3 className="text-xl font-semibold text-yellow-800 mb-4">Re-authentication Required</h3>
                                    <p className="text-yellow-700 mb-4 text-sm">
                                        For security, please re-enter your current password to confirm changes to your email or password.
                                    </p>
                                    <div className="mb-4">
                                        <label htmlFor="reauthPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                            Current Password:
                                        </label>
                                        <input
                                            type="password"
                                            id="reauthPassword"
                                            value={reauthPassword}
                                            onChange={(e) => setReauthPassword(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500"
                                            required
                                            autoFocus // Automatically focus this field
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-4">
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
                                            onClick={() => setIsReauthenticating(false)}
                                        >
                                            Cancel
                                        </motion.button>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
                                        >
                                            Confirm
                                        </motion.button>
                                    </div>
                                </motion.form>
                            )}

                            {!isReauthenticating && (
                                <>
                                    <div className="flex mb-6 border-b border-gray-200">
                                        <button
                                            className={`py-2 px-4 text-lg font-semibold ${!isPasswordSectionActive ? 'border-b-2 border-amber-600 text-amber-700' : 'text-gray-500 hover:text-amber-600'}`}
                                            onClick={() => setIsPasswordSectionActive(false)}
                                        >
                                            Profile
                                        </button>
                                        <button
                                            className={`py-2 px-4 text-lg font-semibold ${isPasswordSectionActive ? 'border-b-2 border-amber-600 text-amber-700' : 'text-gray-500 hover:text-amber-600'}`}
                                            onClick={() => setIsPasswordSectionActive(true)}
                                        >
                                            Password
                                        </button>
                                    </div>

                                    {!isPasswordSectionActive ? (
                                        <motion.form
                                            key="profileForm"
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                            transition={{ duration: 0.3 }}
                                            onSubmit={handleProfileUpdate}
                                            className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
                                                <FaUserEdit className="mr-2 text-blue-500" /> Update Profile Details
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="mb-4">
                                                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                                                        First Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                                                        Last Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                                    Email:
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500"
                                                    required
                                                />
                                            </div>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all flex items-center justify-center"
                                            >
                                                <FaSave className="mr-2" /> Save Profile
                                            </motion.button>
                                        </motion.form>
                                    ) : (
                                        <motion.form
                                            key="passwordForm"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.3 }}
                                            onSubmit={handlePasswordUpdate}
                                            className="p-6 border border-gray-200 rounded-lg shadow-sm"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center">
                                                <FaLock className="mr-2 text-purple-500" /> Change Password
                                            </h3>
                                            <div className="mb-4">
                                                <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                                    New Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    id="newPassword"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500"
                                                    placeholder="Enter new password (min 6 characters)"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="confirmNewPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                                    Confirm New Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    id="confirmNewPassword"
                                                    value={confirmNewPassword}
                                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500"
                                                    placeholder="Confirm new password"
                                                />
                                            </div>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all flex items-center justify-center"
                                            >
                                                <FaLock className="mr-2" /> Change Password
                                            </motion.button>
                                        </motion.form>
                                    )}
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}