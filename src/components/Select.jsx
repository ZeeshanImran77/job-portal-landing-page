import { useState } from "react";

const Select = ({
  options = [],
  placeholder = "Select option",
  className = "",
  ariaLabel = "Select option",
  value,
  onChange,
}) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  return (
    <div className="relative w-full">
      <select
        aria-label={ariaLabel}
        className={`
          w-full appearance-none rounded-lg bg-white
          px-4 py-3 pr-5
          text-lg font-medium text-brand-dark
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${className}
        `}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" className="text-slate-400">
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Chevron Down */}
      <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-brand-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </div>
  );
};

export default Select;
