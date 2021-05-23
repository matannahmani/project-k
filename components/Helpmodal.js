import { Modal } from "@geist-ui/react"

const HelpModal = ({state,setState}) => {
    const closeHandler = (event) => {
      setState(false)
    }
    return (
      <>
        <Modal open={state} onClose={closeHandler}>
          <Modal.Title>Modal</Modal.Title>
          <Modal.Subtitle>This is a modal</Modal.Subtitle>
          <Modal.Content>
            <p>Some content contained within the modal.</p>
          </Modal.Content>
          <Modal.Action passive onClick={() => setState(false)}>Cancel</Modal.Action>
          <Modal.Action>Submit</Modal.Action>
        </Modal>
      </>
    )
  }

  export default HelpModal;