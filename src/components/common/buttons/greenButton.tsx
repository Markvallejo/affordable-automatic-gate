import React from 'react';
import '@/styles/form/greenButton.css';

interface GreenButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
  title: string;
}

const GreenButton: React.FC<GreenButtonProps> = ({ onClick, disabled = false, title }) => {
  return (
    <button 
      className="send-button" 
      onClick={onClick} 
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default GreenButton;