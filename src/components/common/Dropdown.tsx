// src/components/common/ItemsPerPageSelector.tsx
import React from "react";

interface DropdownProps {
  options: number[];
  onChange: (value: number) => void;
  value: number;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="itemsPerPage" className="text-sm text-muted-foreground">
        Stories per page:
      </label>
      <select
        id="itemsPerPage"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border border-border rounded-md bg-secondary/30 px-2 py-1 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
