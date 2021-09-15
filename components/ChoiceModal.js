import { Button, Spacer } from "@geist-ui/react";
import { X } from "@geist-ui/react-icons";
import PageModal from "./PageModal";
import Link from "next/dist/client/link";

const ChoiceModal = ({href,visible = false,setVisible,handler}) => {

    const Option = ({name,color,info,last = false,href="",disabled}) => {
        const content = (
            <div style={{display: 'flex',flexDirection: 'column'}}>
            <Button className="choice-btn" style={{background: color}}>{name}</Button>
            <Spacer/>
            <span className="choice-span">{info}</span>
            {!last &&
            <>
            <Spacer/>
            <span className="or">or</span>
            <Spacer/>
            </>
            }
            </div>
        )
        return (
        disabled ?
            content
        :
        <Link href={href}>
            {content}
        </Link>
    )
    }
    return (
            <PageModal visible={visible} setVisible={setVisible} >
            <span className="title">Make Your Choice</span>
            <X className="close" onClick={() => setVisible(false)}/>
            <Spacer/>
            <Option href={`/app/${href}/purchase?option=0`} color="#FBE6CF" name="📹 Personalized Video Message" info="$50 | Get a video message of 1-2 minutes with a text of your choice. Ruyjin will recors it in her own style just for you."/>
            <Option href={`/app/${href}/purchase?option=1`} href="test" color="#F6C8BE" name="🤙 Book a Video Call" info="$80 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Option href="#" disabled color="#DEF8FF" name="🎫 Raffle Tickets" info="Join the weekly raffle to receive awesome rewards, personalized gifts, real life meetup and many more! Coming Soon." last/>
            </PageModal>
    )
}

export default ChoiceModal;