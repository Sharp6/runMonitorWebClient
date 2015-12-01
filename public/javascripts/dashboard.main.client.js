require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery'] }
	},
	paths: {
		jquery: '/libraries/jquery.min',
		knockout: '/libraries/knockout',
		bootstrap: '/libraries/bootstrap.min',
		moment: '/libraries/moment.min',
		underscore: '/libraries/underscore.min'
	}
});

require(["knockout", "viewmodels/dashboard.vm.client", "da/activity.da.client"], 
	function(ko, DashboardVM, ActivityDA) {

	// DIRTY DIRTY HARDCODING. HOW TO GET THIS OUTTA HERE?
	var url = "http://runmonitor.herokuapp.com";

	var activityDA = new ActivityDA(url);
	var dashboardVM = new DashboardVM(activityDA);
	dashboardVM.init();
	ko.applyBindings(dashboardVM);

	var data = {
	  // A labels array that can contain any sort of values
	  //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
	  labels: dashboardVM.labels(),
	  // Our series array that contains series objects or in this case series data arrays
	  series: [
	    dashboardVM.durationDataset()
	    //[63,49,47,63,49,47,63,49,47,63,49,47,63,49,47,63,49,47,63,49,47,63,49,47]
	  ]
	};

	// Create a new line chart object where as first parameter we pass in a selector
	// that is resolving to our chart container element. The Second parameter
	// is the actual data object.
	new Chartist.Line('.ct-chart', data);
});