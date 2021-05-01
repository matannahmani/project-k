
const RatingBox = ({title,rate,icon}) => {

    return(
        <div className="ratingbox">
            <p className="ratingsub">{title}</p>
            <div>
                <p className="ratingsub" style={{color: "white",fontWeight: 'bolder'}}>{rate}</p>
                {icon}
            </div>
        </div>
    )
}
export default RatingBox;