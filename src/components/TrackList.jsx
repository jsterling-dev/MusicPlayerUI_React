import play from "../../public/play.png";
import { albums } from "../data";

const css = {
    ulist: {
        listStyle:"none",
        display:'flex',
        alignItems:'center',
        color:'#ffffff',
      },
      play: {
        marginRight:'10px',
      },
      track: {
        color:'#ffffff',
        fontSize:'18px',
        fontWeight: '500',
        paddingLeft: '7px',
        cursor: 'pointer',
      }
}

export default function TrackList (props) {
    return (
        <div onClick={() => props.trackSelect(props.id)}>
            {props.album.tracks.map((track, index) => { 
                return(
                    <ul style={css.ulist}>
                        <img src={play} style={css.play} width='20px' height='20px' alt='Play Track'/>
                        {index+1+'.'}
                        <li><p style={css.track}>{track}</p></li>
                    </ul>
                );
            })}
        </div>
    );
}