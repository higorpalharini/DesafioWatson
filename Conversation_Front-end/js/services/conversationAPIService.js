angular.module("conversation").factory("conversationAPI", function($http, config){
	
	var _send = function(conversationData){
		return $http.post(config.baseUrl + "/conversation", conversationData);
	};
	
	return {
		send: _send
	}
	
});