$("button").on("click", function() {
    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var animalDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);
          var still = results[i].images.fixed_height_still.url;
          var animate = results[i].images.fixed_height.url;
          var animalImage = $("<img>");
          animalImage.attr("src",still);
          animalImage.attr("data-still", still);
          animalImage.attr("data-animate", animate);
          animalImage.attr("data-state", "still");
          animalImage.attr("class", "gif")
          animalDiv.append(p);
          animalDiv.append(animalImage);

          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
  });
  $(document).on("click",".gif", function() {
      console.log("click");
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

//  make form tag

// an input that takes text

// submit button

// add an event listener on the button that takes the value and adds it to the text of the button