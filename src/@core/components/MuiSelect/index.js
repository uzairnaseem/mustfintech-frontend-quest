import React from "react";

// MUI
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled, useTheme } from "@mui/material/styles";

// Icons
import { LuChevronDown } from "react-icons/lu";

const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    padding: theme.spacing(0.85),
    paddingRight: `${theme.spacing(6)} !important`,
  },
}));

const MuiSelect = (props) => {
  const {
    placeholder,
    options,
    className = "",
    value,
    size = "small",
    handleChange,
  } = props;
  const theme = useTheme();

  return (
    <CustomSelect
      size={size}
      value={value}
      className={className}
      placeholder={placeholder}
      IconComponent={(props) => <LuChevronDown {...props} />}
      MenuProps={{
        sx: {
          "& .Mui-selected:not(:hover)": {
            backgroundColor: `${theme.palette.primary.main} !important`,
            color: "#fff",
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          onClick={() => handleChange(option)}
        >
          {option.label}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default MuiSelect;
