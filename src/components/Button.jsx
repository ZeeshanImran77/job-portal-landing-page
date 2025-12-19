import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon = null,
  iconPosition = "left",
  type = "",
}) => {
  const baseStyles =
    "px-5 py-2 inline-flex items-center justify-center gap-2 rounded-lg text-lg  transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-700",
    secondary:
      "bg-white text-brand-blue border border-brand-blue hover:bg-blue-50",
  };
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
