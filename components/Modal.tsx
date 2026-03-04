
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
  hideHeader?: boolean;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = 'max-w-2xl',
  hideHeader = false 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className={`relative bg-white rounded-2xl w-full ${maxWidth} max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden my-auto mx-auto`}>
        
        {!hideHeader && (
          <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
            >
              <X size={24} />
            </button>
          </div>
        )}

        {hideHeader && (
           <button 
             onClick={onClose}
             className="absolute top-4 left-4 z-50 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm"
             aria-label="Close"
           >
             <X size={20} />
           </button>
        )}

        <div className={`overflow-y-auto ${hideHeader ? '' : 'p-6'}`}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
