angular.module("conversation").controller("conversationCtrl", function($scope, conversationAPI){
	
	$scope.app = "ChatBot";
	$scope.conversationForm = {};

	var limparForm = function(){
		$scope.conversationForm.text = "";
		$scope.formConversation.$setPristine();
	}

	$scope.send = function(conversationForm){
		$scope.conversationForm.response = $scope.conversationForm.response == undefined ? '<span style="float:left;">Eu: ' + conversationForm.text + '</span><br>' : $scope.conversationForm.response + '<br><span style="float:left;">Eu: ' + conversationForm.text + '</span><br>'; 

		conversationAPI.send(conversationForm).success(function (data){
			$scope.conversationForm.conversation_id = data.conversation_id;
			$scope.conversationForm.response = $scope.conversationForm.response + '<br> <span style="float:right;">Bot: ' + data.response[0] + '</span><br>';
			limparForm();
		});
	};

});