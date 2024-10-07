import React, { ReactNode } from 'react';
import BackDrop from '../BackDrop/BackDrop.tsx';
import { CSSTransition } from 'react-transition-group';

interface ButtonConfig {
  type: 'primary' | 'danger';
  label: string;
  onClick: () => void;
}

interface Props {
  show: boolean;
  title?: string;
  closeModal?: () => void;
  buttonConfigs?: ButtonConfig[];
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ show, title = 'Modal title', closeModal, buttonConfigs, children }) => {
  return (
    <>
      <BackDrop show={show} closeModal={closeModal} />
      <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{title}</h1>
                <button
                  onClick={closeModal}
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </div>
              <div className="p-2">
                {children}
              </div>
              <div className="modal-footer">
                {buttonConfigs?.map((btn, index) => (
                  <button key={index} onClick={btn.onClick} className={`btn btn-${btn.type}`}>
                    {btn.label}
                  </button>
                ))}
                <button onClick={closeModal} className="btn btn-primary">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;


