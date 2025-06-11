'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa'; // Icons for different alert types

const AlertModal = ({ isOpen, onClose, message, type = 'info' }) => {
  if (!isOpen) return null;

  let icon;
  let bgColor;
  let textColor;
  let iconColor;

  switch (type) {
    case 'success':
      icon = <FaCheckCircle />;
      bgColor = 'bg-green-50';
      textColor = 'text-green-800';
      iconColor = 'text-green-500';
      break;
    case 'error':
      icon = <FaExclamationCircle />;
      bgColor = 'bg-red-50';
      textColor = 'text-red-800';
      iconColor = 'text-red-500';
      break;
    case 'warning':
      icon = <FaExclamationCircle />; // Reusing for warning, could be a different icon
      bgColor = 'bg-yellow-50';
      textColor = 'text-yellow-800';
      iconColor = 'text-yellow-500';
      break;
    case 'info':
    default:
      icon = <FaInfoCircle />;
      bgColor = 'bg-blue-50';
      textColor = 'text-blue-800';
      iconColor = 'text-blue-500';
      break;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 bg-opacity-50 p-4"
          onClick={onClose} // Allows clicking outside to close
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className={`${bgColor} rounded-xl shadow-2xl p-6 w-full max-w-sm mx-auto relative transform transition-all duration-300`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close alert"
            >
              <FaTimes size={18} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className={`mb-4 ${iconColor}`}>
                {icon && <span className="text-4xl">{icon}</span>}
              </div>
              <p className={`text-lg font-semibold ${textColor} mb-4`}>{message}</p>
              <button
                onClick={onClose}
                className={`w-full py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors
                  ${type === 'success' ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500' : ''}
                  ${type === 'error' ? 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500' : ''}
                  ${type === 'warning' ? 'bg-yellow-600 hover:bg-yellow-700 text-white focus:ring-yellow-500' : ''}
                  ${type === 'info' ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500' : ''}
                `}
              >
                Okay
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;