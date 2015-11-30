define(['jquery'], function($){
	var activityDA = function(url) {
		var getActivities = function() {
			return $.ajax({
				dataType: "json",
			  	url: url+"/getAllActivities"
			}).promise();
		};	

		return {
			getActivities: getActivities
		}
	}
	
	return activityDA;
});