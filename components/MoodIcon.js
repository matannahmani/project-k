
const MoodIcon = ({title,icon,onClick=null}) => {

    return (
        <>
        <div className="moodicon-wraper" onClick={onClick}>
            <div className="moodicon">
                {icon}
            </div>
            <span>{title}</span>
        </div>
        </>
    )
}

export default MoodIcon;