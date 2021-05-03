import { Avatar, Button, Card, Grid, Input, Spacer } from "@geist-ui/react"
import { useState } from "react"
import {useRouter} from 'next/router'
import ItemChooster from "../components/ItemChooser";
import MoodIcon from "../components/MoodIcon";
import {MdCake} from "react-icons/md"
const Purchase = () => {
    const [stage,setStage] = useState(0);
    const router = useRouter();
    const items=[{title: 'Momo Image',img: 'https://www.allkpop.com/upload/2020/06/content/111226/1591892774-momo.jpg',price: 50},
    {title: 'Feel Special Album',img: 'https://i.pinimg.com/originals/87/89/14/878914f5f1434d1e7082aeb820efd483.jpg',price: 100},
    {title: 'Fancy Album',img: 'https://images-na.ssl-images-amazon.com/images/I/81S1lfYm5mL._AC_SL1341_.jpg',price: 100}
]

    return (
        <Grid.Container justify="center" alignItems="center" direction="column" xs>
            <Grid xs={24} sm={24} md={12} lg={12} xl={12} direction="column" className="purchase-container">
                <Card shadow hoverable className="purchase-card">
                {stage === 0 &&
                <>
                    <Avatar src="https://pm1.narvii.com/6612/f8e3648bce13c3d6491182d0babdd460e4ec2d48_hq.jpg" size="large"/>
                    <Spacer/>
                    <p className="person-subtitle" style={{color: 'black'}}>New request for Momo</p>
                    <Spacer/>
                    <p className="person-subtitle" style={{color: 'black'}}>Who is this for?</p>
                    <Spacer/>
                    <Input clearable>To</Input>
                    <Spacer/>
                    <div style={{display: 'flex',flexWrap: 'wrap', alignItems:"center",justifyContent:"space-evenly"}}>
                        <MoodIcon title="Birthday" icon={<MdCake/>}/>
                        <MoodIcon title="Birthday" icon={<MdCake/>}/>
                        <MoodIcon title="Birthday" icon={<MdCake/>}/>
                        <MoodIcon title="Birthday" icon={<MdCake/>}/>
                    </div>
                    <Spacer/>
                </>
                }
                {stage === 1 &&
                    <ItemChooster items={items}/>
                }
                <Button onClick={() => stage !== 1 ? setStage(1) : setStage(0)} className="transbtn">{stage === 0 ? 'Countine' : 'Purchase'}</Button>
                <Spacer/>
                <Button onClick={() => stage !== 1 ? router.push('/person') : setStage(0)} className="transbtn darkbtn">{stage === 0 ? 'Momo Profile' : 'Back'}</Button>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Purchase