import { Avatar, Input, Spacer, Textarea } from "@geist-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MoodIcon from "../../../components/MoodIcon"
import StickyPurchase from "../../../components/stickyPurchase"
import { useAppContext } from "../../../lib/AppContext";
import Rect from '../../../public/icons/rect.svg';

const Purchase = () => {
    const router = useRouter()
    const [app,setApp] = useAppContext();
    const { star } = router.query

    const PriceTag = ({price}) => (
        <div className="price-box">
            <Rect viewBox="0 0 132 84" preserveAspectRatio/>
            <span className="text-large-bold">{price}$</span>
        </div>
    )
    const [input,setInput] = useState({name: app.p.name || '',bio: app.p.bio || '',option: app.p.option !== undefined ? app.p.option : -1,template: true});

    const options = [
        {title:"Birthday", icon: <span>🍰</span> },
        {title:"Marriage", icon: <span>💒</span> },
        {title:"Gift", icon: <span>🎁</span> },
    ]

    useEffect(() => {
        setApp({...app,p: {name: input.name,bio: input.bio,option: input.option}})
    }, [input])


    const setActive = (index) => {
            switch (index) {
                case 0:
                    setInput({...input,template: input.template,option: index,bio: !input.template ? input.bio : `Hey ${input.name.length > 0 ? input.name : 'Mati'} First of all i want to say a happybirth...`})
                    break;
                case 1:
                    setInput({...input,template: input.template,option: index,bio: !input.template ? input.bio : `Hello ${input.name.length > 0 ? input.name : 'Mati'} I wish you Good luck on Marriage!`})
                    break;
                case 2:
                    setInput({...input,template: input.template,option: index,bio: !input.template ? input.bio : `Domo ${input.name.length > 0 ? input.name : 'Mati'} I hope you enjoy this suprise`})
                    break;
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
                <Input width="100%" value={input.name} onChange={(e) => setInput({...input,name: e.target.value})} className="dark-input" placeholder="For who is the message?"/>
                <Spacer/>
                <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'space-evenly',width: '100%'}}>
                    {options.map((e,index) => (
                        <MoodIcon onClick={() => setActive(index)} active={input.option === index} title={e.title} icon={e.icon}/>
                    ))}
                </div>
                <Spacer/>
                <div style={{display: 'flex',width: '100%',flexDirection: 'column'}}>
                <Textarea width="100%" minHeight="120px" value={input.bio} onChange={(e) => setInput({...input,bio: e.target.value,template: false})} placeholder="What message should Ruyjin record?" className="textarea-dark" />
                <Spacer/>
                <span style={{margin: '0 0 0 auto'}} className="min-letter">Max 400 characters</span>
                </div>
                <Spacer/>
                <Link href={`/app/${star}/payment`}>
                    <StickyPurchase text="Continue to Payment"/>
                </Link>
        </div>
    )
}

export default Purchase