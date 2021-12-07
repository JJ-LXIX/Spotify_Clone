import React, { useState } from "react";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import useSonginfo from "../hooks/useSonginfo";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSonginfo();
  return (
    <div>
      {/* Left */}
      <div>
        <img src={songInfo?.album.images?.[0]?.url} alt="" />
      </div>
    </div>
  );
}

export default Player;
