import { Button, Grid, Image, Input } from "@geist-ui/react";
import { Search } from "@geist-ui/react-icons";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import LoginCard from "./LoginCard";
import PageModal from "./PageModal";
const Layout = (props) => {
    const router = useRouter();
    const [visible,setVisible] = useState(false);
    return (
        <>
        {router.pathname !== '/' ?
        <Grid.Container style={{minHeight: '100vh'}}>
            <Grid xs justify="space-between" className="navbar" alignItems="center">
                <Link href="/app">
                <Image style={{padding: '16px'}} className="no-margin" width="100" height="80" src="/logo.png"/>
                </Link>
                {!router.pathname.includes('purchase') &&
                <Grid xs={24} sm={24} justify="flex-end" alignItems="center">
                    <Input className="binput" icon={<Search/>} placeholder="Search ..."/>
                    <Button onClick={() => setVisible(true)} type="abort" size="auto" className="trans-btn white" auto>Login</Button>
                </Grid>
                }
            </Grid>
            <div className="body">
                {props.children}
            </div>
        </Grid.Container>
        :
        props.children
        }
        <PageModal visible={visible} setVisible={setVisible}>
            <LoginCard/>
        </PageModal>
        </>
    )
}

export default Layout;