import { Button, Grid, Input } from "@geist-ui/react";
import { Search } from "@geist-ui/react-icons";
import Logo from '../public/logo.svg'
import Link from 'next/link';
import { useRouter } from "next/router";
const Layout = (props) => {
    const router = useRouter();
    return (
        <>
        {router.pathname !== '/' ?
        <Grid.Container style={{height: '100vh'}}>
            <Grid xs={24} justify="space-between" className="navbar" alignItems="center">
                <Link href="/app">
                <Logo/>
                </Link>
                <Grid xs={24} sm={24} justify="flex-end" alignItems="center">
                    <Input className="binput" icon={<Search/>} placeholder="Search ..."/>
                    <Button className="transbtn" auto>Login</Button>
                </Grid>
            </Grid>
            <div className="body">
                {props.children}
            </div>
        </Grid.Container>
        :
        props.children
        }
        </>
    )
}

export default Layout;