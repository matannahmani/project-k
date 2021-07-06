import Head from 'next/head'
import VideoBox from '../../components/videoheader';
import Category from '../../components/category';
import PersonCard from '../../components/personcard';
import Link from 'next/link';
import GroupCall from '../../components/GroupCall';
export default function Home() {
  return (
    <>
    {/* <VideoBox posterurl="/video/poster.jpg" videourl="/video/postervideo.m4v" text={`Personalized memeories from your favorite KPOP Stars`}/>
     */}
     <div className="category index-hero">
       <h1>
       The place for
       <br/>unforggetable memeories.
       </h1>
     </div>
    <Category catname="피처링">
      <PersonCard link="/app/person" label labeltext="영상통화" price="6만 ₩" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
      <PersonCard label labeltext="포스터" price="6만 ₩" opt={["포스터s","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <PersonCard label labeltext="포스터" price="6만 ₩" opt={["포스터s","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
      {/* <PersonCard label labeltext="Album" price="80$" opt={["포스터s","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/> */}

    </Category>
    <Category catname="group calls">
      <GroupCall label stock={10} sold={10} labeltext="포스터" price="6만 ₩" opt={["포스터s","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <GroupCall single label stock={10} sold={10} labeltext="포스터" price="10만 ₩" opt={["포스터s","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
      <GroupCall label stock={10} sold={10} labeltext="포스터" price="6만 ₩" opt={["포스터s","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
      <GroupCall label stock={10} sold={10} labeltext="포스터" price="6만 ₩" opt={["포스터s","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
      {/* <PersonCard label labeltext="Album" price="80$" opt={["포스터s","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/> */}

    </Category>
    <Category catname="비디오">
      <Link href="/app/person">
      <PersonCard label labeltext="비디오" infocard price="20만 ₩" opt={["비디오s","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
      </Link>
      <PersonCard label labeltext="비디오" infocard price="35만 ₩" opt={["비디오s","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <PersonCard label labeltext="비디오" infocard price="15만 ₩" opt={["비디오s","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/>
      <PersonCard label labeltext="비디오" infocard price="30만 ₩" opt={["비디오s","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
    </Category>
    <Category catname="주간 복권">
      <PersonCard label labeltext="영상통화" infocard price="3천 ₩" opt={["포스터s","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
      <PersonCard label labeltext="영상통화" infocard price="5천 ₩" opt={["포스터s","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
    </Category>
    <Category catname="포스터">
      <Link href="/app/person">
      <PersonCard label labeltext="포스터" infocard price="6만 ₩" opt={["포스터s","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
      </Link>
      <PersonCard label labeltext="포스터" infocard price="6만 ₩" opt={["포스터s","Albums"]} name="Jennie" category="BLACKPINK" picture="https://i.pinimg.com/736x/f2/bc/6d/f2bc6d65fa4a708563e4db75c27fbb7c.jpg"/>
      <PersonCard label labeltext="포스터" infocard price="6만 ₩" opt={["포스터s","Videos"]} name="ViVi" category="Loona" picture="https://image.kpopmap.com/2017/02/kpop-loona-february-girl-vivi-debut-2017.jpg"/>
      <PersonCard label labeltext="포스터" infocard price="6만 ₩" opt={["포스터s","Albums"]} name="Momo" category="Twice" picture="https://i.pinimg.com/originals/c3/79/e4/c379e4ad3337a490ea21445056d81ab4.jpg"/>
    </Category>
    {/* <Category catname="Albums">
      <PersonCard label labeltext="Album" infocard price="80$" opt={["Photos","Albums"]} name="Rujin" category="Itzy" picture="https://dbkpop.com/wp-content/uploads/2019/07/itzy_itz_icy_concept_profile_ryujin.jpg"/>
    </Category> */}
    </>
  )
}
