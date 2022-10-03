import { ToastPosition } from 'react-toastify';

export type ToastProps = {
  title: string;
  subTitle?: string;
  type?: Toast;
  position?: ToastPosition;
  disableIcon?: boolean;
  link?: string;
};
