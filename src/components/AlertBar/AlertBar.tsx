import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { hideAlert } from '../../redux/Slices/alertSlice';
import './AlertBar.scss';

const AlertBar: React.FC = () => {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.isVisible) {
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
      return () => clearTimeout(timer); 
    }
  }, [alert.isVisible, dispatch]);

  if (!alert.isVisible) return null;

  const handleClose = () => {
    dispatch(hideAlert());
  };

  return (
    <div className={`alert-bar ${alert.type}`}>
      <span>{alert.message}</span>
      <button onClick={handleClose} className="alert-close-button">X</button>
    </div>
  );
};

export default AlertBar;
