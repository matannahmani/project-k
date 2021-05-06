import Head from 'next/head'
import VideoBox from '../../components/videoheader';
import Category from '../../components/category';
import PersonCard from '../../components/personcard';
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <VideoBox posterurl="/video/poster.jpg" videourl="/video/postervideo.m4v" text={`Personalized memeories from your favorite KPOP Stars`}/>
    <Category catname="Featured">
      <Link href="/app/person">
        <div>
      <PersonCard label labeltext="Video Call" price="5$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
        </div>
      </Link>
      <PersonCard label labeltext="Photo" price="50$" opt={["Photos","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <PersonCard label labeltext="Photo" price="55$" opt={["Photos","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
      <PersonCard label labeltext="Album" price="80$" opt={["Photos","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/>

    </Category>
    <Category catname="Lottery">
      <PersonCard label labeltext="Video Call" infocard price="3$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
      <PersonCard label labeltext="Video Call" infocard price="5$" opt={["Photos","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
    </Category>
    <Category catname="Photos">
      <Link href="/app/person">
      <PersonCard label labeltext="Photo" infocard price="50$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
      </Link>
      <PersonCard label labeltext="Photo" infocard price="50$" opt={["Photos","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <PersonCard label labeltext="Photo" infocard price="50$" opt={["Photos","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/>
      <PersonCard label labeltext="Photo" infocard price="55$" opt={["Photos","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
    </Category>
    <Category catname="Albums">
      <PersonCard label labeltext="Album" infocard price="80$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
    </Category>
    </>
  )
}
