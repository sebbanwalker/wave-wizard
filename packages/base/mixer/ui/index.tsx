import { useAudioContext } from "@sebban/audio";

export const Mixer: React.FC = () => {
  const { setVolume } = useAudioContext();

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);
    setVolume(volume);
  };

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      onChange={handleVolumeChange}
      defaultValue="0.5"
    />
  );
};
