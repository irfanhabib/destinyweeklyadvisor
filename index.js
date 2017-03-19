/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

var Alexa = require('alexa-sdk');
var AdvisorApi = require('./advisor-api');

var APP_ID = 'amzn1.ask.skill.b3c06f6f-0ed8-40de-bfcd-bec4fe3b26ce';

var handlers = {
    'FetchWeeklyEvents': function () {
        var speechOutput = AdvisorApi.fetchWeeklyData();
        this.emit(':tell', speechOutput);
    },
    'FetchDailyEvents': function () {
        var speechOutput = AdvisorApi.fetchDailyData();
        this.emit(':tell', speechOutput);    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
