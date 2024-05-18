// Fireworks animation script

(function() {
    var fireworks = new Fireworks({
        target: document.getElementById('fireworks'),
        hue: 120,
        startDelay: 1,
        minDelay: 20,
        maxDelay: 40,
        speed: 4,
        acceleration: 1.05,
        friction: 0.96,
        gravity: 1,
        particles: 90,
        trace: 3,
        explosion: 5,
        autoresize: true,
        maxrockets: 2,
        maxtrail: 3,
        lifetime: 200,
        // start: function () {},
        // stop: function () {}
    });
    fireworks.start();
})();
