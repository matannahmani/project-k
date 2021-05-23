import { Button, Card, Image } from "@geist-ui/react";
import { ChevronRight } from "@geist-ui/react-icons";
import Link from "next/link";
import Label from "./label";
import Progress from "./Progress";

const PersonCard = ({link='',picture,price,name,category,opt,infocard=false,label=false,labeltext}) => {

    return (
        <Card style={labeltext !== "포스터" ? {marginTop: '48px !important'}: {}} className="personcard">
            {labeltext === "포스터" &&
            <Progress label={label}/>
            }
            <Link href={link}>
                <div>
                <div className="personcard-image">
                <Image src={picture} width="200" height="195"/>
                <Label cardlabel title={labeltext}/>
                </div>
                <div className="person-info">
                    {infocard ? 
                    <>
                    <p className="person-title">{name}</p>
                    <p className="person-subtitle">{category}</p>
                    </>
                    :
                    <>
                    <p className="person-title">{name}</p>
                    <p className="person-subtitle">{category}</p>
                    {/* <p className="person-subtitle">{opt.map((e,index) => `${e}${index === opt.length-1 ? '' : ', '}`)}</p> */}
                    </>
                    }
                <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
                <span>에서 <b>{price}</b></span>
                <Button type="abort" auto className="transbtn opbtn"><ChevronRight/></Button>
                </div>
                </div>
                </div>
            </Link>
        </Card>
    )
}

export default PersonCard;