$(document).on('ready', function(){
    $("#random-article")
    .on('click', function(){
      window.open('https://en.wikipedia.org/wiki/Special:Random', 'Random Wiki Article', 'Window Settings');
    });

    var callback_fn = function(data_got_from_jsonp) {
      alert(data_got_from_jsonp.length);
    };

  $("#search-button")
  .on('click',
     function(){
    var base_url = "https://en.wikipedia.org/w/api.php";
    var main_page = "action=query&format=json&prop=images" +"&titles=" +
     $("#search-church").val()+ "&callback=?";

    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON( base_url+"?"+main_page, function() {
  console.log( "success" );
})
  .done(function(data) {
    console.log( data );
  })
  .fail(function(error) {
    console.log( "ERROR OCCURRED:" + String(error) );
  })
  .always(function() {
    console.log( "complete" );
  });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.complete(function() {
  console.log( "second complete" );
});
  });
})
