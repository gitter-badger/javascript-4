( function ($) {

  //Styling of the modalPopover

  var set_popover_style = function () {
    $('#dialog').css('overflow-y', 'auto');
    $('#dialog').css('overflow-x', 'auto');
    $('#dialog').css('position', 'relative');
    $('#dialog').css('border', '3px solid #8AC007');
    $('#dialog').css('top', '0px');
    $('#dialog').css('left', '0px');
    $('#dialog').css('max-width', '1000px');
    $('#dialog').css('max-height', '90%');
  }

  var activate_textbox = function () {
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
      set_popover_style();
    });
  }

  $('#dialog').on('refresh-content', function () {
    console.log('refresh called');
    $('#dialog').modalPopover('hide');

    $('#dialog').modalPopover('show');
    set_popover_style();
    // $('#external-content').css('max-width', 'auto');

  });

  $(document).on('ready', function() {

    activate_textbox();

  });

})(window.jQuery);
