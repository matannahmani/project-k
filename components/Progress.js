import { Progress, useTheme } from "@geist-ui/react"
import { Info } from "@geist-ui/react-icons"
import { useState } from "react"
import HelpModal from "./Helpmodal"

const ProgressBar = ({className,sold=0,stock=100,label=false,big=false}) => {
    const [state,setState] = useState(false);
    const theme = useTheme()
    const colors = {
        100: '#EF476F',
        80: theme.palette.warning,
        50: theme.palette.alert,
        0: theme.palette.success,

    }
    return (
        <>
        <div className={`${big || label ? '' : 'progress-small'}  ${label ? 'progress-label person-progress-div' : 'person-progress-div'}`}>
        {label &&
        <Info className="info-progress" onClick={() => setState(true)}/>
        }
        <Progress className={`person-progress ${className}`} value={sold === 0 ? 0 : (sold / stock) * 100} colors={colors} />
        <span >{sold}/{stock} 반점</span>
        </div>
        <HelpModal state={state} setState={setState}/>
        </>
    )
}
export default ProgressBar;