var _ = require('lodash');

/**
 * Extract Weekly Heroic data
 * @param advisorData
 * @returns {{name: string, skulls}}
 */
function weeklyHeroics(advisorData) {

    var heroicStrike = _.get(advisorData, 'Response.data.heroicStrike');
    var heroicStrikesHash = _.get(advisorData, 'Response.data.heroicStrikeHashes[0]');


    var strikeDetails = {
        name: "SIVA Crisis Heroic",
        skulls: getSkulls(advisorData, heroicStrikesHash)
    };

    var strikeText = 'Weekly Heroics have the following modifiers';
    _.each(strikeDetails.skulls, function(skull){
        strikeText += ' ' + skull.name;
    })
    strikeDetails.text = strikeText;
    return strikeDetails;
}


/**
 * Extract skulls for Weekly Heroic
 * @param advisorData
 * @param heroicStrikesHash
 * @returns {Array}
 */
function getSkulls(advisorData, heroicStrikesHash) {

    var heroicDefinitions = _.get(advisorData, 'Response.definitions.activities[' + heroicStrikesHash + ']');

    var skullsList =_.get(advisorData, 'Response.data.heroicStrike.tiers[0].skullIndexes');
    var skulls = [];
    _.each(skullsList, function (skullIndex) {
        skulls.push({
            name: heroicDefinitions.skulls[skullIndex].displayName,
            desc: heroicDefinitions.skulls[skullIndex].description
        });
    });
    return skulls;
}



module.exports.weeklyHeroics = weeklyHeroics;

