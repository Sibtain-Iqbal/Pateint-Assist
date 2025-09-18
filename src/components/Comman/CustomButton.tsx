// src/components/Common/CustomButton.tsx
import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl transition font-medium shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
