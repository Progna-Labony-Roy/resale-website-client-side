import React from 'react';

const ConfirmModal = ({title ,message , handleDeleteUser,modalData,cancel}) => {
  
        return (
            <div>
              <input type="checkbox" id="confirm-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="py-4">{message}</p>
                  <div className="modal-action">
                    <label
                      onClick={() => handleDeleteUser(modalData)}
                      htmlFor="confirm-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                    <button onClick={cancel} className="btn btn-outline btn-sm">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default ConfirmModal;