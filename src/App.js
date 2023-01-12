import React, {useState } from "react";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import "./index.css";
import LostChameleon from "./assets/LostChameleon.mp3";
import Rock from "./assets/TheHipsta.mp3";
import Tobu from "./assets/Tobu.mp3";


import { MusicContext } from "./contexts/MusicContext";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Lost Chameleon - Genesis",
        file: LostChameleon
      },
      {
        name: "The Hipsta - Shaken Soda",
        file: Rock
      },
      {
        name: "Tobu - Such Fun",
        file: Tobu
      }
    ],
    currentTrackIndex: null,
    isPlaying: false
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="container">
        <div>

           <TrackList />
        <PlayerControls />
        </div>
       
      </div>
    </MusicContext.Provider>
  );
}

export default App;