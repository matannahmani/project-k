import Head from 'next/head'
import styles from '../styles/Home.module.css'
import VideoBox from '../components/videoheader';
import Category from '../components/category';
import PersonCard from '../components/personcard';
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <VideoBox posterurl="/video/poster.jpg" videourl="/video/postervideo.m4v" text={`Personalized memeories from your favorite KPOP Stars`}/>
    <Category catname="Featured">
      <Link href="/person">
        <div>
      <PersonCard price="35$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
        </div>
      </Link>
      <PersonCard price="50$" opt={["Photos","Albums"]} name="Jennie" category="BlackPink" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <PersonCard price="45$" opt={["Photos","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
      <PersonCard price="30$" opt={["Photos","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/>

    </Category>
    <Category catname="Photos">
      <Link href="person">
      <PersonCard infocard price="35$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
      </Link>
      <PersonCard infocard price="50$" opt={["Photos","Albums"]} name="Jennie" category="BlackPink" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <PersonCard infocard price="30$" opt={["Photos","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/>
      <PersonCard infocard price="45$" opt={["Photos","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
    </Category>
    <Category catname="Albums">
      <PersonCard infocard price="50$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
    </Category>
    <Category catname="Poster">
      <PersonCard infocard price="45$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
    </Category>
    </>
  )
}
