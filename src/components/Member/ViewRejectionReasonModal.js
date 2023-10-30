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
  p: {
    flex: 1,
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    fontSize: "14px",
    color: "#0B101A",
    padding: theme.spacing(1.5),
  },
  ".mt-20": {
    marginTop: "-20px",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: `1px solid ${theme.palette.divider}`,
  width: "50%",

  "& .MuiFormLabel-root": {
    display: "flex",
    alignItems: "center",
    width: "40%",
    padding: theme.spacing(1.5),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },

  p: {
    fontSize: "14px",
    marginLeft: theme.spacing(1.5),
  },
}));

const ViewRejectionReasonModal = ({ handleClose }) => {
  const checkedReason = "직접 입력";
  const reason = `금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가
금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가`;

  return (
    <Dialog
      open={true}
      disableEscapeKeyDown
      sx={{
        "& .MuiPaper-root": {
          minWidth: 730,
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
            <Typography>abc111, abc222</Typography>
          </InputFieldContainer>

          <InputFieldContainer>
            <FormLabel htmlFor="member-name" className="border-bottom">
              회원명/법인명
            </FormLabel>
            <Typography>김길동, ㈜가나다라투자</Typography>
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
              />
              <MuiCheckbox
                label="필수 서류 누락"
                disabled={checkedReason === rejectionReasons.isDirectInput}
                checked={checkedReason === rejectionReasons.isRequiredMissing}
              />
              <MuiCheckbox
                label="서류의 내용이 등록된 회원정보와 다름"
                disabled={checkedReason === rejectionReasons.isDirectInput}
                checked={checkedReason === rejectionReasons.isContentDiff}
              />
              <MuiCheckbox
                label="서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)"
                disabled={checkedReason === rejectionReasons.isDirectInput}
                checked={checkedReason === rejectionReasons.isMissingInfoInDoc}
              />
              <MuiCheckbox
                label="서류의 유효기간이 초과됨"
                disabled={checkedReason === rejectionReasons.isDirectInput}
                checked={checkedReason === rejectionReasons.isValidityExceeded}
              />
              <MuiCheckbox
                label="직접 입력"
                checked={checkedReason === rejectionReasons.isDirectInput}
              />
              <TextField
                multiline
                disabled
                rows={3}
                value={reason}
                placeholder="사유 입력"
              />
            </Box>
          </InputFieldContainer>
        </Form>

        <Box sx={{ mt: 2, display: "flex", gap: 0.5 }}>
          <StyledBox sx={{ display: "flex" }}>
            <FormLabel className="border-bottom">최근저장일시</FormLabel>
            <Typography>2022-01-01 09:00:00</Typography>
          </StyledBox>

          <StyledBox sx={{ display: "flex" }}>
            <FormLabel htmlFor="member-name" className="border-bottom">
              관리자
            </FormLabel>
            <Typography vairant="body2">김관리자</Typography>
          </StyledBox>
        </Box>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ p: 3, display: "flex", justifyContent: "center" }}>
        <MuiButton
          title="저장"
          style={{ width: "20%" }}
          onClick={handleClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ViewRejectionReasonModal;
