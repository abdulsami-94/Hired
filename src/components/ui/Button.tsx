import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'; 
}

export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  const bgColor = variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600';

  return (
    <button 
      className={`${bgColor} text-white px-4 py-2 rounded-md`} 
      {...props}
    >
      {children}
    </button>
  );
};