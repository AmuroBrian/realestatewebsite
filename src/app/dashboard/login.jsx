// LoginModal.js
'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../script/firebaseConfig';



import { useRouter } from 'next/navigation';

export default function LoginModal({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
      closeModal();
    } catch (error) {
      console.error('Login error:', error.message);
      setErrorMessage(error.message || 'Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center text-amber-700">Log In</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Submit'}
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="w-full mt-2 text-gray-500 hover:text-gray-700 text-sm"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}