<html ng-app="conversation">
	<head>
		<meta charset="UTF-8">
		<title>Chatbot</title>

		<script src="lib/angular-1.5.7/angular.js"></script>
		<script src="lib/angular-1.5.7/angular-messages.js"></script>
		<script src="lib/angular-1.5.7/angular-locale_pt-br.js"></script>
		<!-- My imports -->
		<script src="js/app.js"></script>
		<script src="js/controllers/conversationCtrl.js"></script>
		<script src="js/services/conversationAPIService.js"></script>
		<script src="js/value/configValue.js"></script>
		<script src="js/sanitize.js"></script>

		<!-- Bootstrap -->
		<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.6-dist/css/bootstrap.css">
		<!-- My css -->
		<link rel="stylesheet" type="text/css" href="css/app.css">
	</head>

	<body ng-controller="conversationCtrl">
		<div class ="jumbotron center" style="text-align: center;">
			<img style="width: 10%" src="./imagens/bot.png">
			<div style="width: 100%"> 
				<h2 ng-bind="app"></h2>
				
				<form name="formConversation" class="margin center" style=" width: 40%">
					<div>
						<span ng-bind-html="conversationForm.response"></span>

					</div>

					<input type="hidden" ng-model="conversationForm.conversation_id">
					<input style="text-align: center;" class="form-control" type="text" name="text" ng-model="conversationForm.text" placeholder="Envie um chat =)" ng-required="true" />
				
					<button class ="btn btn-block btn-primary" ng-click="send(conversationForm)" ng-disabled="formConversation.$invalid" style="color:#FFFFF0">Enviar</button>
				</form>
			</div>
		</div>
	</body>
</html> 