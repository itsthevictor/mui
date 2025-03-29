import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const BasicSnackbar = ({
  severity,
  content,
  open,
  handleClick,
  handleClose,
}) => {
  return (
    <>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {content}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BasicSnackbar;
