import { Avatar, Input, Spacer, useToasts } from "@geist-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageModal from "../../../components/PageModal";
import StickyPurchase from "../../../components/stickyPurchase"
import { useAppContext } from "../../../lib/AppContext";
import Rect from '../../../public/icons/rect.svg';

const Payment = () => {
    const router = useRouter()
    const [app,setApp] = useAppContext();
    const [input,setInput] = useState({name: '',bio: '',price: '',email: '',option: -1});
    const [visible,setVisible] = useState(false);
    const [,setToasts] = useToasts();
    const PriceTag = ({price}) => (
        <div className="price-box">
            <Rect viewBox="0 0 132 84" preserveAspectRatio/>
            <span className="text-large-bold">{price}$</span>
        </div>
    )
    const options = [
        {title:"Birthday", icon: <span>🍰</span> },
        {title:"Marriage", icon: <span>💒</span> },
        {title:"Gift", icon: <span>🎁</span> },
    ]

    useEffect(() => {
        setInput({...input,...app.p})
    }, [])

    const backHandler = () => {
        router.back();
    }

    const handleNotify = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setToasts({text: 'Email sent successfully!',type: 'success'})
        },1500)
    }

    return (
        <>
        <div className="purchase-person">
                <Avatar className="styled-avatar" src="https://pm1.narvii.com/6612/f8e3648bce13c3d6491182d0babdd460e4ec2d48_hq.jpg"/>
                <Spacer/>
                <span className="heading2 white b">Ruyjin</span>
                <Spacer/>
                <span className="text-large-regular white">Personalized Video Message</span>
                <Spacer/>
                <PriceTag price="50"/>
                <Spacer/>
                <div className="order-summary-info">
                    <span className="min-letter descp">Order Summary</span>
                    <Spacer y={0.5}/>
                    <span className="min-letter descp">Catgeory: {options[input.option] !== undefined && options[input.option].title}</span>
                    <Spacer y={0.5}/>
                    <span className="min-letter descp">Message receipient: {input.name}</span>
                    <Spacer y={0.5}/>
                    <span className="min-letter descp">Message: {input.bio}</span>
                    <Spacer y={0.5}/>
                    <span onClick={backHandler} className="edit-text-btn">Edit Order</span>
                </div>
                <Spacer/>
                <Input style={{maxWidth: '240px'}} width="100%" value={input.email} onChange={(e) => setInput({...input,email: e.target.value})} className="dark-input" placeholder="Your Email"/>
                <Spacer/>
                <span className="small-text-bold white">
                At this point our service is not ready to connect you with Ruyjin, but it will be very soon.<br/>Hit the button below and we will keep you updated on the latest news and which of your K Stars have joined our community.
                </span>
                <StickyPurchase onClick={handleNotify} text="Confirm to receive updates"/>
        </div>
        <PageModal className="loader-modal" visible={visible} setVisible={setVisible}>
        <span className="text-large-bold">Sending...</span>
        <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                backgroundColor: ['#71E689','#ED706D','#3D5582'],
                width: ['40px','60px','80px'],
                height: ['40px','60px','80px']
              }}
              style={{position: 'absolute',bottom: '32px'}}
              transition={{ type: 'spring', duration: 1, repeat: Infinity, repeatDelay: 1,    repeatType: "reverse"          }}
            />
        </PageModal>
        </>
    )
}

export default Payment;