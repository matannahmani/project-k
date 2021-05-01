import { Avatar, Button, Card, Grid, Input, Spacer } from "@geist-ui/react"
import { useState } from "react"
import ItemChooster from "../components/ItemChooser";

const Purchase = () => {
    const [stage,setStage] = useState(0);
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
                    <Avatar size="medium"/>
                    <Spacer/>
                    <p className="person-subtitle" style={{color: 'black'}}>New request for Momo</p>
                    <Spacer/>
                    <p className="person-subtitle" style={{color: 'black'}}>Who is this for?</p>
                    <Spacer/>
                    <Input clearable>To</Input>
                    <Spacer/>
                </>
                }
                {stage === 1 &&
                    <ItemChooster items={items}/>
                }
                <Button onClick={() => stage !== 1 ? setStage(1) : setStage(0)} className="transbtn">{stage === 0 ? 'Countine' : 'Purchase'}</Button>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Purchase