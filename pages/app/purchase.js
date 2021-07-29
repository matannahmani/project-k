import { Avatar, Grid, Input, Spacer, Textarea } from "@geist-ui/react"
import Link from "next/link";
import { useState } from "react";
import { MdCake } from "react-icons/md"
import MoodIcon from "../../components/MoodIcon"
import StickyPurchase from "../../components/stickyPurchase"
import Rect from '../../public/icons/rect.svg';

const Purchase = () => {
    const PriceTag = ({price}) => (
        <div className="price-box">
            <Rect viewBox="0 0 132 84" preserveAspectRatio/>
            <span className="text-large-bold">{price}$</span>
        </div>
    )
    const [input,setInput] = useState({name: '',info: '',template: false});
    const [options,setOptions] = useState([
        {title:"Birthday", icon: <span>🍰</span> },
        {title:"Marriage", icon: <span>💒</span> },
        {title:"Gift", icon: <span>🎁</span> },
    ])

    const setActive = (index) => {
        setOptions(options.map((e,i) => (
            {...e,active: i === index}
            )
            ))
        if (input.info.length === 0 || input.template){
            switch (index) {
                case 0:
                    setInput({...input,template: true,info: `Hey ${input.name.length > 0 ? input.name : 'Mati'} First of all i want to say a happybirth...`})
                    break;
                case 1:
                    setInput({...input,template: true,info: `Hello ${input.name.length > 0 ? input.name : 'Mati'} I wish you Good luck on Marriage!`})
                    break;
                case 2:
                    setInput({...input,template: true,info: `Domo ${input.name.length > 0 ? input.name : 'Mati'} I hope you enjoy this suprise`})
                    break;
                }
        }
    }
    return (
        <div className="purchase-person">
                <Avatar className="styled-avatar" src="https://pm1.narvii.com/6612/f8e3648bce13c3d6491182d0babdd460e4ec2d48_hq.jpg"/>
                <Spacer/>
                <span className="heading2 white b">Ruyjin</span>
                <Spacer/>
                <span className="text-large-regular white">Personalized Video Message</span>
                <Spacer/>
                <PriceTag price="50"/>
                <Spacer/>
                <Input value={input.name} onChange={(e) => setInput({...input,name: e.target.value})} className="dark-input" placeholder="For who is the message?"/>
                <Spacer/>
                <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-evenly',width: '100%'}}>
                    {options.map((e,index) => (
                        <MoodIcon onClick={() => setActive(index)} active={e.active} title={e.title} icon={e.icon}/>
                    ))}
                </div>
                <Spacer/>
                <Textarea value={input.info} onChange={(e) => setInput({...input,info: e.target.value,template: false})} placeholder="What message should Ruyjin record?" className="textarea-dark" />
                <Spacer/>
                <Link href="/app/payment">
                    <StickyPurchase text="Continue to Payment"/>
                </Link>

        </div>
    )
}

export default Purchase