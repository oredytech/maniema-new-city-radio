
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeOff } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const streamUrl = "https://stream.zeno.fm/cgxrxyyhjsrtv";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = volume[0] / 100;

    const handleLoadStart = () => {
      console.log('Radio Player: Starting to load stream...');
      setIsLoading(true);
      setIsError(false);
    };

    const handleCanPlay = () => {
      console.log('Radio Player: Stream ready to play');
      setIsLoading(false);
      setIsError(false);
    };

    const handleError = (e: Event) => {
      console.error('Radio Player: Stream error', e);
      setIsLoading(false);
      setIsPlaying(false);
      setIsError(true);
    };

    const handleLoadedData = () => {
      console.log('Radio Player: Stream data loaded');
      setIsLoading(false);
    };

    const handlePlay = () => {
      console.log('Radio Player: Stream started playing');
      setIsPlaying(true);
      setIsLoading(false);
    };

    const handlePause = () => {
      console.log('Radio Player: Stream paused');
      setIsPlaying(false);
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        console.log('Radio Player: Pausing stream...');
        audio.pause();
        audio.currentTime = 0; // Reset for live stream
      } else {
        console.log('Radio Player: Starting stream...');
        setIsLoading(true);
        setIsError(false);
        
        // Force reload the stream for better reliability
        audio.load();
        
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise;
        }
      }
    } catch (error) {
      console.error('Radio Player: Error during play/pause:', error);
      setIsLoading(false);
      setIsPlaying(false);
      setIsError(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    audio.muted = newMutedState;
    setIsMuted(newMutedState);
    console.log('Radio Player: Mute toggled to', newMutedState);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const volumeValue = newVolume[0] / 100;
    audio.volume = volumeValue;
    setVolume(newVolume);
    
    if (volumeValue === 0) {
      setIsMuted(true);
      audio.muted = true;
    } else if (isMuted) {
      setIsMuted(false);
      audio.muted = false;
    }
  };

  const getStatusText = () => {
    if (isError) return "Erreur de connexion - Veuillez réessayer";
    if (isLoading) return "Connexion en cours...";
    if (isPlaying) return "🔴 En direct";
    return "Appuyez pour écouter";
  };

  const getStatusColor = () => {
    if (isError) return "text-destructive";
    if (isLoading) return "text-muted-foreground";
    if (isPlaying) return "text-rtcmnc-green";
    return "text-muted-foreground";
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-muted/50 border-2 border-primary/20 card-hover">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gradient mb-2">Radio En Direct</h2>
        <p className="text-muted-foreground">Écoutez RTCMNC 97.4 MHz en live</p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {/* Play/Pause Button */}
        <div className="relative">
          <Button
            onClick={togglePlay}
            disabled={isLoading}
            size="lg"
            className="w-20 h-20 rounded-full gradient-primary hover:scale-110 transition-all duration-300 animate-pulse-glow disabled:opacity-50"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary-foreground border-t-transparent" />
            ) : isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </Button>
          {isPlaying && (
            <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-ping" />
          )}
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-4 w-full max-w-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="shrink-0"
          >
            {isMuted || volume[0] === 0 ? (
              <VolumeOff className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
          <Slider
            value={volume}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-sm text-muted-foreground w-8 text-right">
            {volume[0]}
          </span>
        </div>

        {/* Status */}
        <div className="text-center">
          <p className={`text-sm font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </p>
          {isError && (
            <p className="text-xs text-muted-foreground mt-1">
              Vérifiez votre connexion internet
            </p>
          )}
        </div>
      </div>

      <audio
        ref={audioRef}
        preload="none"
        crossOrigin="anonymous"
      >
        <source src={streamUrl} type="audio/mpeg" />
        <source src={streamUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </Card>
  );
};

export default RadioPlayer;
