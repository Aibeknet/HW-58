import React, { useState } from 'react';
import Modal from './components/UI/Modal/Modal.tsx';
import Alert from './components/Alert/Alert.tsx';

interface ButtonConfig {
  type: 'primary' | 'danger';
  label: string;
  onClick: () => void;
}

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const closeWarningAlert = () => setShowWarningAlert(false);
  const closeSuccessAlert = () => setShowSuccessAlert(false);

  const buttonConfigs: ButtonConfig[] = [
    { type: 'primary', label: 'Continue', onClick: () => alert('Continue clicked') },
    { type: 'danger', label: 'Close', onClick: closeModal },
  ];

  return (
    <div className="container">
      <button
        onClick={openModal}
        className="btn btn-primary"
        style={{ marginRight: '10px' }}
      >
          Open Modal
      </button>
      <button
        onClick={() => setShowWarningAlert(true)}
        className="btn btn-warning"
        style={{ marginRight: '10px' }}
      >
        Show Warning Alert
      </button>
      <button
        onClick={() => setShowSuccessAlert(true)}
        className="btn btn-success">
        Show Success Alert
      </button>

      <Modal
        show={showModal}
        closeModal={closeModal}
        title="Some kinda modal title"
        buttonConfigs={buttonConfigs}
      >
        <p>This is modal content</p>
      </Modal>

      <Alert
        type="warning"
        onDismiss={closeWarningAlert}
        clickDismissable
        show={showWarningAlert}
      >
        This is a warning type alert.
      </Alert>

      <Alert
        type="success"
        onDismiss={closeSuccessAlert}
        clickDismissable
        show={showSuccessAlert}
      >
        This is a success type alert.
      </Alert>
    </div>
  );
};

export default App;
