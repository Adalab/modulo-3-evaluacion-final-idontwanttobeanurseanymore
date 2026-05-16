export default function Filters({
  name,
  house,
  houses,
  handleInputHouse,
  handleInputName,
  sortBy,
  setSortBy,
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
      <h2 className='filtersText filtersMainText'>Ordenar por...</h2>
      <div className='filterRadio'>
        <label htmlFor='sort_search2' className='radioBtn'>
          <input
            className='radioBtn'
            type='radio'
            id='sort_search2'
            name='sort_search'
            value='cba'
            checked={sortBy === 'default'}
            onChange={() => setSortBy('default')}
          ></input>
          Destacados
        </label>
        <label htmlFor='sort_search1' className='radioBtn'>
          <input
            className='radioBtn'
            type='radio'
            id='sort_search1'
            name='sort_search'
            value='abc'
            checked={sortBy === 'abc'}
            onChange={() => setSortBy('abc')}
          ></input>
          Orden alfabético
        </label>
      </div>
      <label>
        <input type='checkbox'></input>
      </label>
    </form>
  );
}
