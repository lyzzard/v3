class Voice {

    constructor(options) {
        this.osc = new Osc();
        this.env = new Env();

        this.note(); // TODO pass notes through Synth
    }

    destructor() {
        delete this.osc;
        delete this.env;
    }

    note() {
        this.osc.start();
        this.env.start();

        return this;
    }

    tick() {
        return this.osc.process() * this.env.process();
    }
/*
    render(length) {
        return new Float32Array(length).map(this.tick);
    }
*/
}
