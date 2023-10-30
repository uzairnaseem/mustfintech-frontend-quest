import React from "react";

//MUI
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { styled } from "@mui/material/styles";

// Icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const CustomStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.3),
  backgroundColor: "#f1f3f5",
  "*": {
    color: "#A1A1A1",
    fontWeight: "bold",
  },
  "& button.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

const MuiPagination = () => {
  return (
    <CustomStack spacing={2} justifyContent="center">
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: FiChevronLeft,
              next: FiChevronRight,
              first: HiChevronDoubleLeft,
              last: HiChevronDoubleRight,
            }}
            {...item}
          />
        )}
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </CustomStack>
  );
};

export default MuiPagination;
