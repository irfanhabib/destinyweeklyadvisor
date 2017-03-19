var _ = require('lodash');


function getDailyMission(advisorData) {
    var dailyChapterHash = _.get(advisorData, 'Response.data.dailyChapterHashes[0]');
    var text = 'Daily Heroic is ' + advisorData.Response.definitions.activities[dailyChapterHash].activityName;

    return {'text': text};
}


function getDailyCrucible(advisorData) {
    var dailyCrucibleHash = _.get(advisorData, 'Response.data.dailyCrucibleHash');
    var text = 'Daily Crucible is ' + advisorData.Response.definitions.activities[dailyCrucibleHash].activityName;

    return {'text': text};
}


module.exports.getDailyMission = getDailyMission;
module.exports.getDailyCrucible = getDailyCrucible;