
const Label = ({title,type='',cardlabel=false}) => (
    <div className={`label ${type} ${title==="Video Call" ? 'gold' : ''} ${cardlabel ? 'card-label' : ''}`}><span>{title}</span></div>
)

export default Label;