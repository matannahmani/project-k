import { Progress, useTheme } from "@geist-ui/react"

const ProgressBar = ({sold=0,stock=100,label=false,big=false}) => {
    const theme = useTheme()
    const colors = {
        100: theme.palette.error,
        80: theme.palette.warning,
        50: theme.palette.alert,
        0: theme.palette.success,

    }
    return (
        <div className={`${big || label ? '' : 'progress-small'} ${label ? 'progress-label person-progress-div' : 'person-progress-div'}`}>
        {label &&
        <span style={{marginRight: 'auto'}} className="text-small">Weekly Orders</span>
        }
        <Progress className="person-progress" value={sold === 0 ? 0 : (sold / stock) * 100} colors={colors} />
        <span >{sold}/{stock}</span>
    </div>
    )
}
export default ProgressBar;