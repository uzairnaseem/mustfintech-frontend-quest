import React from "react";

// MUI
import { Button } from "@mui/material";

const MuiButton = ({
  title,
  className = "",
  style = {},
  size = "medium",
  color = "primary",
  variant = "contained",
  component = "button",
  onClick,
}) => {
  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      size={size}
      style={style}
      component={component}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default MuiButton;
