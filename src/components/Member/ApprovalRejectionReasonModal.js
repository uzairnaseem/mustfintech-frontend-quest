import { useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { FormLabel, TextField, styled } from "@mui/material";

// Custom components
import MuiButton from "../../@core/components/MuiButton";
import ConfirmModal from "../Common/ConfirmationModal";

// Icons
import { AiOutlineClose } from "react-icons/ai";
import MuiCheckbox from "../../@core/components/MuiCheckbox";

const DialogHeader = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(3),
}));

const rejectionReasons = {
  isDocumentUnidentifiable: "서류 식별 불가",
  isRequiredMissing: "필수 서류 누락",
  isContentDiff: "서류의 내용이 등록된 회원정보와 다름",
  isMissingInfoInDoc:
    "서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)",
  isValidityExceeded: "서류의 유효기간이 초과됨",
  isDirectInput: "직접 입력",
};

const Form = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
}));

const InputFieldContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",

  "& .MuiFormLabel-root.border-bottom": {
    borderBottom: `1px solid #fff`,
  },
  "& .MuiFormLabel-root": {
    display: "flex",
    alignItems: "center",
    width: "20%",
    padding: theme.spacing(1.5),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  "&.border-bottom": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  "& .input-field": {
    flex: 1,
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  "& .MuiInputBase-sizeSmall *": {
    border: "none",
    color: "#0B101A",
  },
  input: {
    padding: theme.spacing(1.5),
  },
  ".mt-20": {
    marginTop: "-20px",
  },
}));

const ApprovalRejectionReasonModal = ({ handleSave, handleClose }) => {
  const [confirmationDialog, setConfirmationDialog] = useState({ show: false });
  const [checkedReason, setCheckedReason] = useState();
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    if (!checkedReason?.length) {
      setConfirmationDialog({
        show: true,
        icon: "info",
        title: "필수입력항목을 입력해주세요.",
        buttonConfirmTitle: "확인",
      });

      return;
    }

    handleSave();
  };

  const handleCheckboxChange = (e, label) =>
    setCheckedReason(e.target.checked ? label : "");

  const handleCloseConfirmationDialog = () =>
    setConfirmationDialog({ show: false });

  return (
    <>
      <Dialog
        open={true}
        disableEscapeKeyDown
        sx={{
          "& .MuiPaper-root": {
            minWidth: 700,
            borderRadius: "12px",
            fontFamily: "Pretendard",
          },
        }}
        onClose={handleClose}
      >
        <DialogHeader>
          <Typography sx={{ fontSize: "1.125rem", fontWeight: 600 }}>
            승인거부 사유 입력
          </Typography>
          <AiOutlineClose
            fontSize={20}
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
        </DialogHeader>

        <Divider />

        <DialogContent sx={{ p: 3 }}>
          <Form>
            <InputFieldContainer>
              <FormLabel htmlFor="membership-number" className="border-bottom">
                회원번호
              </FormLabel>
              <TextField
                id="membership-number"
                size="small"
                className="input-field"
              />
            </InputFieldContainer>

            <InputFieldContainer>
              <FormLabel htmlFor="member-name" className="border-bottom">
                회원명/법인명
              </FormLabel>
              <TextField
                id="member-name"
                size="small"
                className="input-field"
              />
            </InputFieldContainer>

            <InputFieldContainer>
              <FormLabel sx={{ mr: 2 }}>
                승인거부 사유
                <span className="required-field mt-20" />
              </FormLabel>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  pb: 1.5,
                  pr: 1.5,
                }}
              >
                <MuiCheckbox
                  label="서류 식별 불가"
                  disabled={checkedReason === rejectionReasons.isDirectInput}
                  checked={
                    checkedReason === rejectionReasons.isDocumentUnidentifiable
                  }
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      rejectionReasons.isDocumentUnidentifiable
                    )
                  }
                />
                <MuiCheckbox
                  label="필수 서류 누락"
                  disabled={checkedReason === rejectionReasons.isDirectInput}
                  checked={checkedReason === rejectionReasons.isRequiredMissing}
                  onChange={(e) =>
                    handleCheckboxChange(e, rejectionReasons.isRequiredMissing)
                  }
                />
                <MuiCheckbox
                  label="서류의 내용이 등록된 회원정보와 다름"
                  disabled={checkedReason === rejectionReasons.isDirectInput}
                  checked={checkedReason === rejectionReasons.isContentDiff}
                  onChange={(e) =>
                    handleCheckboxChange(e, rejectionReasons.isContentDiff)
                  }
                />
                <MuiCheckbox
                  label="서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)"
                  disabled={checkedReason === rejectionReasons.isDirectInput}
                  checked={
                    checkedReason === rejectionReasons.isMissingInfoInDoc
                  }
                  onChange={(e) =>
                    handleCheckboxChange(e, rejectionReasons.isMissingInfoInDoc)
                  }
                />
                <MuiCheckbox
                  label="서류의 유효기간이 초과됨"
                  disabled={checkedReason === rejectionReasons.isDirectInput}
                  checked={
                    checkedReason === rejectionReasons.isValidityExceeded
                  }
                  onChange={(e) =>
                    handleCheckboxChange(e, rejectionReasons.isValidityExceeded)
                  }
                />
                <MuiCheckbox
                  label="직접 입력"
                  checked={checkedReason === rejectionReasons.isDirectInput}
                  onChange={(e) =>
                    handleCheckboxChange(e, rejectionReasons.isDirectInput)
                  }
                />
                <TextField
                  multiline
                  rows={3}
                  value={reason}
                  placeholder="사유 입력"
                  sx={{ p: 1 }}
                  disabled={checkedReason !== rejectionReasons.isDirectInput}
                  onChange={(e) => setReason(e.target.value)}
                />
              </Box>
            </InputFieldContainer>
          </Form>
        </DialogContent>

        <Divider />

        <DialogActions sx={{ p: 3, display: "flex", justifyContent: "center" }}>
          <MuiButton
            title="저장"
            style={{ width: "20%" }}
            onClick={handleSubmit}
          />

          <MuiButton
            variant="outlined"
            title="취소"
            onClick={handleClose}
            style={{ width: "20%" }}
          />
        </DialogActions>
      </Dialog>

      {confirmationDialog.show && (
        <ConfirmModal
          show={confirmationDialog.show}
          icon={confirmationDialog.icon}
          title={confirmationDialog.title}
          buttonConfirmTitle={confirmationDialog.buttonConfirmTitle}
          buttonCancelTitle={confirmationDialog.buttonCancelTitle}
          handleConfirm={
            confirmationDialog.onConfirm || handleCloseConfirmationDialog
          }
          handleClose={handleCloseConfirmationDialog}
        />
      )}
    </>
  );
};

export default ApprovalRejectionReasonModal;
