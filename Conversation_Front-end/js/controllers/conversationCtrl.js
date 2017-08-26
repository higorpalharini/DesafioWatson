angular.module("conversation").controller("conversationCtrl", function($scope, conversationAPI, $sce){
	
	$scope.app = "JoBot";
	$scope.conversationForm = {};
	$scope.conversationForm.response = "";

	var limparForm = function(){
		$scope.conversationForm.text = "";
		$scope.formConversation.$setPristine();
	}

	$scope.send = function(conversationForm){
		$scope.conversationForm.response +=  '<span style="float:right; font-size:10px;">' + getFormatedDate(new Date())  + '</span>';
		$scope.conversationForm.response += '<span class="label label-default" style="float:right; font-size:14px; margin-bottom: 7px;">Eu: ' + conversationForm.text + '</span><br>'; 
		
		conversationAPI.send(conversationForm).success(function (data){
			$scope.conversationForm.conversation_id = data.conversation_id;
			$scope.conversationForm.response += '<span class="label label-info" style="float:left; font-size:14px;">JoBot: ' + data.response[0] + '</span>';
			$scope.conversationForm.response += '<span style="float:left; font-size:10px;">' + getFormatedDate(new Date())  + '</span><br>';
			limparForm();
		});
	};

	$scope.trustAsHtml = function(string) {
    	return $sce.trustAsHtml(string);
	};

	var getFormatedDate = function(date){
		return date.getHours() + ":" + padLeft(date.getMinutes(),2) + ":" + padLeft(date.getSeconds(),2);
	}

	var padLeft = function padLeft(nr, n, str){
	    return Array(n-String(nr).length+1).join(str||'0')+nr;
	}

});