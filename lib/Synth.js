class Synth {

    constructor(config) {
        this.tracks = {
            voice: config.voices.map((params) => {
                return new Voice(params);
            }),
            fx: [],
            control: []
        }
    }

    render(length) {
        return new Float32Array(length).map(() => {
            return this.tracks.voice.reduce((mix, voice) => {
                return mix + voice.tick();
            }, 0.0);
        });
    }

}
