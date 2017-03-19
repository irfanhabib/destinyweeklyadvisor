var _ = require('lodash');

function weeklyCrucible(advisorData) {

    var weeklyCrucibleData = _.get(advisorData, 'Response.data.weeklyCrucible')[0];
    var hash = weeklyCrucibleData.activityBundleHash;
    var weeklyCrucibleName = _.get(advisorData, 'Response.definitions.activityBundles.' + hash).activityName;
    var weeklyCrucibleDesc = _.get(advisorData, 'Response.definitions.activityBundles.' + hash).activityDescription;
    var weeklyCrucibleIcon = _.get(advisorData, 'Response.definitions.activityBundles.' + hash).releaseIcon;


    var crucibleDetail = {
        name: weeklyCrucibleName,
        desc: weeklyCrucibleDesc,
        text: 'Weekly crucible is ' + weeklyCrucibleName
    };
    return crucibleDetail;
}


module.exports.weeklyCrucible = weeklyCrucible;

