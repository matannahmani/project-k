import { Button, Spacer, useClickAway } from "@geist-ui/react";
import { X } from "@geist-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const ChoiceModal = ({visible = false,setVisible,handler}) => {
    const ref = useRef();
    useClickAway(ref, () => {
        visible && setVisible(false);
    });
    const Option = ({name,color,info,last = false}) => (
        <>
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
        </>
    )
    return (
        <AnimatePresence>
        {visible &&
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity:1 }}
            exit={{opacity: 0}}
            transition={{ duration: 0.5 }}
            className="choice-modal"
        >
        <div ref={ref} className="modal-content">
            <span className="title">Make Your Choice</span>
            <X className="close" onClick={() => setVisible(false)}/>
            <Spacer/>
            <Option color="#FBE6CF" name="📹 Personalized Video Message" info="$50 | Get a video message of 1-2 minutes with a text of your choice. Ruyjin will recors it in her own style just for you."/>
            <Option color="#F6C8BE" name="🤙 Book a Video Call" info="$80 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Option color="#DEF8FF" name="🎫 Raffle Tickets" info="$12 | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." last/>
        </div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default ChoiceModal;