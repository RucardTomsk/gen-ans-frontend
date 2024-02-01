import {useContext} from "react";
import {InteractiveMapContext} from "../provider/InteractiveMapContext.tsx";

export const useInteractiveMap = () => {
    return useContext(InteractiveMapContext);
}