describe("elephantDancer", function() {

  var eDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    eDancer = new elephantDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(eDancer.$node).to.be.an.instanceof(jQuery);
  });


});
