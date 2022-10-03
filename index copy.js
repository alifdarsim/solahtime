const solat = function (coord, day) {
    if (coord === undefined) return nodata();
    const lat = coord.lat;
    const lng = coord.lng;

    let j = day; //day of year
    let tz = 8; //time zone
    let l = lng; //longitude
    let r = 15 * tz;
    // let g = 18;
    let beta = (2 * Math.PI * j) / 365;
    let t = 229.18 * (0.000075 + (0.001868 * Math.cos(beta)) - (0.032077 * Math.sin(beta)) - (0.014615 * Math.cos(2 * beta)) - (0.040849 * Math.sin(2 * beta)));
    let zohor_hour = 12 + ((r - l) / 15) - (t / 60);

    let zohor_minute = zohor_hour * 60;

    let hours = Math.floor(zohor_minute / 60);
    let minutes = zohor_minute % 60;

    return hours + ':' + (minutes + 1.066667);
}

const nodata = () => {
    return null;
}

let coord = {
    lat: 1.71666667,
    lng: 103.53333333
}

const zohor = solat(coord, i);
// console.log(zohor);


export default solat