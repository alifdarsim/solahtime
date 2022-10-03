import gha from "./gha.js";
import { timetohour, readabletime } from "./utils.js";

//all operation was done in second
const solat = function (coordinate, day) {
    if (coordinate === undefined) return nodata();
    const lat = coordinate.lat;
    const lng = coordinate.lng;

    const lamda_k = timetohour(lng.h, lng.m, 0) / 15;
    const gha_trans = 24 - lamda_k;
    const gha_t1 = gha(day, 2, 2022);
    const gha_t2 = gha(day + 1, 2, 2022) + 24;
    const wpm_transit = (gha_trans - gha_t1) / (gha_t2 - gha_t1) * 24;

    const zohor = wpm_transit + timetohour(0, 1, 3);

    return {
        "zohor": zohor
    };
}

const nodata = () => {
    return null;
}

let coord = {
    lat: {
        h: 1,
        m: 43
    },
    lng: {
        h: 103,
        m: 32
    },
}

let props = {
    fard: "zohor",
    date: "02-01-2022",
    state: "perak",
    zone: "1"
}

const zohor = solat(props);

// for (let i = 1; i < 31; i++) {
//     const zohor = solat(coord, i);
//     let lala = timetosecond(zohor, 0, 0)
//     let time = readabletime(lala);
//     console.log(i + '. ' + time);
// }

export default solat