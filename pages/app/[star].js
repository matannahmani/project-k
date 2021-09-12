import { Avatar, Button, Grid, Spacer } from "@geist-ui/react"
import { Info } from "@geist-ui/react-icons"
import { useState } from "react"
import HowWork from "../../components/HowWork"
import RatingBox from "../../components/RatingBox"
import Label from "../../components/label"
import PersonSlider from '../../components/PersonSlider'
import StickyPurchase from "../../components/stickyPurchase"
import ChoiceModal from "../../components/ChoiceModal"
import { useRouter } from "next/router"

const Person = () => {
    const [modal,setModal] = useState(false);
    const [visible,setVisible] = useState(false);
    const router = useRouter()
    const { star } = router.query
    return (
        <>
        <Grid.Container justify="center" alignItems="center" direction="column" xs>
            <Grid xs={24} sm={24} md={12} lg={12} xl={12} direction="column" className="starprofile-container">
                <div className="starprofile-head">

                </div>
                <Spacer/>
                <div className="starprofile-head-info">
                <div>
                <p className="person-title">Ruyjin</p>
                <p className="person-subtitle">ITZY - Raper</p>
                <div className="person-labels">
                    <Button className="follow-btn">Follow</Button>
                </div>
                </div>
                <div className="starprofile-avatarbox">
                <Avatar src="https://pm1.narvii.com/6612/f8e3648bce13c3d6491182d0babdd460e4ec2d48_hq.jpg" size="large"/>
                <div className="desktop-reviews">
                <RatingBox title="Followers" rate="50K ️😄"/>
                <RatingBox title="Reviews (195)" rate="5.0 ️⭐️"/>
                </div>
                </div>
                </div>
                <div className="starprofile-bio">
                Korean KPOP artist, actor, TV host, and influencer. Send in your shout out requests and I’ll deliver them right to your phone!❤️
                </div>
                <Spacer/>
                <div className="starprofile-services">
                    <span>Services</span>
                    <Spacer/>
                    <div className="labels-box">
                    <Label cardlabel nopos title="Video Call"/>
                    <Label cardlabel nopos title="Autographs"/>
                    <Label cardlabel nopos title="Video MSG"/>
                    <Label cardlabel nopos title="Lottery"/>
                    </div>
                </div>
                <Spacer/>
                <div className="starprofile-rates">
                    <RatingBox title="Followers" rate="50K ️😄"/>
                    <RatingBox title="Reviews (195)" rate="5.0 ️⭐️"/>
                </div>
                <StickyPurchase text="Contact Ruyjin" onClick={() => setVisible(true)}/>
                <Spacer/>
                <Button onClick={() => setModal(true)} className="transbtn fatbtn opbtn"><Info/>How does it work?</Button>
                <Spacer/>
                <p className="person-title">Memories we created</p>
                <Spacer/>
                <PersonSlider/>
            </Grid>
            <HowWork state={modal} setState={setModal}/>
        </Grid.Container>
        <ChoiceModal href={star} setVisible={setVisible} visible={visible} />
        </>
    )
}

export default Person;