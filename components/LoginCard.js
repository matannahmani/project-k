import { Button, Grid, Spacer, Text, Card, Input } from "@geist-ui/react"
import Google from '../public/icons/google.svg';
import Facebook from '../public/icons/facebook.svg';
import Apple from '../public/icons/apple.svg';
import Link from "next/link"

const LoginCard = () => {
    return (
        <Grid.Container className="logincard" alignItems="center" justify="center" direction="column">
        <Grid xs alignItems="center" justify="center" direction="column">
        <Button icon={<Apple viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn blackbtn" type="abort" size="large">Countine with Apple</Button>
        <Spacer y={1}/>
        <Button icon={<Facebook  viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn whitebtn" type="abort" size="large">Countine with Facebook</Button>
        <Spacer y={1}/>
        <Button icon={<Google viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn whitebtn" type="abort" size="large">Countine with Google</Button>
        <Spacer y={1}/>
        <span className="minor-wolf">or</span>
        <Spacer y={1}/>
        <span className="normal">Countine with email and password</span>
        <Spacer y={1}/>
        <Input className="large-white-input" name="email" placeholder="birito@naver.com"><span className="large-white-input-label">Email</span></Input>
        <Spacer/>
        <Input className="large-white-input" type="password" name="password" placeholder="*****"><span className="large-white-input-label">Password</span></Input>
        <Spacer y={1}/>
        <Button type="abort" className="transbtn countinebtn">Countine</Button>
        <Spacer y={1}/>
        <Grid style={{display: 'flex',flexDirection: 'column'}}>
            <Link href="/forgotpassword">
                <span style={{color: '#56ADE8',textAlign: 'center',cursor: 'pointer'}}>Reset Password</span>
            </Link>
        </Grid>
        <Spacer y={2}/>
        </Grid>
        </Grid.Container>
    )
}

export default LoginCard;