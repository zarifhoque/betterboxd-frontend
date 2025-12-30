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
        className="items-per-page-select"
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
