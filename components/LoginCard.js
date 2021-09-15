import { Button, Grid, Spacer, Text, Card, Input, useToasts } from "@geist-ui/react"
import Google from '../public/icons/google.svg';
import Facebook from '../public/icons/facebook.svg';
import Apple from '../public/icons/apple.svg';
import Link from "next/link"
import { useEffect, useState } from "react";
import { apiRequest, liveIP } from "../lib/api";
import { useUserContext } from "../lib/UserContext";

const LoginCard = ({close}) => {
    const [listenOAuth,setListen] = useState(false);
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useUserContext();
    const [,setToast] = useToasts();

    const facebookHandler = () => {
        const fb = window.open(`${liveIP}/auth/facebook`);
        setLoading(true);
        fb.onunload = async () => {
            const checkuser = await apiRequest({path: 'users',method: 'get'});
            if (checkuser.status === 200){
                setUser({logged: true,firstload: false,info: checkuser.data.data});
                setToast({text: 'Logged in succesfully',type: 'success'});
                localStorage.setItem('logged',true);
                close();
            }
            setLoading(false);
        }
    }

    return (
        <Grid.Container className="logincard" alignItems="center" justify="center" direction="column">
        <Grid xs alignItems="center" justify="center" direction="column">
        <Button loading={loading} onClick={facebookHandler} icon={<Facebook  viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn whitebtn" type="abort" size="large">{loading ? '' : 'Countine with Facebook'}</Button>
        <Spacer y={1}/>
        <span className="minor-wolf">or</span>
        <Spacer y={1}/>
        <span className="normal">Countine with email and password</span>
        <Spacer y={1}/>
        <Input className="large-white-input" name="email" placeholder="birito@naver.com"><span className="large-white-input-label">Email</span></Input>
        <Spacer/>
        <Input className="large-white-input" type="password" name="password" placeholder="*****"><span className="large-white-input-label">Password</span></Input>
        <Spacer y={1}/>
        <Button loading={loading} type="abort" className="transbtn countinebtn">{loading ? '' : 'Countine'}</Button>
        <Spacer y={1}/>
        <Grid style={{display: 'flex',flexDirection: 'column'}}>
            <Link href="/forgotpassword">
                <span style={{color: '#56ADE8',textAlign: 'center',cursor: 'pointer'}}>Reset Password</span>
            </Link>
        </Grid>
        </Grid>
        </Grid.Container>
    )
}

export default LoginCard;