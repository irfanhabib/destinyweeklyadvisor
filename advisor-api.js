var advisor = require("./advisor");
var nightfall = require('./nightfall');
var crucible = require('./crucible');
var heroics = require('./heroics');
var daily = require('./daily');

var fetchWeeklyData = function(){
    return  advisor.getAdvisor().then(function(advisorData){
        var nightfallData = nightfall.nightfallDetails(advisorData).text;
        var weeklyCrucible = crucible.weeklyCrucible(advisorData).text;
        var weeklyHeroics = heroics.weeklyHeroics(advisorData).text;

        var text =  nightfallData + ' ' + weeklyHeroics + ' ' + weeklyCrucible;
        return text;
    })
}

var fetchDailyData = function(){
    return  advisor.getAdvisor().then(function(advisorData){
        var dailyMission = daily.getDailyMission(advisorData).text;
        var dailyCrucible = daily.getDailyCrucible(advisorData).text;

        var text =  dailyMission + '. ' + dailyCrucible;
        return text;
    })
}


module.exports.fetchWeeklyData = fetchWeeklyData

