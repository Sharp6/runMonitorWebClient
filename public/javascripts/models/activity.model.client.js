define(['knockout', 'moment'], function(ko, moment) {
	var activityModel = function(data) {
		var self = this;

		self.durationMoment = moment.duration(data.duration, 'seconds');
		self.duration = ko.observable(Math.round(self.durationMoment.asMinutes()));

		self.startMoment = moment(new Date(data.start_time));
		self.start = ko.observable(self.startMoment.format('dddd, MMMM Do YYYY'));

		self.year = ko.observable(self.startMoment.year());
		self.week = ko.observable(self.startMoment.week());

	};

	return activityModel;
});