import { Button } from "@geist-ui/react";

const StickyPurchase = ({onClick,text="Get in contact"}) => {
    return(
    <div className="sticky-purchase">
        <Button onClick={onClick}>{text}</Button>
    </div>
    )
}
export default StickyPurchase;