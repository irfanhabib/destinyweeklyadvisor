/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

var Alexa = require('alexa-sdk');
var AdvisorApi = require('./advisor-api');

var APP_ID = 'amzn1.ask.skill.b3c06f6f-0ed8-40de-bfcd-bec4fe3b26ce';

var handlers = {
    'FetchWeeklyEvents': function () {
        var that = this;
        AdvisorApi.fetchWeeklyData().then(function (speechOutput) {
            that.emit(':tell', speechOutput);
        })
    },
    'FetchDailyEvents': function () {
        var that = this;
        AdvisorApi.fetchDailyData().then(function (speechOutput) {
            that.emit(':tell', speechOutput);
        })
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    }
};

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
