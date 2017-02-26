class Gen {

    constructor() {
        this.time = 0;
        this.active = false;
        this.gain = 1;
    }

    start() {
        this.time = 0;
        this.active = true;

        return this;
    }

    stop() {
        this.active = false;

        return this;
    }

    process() {
        return this.active ? this.tick(this.time ++ ) * this.gain : 0;
    }

    tick() {}

}
