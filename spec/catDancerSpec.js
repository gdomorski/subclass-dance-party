describe("catDancer", function() {

  var cDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cDancer = new catDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(cDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it animate", function() {
    sinon.spy(cDancer.$node, 'animate');
    cDancer.step();
    expect(cDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(cDancer, "step");
      expect(cDancer.step.callCount).to.be.equal(0);
    // cDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(cDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);
      expect(cDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cDancer.step.callCount).to.be.equal(2);
    });
  });
});
