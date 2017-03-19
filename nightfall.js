var _ = require('lodash');


function nightfallDetails(advisorData) {
    var nightfallData = _.get(advisorData, 'Response.data.nightfall');


    var nightfallActivityHash = _.get(advisorData, 'Response.data.nightfallActivityHash');
    var specificActivityHash = nightfallData.specificActivityHash;
    var strikeDetails = {
        name: advisorData.Response.definitions.activities[specificActivityHash].activityName,
        skulls: getSkulls(advisorData, nightfallActivityHash)
    };

    var nightfallText = 'Night fall strike is: ' + strikeDetails.name;
    nightfallText += '. Night fall strike has the following modifiers:';
    _.each(strikeDetails.skulls, function(skull){
        nightfallText += ' ' + skull.name;
    })
    strikeDetails.text = nightfallText;
    return strikeDetails;
}


function getSkulls(advisorData, nightfallActivityHash) {

    var nightfallDefinitions = _.get(advisorData, 'Response.definitions.activities.' + nightfallActivityHash);
    var skullsList = _.get(advisorData, 'Response.data.nightfall.tiers[0].skullIndexes');
    var skulls = [];
    _.each(skullsList, function(skullIndex) {
        skulls.push({
            name: nightfallDefinitions.skulls[skullIndex].displayName,
            desc: nightfallDefinitions.skulls[skullIndex].description
        });
    });
    return skulls;
}

 
module.exports.nightfallDetails = nightfallDetails;

