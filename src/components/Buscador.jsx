const Browser = ({ endSearch, onChange }) => {
  return (
    <div>
      <h5>Buscar:</h5>
      <input
        type="text"
        placeholder="
        Escribe tu búsqueda..."
        value={endSearch}
        onChange={onChange}
      />
    </div>
  );
};

export default Browser;
