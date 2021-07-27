import { AutoComplete, Avatar, Button, Card, Grid, Input, Spacer, Textarea } from "@geist-ui/react"
import { useState } from "react"
import {useRouter} from 'next/router'
// import ItemChooster from "../../../../components/ItemChooser";
import MoodIcon from "../../../components/MoodIcon";
import {MdCake} from "react-icons/md"
import { ArrowLeft, Smartphone, Video } from "@geist-ui/react-icons";
import {FaTicketAlt} from "react-icons/fa"
import { countries } from 'typed-countries';
const Purchase = () => {
    const [stage,setStage] = useState(0);
    const router = useRouter();
    const items=[{title: 'Momo Image',img: 'https://www.allkpop.com/upload/2020/06/content/111226/1591892774-momo.jpg',price: 50},
    {title: 'Feel Special Album',img: 'https://i.pinimg.com/originals/87/89/14/878914f5f1434d1e7082aeb820efd483.jpg',price: 100},
    {title: 'Fancy Album',img: 'https://images-na.ssl-images-amazon.com/images/I/81S1lfYm5mL._AC_SL1341_.jpg',price: 100}
]
const codes = () => {
    return countries.map((e) => {
        return {label: e.name, value: e.name}
    })
}
const [code, setCodes] = useState()
const searchHandler = (list,currentValue,setState) => {
  if (!currentValue) return setState([])
  const relatedOptions = list.filter(item => item.value.toLowerCase().includes(currentValue.toLowerCase()))
  setState(relatedOptions)
}
    return (
        <Grid.Container justify="center" alignItems="center" direction="column">
            <Grid xs={24} sm={24} md={12} lg={12} xl={12} direction="column" className="purchase-container">
                <Card shadow hoverable className="purchase-card">
                {stage === 0 &&
                <>
                <Button icon={<Video/>} onClick={() => stage !== 1 ? setStage(1) : setStage(0)} className="whitesvg transbtn">Video Memory</Button>
                <Spacer/>
                <Button icon={<Smartphone/>} onClick={() => stage !== 1 ? setStage(1) : setStage(0)} className="whitesvg transbtn darkbtn">Book Face Time</Button>
                <Spacer/>
                <Button icon={<FaTicketAlt/>} onClick={() => stage !== 1 ? setStage(1) : setStage(0)} className="whitesvg transbtn">Raffle Tickets</Button>
                <Spacer/>
                </>
                }
                {stage === 1 &&
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
                        <MoodIcon active title="Birthday" icon={<MdCake/>}/>
                        <MoodIcon title="Marriage" icon={<MdCake/>}/>
                        <MoodIcon title="Gift" icon={<MdCake/>}/>
                        <MoodIcon title="ETC" icon={<MdCake/>}/>
                    </div>
                    <Spacer/>
                    <Textarea minHeight="180px" resize="both" placeholder="Please enter a description." />
                    <Spacer/>
                </>
                }
                {stage === 2 &&
                <>
                <h2 style={{color: 'black'}} className="person-title">Your Information</h2>
                <Spacer/>
                <div>
                <label className="p-label">Full Name</label>
                <Input placeholder="Kevin Heart"/>
                <Spacer/>
                <label className="p-label">Country</label>
                <AutoComplete width="200px" clearable options={code} placeholder="Country" onSearch={(e) => searchHandler(codes(),e,setCodes)}/>
                <Spacer/>
                <label className="p-label">Address</label>
                <Input placeholder="Mapou-gu xyz"/>
                <Spacer/>
                </div>
                </>
                }
                {stage === 3 &&
                <Button className="kakaopay"/>
                }
                {/* {stage === 2 &&
                    <ItemChooster items={items}/>
                } */}
                {stage !== 0 &&
                <>
                <Button onClick={() => stage === 1 ? setStage(2) : setStage(3)} className="transbtn">{stage === 3 ? 'Credit Card' : stage === 1 ? 'Countine' : 'Purchase'}</Button>
                <Spacer/>
                </>
                }
                <Button icon={<ArrowLeft/>} onClick={() => stage === 0 ? router.push('/app/person') : setStage(stage - 1)} className="whitesvg transbtn darkbtn">{stage === 0 ? 'Momo Profile' : 'Back'}</Button>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Purchase