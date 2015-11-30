define(['knockout', 'models/activity.model.client'], function(ko, Activity) {
	var dashboardVm = function(da) {
		var self = this;

		self.da = da;
		self.activities = ko.observableArray();

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
