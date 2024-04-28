import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const DobInput = ({ label, value, onChange, error, helperText, className }) => {
  const [dobError, setDobError] = useState(""); // State variable for date of birth error

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
      setDobError(""); // Clear any previous error
    } else {
      setDobError("You must be at least 55 years old."); // Set error message
    }
  };

  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        type="date"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!dobError} // Set error state based on the presence of error message
        helperText={dobError || helperText} // Use error message if present, otherwise use helper text
        InputLabelProps={{
          shrink: true,
        }}
        className={className}
      />
    </div>
  );
};

export default DobInput;
;