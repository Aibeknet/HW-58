import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

interface Props {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  show: boolean;
  clickDismissable?: boolean;
  children: ReactNode;
}

const Alert: React.FC<Props> = ({ type, onDismiss, clickDismissable, children, show }) => {
  const handleClick = () => {
    if (clickDismissable && onDismiss) {
      onDismiss();
    }
  };

  return (
    <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
      <div className="modal show" style={{display: show ? 'block' : 'none'}}>
        <div
          className={`alert alert-${type} alert-dismissible`}
          onClick={handleClick}
          style={{cursor: clickDismissable ? 'pointer' : 'auto'}}
        >
          {children}
          {onDismiss && !clickDismissable && (
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onDismiss}></button>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Alert;