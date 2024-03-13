import { proxy } from "valtio";

export const state = proxy({
    current: null,
    items: {
        Strap: "#000",
        Grill: "#000",
        InnerGrill: "#000",
        VolumeKnob: "#000",
        Logo: "#808080",
        Body: "#000",
    },
});
