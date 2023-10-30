import React from "react";

// MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";

// Custom components
import MuiButton from "../../@core/components/MuiButton";
import MuiPagination from "../../@core/components/MuiPagination";
import MuiCheckbox from "../../@core/components/MuiCheckbox";

const ODD_OPACITY = 0.1;

const LookButton = styled(MuiButton)(() => ({
  borderRadius: "8px",
  boxShadow: "none",
  border: "1px solid #d7d8da",
  padding: "2px 8px",
}));

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  minWidth: "1300px",
  marginTop: theme.spacing(1.5),
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none !important",
  },
  "& .MuiDataGrid-footerContainer": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader": {
    borderRight: "1px solid white !important",
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: alpha(theme.palette.secondary.main, 0.35),
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

const getApprovalColor = (value) => {
  if (value === "승인완료") {
    return "success";
  }

  if (value === "승인대기") {
    return "warning";
  }

  if (value === "승인거부") {
    return "error";
  }
};

const MembersTable = ({ data, onRowSelectionChange, showViewModal }) => {
  const columns = [
    {
      field: "id",
      headerName: "NO",
      headerClassName: "menu-table-header",
      flex: 0.025,
      sortable: false,
    },
    {
      field: "existingType",
      headerName: "기존유형",
      headerClassName: "menu-table-header",
      flex: 0.075,
      sortable: false,
    },
    {
      field: "applicationType",
      headerName: "신청유형",
      headerClassName: "menu-table-header",
      flex: 0.075,
      sortable: false,
    },
    {
      field: " ",
      headerName: "제출서류",
      headerClassName: "menu-table-header",
      type: "number",
      flex: 0.075,
      headerAlign: "left",
      align: "left",
      sortable: false,
      renderCell: (params) => (
        <LookButton title="보기" color="secondary" onClick={showViewModal} />
      ),
    },
    {
      field: "applicationDateAndTime",
      headerName: "신청일시",
      headerClassName: "menu-table-header",
      sortable: false,
      flex: 0.15,
    },
    {
      field: "approval",
      headerName: "승인여부",
      headerClassName: "menu-table-header",
      sortable: false,
      flex: 0.075,
      renderCell: (params) => (
        <Chip
          size="small"
          label={params.value}
          color={getApprovalColor(params.value)}
        />
      ),
    },
    {
      field: "rejectionReason",
      headerName: "승인거부 사유",
      headerClassName: "menu-table-header",
      sortable: false,
      flex: 0.3,
    },
    {
      field: "approvalDateAndTime",
      headerName: "승인일시",
      headerClassName: "menu-table-header",
      sortable: false,
      flex: 0.15,
    },
    {
      field: "manager",
      headerName: "관리자",
      headerClassName: "menu-table-header",
      sortable: false,
      flex: 0.075,
    },
  ];

  return (
    <Box
      sx={{
        overflow: "scroll",
        "*": {
          border: "none !important",
        },
      }}
    >
      <StripedDataGrid
        autoHeight
        disableExtendRowFullWidth
        disableSelectionOnClick
        disableColumnMenu
        checkboxSelection
        hideFooterPagination
        rows={data}
        columns={columns}
        getRowHeight={() => "auto"}
        onRowSelectionModelChange={onRowSelectionChange}
        slots={{
          baseCheckbox: (params) => (
            <MuiCheckbox {...params} sx={{ m: "auto" }} />
          ),
          noRowsOverlay: () => (
            <Stack
              height="100%"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "text.secondary" }}
            >
              조회 결과가 없습니다.
            </Stack>
          ),
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
      />
      {!!data.length && <MuiPagination />}
    </Box>
  );
};

export default MembersTable;
