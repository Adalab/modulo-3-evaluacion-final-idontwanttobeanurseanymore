export default function Filters({
  name,
  house,
  houses,
  handleInputHouse,
  handleInputName,
}) {
  return (
    <form className=''>
      <h2 className=''>Filtrar por...</h2>
      <label className='' htmlFor='search_name'>
        Nombre:
        <input
          className=''
          type='text'
          name='search_name'
          id='search_name'
          placeholder='Buscar personaje...'
          onChange={handleInputName}
          value={name}
        ></input>
      </label>
      <label className='' htmlFor='search_house'>
        Casa:
        <select
          className=''
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
//{`${eachHouse ? eachHouse : 'Ninguna'}`}
