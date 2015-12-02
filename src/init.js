$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });

  $(".lineUpButton").on("click", function(event) {
    for(var i = 0; i < window.dancers.length; i++){
      console.log(window.dancers[i]);
      window.dancers[i].lineUp();
    }
  });
  // $(".interactButton").on("click", function(event) {
    setInterval(function(){
    for(var i = 0; i < window.dancers.length; i++){
      for(var j = 0; j < window.dancers.length; j++){
        var positions1 = window.dancers[i].$node.position();
        var positions2 = window.dancers[j].$node.position();
        console.log(positions1);
        console.log(positions2);
        var pos1 = Math.sqrt(Math.pow(positions1.top - positions2.top,2) + Math.pow(positions1.left - positions2.left,2)); 
        console.log(pos1);

        if(pos1 > 0 && pos1 < 200){
          window.dancers[i].$node.animate({'top' : $("body").height() * Math.random(),'left' : $("body").width() * Math.random()},'slow');
        }

      }
    }
  },1000);
  // });


});

