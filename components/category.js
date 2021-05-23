import { Info } from "@geist-ui/react-icons";
import { useState } from "react";
import HelpModal from "./Helpmodal"

const Category = ({catname,children}) => {
    const [state,setState] = useState(false);
    return (
        <>
        <div className="category">
            <div style={{display: 'flex',alignItems: 'center'}}>
                <h1>{catname}</h1>
                <Info className="info" onClick={() => setState(true)}/>
            </div>
            <div className="category-scroll">
                {children}
            </div>
        </div>
        <HelpModal state={state} setState={setState}/>
        </>
    )
}

export default Category;