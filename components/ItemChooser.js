import Flicking from "@egjs/react-flicking";
import { Image } from "@geist-ui/react";

const ItemChooster = ({items,selectHandler}) => {
    return (
        <Flicking
        tag = "div"
        viewportTag = "div"
        cameraTag = "div"
        onSelect = {selectHandler}
        onChange = {selectHandler}
        classPrefix = "itemchooser"
        deceleration = {0.0075}
        horizontal = {true}
        infiniteThreshold = {0}
        threshold = {40}
        duration = {100}
        panelEffect = {x => 1 - Math.pow(1 - x, 3)}
        defaultIndex = {0}
        inputType = {["touch", "mouse"]}
        thresholdAngle = {45}
        bounce = {10}
        autoResize = {true}
        adaptive = {true}
        zIndex = {2000}
        bound = {false}
        overflow = {false}
        style={{width: '100%',height: '100%'}}
        gap = {0}
        moveType = {{type: "snap", count: 1}}
        >
    {items.map((e) => (
        <div className="product">
        <p style={{color: 'black'}} className="person-subtitle">{e.title} - {e.price}$</p>
        <Image width={240} height={160}
            src={e.img} />
        </div>
    ))}
</Flicking>

    )
}

export default ItemChooster;