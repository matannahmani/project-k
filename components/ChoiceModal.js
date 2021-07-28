import { Button, Spacer } from "@geist-ui/react";
import { X } from "@geist-ui/react-icons";
import PageModal from "./PageModal";
import Link from "next/dist/client/link";

const ChoiceModal = ({visible = false,setVisible,handler}) => {

    const Option = ({name,color,info,last = false,href=""}) => (
        <Link href={href}>
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
        </Link>
    )
    return (
            <PageModal visible={visible} setVisible={setVisible} >
            <span className="title">Make Your Choice</span>
            <X className="close" onClick={() => setVisible(false)}/>
            <Spacer/>
            <Option href="/app/purchase" color="#FBE6CF" name="📹 Personalized Video Message" info="$50 | Get a video message of 1-2 minutes with a text of your choice. Ruyjin will recors it in her own style just for you."/>
            <Option href="test" color="#F6C8BE" name="🤙 Book a Video Call" info="$80 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Option href="test2" color="#DEF8FF" name="🎫 Raffle Tickets" info="$12 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." last/>
            </PageModal>
    )
}

export default ChoiceModal;