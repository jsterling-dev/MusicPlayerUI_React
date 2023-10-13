const css = {
    currentRecord: {
        marginLeft: '30px',
        paddingTop: '30px',
        display: 'flex',
      },
    currentTitle: {
        marginLeft: '30px',
        color: '#ffffff',
        paddingBottom: '30px',
    },
    currentArtwork: {
        border: 'solid 4px #1E2E33',
        borderRadius: '3px',
    },
    artist:{
        marginBottom:'0',
        paddingBottom:'30px',
        fontSize:'44px',
        color: '#ffffff',
    },
    name:{
        marginTop:'0',
        marginBottom:'10px',
        fontSize:'28px',
    },
    year: {
        color:'#F64C71',
        marginTop: '0',
        fontSize:'16px',
    },
    ulist: {
        listStyle:"none",
        display:'flex',
        alignItems:'center',
        color:'#ffffff',
    },
    play: {
        marginRight:'10px',
    },
    albumInfo: {
        paddingTop:'50px',
    }
  };
  
  export default function CurrentAlbum(props) {
    return (
        <div style={css.currentRecord}>
          <img
            style={css.currentArtwork}
            src={props.src}
            width={250}
            height={250}
            />
            <div style={css.albumInfo}>
                <div style={css.currentTitle}>
                    <h2 style={css.name}>{props.name}</h2>
                    <h3 style={css.year}>{props.year}</h3>
                    <h1 style={css.artist}>{props.artist}</h1>
                </div>
            </div>
        </div>
    );
  }