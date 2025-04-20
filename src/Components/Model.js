
import React from 'react';
import './RightSideModal.css'; 

const RightSideModal = ({ show, title, children, onClose, onSave }) => {
  return (
    <div className={`custom-modal ${show ? 'show' : ''}`}>
      <div className="custom-modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={onSave}>Save changes</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RightSideModal;
