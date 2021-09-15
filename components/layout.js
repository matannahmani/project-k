import { Avatar, Button, Grid, Image, Input, Popover, Spacer } from "@geist-ui/react";
import { ChevronDown, ChevronLeft, Search } from "@geist-ui/react-icons";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import { useUserContext } from "../lib/UserContext";
import LoginCard from "./LoginCard";
import PageModal from "./PageModal";
const Layout = (props) => {
    const router = useRouter();
    const [visible,setVisible] = useState(false);
    const [user,] = useUserContext();
    const [menu,setMenu] = useState(false);

    const purchasePath = () => router.pathname.includes('purchase') || router.pathname.includes('payment')

    const backHandler = () => {
        router.back();
    }

    const dropdownContent = () => (
        <div style={{padding: '8px'}}>
            <span>Profile</span>
            <Spacer/>
            <span>Logout</span>
        </div>
    )

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
                    {user.logged ? 
                    <Popover style={{cursor:'pointer',margin: '0px 24px',display: 'flex',alignItems: 'center'}} visible={menu} onClick={() => setMenu(!menu)} content={dropdownContent}>
                        <Avatar src={user.info.photo && user.info.photo} text={!user.info.photo && user.info.username}/>
                        <ChevronDown className={`cv${menu ? ' active' : ''}`} color="white"/>
                    </Popover>
                    :
                    <Button onClick={() => setVisible(true)} type="abort" size="auto" className="trans-btn white" auto>Login</Button>
                    }
                </Grid>
                :
                <ChevronLeft xmlns="http//www.w3.org/2000/svg" viewBox="0 0 24 24" className="return-btn" onClick={backHandler}/>
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
            <LoginCard close={() => setVisible(false)}/>
        </PageModal>
        </>
    )
}

export default Layout;