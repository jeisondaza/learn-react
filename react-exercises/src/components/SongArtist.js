function SongArtist({ artist }) {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Present"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenr} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Sitio Web oficial
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
}

export default SongArtist;
