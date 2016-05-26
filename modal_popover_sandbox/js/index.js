$(document).on('ready', function() {



  $('#the-text').on('focus', function () {
    var options = {
        target: "#external-content",
        remote: "external.html",
        placement: "right",
        backdrop: "false",
        keyboard: "true"
    };
    $('#dialog').modalPopover(options);
    $('#dialog').modalPopover('show');
  });

  
});
