import React, { useState } from "react";
import { useAudioContext } from "@sebban/audio";

type WaveProps = {
  type: "sine" | "square" | "triangle" | "sawtooth";
};

export const WaveFormPlayer: React.FC<WaveProps> = ({ type }) => {
  const { audioContext, masterGain } = useAudioContext();
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);

  const startOscillator = () => {
    if (audioContext && masterGain && !oscillator) {
      const osc = audioContext.createOscillator();
      osc.type = type as OscillatorType;

      osc.connect(masterGain);

      const envelopeGain = audioContext.createGain();
      osc.connect(envelopeGain);
      envelopeGain.connect(masterGain);

      const now = audioContext.currentTime;
      const attackTime = 0.1;

      envelopeGain.gain.setValueAtTime(0, now);
      envelopeGain.gain.linearRampToValueAtTime(1, now + attackTime);

      osc.start(now);

      setOscillator(osc);
    }
  };

  const stopOscillator = () => {
    if (oscillator) {
      const now = audioContext?.currentTime ?? 0;
      oscillator.stop(now);
      setOscillator(null);
    }
  };

  const handleMouseDown = () => {
    startOscillator();
  };

  const handleMouseUp = () => {
    stopOscillator();
  };

  return (
    <button
      className={`waveform ${type}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {type}
    </button>
  );
};
