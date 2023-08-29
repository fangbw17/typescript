enum Season {
    Fall,
    Winter,
    Spring,
    Summer
}

function whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
            break;
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Fall))