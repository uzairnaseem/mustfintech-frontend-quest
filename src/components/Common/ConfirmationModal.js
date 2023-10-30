import { AiOutlineClose } from "react-icons/ai";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { styled } from "@mui/material";

// Custom components
import MuiButton from "../../@core/components/MuiButton";

// Icons
import InfoIcon from "../../assets/images/info-icon.svg";
import SuccessIcon from "../../assets/images/success-icon.svg";

const iconMap = {
  success: SuccessIcon,
  info: InfoIcon,
};

const DialogHeader = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 0,
  paddingBottom: theme.spacing(1),
}));

const ConfirmModal = ({
  show,
  title,
  buttonConfirmTitle,
  buttonCancelTitle,
  icon,
  handleConfirm,
  handleClose,
}) => {
  return (
    <Dialog
      open={show}
      disableEscapeKeyDown
      sx={{ "& .MuiPaper-root": { p: 3, minWidth: 350, borderRadius: "12px" } }}
      onClose={handleClose}
    >
      <DialogHeader>
        <img src={iconMap[icon]} alt="" width={30} height={30} />
        <AiOutlineClose
          fontSize={20}
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
      </DialogHeader>

      <DialogTitle
        sx={{ p: 0, pb: 3.5, fontSize: "1.125rem", fontWeight: 600 }}
      >
        {title}
      </DialogTitle>

      <DialogActions
        className="dialog-actions-dense"
        sx={{ p: 0, display: "flex", justifyContent: "center" }}
      >
        <MuiButton
          title={buttonConfirmTitle}
          onClick={handleConfirm}
          style={{ width: "50%" }}
        />

        {buttonCancelTitle && (
          <MuiButton
            variant="outlined"
            title={buttonCancelTitle}
            onClick={handleClose}
            style={{ width: "50%" }}
          />
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
