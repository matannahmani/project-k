import { Button, Grid, Image, Input } from "@geist-ui/react";
import { ChevronLeft, Search } from "@geist-ui/react-icons";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import LoginCard from "./LoginCard";
import PageModal from "./PageModal";
const Layout = (props) => {
    const router = useRouter();
    const [visible,setVisible] = useState(false);

    const purchasePath = () => router.pathname.includes('purchase') || router.pathname.includes('payment')
    return (
        <>
        {router.pathname !== '/' ?
        <Grid.Container style={{minHeight: '100vh'}}>
            <Grid xs direction={!purchasePath()  ? 'row' : 'row-reverse'} justify="space-between" className="navbar" alignItems="center">
                <Link href="/app">
                <Image style={{padding: '16px'}} className="no-margin" width="100" height="80" src="/logo.png"/>
                </Link>
                {!purchasePath() ?
                <Grid xs={24} sm={24} justify="flex-end" alignItems="center">
                    <Input className="binput" icon={<Search/>} placeholder="Search ..."/>
                    <Button onClick={() => setVisible(true)} type="abort" size="auto" className="trans-btn white" auto>Login</Button>
                </Grid>
                :
                <ChevronLeft xmlns="http//www.w3.org/2000/svg" viewBox="0 0 24 24" className="return-btn" onClick={() => router.back()}/>
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