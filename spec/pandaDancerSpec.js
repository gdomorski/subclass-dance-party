describe("pandaDancer", function() {

  var pDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pDancer = new pandaDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(pDancer.$node).to.be.an.instanceof(jQuery);
  });


});
