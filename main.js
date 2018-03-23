
  // Event listener for all button elements
  $("button").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var person = $(this).attr("data-series");
   
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //   person + "&api_key=Q7GW1zYsDwdIlApfjc1OjzixLzM646xj";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
       person + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function(response) {
        // Storing an array//
        var results = response.data;
        // Looping over every result item
        for (var i = 0; i < results.length; i++) {
          // Only taking action if the photo has an appropriate rating
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            //div with the class "item"
            var gifDiv = $("<div class='item'>");
            // Storing the result item's rating
            var rating = results[i].rating;          
            // Creating an image tag
            var personImage = $("<img>");
            // result item
            personImage.attr("src", results[i].images.fixed_height.url);
            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(person);
            gifDiv.append(personImage);
            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);

            
          }
        }
      });
  });