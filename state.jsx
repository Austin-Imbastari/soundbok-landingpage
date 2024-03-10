import { proxy } from "valtio";

export const state = proxy({
    current: null,
    items: {
        strapmaterial: "#000",
        outergrillmaterial: "#000",
        innerGrill: "#000",
        volumeknobmaterial: "#000",
        logo: "#808080",
        body: "#000",
    },
});
