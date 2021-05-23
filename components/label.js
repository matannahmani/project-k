
const Label = ({title,type='',cardlabel=false}) => (
    <div className={`label ${type} ${title==="Video Call" || title === "영상통화" || title === "비디오" ? 'gold' : ''} ${cardlabel ? 'card-label' : ''}`}><span>{title}</span></div>
)

export default Label;