import { Modal } from "@geist-ui/react"
import { Calendar, CreditCard, Truck } from "@geist-ui/react-icons"

const Step = ({icon,text,step=true}) => (
    <div className="howwork-modal-step">
        <div className={`${step ? 'step' : ''}`}>{icon}</div>
        <p>{text}</p>
    </div>
)

const HowWork = ({state,setState}) => {
    const closeHandler = (event) => {
      setState(false)
    }
    return (
        <Modal open={state} onClose={closeHandler}>
        <Modal.Subtitle>What happens when i order?</Modal.Subtitle>
        <Modal.Content>
        <Step text="Purchase an item and an alert will be sent to your star!" icon={<CreditCard/>}/>
        <Step text="At the start of every week we ship a batch of orders" icon={<Truck/>}/>
        <Step  step={false} text="Wait for your memories to arrive!" icon={<Calendar/>}/>
        </Modal.Content>
      </Modal>
    )
}

export default HowWork;