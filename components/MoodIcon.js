import {useRef} from 'react';

const MoodIcon = ({title,icon,onClick=null,active}) => {
    const self = useRef(null);
    const clickHanlder = () =>{
        const items = document.querySelectorAll('.moodicon-wraper');
        items.forEach((e) => {
            if (e.classList.contains('active'))
                e.classList.remove('active')
        })
        self.current.classList.add('active');
        if (typeof onClick === 'function')
            onClick();
    }
    return (
        <>
        <div ref={self} className={"moodicon-wraper " + `${active ? 'active' : ''}`} onClick={clickHanlder}>
            <div className="moodicon">
                {icon}
            </div>
            <span>{title}</span>
        </div>
        </>
    )
}

export default MoodIcon;