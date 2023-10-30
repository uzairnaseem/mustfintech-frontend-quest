import { useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FormLabel, TextField, styled } from "@mui/material";

// Custom components
import MuiButton from "../../@core/components/MuiButton";
import MuiSelect from "../../@core/components/MuiSelect";
import ConfirmModal from "../Common/ConfirmationModal";

// Icons
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";

// Data
import { INVESTMENT_TYPE_DROPDOWN_OPTIONS } from "../../data/members";

const DialogHeader = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(3),
}));

const Form = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
}));

const InputFieldContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "& .MuiFormLabel-root.border-bottom": {
    borderBottom: `1px solid #fff`,
  },
  "& .MuiFormLabel-root": {
    width: "20%",
    padding: theme.spacing(1.5),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  "&.border-bottom": {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  "& .MuiTextField-root": {
    flex: 1,
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  "& .MuiTextField-root *": {
    border: "none",
    color: "#0B101A",
  },
  input: {
    padding: theme.spacing(1.5),
  },
  "& .MuiSelect-select": {
    paddingRight: "180px !important",
  },
  "& .file-input": {
    border: "1px solid #D7D8DA",
    boxShadow: "none",
  },
}));

const FilenameWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "scroll",
  width: "60%",
  padding: `${theme.spacing(1)} 0`,
}));

const FilenameContainer = styled(Box)(() => ({
  display: "flex",
  flexWrap: "noWrap",
  alignItems: "center",
}));

const Filename = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(0.5),
  textDecoration: "underline",
  whiteSpace: "nowrap",
  color: "#5A616A",
}));

const ChangeInvestmentModal = ({ handleSave, handleClose }) => {
  const [investmentType, setInvestmentType] = useState("");
  const [filenames, setFilenames] = useState([]);
  const [confirmationDialog, setConfirmationDialog] = useState({ show: false });

  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }
    const files = e.target.files;
    const names = [...files].map((file) => file.name);
    setFilenames(names);
  };

  const handleInvestmentTypeChange = (e) => {
    if (!!investmentType) {
      setConfirmationDialog({
        show: true,
        icon: "info",
        title: "투자유형을 변경하시겠습니까?",
        buttonConfirmTitle: "확인",
        buttonCancelTitle: "취소",
        onConfirm: () => {
          handleCloseConfirmationDialog();
          setInvestmentType(e.value);
        },
      });
      return;
    }

    setInvestmentType(e.value);
  };

  const handleSubmit = () => {
    if (!filenames.length || !investmentType) {
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
            투자유형 변경
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
              <TextField id="membership-number" size="small" />
            </InputFieldContainer>

            <InputFieldContainer>
              <FormLabel htmlFor="member-name" className="border-bottom">
                회원명/법인명
              </FormLabel>
              <TextField id="member-name" size="small" />
            </InputFieldContainer>

            <InputFieldContainer className="border-bottom">
              <FormLabel sx={{ mr: 2 }} className="border-bottom">
                투자유형 <span className="required-field" />
              </FormLabel>
              <MuiSelect
                value={investmentType}
                options={INVESTMENT_TYPE_DROPDOWN_OPTIONS}
                handleChange={handleInvestmentTypeChange}
              />
            </InputFieldContainer>

            <InputFieldContainer>
              <FormLabel sx={{ mr: 2 }}>
                서류첨부 <span className="required-field" />
              </FormLabel>
              <MuiButton
                title={
                  <>
                    파일 선택
                    <input
                      multiple
                      hidden
                      accept=".jpg, .jpeg, .gif, .png, .pdf"
                      type="file"
                      onChange={handleFileUpload}
                    />
                  </>
                }
                component="label"
                color="secondary"
                className="file-input"
              />
              <FilenameWrapper>
                {filenames.map((filename) => (
                  <FilenameContainer key={filename}>
                    <Filename variant="caption">{filename}</Filename>
                    <IoCloseCircleSharp
                      color="#DDE0E5"
                      onClick={() =>
                        setFilenames(
                          filenames.filter((item) => filename !== item)
                        )
                      }
                    />
                  </FilenameContainer>
                ))}
              </FilenameWrapper>
            </InputFieldContainer>
          </Form>
          <List sx={{ listStyleType: "disc", fontSize: "13px", pl: 2 }}>
            <ListItem sx={{ display: "list-item", p: 1, pt: 0 }}>
              파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.
            </ListItem>
            <ListItem sx={{ display: "list-item", p: 0, pl: 1 }}>
              최대 10개, 100MB까지 등록이 가능합니다.
            </ListItem>
          </List>
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

export default ChangeInvestmentModal;
