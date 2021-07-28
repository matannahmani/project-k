import { Button } from "@geist-ui/react";

const StickyPurchase = ({onClick}) => {
    return(
    <div className="sticky-purchase">
        <Button onClick={onClick}>Get in contact</Button>
    </div>
    )
}
export default StickyPurchase;