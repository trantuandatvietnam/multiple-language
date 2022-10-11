import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function DialogTest({ isOpen, close, onClickAgree }: any) {
  const handleClickAgree = () => {
    onClickAgree();
    close();
  };
  return (
    <Dialog
      open={isOpen}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Test tính năng Dialog với hook
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Dialog hook có thể sử dụng mọi nơi có toggle
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Disagree</Button>
        <Button onClick={handleClickAgree} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogTest;
