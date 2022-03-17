import React from 'react';
import styles from './Toast.module.scss';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Slide, useMediaQuery } from '@mui/material';

type ToastProps = {
  open?: boolean;
  title: string;
  content: string;
};

const Toast = ({ open, title, content }: ToastProps) => {
  const matches = useMediaQuery('(max-width:912px)');

  return (
    <Slide direction={matches ? 'up' : 'left'} in={open} mountOnEnter unmountOnExit>
      <div className={styles.toast}>
        <div className={styles['toast-row']}>
          <div>
            <SendOutlinedIcon htmlColor="#00838F" />
          </div>
          <div className={styles['toast-row-content']}>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Toast;
