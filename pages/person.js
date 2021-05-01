import { Avatar, Button, Grid, Spacer } from "@geist-ui/react"
import { Info, Star, User } from "@geist-ui/react-icons"
import { useState } from "react"
import HowWork from "../components/HowWork"
import Progress from "../components/Progress"
import RatingBox from "../components/RatingBox"
import Link from 'next/link'

const Person = () => {
    const [modal,setModal] = useState(false);

    return (
        <Grid.Container justify="center" alignItems="center" direction="column" xs>
            <Grid xs={24} sm={24} md={12} lg={12} xl={12} direction="column" className="starprofile-container">
                <div className="starprofile-head">

                </div>
                <div className="starprofile-head-info">
                <div>
                <p className="person-title">Ruyjin</p>
                <p className="person-subtitle">ITZY - Raper</p>
                </div>
                <div className="starprofile-avatarbox">
                <Avatar/>
                <Progress/>
                </div>
                </div>
                <div className="starprofile-rates">
                    <RatingBox title="Followers" rate="50K" icon={<User color="#EF476F" fill="#EF476F"/>}/>
                    <RatingBox title="Reviews (195)" rate="5.0" icon={<Star color="rgb(255, 214, 67)" fill="rgb(255, 214, 67)"/>}/>
                    {/* <RatingBox title="Reviews (195)" rate="5.0" icon={<Star color="rgb(255, 214, 67)" fill="rgb(255, 214, 67)"/>}/> */}
                </div>
                <Link href="/purchase">
                <Button className="transbtn fatbtn">Purchase</Button>
                </Link>
                <Spacer/>
                <Button onClick={() => setModal(true)} className="transbtn fatbtn opbtn"><Info/>How does it work?</Button>
                <Spacer/>
            </Grid>
            <HowWork state={modal} setState={setModal}/>

        </Grid.Container>
    )
}

export default Person;