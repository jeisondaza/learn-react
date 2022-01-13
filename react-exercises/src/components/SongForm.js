import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

function SongForm({ handleSearch }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos vacíos");
    } else {
      handleSearch(form);
      setForm(initialForm);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del intérprete"
          value={form.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          value={form.song}
          onChange={handleChange}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}

export default SongForm;
