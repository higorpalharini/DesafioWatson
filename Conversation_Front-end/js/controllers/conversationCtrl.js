angular.module("conversation").controller("conversationCtrl", function($scope, conversationAPI){
	
	$scope.app = "ChatBot";
	$scope.conversationForm = {};

	var limparForm = function(){
		$scope.conversationForm.text = "";
		$scope.formConversation.$setPristine();
	}

	$scope.send = function(conversationForm){
		$scope.conversationForm.response = $scope.conversationForm.response == undefined ? 'Eu: ' + conversationForm.text + '<br>' : $scope.conversationForm.response + '<br>Eu: ' + conversationForm.text + '<br>'; 

		conversationAPI.send(conversationForm).success(function (data){
			$scope.conversationForm.conversation_id = data.conversation_id;
			$scope.conversationForm.response = $scope.conversationForm.response + '<br> Bot: ' + data.response[0] + '<br>';
			limparForm();
		});
	};

});