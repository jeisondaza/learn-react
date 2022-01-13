import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

function SongDetails({ search, bio, lyric }) {
  if (!bio || !lyric) return null;

  return (
    <>
      {lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Erro: No se encontró la canción "${search.song}"`}
          bgColor={"#dc3545"}
        />
      ) : (
        <SongLyric lyric={lyric.lyrics} title={search.song} />
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Erro: No se encontró el artista "${search.artist}"`}
          bgColor={"#dc3545"}
        />
      )}
    </>
  );
}

export default SongDetails;
