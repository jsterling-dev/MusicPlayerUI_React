import "./App.css";
import { albums } from "./data";
import { useState } from "react";
import CurrentAlbum from "./components/CurrentAlbum";
import Albums from "./components/Albums";
import TrackList from "./components/TrackList";

const css = {
  app: {
    fontFamily: 'Poppins, sans-serif',
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 25%, rgba(0,212,255,1) 100%)',
  },
  select: {
    color: "white",
    paddingLeft: "30px",
    paddingBottom: "30px",
    paddingTop:"30px",
    fontWeight: '700',
    letterSpacing: '1px',
    textDecoration: 'underline',
    fontSize: "16px",
  },
  otherAlbumsArtist: {
    fontSize: "22px"
  },
};

export default function App() {

const [currentAlbum, setCurrentAlbum] = useState(0);
const albumUpdate = (id) => setCurrentAlbum(id);

// simplify {artist} variable
const artist = albums[currentAlbum].artist;

  return (
    <div className='body1' style={css.app}>
      <div>
        <CurrentAlbum 
          name={albums[currentAlbum].name}
          year={albums[currentAlbum].year}
          src={albums[currentAlbum].coverImg}
          artist={albums[currentAlbum].artist}
        />
      </div>

      <TrackList
        album={albums[currentAlbum]}
        trackSelect={albums[currentAlbum].tracks}
      />

      <div style={css.select}>
        <span>Also available from</span><span style={css.otherAlbumsArtist}> {artist}</span>
      </div>

      {albums.map((album) => { 
        return (
          <Albums
          //could also rename albumUpdate to setCurrentAlbum to use only first line of state above ^^
            setCurrentAlbum={albumUpdate}
            album={album}
          />
        );
      })}
    </div>
  );
}