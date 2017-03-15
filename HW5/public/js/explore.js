var movies = [
	{
		id: 0,
		title: "Avengers Age of Ultron",
    url: "images/avengers.jpeg",
		genre: "romance",
		rating:"6.5/10",
		cast: ["Meg Ryan",
				 "Andy Garcia",
				 "Tina Majorino",
				 "Mae Whitman",
				 "Ellen Burstyb",
				 "Lauren Tom",
				 "Eugene Rochie",
				 "Susanna Thompson"
				],
		year: "1994",
		movieDescription: "'An airline pilot and his wife are forced to face the consequences of her alcoholism when her addictions threaten her life and their daughter's safety. While the woman enters detox, her husband must face the truth of his enabling behavior.' -imdb"
	},
	{
		id: 1,
		title: "The Great Gatsby",
    url: "images/gatsby.jpeg",
		genre: "romance",
		rating:"6.5/10",
		cast: ["Meg Ryan",
				 "Andy Garcia",
				 "Tina Majorino",
				 "Mae Whitman",
				 "Ellen Burstyb",
				 "Lauren Tom",
				 "Eugene Rochie",
				 "Susanna Thompson"
				],
		year: "1994",
		movieDescription: "'An airline pilot and his wife are forced to face the consequences of her alcoholism when her addictions threaten her life and their daughter's safety. While the woman enters detox, her husband must face the truth of his enabling behavior.' -imdb"
	},
	{
		id: 2,
		title: "The Jungle Book",
    url: "images/junglebook.jpeg",
		genre: "romance",
		rating:"6.5/10",
		cast: ["Meg Ryan",
				 "Andy Garcia",
				 "Tina Majorino",
				 "Mae Whitman",
				 "Ellen Burstyb",
				 "Lauren Tom",
				 "Eugene Rochie",
				 "Susanna Thompson"
				],
		year: "1994",
		movieDescription: "'An airline pilot and his wife are forced to face the consequences of her alcoholism when her addictions threaten her life and their daughter's safety. While the woman enters detox, her husband must face the truth of his enabling behavior.' -imdb"
	},
	{
		id: 3,
		title: "Narnia",
    url: "images/narnia.jpeg",
		genre: "romance",
		rating:"6.5/10",
		cast: ["Meg Ryan",
				 "Andy Garcia",
				 "Tina Majorino",
				 "Mae Whitman",
				 "Ellen Burstyb",
				 "Lauren Tom",
				 "Eugene Rochie",
				 "Susanna Thompson"
				],
		year: "1994",
		movieDescription: "'An airline pilot and his wife are forced to face the consequences of her alcoholism when her addictions threaten her life and their daughter's safety. While the woman enters detox, her husband must face the truth of his enabling behavior.' -imdb"
	},
	{
		id: 4,
		title: "National Treasure",
    url: "images/nationaltreasure.jpeg",
		genre: "romance",
		rating:"6.5/10",
		cast: ["Meg Ryan",
				 "Andy Garcia",
				 "Tina Majorino",
				 "Mae Whitman",
				 "Ellen Burstyb",
				 "Lauren Tom",
				 "Eugene Rochie",
				 "Susanna Thompson"
				],
		year: "1994",
		movieDescription: "'An airline pilot and his wife are forced to face the consequences of her alcoholism when her addictions threaten her life and their daughter's safety. While the woman enters detox, her husband must face the truth of his enabling behavior.' -imdb"
	},
	{
		id: 5,
		title: "Peter Pan",
    url: "images/peterpan.jpeg",
		genre: "romance",
		rating:"6.5/10",
		cast: ["Meg Ryan",
				 "Andy Garcia",
				 "Tina Majorino",
				 "Mae Whitman",
				 "Ellen Burstyb",
				 "Lauren Tom",
				 "Eugene Rochie",
				 "Susanna Thompson"
				],
		year: "1994",
		movieDescription: "'An airline pilot and his wife are forced to face the consequences of her alcoholism when her addictions threaten her life and their daughter's safety. While the woman enters detox, her husband must face the truth of his enabling behavior.' -imdb"
	},
	{
		id: 6,
		title: "Pinocchio",
    url: "images/pinocchio.jpeg",
		genre: "romance",
		rating:"6.5/10",
		cast: ["Meg Ryan",
				 "Andy Garcia",
				 "Tina Majorino",
				 "Mae Whitman",
				 "Ellen Burstyb",
				 "Lauren Tom",
				 "Eugene Rochie",
				 "Susanna Thompson"
				],
		year: "1994",
		movieDescription: "'An airline pilot and his wife are forced to face the consequences of her alcoholism when her addictions threaten her life and their daughter's safety. While the woman enters detox, her husband must face the truth of his enabling behavior.' -imdb"
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
