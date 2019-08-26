//Variables

var games = ["mario", "sonic", "crash bandicoot", "zelda"];

//Display Gifs

//Creates Buttons

function buttons() {
    $("#buttons-view").empty();

    for(var i = 0; i < games.length; i++) {
        var a = $("<button>");
        a.addClass("game");
        a.attr("data-name", games[i]);
        a.text(games[i]);
        $("#buttons-view").append(a);
           
    }
}

$("#add-button").on("click", function(event) {
    event.preventDefault();
    var game = $("#topic-input").val().trim();
    games.push(game);
    buttons();
    
    })

    buttons();



//AJAX

    $("button").on("click", function() {
            var game = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=tKFVhdYEzflz9DrDqkpfkwunuZ3QYvVh&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var rating = results[i].rating;
            
            var gifDiv = $("<div>");

            var p = $("<p>").text("Rating: " + rating);

            var image = $("<img>");

            image.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(image);

            $("#gifs-view").prepend(gifDiv);

        }

     })

})
