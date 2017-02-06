var demo3d = {};

demo3d.init = function() {
    this.inputController = new Demo3dInputController();

    // Enable 3d view mode
    app.setViewMode3d(true);
    
    // Enable wrapped/tiled portal
    RayTracingShader.defines.WRAP_PORTAL = 1;

    // Configure layer gradient
    app.state3d.topColor = new THREE.Color(.04313, .01569, .0353);
    app.state3d.bottomColor = new THREE.Color(1, 1, 1);

    // Don't limit camera position
    app.state3d.clampPosition = false;

    // Enable XY symmetry (X is already enabled)
    app.effects.symmetry.mirrorY.set(true);

    // Enable cycling
    vfr.cycleSpeed = .007;
    vfr.startCycle();

    // Set number of delay frames
    sim.setDelay(20);

    // Set the portal geometry to a square
    geo.set(geo.rectangle, 1);
}