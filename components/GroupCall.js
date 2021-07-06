import { Button, Card, Image, Spacer } from "@geist-ui/react";
import { ChevronRight, Clock, Tag } from "@geist-ui/react-icons";
import Link from "next/link";
import Label from "./label";
import Progress from "./Progress";

const GroupCall = ({single=false,link='',picture,price,name,stock,sold,category,opt,infocard=false,label=false,labeltext}) => {
    const dateFormat = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    return (
        <Card style={labeltext !== "포스터" ? {marginTop: '48px !important'}: {}} className="groupcall-card">
                <Image className="wide-image" src={picture} width="160" height="120"/>
                <div className="person-info">
                    {infocard ? 
                    <>
                    <div className="small-p-wrapper">
                    <p className="person-title">{name}</p>
                    {single ?
                        <Label cardlabel nopos title="Single"/>
                    :
                    <Progress className="small-p" stock={stock} sold={sold}/>
                    }
                    </div>
                    <p className="person-subtitle small-sub">{category}</p>
                    <span className="time-span">{new Date().toLocaleDateString('en-US',dateFormat)}</span>
                    </>
                    :
                    <>
                    <div className="small-p-wrapper">
                    <p className="person-title">{name}</p>
                    {single ?
                        <Label cardlabel nopos title="Single"/>
                    :
                    <Progress className="small-p" stock={stock} sold={sold}/>
                    }
                    </div>
                    <p className="person-subtitle small-sub">{category}</p>
                    <span className="time-span">{new Date().toLocaleDateString('en-US',dateFormat)}</span>
                    </>
                    }
                    <div className="groupcall-footer">
                        <div className="groupcall-tag"><Tag/>{price}</div>
                        <div className="groupcall-tag"><Clock/> 5 mins</div>
                        <Button style={{margin: '0px',padding: '0px'}} type="abort" effect={false} auto className="transbtn opbtn"><ChevronRight/></Button>
                    </div>
                {/* <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
                <span>에서 <b>{price}</b></span>
                <Button type="abort" auto className="transbtn opbtn"><ChevronRight/></Button>
                </div> */}
                </div>
        </Card>
    )
}

export default GroupCall;