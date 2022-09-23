import React from 'react';

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
  open: boolean;
  handleClose: () => void;
  setReportExplanation: React.Dispatch<React.SetStateAction<string>>;
  handleReportSubmission: () => void;
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className='text-primary-800'>Report the video</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Flagged videos are reviewed by fun-olympic staff 24 hours a day, seven
          days a week to determine whether they violate Community Guidelines.
          Accounts are penalized for Community Guidelines violations, and
          serious or repeated violations can lead to account termination.{' '}
          <span className='font-semi-bold text-primary-900'>
            {' '}
            Report channel Why are you reporting this user? Explain.
          </span>
        </DialogContentText>
        <TextField
          autoFocus
          id='name'
          fullWidth
          type='email'
          margin='dense'
          variant='filled'
          label='Explanation'
          onChange={e => setReportExplanation(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleReportSubmission}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};
