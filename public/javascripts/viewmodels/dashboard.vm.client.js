define(['knockout', 'underscore', 'models/activity.model.client'], function(ko, _, Activity) {
	var dashboardVm = function(da) {
		var self = this;

		self.da = da;
		self.activities = ko.observableArray();

		self.activityTree = ko.computed(function() {
			var yearGrouped = _.groupBy(self.activities(), function(activity) { return activity.year(); });
			yearGrouped = _.toArray(yearGrouped);
			yearGrouped = yearGrouped.map(function(yearGroup) {
				return _.groupBy(yearGroup, function(activity) { return activity.week() });
			});
			//console.log(yearGrouped);
			
			return yearGrouped;
		});

		self.durationDataset = ko.computed(function() {
			var dataset = self.activities().map(function(activity) {
				return activity.duration();
			});
			console.log(dataset);
			return dataset;
		});

		self.labels = ko.computed(function() {
			labels = Array();
			for(i=0; i<self.activities().length;i++){
				labels[i] = i;
			}
			return labels;
		})

		self.loadActivities = function() {
			da.getActivities()
				.then(function(activities) {
					var mappedActivities = activities.map(function(activityData) {
						return new Activity(activityData);
					});
					self.activities(mappedActivities);
				});
		}

		self.init = function() {
			self.loadActivities();
		}
	}

	return dashboardVm;
});
