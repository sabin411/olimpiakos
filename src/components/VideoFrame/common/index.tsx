import React from 'react';

// conts
import { report } from '@/constants';

// packages
import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

export const ReportDialogBox = ({
  open,
  handleClose,
  setReportExplanation,
  handleReportSubmission,
}: {
  reportExplanation: string;
  open: boolean;
  handleClose: () => void;
  setReportExplanation: React.Dispatch<React.SetStateAction<string>>;
  handleReportSubmission: () => void;
}) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='text-primary-800'>Report the video</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {report.subTitle}{' '}
            <span className='font-semi-bold text-primary-900'>
              {' '}
              {report.title}
            </span>
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            multiline
            maxRows={3}
            type='text'
            margin='normal'
            variant='filled'
            label='Explanation'
            onChange={e => setReportExplanation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{report.cancelButton}</Button>
          <Button onClick={handleReportSubmission}>
            {report.submitButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
