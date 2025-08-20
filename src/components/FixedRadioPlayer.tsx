
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeOff } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const FixedRadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const streamUrl = "https://stream.zeno.fm/cgxrxyyhjsrtv";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      console.error('Erreur de lecture du stream radio');
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Erreur lors de la lecture:', error);
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const volumeValue = newVolume[0] / 100;
    audio.volume = volumeValue;
    setVolume(newVolume);
    
    if (volumeValue === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[50px] bg-gradient-to-r from-primary via-secondary to-accent border-t border-white/20 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Radio Info */}
        <div className="flex items-center space-x-3">
          <div className="text-white">
            <p className="text-sm font-bold">RTCMNC 97.4 MHz</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <Button
            onClick={togglePlay}
            disabled={isLoading}
            size="sm"
            variant="ghost"
            className="w-8 h-8 rounded-full text-white hover:bg-white/20"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 ml-0.5" />
            )}
          </Button>

          {/* Volume Control */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-white hover:bg-white/20 w-8 h-8"
            >
              {isMuted || volume[0] === 0 ? (
                <VolumeOff className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            <Slider
              value={volume}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="w-20"
            />
          </div>

          {/* Status */}
          <div className="text-white text-sm">
            {isLoading ? (
              "Connexion..."
            ) : isPlaying ? (
              <span className="text-red-400">🔴 En direct</span>
            ) : (
              "Hors ligne"
            )}
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
      />
    </div>
  );
};

export default FixedRadioPlayer;
