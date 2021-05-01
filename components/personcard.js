import { Card, Image } from "@geist-ui/react";
import Progress from "./Progress";

const PersonCard = ({picture,price,name,category,opt,infocard=false}) => {

    return (
        <Card className="personcard">
            <div className="personcard-image">
            <Image src={picture} width="200" height="195"/>
            {infocard &&
                <div className="person-stats">
                    <Progress/>
                </div>
            }
            </div>
            <div className="person-info">
                {infocard ? 
                <>
                <p className="person-title">{name}</p>
                </>
                :
                <>
                <p className="person-title">{name} - {category}</p>
                <p className="person-subtitle">{opt.map((e,index) => `${e}${index === opt.length-1 ? '' : ', '}`)}</p>
                </>
                }
            <span>From <b>{price}</b></span>
            </div>
        </Card>
    )
}

export default PersonCard;