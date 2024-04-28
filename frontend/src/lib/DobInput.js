import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const DobInput = ({ label, value, onChange, helperText, className }) => {
  const [dobError, setDobError] = useState(""); 
  const handleChange = (event) => {
    const dob = event.target.value;
    onChange(dob);
  };

  const handleBlur = () => {
    if (!value) {
      onChange(""); 
      return;
    }

    const selectedDate = new Date(value);
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate()); 

    if (selectedDate <= maxDate) {
      onChange(value); 
      setDobError(""); 
    } else {
      setDobError("You must be at least 55 years old."); 
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
        error={!!dobError} 
        helperText={dobError || helperText} 
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