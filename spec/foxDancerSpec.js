describe("foxDancer", function() {

  var fDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fDancer = new foxDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(fDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its animate", function() {
    sinon.spy(fDancer.$node, 'animate');
    fDancer.step();
    expect(fDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(fDancer, "step");
      expect(fDancer.step.callCount).to.be.equal(0);
    // fDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(fDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);
      expect(fDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fDancer.step.callCount).to.be.equal(2);
    });
  });
});
