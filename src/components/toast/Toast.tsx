import { createContext, useContext, useState } from 'react';
import type { FC, ReactNode } from 'react';
import styles from './Toast.module.css';
import { cn } from '@app/utility/helpers';
import SvgCheckIcon from '../../icons/SvgCheckIcon';
import SvgErrorIcon from '../../icons/SvgErrorIcon';

interface ToastMessage {
  id: string;
  type: 'success' | 'error';
  message: string;
}

interface Props {
  children: ReactNode;
}

interface ToastContextType {
  success: (message: string) => void;
  error: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

const CustomToastContainer: FC<{
  messages: ToastMessage[];
  onClose: (id: string) => void;
}> = ({ messages, onClose }) => {
  return (
    <div className={styles.toastContainer}>
      {messages.map((toast) => (
        <div
          key={toast.id}
          className={cn(styles.toast, styles[`toast-${toast.type}`])}
        >
          <div className={styles.toastIcon}>
            {toast.type === 'success' ? <SvgCheckIcon /> : <SvgErrorIcon />}
          </div>
          <div className={styles.toastMessage}>{toast.message}</div>
          <button
            className={styles.toastClose}
            onClick={() => onClose(toast.id)}
            aria-label="Close toast"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export const ToastProvider: FC<Props> = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error', message: string) => {
    const id = `${Date.now()}-${Math.random()}`;
    const newToast: ToastMessage = { id, type, message };

    setMessages((prev) => [...prev, newToast]);

    // Auto-remove after 2 seconds
    setTimeout(() => {
      setMessages((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const success = (message: string) => {
    addToast('success', message);
  };

  const error = (message: string) => {
    addToast('error', message);
  };

  const removeToast = (id: string) => {
    setMessages((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ success, error }}>
      <CustomToastContainer messages={messages} onClose={removeToast} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
