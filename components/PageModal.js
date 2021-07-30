import { useClickAway } from "@geist-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const PageModal = ({visible = false,setVisible,children,className}) => {
    const ref = useRef();
    useClickAway(ref, () => {
        visible && setVisible(false);
    });

    return (
        <AnimatePresence>
        {visible &&
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity:1 }}
            exit={{opacity: 0}}
            transition={{ duration: 0.3 }}
            className="choice-modal"
        >
        <div ref={ref} className={`modal-content${className !== undefined ? ` ${className}` : ''}`}>
            {children}
        </div>
        </motion.div>
        }
        </AnimatePresence>
    )
}

export default PageModal;