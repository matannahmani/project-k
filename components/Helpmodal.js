import { Modal,Button,Spacer } from "@geist-ui/react"
import { X } from "@geist-ui/react-icons"

const HelpModal = ({state,setState}) => {
    const closeHandler = (event) => {
      setState(false)
    }
    return (
      <>
        <Modal wrapClassName="info-modal" open={state} onClose={closeHandler}>
          <Modal.Title className="info-modal-title">도어락 비밀번호 변경하기</Modal.Title>
          <Spacer/>
          <Modal.Subtitle className="info-modal-subtitle" style={{textAlign: 'left'}}>
          새로운 도어락 비밀번호를 입력해주세요.
          저장 후 변경된 비밀번호로 출입할 수 있습니다.</Modal.Subtitle>
            <Spacer/>
          <Modal.Content>
          {/* <Input onChange={(e) => handlePin(e)} clearable placeholder="새로운 비밀번호를 입력해주세요."/> */}
          </Modal.Content>
          <div className="info-drawer-footer">
          <Button icon={<X/>} className="transbtn btn-close" type="abort" onClick={closeHandler} effect={false} auto>취소</Button>
          {/* <Button auto className={`drawer-btn ${ input ? 'drawer-btn-active' : ''}`}>비밀번호 변경하기</Button> */}
          </div>
        </Modal>
      </>
    )
  }

  export default HelpModal;