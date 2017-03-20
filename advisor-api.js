var advisor = require("./advisor");
var nightfall = require('./nightfall');
var crucible = require('./crucible');
var heroics = require('./heroics');
var daily = require('./daily');

/**
 * Fetch Weekly Data
 * @returns {*}
 */
var fetchWeeklyData = function () {
    return advisor.getAdvisor().then(function (advisorData) {
        var nightfallData = nightfall.nightfallDetails(advisorData).text;
        var weeklyCrucible = crucible.weeklyCrucible(advisorData).text;
        var weeklyHeroics = heroics.weeklyHeroics(advisorData).text;

        return nightfallData + ' ' + weeklyHeroics + ' ' + weeklyCrucible;
    })
};


/**
 * Fetch Daily Data
 * @returns {*}
 */
var fetchDailyData = function () {
    return advisor.getAdvisor().then(function (advisorData) {
        var dailyMission = daily.getDailyMission(advisorData).text;
        var dailyCrucible = daily.getDailyCrucible(advisorData).text;

        return dailyMission + '. ' + dailyCrucible;
    })
}


module.exports.fetchWeeklyData = fetchWeeklyData;
module.exports.fetchDailyData = fetchDailyData;

