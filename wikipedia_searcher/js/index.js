$(document).on('ready', function(){
    $("#random-article")
    .on('click', function(){
      window.open('https://en.wikipedia.org/wiki/Special:Random', 'Random Wiki Article', 'Window Settings');
    });


  $("#search-button")
  .on('click',
     function(){

       //generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=
    var base_url = "https://en.wikipedia.org/w/api.php";
    var main_page = "action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" +
     $("#search-church").val()+ "&callback=?";

    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON( base_url+"?"+main_page, function() {
  console.log( "success" );
})
  .done(function(data) {
    console.log(data);
    if(data.query.pages.length == 0 ){
      $('#wiki-output').html("No results found. Please try modifying your search string");
    }
    $('#wiki-output').html('');
    var results = data.query.pages;
    $.each(results, function(pageid, page){
      var title = $('<a>').html(page.title)
      .attr('href', 'https://en.wikipedia.org/?curid=' + pageid);
      title.appendTo("#wiki-output");
      $('<br>').appendTo("#wiki-output");
      $('<p>').html(page.extract).appendTo("#wiki-output");
      $('<br>').appendTo("#wiki-output");
    });

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
