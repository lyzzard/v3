"use strict";

var
    context = new AudioContext(),
    length = 1 * RATE,
    buffer = context.createBuffer(CHANNELS, length, RATE),
    data = new
        Synth({
            voices: ['sine']
        })
        .render(length);

for (var channel = 0; channel < 2; channel ++ ) {
    buffer.copyToChannel(data, channel);
}

((source) => {
    source.buffer = buffer;
    source.connect(context.destination);
    source.start();
})(context.createBufferSource());
