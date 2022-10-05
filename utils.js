export const timetohour = (hour, minute, second) => {
    const gha_hour = hour + (minute / 60) + (second / 3600);
    return gha_hour;
}

export const timetosecond = (hour, minute, second) => {
    const gha_sec = (hour * 3600) + (minute * 60) + second;
    return gha_sec;
}

export const readabletime = (second) => {
    return secondsToHms(second);
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    m = m + 1;
    return `${h}:${m}`

    // let _h = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";

    // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}