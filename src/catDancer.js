var catDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.attr('src', 'images/cat.gif');
  this.$node.addClass('cat');


};

  catDancer.prototype = Object.create(makeDancer.prototype);
  catDancer.prototype.constructor = catDancer;
  catDancer.prototype.step = function() {


    makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.css({'border-color': 'blue'});
    this.$node.animate({ "left": "-=50px" }, "slow" );
    this.$node.animate({ "left": "+=50px" }, "slow" );
  };
