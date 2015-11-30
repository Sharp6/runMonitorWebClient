define(['knockout', 'moment'], function(ko, moment) {
	var activityModel = function(data) {
		var self = this;

		self.durationMoment = moment.duration(data.duration, 'seconds');
		self.duration = ko.observable(Math.round(self.durationMoment.asMinutes()));

		self.start = ko.observable(moment(new Date(data.start_time)).format('dddd, MMMM Do YYYY'));
	};

	return activityModel;
});