import React, { createContext, useContext, useState, useEffect } from "react";

type AudioContextType = {
  audioContext: AudioContext | null;
  masterGain: GainNode | null;
  setVolume: (volume: number) => void;
};

const AudioContextState = createContext<AudioContextType | null>(null);

export const useAudioContext = () => useContext(AudioContextState)!;

export const AudioContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [masterGain, setMasterGain] = useState<GainNode | null>(null);

  useEffect(() => {
    try {
      const context = new AudioContext({ sampleRate: 44100 });
      const gain = context.createGain();
      gain.connect(context.destination);
      setAudioContext(context);
      setMasterGain(gain);
    } catch (error) {
      console.error("Failed to create AudioContext:", error);
    }
  }, []);

  const setVolume = (volume: number) => {
    if (masterGain) {
      masterGain.gain.value = volume;
    }
  };

  return (
    <AudioContextState.Provider value={{ audioContext, masterGain, setVolume }}>
      {children}
    </AudioContextState.Provider>
  );
};
