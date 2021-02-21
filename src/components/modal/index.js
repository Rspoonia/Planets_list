import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './style.css'
export function PopupModal({ show, setShow, successUncheckFav, message }) {
  const handleClose = () => setShow(false)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{message.modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message.modalMessage}</Modal.Body>
        <Modal.Footer>
          {message.changeIndex !== 'Error' && (
            <Button variant="secondary" onClick={handleClose}>
              cancel
            </Button>
          )}
          <Button
            variant="primary"
            onClick={() => successUncheckFav(message.changeIndex)}
          >
            {message.changeIndex !== 'Error' ? ' yes' : 'Retry'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
