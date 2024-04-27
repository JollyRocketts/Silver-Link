import React from "react";
import { TextField } from "@material-ui/core";

const DobInput = ({ label, value, onChange, error, helperText,className, }) => {
  const handleChange = (event) => {
    const dob = event.target.value;
    onChange(dob);
  };

  const handleBlur = () => {
    if (!value) {
      onChange(""); // Update parent component with empty string if DOB is empty
      return;
    }

    const selectedDate = new Date(value);
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate()); // Max date for 55 years old

    if (selectedDate <= maxDate) {
      onChange(value); // Update parent component with valid DOB
    } else {
      // Notify parent component of invalid DOB
      onChange("");
    }
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      type="date"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onBlur={handleBlur}
      error={error}
      helperText={helperText}
      InputLabelProps={{
        shrink: true,
      }}
      className={className} // Apply the class name for consistent styling
       // Set a consistent width for all input components
    />
  );
};

export default DobInput;
