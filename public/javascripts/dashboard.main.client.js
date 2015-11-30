require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery'] }
	},
	paths: {
		jquery: '/libraries/jquery.min',
		knockout: '/libraries/knockout',
		bootstrap: '/libraries/bootstrap.min',
		moment: '/libraries/moment.min'
	}
});

require(["knockout", "viewmodels/dashboard.vm.client", "da/activity.da.client"], function(ko, DashboardVM, ActivityDA) {

	// DIRTY DIRTY HARDCODING. HOW TO GET THIS OUTTA HERE?
	var url = "http://runmonitor.herokuapp.com";

	var activityDA = new ActivityDA(url);
	var dashboardVM = new DashboardVM(activityDA);
	dashboardVM.init();
	ko.applyBindings(dashboardVM);
});