import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";
import useMusicPlayer from "../hooks/useMusicPlayer";

function PlayerControls() {
  const music = useMusicPlayer();
  return (
    <>
      <div className="box controls has-background-grey-dark">
        
        <div className="controls_button">
          <button className="button has-text-light has-background-grey-dark">
            <FontAwesomeIcon
              icon={faStepBackward}
              onClick={music.playPreviousTrack}
            />
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={music.togglePlay}
          >
            {music.isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button className="button has-text-light has-background-grey-dark">
            <FontAwesomeIcon
              icon={faStepForward}
              onClick={music.playNextTrack}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayerControls;
