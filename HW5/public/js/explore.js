var movies = [
	{
		id: 0,
		title: "Avengers Age of Ultron",
        url: "images/avengers.jpeg",
    },
	{
		id: 1,
		title: "The Great Gatsby",
        url: "images/gatsby.jpeg",
	},
	{
		id: 2,
		title: "The Jungle Book",
        url: "images/junglebook.jpeg",
    },
	{
		id: 3,
		title: "The Lion, The Witch, and The Wardrobe",
        url: "images/narnia.jpeg",
    },
	{
		id: 4,
		title: "National Treasure",
        url: "images/nationaltreasure.jpeg",
		},
	{
		id: 5,
		title: "Peter Pan",
        url: "images/peterpan.jpeg",
    },
	{
		id: 6,
		title: "Pinocchio",
        url: "images/pinocchio.jpeg",
    }
];

$(document).ready(function() {
  var template = Handlebars.compile($("#movie-template").html());
  Handlebars.registerPartial("moviePartial", $("#movie-partial").html());

  var content = {movie: movies};
  var html = template(content);
  $(document.body).append(html);

  $('.add').click(function(){
    var index = $(this).attr('id');
    console.log(index);
    $('#movielist-modal').modal('show');
  });


});
