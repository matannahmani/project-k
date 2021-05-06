import { Button, Grid, Spacer } from "@geist-ui/react";
import Countdown from "react-countdown";
import Logo from "../components/Logo";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { useState } from "react";
import Link from "next/link";

const Index = () => {
    const [email,setEmail] = useState('');
    const [error,setError] = useState(false);
    const CD = ({title,time}) => (
        <div className="cd">
            <span>{time}</span>
            <span className="label">{title}</span>
        </div>
    )
    const CDBOX = ({days,hours,minutes,seconds}) => (
        <div className="cdbox">
        <CD title="Days" time={days}/>
        <CD title="Hours" time={hours}/>
        <CD title="Minutes" time={minutes}/>
        <CD title="Seconds" time={seconds}/>
        </div>
    )
    const submit = (subscribe) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase()))
        {
            setError(false);
            subscribe({EMAIL: email})
        }else{
            setError(true);
        }
    }
    const url = "https://mykstar.us1.list-manage.com/subscribe/post?u=00817acd5845a1c2c799dd5b7&amp;id=1593beda8a";
    return (
        <Grid.Container className="index-container">
            <Grid xs direction="column" alignItems="center" justify="center">
                <Logo className="logo"/>
                <h1 className="title">Coming soon</h1>
                <Spacer y={3}/>
                <Countdown date={new Date('06/20/2021')} renderer={CDBOX}/>
                <Spacer y={3}/>
                <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <div className="input-box">
                    <div className="input-group">
                    <input value={email} onChange={(e) => {setEmail(e.target.value);setError(false)}} className="form-control" type="text" name="text-1542372332072" id="text-1542372332072" required="required" placeholder="Email"/>
                    <label for="text-1542372332072">Email</label>
                    <div className={`req-mark ${error || status === 'error' ? 'error' : ''}`}>!</div>
                    </div>
                <Button loading={status === 'sending'} disabled={status === "success"} className="transbtn" onClick={() => submit(subscribe)}>{status === 'success' ? 'Subscribed' : 'Subscribe'}</Button>
                </div>
                )}/>
                <Spacer y={1}/>
                <Link href="/app">
                <Button className="transbtn" type="abort">Demo</Button>
                </Link>
            </Grid>
        </Grid.Container>
    )
}

export default Index;