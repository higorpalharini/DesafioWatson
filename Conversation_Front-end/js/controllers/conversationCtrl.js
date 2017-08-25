angular.module("conversation").controller("conversationCtrl", function($scope, conversationAPI){
	
	$scope.app = "ChatBot";
	$scope.conversationForm = {};

	var limparForm = function(){
		$scope.conversationForm.text = "";
		$scope.formConversation.$setPristine();
	}

	$scope.send = function(conversationForm){
		conversationAPI.send(conversationForm).success(function (data){
			$scope.conversationForm.conversation_id = data.conversation_id;
			$scope.conversationForm.response = ($scope.conversationForm.response != undefined ? $scope.conversationForm.response + '<br>' : "") + data.response[0];
			limparForm();
		});
	};

});
