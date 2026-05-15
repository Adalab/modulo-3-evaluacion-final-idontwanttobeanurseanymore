export default function Filters({
  name,
  house,
  houses,
  handleInputHouse,
  handleInputName,
}) {
  return (
    <form className='filters' onSubmit={(ev) => ev.preventDefault()}>
      <h2 className='filtersText filtersMainText'>Filtrar por...</h2>
      <label className='filterInput' htmlFor='search_name'>
        Nombre:
        <input
          className='filterInput'
          type='text'
          name='search_name'
          id='search_name'
          placeholder='Buscar personaje...'
          onChange={handleInputName}
          value={name}
        ></input>
      </label>
      <label className='filterSelect' htmlFor='search_house'>
        Casa:
        <select
          className='filterSelect'
          name='search_house'
          id='search_house'
          onChange={handleInputHouse}
          value={house}
        >
          <option value=''>Todos</option>
          {houses.map((eachHouse) => (
            <option key={eachHouse} value={eachHouse}>
              {eachHouse}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
