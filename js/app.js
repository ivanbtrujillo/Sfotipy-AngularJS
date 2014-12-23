angular.module('Sfotipy', ['ngRoute','Sfotipy.controllers'])
	//Router provider nos permite definir las rutas de nuestra aplicación
	.config(['$routeProvider', function ($routeProvider){
		//Ruta por defecto. AppController es el controlador de nuestra ruta
		$routeProvider.when('/', {controller: 'AppController'});
		$routeProvider.otherwise({redirecTo: '/'});
	}]);