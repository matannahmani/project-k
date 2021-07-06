
const Label = ({title,type='',cardlabel=false,nopos}) => (
    <div style={nopos ? {position: 'relative',bottom: '0px',left: '0px'} : {}} className={`label ${type} ${title==="Video Call" || title === "영상통화" || title === "비디오" || title === "Single" ? 'gold' : ''} ${cardlabel ? 'card-label' : ''}`}><span>{title}</span></div>
)

export default Label;