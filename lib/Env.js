class Env extends Gen {

    tick(time) {
        var value = Math.max(0, 1 - time / RATE);

        if ( ! value) {
            this.stop();
        }

        return value;
    }

}
