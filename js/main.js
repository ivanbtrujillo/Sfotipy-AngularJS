//Definicion de objeto literal en javascript para poner objetos en el global
Sfotipy = {}

Sfotipy.Song = Backbone.Model.extend({});
Sfotipy.SongView = Backbone.View.extend({
	events: {
		'click .action.icon-add':'add'
	},
	tagName: 'li',
	className: 'item',
	template: Handlebars.compile($("#song-template").html()),
	//Funcion que se ejecutará cuando se visualiza la vista
	render: function(){
		//Recuperamos la cancion
		var song = this.model;
		var name = song.get('name');
		var author = song.get('author');
		var html = this.template(this.model.toJSON());

		//Ahora llamamos un helper de Jquery para recuperar el elemento y añadir contenido a la vista
		this.$el.html(html);
	},
	add: function(e){
		alert(this.model.get("name"));
	}

});
//Dejamos Sfotipy en el global para poder usarlo desde la consola del navegador.
window.Sfotipy = Sfotipy;

