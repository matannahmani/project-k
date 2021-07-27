import { Button, Grid, Image, Input } from "@geist-ui/react";
import { Search } from "@geist-ui/react-icons";
import Link from 'next/link';
import { useRouter } from "next/router";
const Layout = (props) => {
    const router = useRouter();
    return (
        <>
        {router.pathname !== '/' ?
        <Grid.Container style={{minHeight: '100vh'}}>
            <Grid xs={24} justify="space-between" className="navbar" alignItems="center">
                <Link href="/app">
                <Image style={{padding: '16px'}} width="100" height="80" src="/logo.png"/>
                </Link>
                <Grid xs={24} sm={24} justify="flex-end" alignItems="center">
                    <Input className="binput" icon={<Search/>} placeholder="Search ..."/>
                    <Link href="/app/login">
                    <Button type="abort" className="transbtn" auto>Login</Button>
                    </Link>
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