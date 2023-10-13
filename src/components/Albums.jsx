const css = {
  avatar: {
    borderRadius: '50px',
    marginRight: '20px',
    marginLeft: '30px',
    },
  flex: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '30px',
    cursor: 'pointer',
  },
  h3: {
    margin: 0,
    paddingBottom: 10,
    textTransform: "uppercase",
    fontWeight: '400',
    color: '#ffffff',
    fontSize: '16px',

  },
  h6: {
    margin: '0',
    color:'#405EFB',
    fontSize: '12px',
  },
};

export default function Albums(props) {
  return (
      <div onClick={() => props.setCurrentAlbum(props.album.id)} style={css.flex}>
        <img
          style={css.avatar}
          id={props.album.id}
          src={props.album.coverImg}
          alt={props.album.name}
          className="avatar"
          width={75}
          height={75}
          />
          <div>
            <h3 style={css.h3}>{props.album.name}</h3>
            <h6 style={css.h6}>{props.album.year}</h6>
           </div>
      </div>
  );
}