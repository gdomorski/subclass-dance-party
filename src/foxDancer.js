var foxDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.attr('src', 'images/fox.gif');
  this.$node.addClass('fox');


};

  foxDancer.prototype = Object.create(makeDancer.prototype);
  foxDancer.prototype.constructor = foxDancer;

  foxDancer.prototype.step = function() {

    makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.css({'transform': 'rotateY(180deg)'});
    this.$node.animate({ "left": "-=200px" }, "slow" );  
    // this.$node.css({'transform': 'rotateY(0deg)'});
    this.$node.animate({ "left": "+=200px" }, "slow" );

    
    // this.$node.css({'transform': 'rotateY(180deg)'});
    // var that = this
    // setInterval(function(){
    //   return that.$node.css({'transform': 'rotateY(-180deg)'});

    // }, 1000)
  
  };

