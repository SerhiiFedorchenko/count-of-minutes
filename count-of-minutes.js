function dataParse(str) {
    const st1 = str.split(':')
    const hour = +st1[0]
    const st2 = st1[1].split(' ')
    const min = +st2[0]
    const mer = st2[1]

    return {hour, min, mer}
}

function diff(start, end) {
    const s = dataParse(start)
    const e = dataParse(end)

    const sCombined = +`${s.hour}${s.min}`;
    const eCombined = +`${e.hour}${e.min}`;

    //старт и финиш утром одного дня
    //старт и финиш вечером одного дня
    if (s.mer === e.mer && sCombined < eCombined) {
        const sMin = s.hour * 60 + s.min;
        const eMin = e.hour * 60 + e.min;
        return eMin - sMin;
    }
    //старт утром, финиш вечером одного дня
    //старт вечером одного дня, финиш утром на другой день
    else if (s.mer === 'am' && e.mer === 'pm' || s.mer === 'pm' && e.mer === 'am') {
        const sMin = s.hour * 60 + s.min;
        const eMin = (12 + e.hour) * 60 + e.min;
        return eMin - sMin;
    }
    //старт утром одного дня, финиш утром на другой день
    //старт вечером одного дня, финиш вечером на другой день
    else if (s.mer === e.mer && sCombined > eCombined) {
        const sMin = s.hour * 60 + s.min;
        const eMin = (24 + e.hour) * 60 + e.min;
        return eMin - sMin;
    }
}

module.exports = {dataParse, diff}

console.log(diff('10:10 am', '11:30 am')) // 80  старт и финиш утром одного дня
console.log(diff('6:10 pm', '9:30 pm')) // 200   старт и финиш вечером одного дня

console.log(diff('10:10 am', '6:30 pm')) // 500  старт утром, финиш вечером одного дня
console.log(diff('1:10 pm', '10:30 am')) // 1280 старт вечером одного дня, финиш утром на другой день

console.log(diff('10:10 am', '9:30 am')) // 1400 старт утром одного дня, финиш утром на другой день
console.log(diff('1:10 pm', '1:05 pm')) // 1435  старт вечером одного дня, финиш вечером на другой день

