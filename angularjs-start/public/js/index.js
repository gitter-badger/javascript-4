
(function() {
    var myApplication = angular.module("myApplication", []);

    fetchData().then(bootstrapApplication);

//     myApplication.factory('myService', function($http) {
//   return {
//     async: function() {
//       return $http.get('public/data/level_one_clauses.json');  //1. this returns promise
//     }
//   };
// });

  //   myApplication.controller("myMainController", function($scope, myService) {
  //       $scope.ids = ["", "2"];
  //       myService.async().then(function(d) { //2. so you can use .then()
  //   $scope.content = d.data;
  // });
  //   });
  //
    myApplication.controller("myMainController", function($scope, CONFIG) {
        $scope.ids = ["", "2"];
        $scope.content = CONFIG;
    });


    myApplication.directive('activateSelect', function() {

        return {
            // Restrict it to be an attribute in this case
            restrict: 'EA',
            // template: '<select class="js-basic-multiple js-states form-control" id="the-text" multiple="multiple"></select>' +
            //     '<select class="js-basic-multiple js-states form-control" id="the-text2" multiple="multiple"></select>',
            compile: function(element, attrs) {
                return {
                    pre: function(scope, element, attrs) {

                    },
                    post: function(scope, element, attrs) {

                      create_elements_with(element, scope.content);
                      // console.log(scope.content);
                      // console.log(scope.ids);
                        activate_textbox();
                        activate_textbox2();


                        $('#dialog').on('refresh-content', function() {
                            console.log('refresh called');
                            $('#dialog').modalPopover('hide');

                            $('#dialog').modalPopover('show');
                            set_popover_style('#dialog');

                        });

                        $('#dialog2').on('refresh-content', function() {
                            console.log('refresh called');
                            $('#dialog2').modalPopover('hide');

                            $('#dialog2').modalPopover('show');
                            set_popover_style('#dialog2');

                        });

                        $('#the-text').on("bubble-selected", function(event, data, size, disabled) {
                            console.log(data);
                            var duplicate = false;
                            $(this).find('option').each(function() {
                                if (this.text == data) {
                                    console.log("match found, not adding");
                                    duplicate = true;
                                }
                            });

                            if (!duplicate) {
                                var option = $('<option>')
                                    .attr('selected', 'selected')
                                    .attr('value', size);

                                if (disabled) {
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

    function create_elements_with(element, data) {
      //console.log(data.searchFields.length);
      if (data.searchFields[0].type == "select2") {
        console.log("data is select2");
        $('<select class="js-basic-multiple js-states form-control" id="the-text" multiple="multiple"></select>')
        .appendTo(element);
        console.log("done");
      }
    }

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("public/data/level_one_clauses.json").then(function(response) {
          console.log("response: " + response);
            myApplication.constant("CONFIG", response.data);
        }, function(errorResponse) {
            // Handle error case
            console.log("error loading data");
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            console.log("ready fired");
            angular.bootstrap(document, ["myApplication"]);
        });
    }


    var set_popover_style = function(dialog) {
        $(dialog).css('overflow-y', 'auto');
        $(dialog).css('overflow-x', 'auto');
        $(dialog).css('position', 'relative');
        $(dialog).css('border', '3px solid #8AC007');
        $(dialog).css('top', '0px');
        $(dialog).css('left', '0px');
        $(dialog).css('max-width', '1000px');
        $(dialog).css('max-height', '90%');
    }

    var activate_textbox = function() {
        $('#the-text').on('select2:open', function() {


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


    var activate_textbox2 = function() {
        $('#the-text2').on('select2:open', function() {

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
