export default function Filters({
  name,
  house,
  houses,
  handleInputHouse,
  handleInputName,
  sortBy,
  setSortBy,
  handleCheckbox,
  features,
}) {
  return (
    <form className='filters' onSubmit={(ev) => ev.preventDefault()}>
      <div className='filterTop'>
        <h3 className='filtersMainText'>Filtrar por:</h3>
        <label className='inputType' htmlFor='search_name'>
          <input
            className='inputTypeText'
            type='text'
            name='search_name'
            id='search_name'
            placeholder='Ej.: Harry Potter'
            onChange={handleInputName}
            value={name}
          ></input>
        </label>

        <label htmlFor='search_house' className='inputType'>
          <select
            className='inputTypeSelect'
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
      </div>
      <div className='filterRow'>
        <h3 className='filtersMainText'>Ordenar por:</h3>
        <div className='filterRadio'>
          <label htmlFor='sort_search2' className='radioBtn'>
            <input
              type='radio'
              id='sort_search2'
              name='sort_search'
              value='cba'
              checked={sortBy === 'default'}
              onChange={() => setSortBy('default')}
            ></input>{' '}
            Destacados
          </label>
          <label htmlFor='sort_search1' className='radioBtn'>
            <input
              type='radio'
              id='sort_search1'
              name='sort_search'
              value='abc'
              checked={sortBy === 'abc'}
              onChange={() => setSortBy('abc')}
            ></input>{' '}
            Orden alfabético
          </label>
        </div>
      </div>
      <div className='filterRow'>
        <h3 className='filtersMainText'>Más filtros:</h3>
        <div className='filterCheckBox'>
          <label className='checkItem' htmlFor='cbox1'>
            <input
              type='checkbox'
              className='filterBox'
              id='cbox1'
              value='human'
              onChange={handleCheckbox}
              checked={features.includes('human')}
            ></input>
            Humanos
          </label>
          <label className='checkItem' htmlFor='cbox2'>
            <input
              type='checkbox'
              className='filterBox'
              id='cbox2'
              value='noHouse'
              onChange={handleCheckbox}
              checked={features.includes('noHouse')}
            ></input>
            Sin casa
          </label>
          <label className='checkItem' htmlFor='cbox3'>
            <input
              type='checkbox'
              className='filterBox'
              id='cbox3'
              value='hasImage'
              onChange={handleCheckbox}
              checked={features.includes('hasImage')}
            ></input>
            Con imagen
          </label>
          <label className='checkItem' htmlFor='cbox3'>
            <input
              type='checkbox'
              className='filterBox'
              id='cbox3'
              value='student'
              onChange={handleCheckbox}
              checked={features.includes('student')}
            ></input>
            Solo estudiantes
          </label>
        </div>
      </div>
    </form>
  );
}
