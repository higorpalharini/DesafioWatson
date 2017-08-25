angular.module("conversation").controller("conversationCtrl", function($scope, conversationAPI, $sce){
	
	$scope.app = "ChatBot";
	$scope.conversationForm = {};

	var limparForm = function(){
		$scope.conversationForm.text = "";
		$scope.formConversation.$setPristine();
	}

	$scope.send = function(conversationForm){
		$scope.conversationForm.response = $scope.conversationForm.response == undefined ? '<span style="float:right; color: #363636;">Eu: ' + conversationForm.text + '</span>' : $scope.conversationForm.response + '<br><span style="float:right; color: #363636;">Eu: ' + conversationForm.text + '</span>'; 

		conversationAPI.send(conversationForm).success(function (data){
			$scope.conversationForm.conversation_id = data.conversation_id;
			$scope.conversationForm.response = $scope.conversationForm.response + '<br> <span style="float:left; color: #8FBC8F;">Bot: ' + data.response[0] + '</span>';
			limparForm();
		});
	};

	$scope.trustAsHtml = function(string) {
    	return $sce.trustAsHtml(string);
	};

});