angular.module('Sfotipy.controllers', [])
	//Inyección de los componentes de servicio
	.controller('AppController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http){
		//Obtenemos los datos del JSON
		$http.get('/data.json').success(function(data){
			$rootScope.albums = [];
			$rootScope.currentAlbum = {};
			$rootScope.currentAlbum.cover = "img/sfotipyAlbum.jpg";

			$rootScope.currentSong = {};

			$rootScope.playButton = "show";
			$rootScope.pauseButton = "hide";

			$rootScope.playerButtons = "hide";


			for (var name in data){
				if (data.hasOwnProperty(name)){
					var album = data[name];
					album.name = name;
					$rootScope.albums.push(album);
				}
			}

		});

		$scope.select = function (albumName){
			var album = _.where($rootScope.albums, { name: albumName });
			if (album.length > 0){
				$rootScope.currentAlbum = album[0];
			}
		}

		$scope.add = function (songName){
			$rootScope.playerButtons = "show";
			$rootScope.currentSong.paused = true;
			var song = _.where($rootScope.currentAlbum.songs, {name: songName});
			if(song.length > 0){
				$rootScope.currentSong = song[0];

				$rootScope.playButton = "show";
				$rootScope.pauseButton = "hide";
				//$rootScope.currentSong.pause = true;
				$scope.reproducir();
				//$scope.reproducir();
				console.log($rootScope.currentSong.file);

			}
		}

		$scope.log =function(mensaje){
			console.log(mensaje);
		}

		 $scope.reproducir = function () {
            var audio = document.getElementById("player");
            audio.load();
            if($rootScope.currentSong.paused){
            	audio.play();
            	$rootScope.currentSong.paused = false;
            	$rootScope.playButton = "hide";
				$rootScope.pauseButton = "show";
				console.log(audio);
            }
            else {
            	audio.pause();
            	$rootScope.currentSong.paused = true;
            	$rootScope.playButton = "show";
				$rootScope.pauseButton = "hide";
            }
        };

	}]);

// $http: peticiones HTTP a través de AJAX o JSONP
// $rootScope: representa el contexto raiz de la aplicación. Todos los controladores tienen acceso a este objeto
// $scope: representa el contexto local del controlador.
