import { Button } from "@geist-ui/react";

const StickyPurchase = ({props,trans,onClick,text="Get in contact"}) => {
    return(
    <div {...props} className={`sticky-purchase${trans ? ' trans' : ''}`}>
        <Button onClick={onClick}>{text}</Button>
    </div>
    )
}
export default StickyPurchase;