import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "./../hooks/useMusicPlayer";

function TrackList() {
  const music = useMusicPlayer();
  console.log("music: ", music);
  return (
    <>
      {music.trackList.map((track, index) => (
          <div className="tracklist_box">
          <button className="tracklist_button" onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </>
  );
}

export default TrackList;
