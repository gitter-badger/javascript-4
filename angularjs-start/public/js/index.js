(function() {
    var myApplication = angular.module("myApplication", []);


    myApplication.controller("myMainController", function($scope){
      $scope.ids = ["", "2"];
    });

    myApplication.directive('activateSelect', function() {

    return {
        // Restrict it to be an attribute in this case
        restrict: 'EA',
        template: '<select class="js-basic-multiple js-states form-control" id="the-text" multiple="multiple"></select>'
        + '<select class="js-basic-multiple js-states form-control" id="the-text2" multiple="multiple"></select>',
        compile: function(element, attrs) {
          return {
              pre: function(scope, element, attrs) {

              },
              post: function(scope, element, attrs) {
                activate_textbox();
                activate_textbox2();


                    $('#dialog').on('refresh-content', function () {
                      console.log('refresh called');
                      $('#dialog').modalPopover('hide');

                      $('#dialog').modalPopover('show');
                      set_popover_style('#dialog');

                    });

                    $('#dialog2').on('refresh-content', function () {
                      console.log('refresh called');
                      $('#dialog2').modalPopover('hide');

                      $('#dialog2').modalPopover('show');
                      set_popover_style('#dialog2');

                    });

                    $('#the-text').on("bubble-selected", function(event, data, size, disabled) {
                      console.log(data);
                      var duplicate = false;
                      $(this).find('option').each( function() {
                        if(this.text == data) {
                          console.log("match found, not adding");
                          duplicate = true;
                        }
                      });

                      if(! duplicate){
                        var option = $('<option>')
                        .attr('selected', 'selected')
                        .attr('value', size);

                        if(disabled) {
                          option.attr("disabled", "disabled");
                        }
                        option.text(data);
                        $('#the-text').append(option);
                      }

                    });

                $('select').select2({
                  tags: true,
                  tokenSeparators: [',', ' ']
                });


                $('body').css('overflow-x', 'auto');
                $('body').css('overflow-y', 'auto');

                  //uncomment the line below to disable select2 scrolldown menu
                  //$(this).select2('close');
              }
          }
        },

        }
    });


    var set_popover_style = function (dialog) {
      $(dialog).css('overflow-y', 'auto');
      $(dialog).css('overflow-x', 'auto');
      $(dialog).css('position', 'relative');
      $(dialog).css('border', '3px solid #8AC007');
      $(dialog).css('top', '0px');
      $(dialog).css('left', '0px');
      $(dialog).css('max-width', '1000px');
      $(dialog).css('max-height', '90%');
    }

    var activate_textbox = function () {
      $('#the-text').on('select2:open', function () {


        var options = {
            target: "#external-content",
            remote: "external.html",
            placement: "right",
            backdrop: "false",
            keyboard: "true"
        };
        $('#dialog').modalPopover(options);
        $('#dialog').modalPopover('show');
        set_popover_style('#dialog');

        //uncomment the line below to disable select2 scrolldown menu
        //$(this).select2('close');
        });
    }


    var activate_textbox2 = function () {
      $('#the-text2').on('select2:open', function () {

        var options = {
            target: "#external-content",
            remote: "map.html",
            placement: "right",
            backdrop: "false",
            keyboard: "true"
        };
        $('#dialog2').modalPopover(options);
        $('#dialog2').modalPopover('show');
        set_popover_style('#dialog2');
        //uncomment the line below to disable select2 scrolldown menu
        //$(this).select2('close');
      });
    }

    // $('#the-text').on('select2:selected', function (event, data) {
    //   console.log(event + " " + data);
    // });



})();



  //Styling of the modalPopover

  // var set_popover_style = function (dialog) {
  //   $(dialog).css('overflow-y', 'auto');
  //   $(dialog).css('overflow-x', 'auto');
  //   $(dialog).css('position', 'relative');
  //   $(dialog).css('border', '3px solid #8AC007');
  //   $(dialog).css('top', '0px');
  //   $(dialog).css('left', '0px');
  //   $(dialog).css('max-width', '1000px');
  //   $(dialog).css('max-height', '90%');
  // }
  //
  // var activate_textbox = function () {
    // $('#the-text').on('select2:open', function () {
    //
    //
    //   var options = {
    //       target: "#external-content",
    //       remote: "external.html",
    //       placement: "right",
    //       backdrop: "false",
    //       keyboard: "true"
    //   };
    //   $('#dialog').modalPopover(options);
    //   $('#dialog').modalPopover('show');
    //   set_popover_style('#dialog');
    //
    //   //uncomment the line below to disable select2 scrolldown menu
    //   //$(this).select2('close');
    //   });
  // }
  //
  //
  // var activate_textbox2 = function () {
  //   $('#the-text2').on('select2:open', function () {
  //
  //     var options = {
  //         target: "#external-content",
  //         remote: "map.html",
  //         placement: "right",
  //         backdrop: "false",
  //         keyboard: "true"
  //     };
  //     $('#dialog2').modalPopover(options);
  //     $('#dialog2').modalPopover('show');
  //     set_popover_style('#dialog2');
  //     //uncomment the line below to disable select2 scrolldown menu
  //     //$(this).select2('close');
  //   });
  // }
  //
  // // $('#the-text').on('select2:selected', function (event, data) {
  // //   console.log(event + " " + data);
  // // });
  //
  // $('#dialog').on('refresh-content', function () {
  //   console.log('refresh called');
  //   $('#dialog').modalPopover('hide');
  //
  //   $('#dialog').modalPopover('show');
  //   set_popover_style('#dialog');
  //
  // });
  //
  // $('#dialog2').on('refresh-content', function () {
  //   console.log('refresh called');
  //   $('#dialog2').modalPopover('hide');
  //
  //   $('#dialog2').modalPopover('show');
  //   set_popover_style('#dialog2');
  //
  // });
  //
  // $('#the-text').on("bubble-selected", function(event, data, size, disabled) {
  //   console.log(data);
  //   var duplicate = false;
  //   $(this).find('option').each( function() {
  //     if(this.text == data) {
  //       console.log("match found, not adding");
  //       duplicate = true;
  //     }
  //   });
  //
  //   if(! duplicate){
  //     var option = $('<option>')
  //     .attr('selected', 'selected')
  //     .attr('value', size);
  //
  //     if(disabled) {
  //       option.attr("disabled", "disabled");
  //     }
  //     option.text(data);
  //     $('#the-text').append(option);
  //   }
  //
  // });
  //
  // $(document).on('ready', function() {
  //
  //   var myApp = angular.module("myApp", []);
  //
  //   myApp.controller("MyMainCtrl", function($scope) {
  //       $scope.myData = {};
  //       $scope.myData.doClick = function() {
  //         alert("clicked");
  //       }
  //     } );
  //
  //   activate_textbox();
  //   activate_textbox2();
  //
  //
  //   $('select').select2({
  //     tags: true,
  //     tokenSeparators: [',', ' ']
  //   });
  //
  //
  //   $('body').css('overflow-x', 'auto');
  //   $('body').css('overflow-y', 'auto');
  //
  // });

  // angular.module('MyApp', [])
  // .controller('MyCtrl', [function() {
  //   angular.element(document).ready(function () {
  //     document.getElementById('msg').innerHTML = 'Hello';
  //   });


// }]);
