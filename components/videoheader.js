
const VideoBox = ({videourl,posterurl,text}) => {

    return (
        <div className="video-con">
            <div className="videobox">
                <video width="100%" autoPlay muted loop playsInline poster={posterurl}>
                <source src={videourl} type="video/mp4"/>
                </video>
                <p className="videobox-text">{text}</p>
            </div>
        </div>
    )
}

export default VideoBox;