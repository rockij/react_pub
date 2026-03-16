import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label = '버튼', ...props }) => {
  return (
    <button className="primary-button" {...props}>
      <span className="icon left-icon" aria-hidden="true">&#9664;</span>
      <span className="label">{label}</span>
      <span className="icon right-icon" aria-hidden="true">&#9654;</span>
    </button>
  );
};