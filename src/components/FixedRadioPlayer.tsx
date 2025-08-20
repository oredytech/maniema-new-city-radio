
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeOff } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const FixedRadioPlayer = () => {
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
      console.log('Radio: Starting to load stream...');
      setIsLoading(true);
      setIsError(false);
    };

    const handleCanPlay = () => {
      console.log('Radio: Stream ready to play');
      setIsLoading(false);
      setIsError(false);
    };

    const handleError = (e: Event) => {
      console.error('Radio: Stream error', e);
      setIsLoading(false);
      setIsPlaying(false);
      setIsError(true);
    };

    const handleLoadedData = () => {
      console.log('Radio: Stream data loaded');
      setIsLoading(false);
    };

    const handlePlay = () => {
      console.log('Radio: Stream started playing');
      setIsPlaying(true);
      setIsLoading(false);
    };

    const handlePause = () => {
      console.log('Radio: Stream paused');
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
        console.log('Radio: Pausing stream...');
        audio.pause();
        audio.currentTime = 0; // Reset for live stream
      } else {
        console.log('Radio: Starting stream...');
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
      console.error('Radio: Error during play/pause:', error);
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
    console.log('Radio: Mute toggled to', newMutedState);
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
    if (isError) return "Erreur de connexion";
    if (isLoading) return "Connexion...";
    if (isPlaying) return "🔴 En direct";
    return "Hors ligne";
  };

  const getStatusColor = () => {
    if (isError) return "text-red-400";
    if (isLoading) return "text-yellow-400";
    if (isPlaying) return "text-green-400";
    return "text-gray-400";
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[50px] bg-gray-900 border-t border-gray-700 backdrop-blur-md z-50">
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
            className="w-8 h-8 rounded-full text-white hover:bg-white/20 disabled:opacity-50"
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
          <div className={`text-sm ${getStatusColor()}`}>
            {getStatusText()}
          </div>
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
    </div>
  );
};

export default FixedRadioPlayer;
