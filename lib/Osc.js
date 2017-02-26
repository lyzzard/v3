class Osc extends Gen {

    tick(time) {
        return Math.sin(time * Math.PI * 4 * 440.0 / RATE);
    }

}
