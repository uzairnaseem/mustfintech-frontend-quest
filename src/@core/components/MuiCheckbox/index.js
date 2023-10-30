import React from "react";

// MUI
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// Icons
import UncheckedIcon from "../../../assets/images/checkbox-unchecked.svg";
import CheckedIcon from "../../../assets/images/checkbox-checked.svg";

const MuiCheckbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  sx = {},
}) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          icon={<img src={UncheckedIcon} alt="checked-icon" />}
          checkedIcon={<img src={CheckedIcon} alt="checked-icon" />}
        />
      }
      sx={{
        "& .MuiTypography-root": {
          fontSize: "14px",
        },
        ...sx,
      }}
    />
  );
};

export default MuiCheckbox;
