import { Button, Grid, Spacer, Text, Card } from "@geist-ui/react"
import Google from '../../public/icons/google.svg';
import Facebook from '../../public/icons/facebook.svg';
import Apple from '../../public/icons/apple.svg';
import Link from "next/link"
import LoginInput from "../../components/LoginInput";

const Login = () => {

    return(
        <Grid.Container style={{height: '100%',minHeight: '300px',width:'100%',margin: '0px'}} gap={2} direction="column" alignItems="center">
        <Grid style={{maxWidth: '100%'}} direction="column" alignItems="center" justify="center">
        <Card className="logincard" style={{borderRadius: '16px'}} shadow type={"lite"}>
        <Button icon={<Apple viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn blackbtn" type="abort" size="large">Countine with Apple</Button>
        <Spacer y={1}/>
        <Button icon={<Facebook  viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn whitebtn" type="abort" size="large">Countine with Facebook</Button>
        <Spacer y={1}/>
        <Button icon={<Google viewBox="0 0 30 30" width={null} height={null}/>} className="loginbtn whitebtn" type="abort" size="large">Countine with Google</Button>
        <Spacer y={1.5}/>
        <span className="minor-wolf">or</span>
        <Spacer y={1.5}/>
        <span className="normal">Countine with email and password</span>
        <Spacer y={1.5}/>
        <LoginInput id="email" label="Email" name="email" placeholder="birito@naver.com"  />
        <LoginInput id="password" label="Password" type="password" name="password" placeholder="*****" />
        <Spacer y={0.5}/>
        <Button type="abort" className="transbtn countinebtn">Countine</Button>
        <Spacer y={0.5}/>
        <Grid style={{display: 'flex',flexDirection: 'column'}}>
            <Link href="/forgotpassword">
                <span style={{color: '#56ADE8',textAlign: 'center',cursor: 'pointer'}}>Reset Password</span>
            </Link>
        </Grid>
        </Card>
        </Grid>
    </Grid.Container>
    )
}

export default Login;