var _ = require('lodash');

/**
 * Extract Weekly Crucible from Advisor Data
 * @param advisorData
 * @returns {{name: *, desc: *, text: string}}
 */
function weeklyCrucible(advisorData) {

    var weeklyCrucibleData = _.get(advisorData, 'Response.data.weeklyCrucible')[0];
    var hash = weeklyCrucibleData.activityBundleHash;
    var weeklyCrucibleName = _.get(advisorData, 'Response.definitions.activityBundles.' + hash).activityName;
    var weeklyCrucibleDesc = _.get(advisorData, 'Response.definitions.activityBundles.' + hash).activityDescription;


    return {
        name: weeklyCrucibleName,
        desc: weeklyCrucibleDesc,
        text: 'Weekly crucible is ' + weeklyCrucibleName
    };
}


module.exports.weeklyCrucible = weeklyCrucible;

