App = Ember.Application.create();

App.Router.map(function() {
  this.resource('works', function(){
  	this.resource('drawings');
  	this.resource('photos');
  	this.resource('websites');
  	this.resource('logos');
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.WorksRoute = Ember.Route.extend({
	model: function(){
		return App.WORKS;
	}
});
App.WorksView = Ember.View.extend({
	didInsertElement : function(){
    	Ember.run.scheduleOnce('afterRender', this, function(){
    		$(function() {
   				$('.work-panel').on('click', function(e) {
	    		$(this).find('.panel-image').toggleClass('hide-panel-body');
	    		$(this).find('.panel-image').toggleClass('hide-panel-footer');
   			});
   			$("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false, theme: 'dark_rounded', allow_resize: false});
   			$('button.img-modal').on('click', function(e) {
   				var img = $(this).parent().parent().find('img').attr('src');
   				var name = $(this).parent().parent().find('h4').text();
   				var desc = $(this).parent().parent().find('p').text();
   				$.prettyPhoto.open(img,name,desc)
   			});
		});
    });
  }
});

App.WORKS = [
	{
		type: "Drawing",
		imgUrl: "./imgs/abstract-realism.jpg",
		title: "Abstract Reality",
		description: "This piece was completed during my studies at the Art Institute of Virginia Beach. The drawing was done in colored chalk and conte on paper."
	},{
		type: "Photo",
		imgUrl: "./imgs/exposurecomp1.jpg",
		title: "Running Exposure",
		description: "This piece is a combination of original photography and Photoshop. I blended long exposure & regular photography together with some filters in Photoshop."
	},{
		type: "Photo",
		imgUrl: "./imgs/exposurecomp2.jpg",
		title: "Mixed Motion",
		description: "This piece is a combination of original photography and Photoshop. I blended long exposure & regular photography together with some filters in Photoshop."
	},{
		type: "Photo",
		imgUrl: "./imgs/flower.jpg",
		title: "Boardwalk Beauty",
		description: "This is an original photograph of a flower at the Virginia Beach oceanfront. Slight color enhancement in Photoshop."
	},{
		type: "Print Media",
		imgUrl: "./imgs/fs-flip-rail.jpg",
		title: "Va Skate Poster 1",
		description: "This image was created as a mock sequence photo page for VA Skate magazine."
	},{
		type: "Photoshop",
		imgUrl: "./imgs/gettin-it-in.jpg",
		title: "Since 1989",
		description: "This image was created in Photoshop using video stills."
	},{
		type: "Drawing",
		imgUrl: "./imgs/graffiti.jpg",
		title: "Graffiti the World",
		description: "This collage was created by making many individual \"graffiti\" drawings, cutting them out individually with an exacto blade, and collage them together with some additional drawing to create the final product. Created as a project during my studies at the Art Institute of Virginia Beach."
	},{
		type: "Photo",
		imgUrl: "./imgs/jaybike.jpg",
		title: "Jayden",
		description: "Original Photograph."
	},{
		type: "Photo",
		imgUrl: "./imgs/long-exposure.jpg",
		title: "Can't Blink",
		description: "Original long exposure photography."
	},{
		type: "Print Media",
		imgUrl: "./imgs/nyeve-sk8comp.jpg",
		title: "New Year's Eve Skate Extravaganza Flyer",
		description: "Flyer created for a skateboard contest organized and hosted by me."
	},{
		type: "Drawing",
		imgUrl: "./imgs/pencil-paper.jpg",
		title: "Paper with Pencil on Paper",
		description: "This drawing of a folded up piece of paper was done in graphite during my studies at the Art Institute of Virginia Beach"
	},{
		type: "Photoshop",
		imgUrl: "./imgs/rear-view.jpg",
		title: "Rear View",
		description: "A composition using original photography and various Photoshop techniques."
	},{
		type: "Logo",
		imgUrl: "./imgs/vask8-logo.jpg",
		title: "VA Skate Logo",
		description: "Logo I created for VA Skate Magazine."
	},{
		type: "Print Media",
		imgUrl: "./imgs/vask8-mag.jpg",
		title: "VA Skate Magazine Promo Poster",
		description: "Promo poster created for VA Skate Magazine."
	},{
		type: "Print Media",
		imgUrl: "./imgs/vaskate-mission.jpg",
		title: "VA Skate Media Pack - Mission Statement",
		description: "The one page mission statement of a 4 page media package for VA Skate magazine."
	}
];
