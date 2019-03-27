//rounds given x to given sig figs
function precise(x, sigFigs=2) {
    return Number.parseFloat(x).toPrecision(sigFigs);
}

//converts cookie like string into object
function str_obj(str, delimiter=";") {
    str = str.split(delimiter);
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let cur = str[i].split('=');
        if (cur.length === 2) {
            result[cur[0].trim()] = cur[1].trim();
        }
    }
    return result;
}

export {precise, str_obj};