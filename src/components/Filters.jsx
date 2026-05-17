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
      <h3 className='filtersMainText'>Filtrar por:</h3>
      <div className='filterTop'>
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
      <h3 className='filtersMainText'>Más filtros:</h3>
      <div className='filterCheckBox'>
        <input
          type='checkbox'
          className='filterCheckBox'
          id='cbox1'
          value='first_checkbox'
        ></input>
        <label className='radioBtn' htmlFor='cbox1'>
          uno
        </label>
        <input
          type='checkbox'
          className='filterCheckBox'
          id='cbox2'
          value='second_checkbox'
        ></input>
        <label className='radioBtn' htmlFor='cbox2'>
          dos
        </label>
        <input
          type='checkbox'
          className='filterCheckBox'
          id='cbox3'
          value='third_checkbox'
        ></input>
        <label className='radioBtn' htmlFor='cbox3'>
          tres
        </label>
      </div>
    </form>
  );
}
/*//FILTERS
.filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  color: var(--text-primary);
  font-weight: 100;
}

.searchText {
  padding: 0 10px;
}
.filtersMainText {
  font-size: 1rem;
  font-weight: 400;
}
.filterInput,
.filterSelect,
.filterRadio,
.inputType,
.inputTypeText {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--accent-primary);
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.5rem;
  margin: 0.2rem;
  flex-direction: column;

  &:focus {
    outline: none;
    border-color: var(--accent-secondary);
    box-shadow: var(--box-shadow-input);
  }
}
.filterRadio {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 0.8rem;
  text-align: center;
}
.inputType {
  display: flex;
  gap: 10px;
  padding: 0.3rem;
}
.inputTypeText,
.inputTypeSelect {
  width: 90%;
  border-radius: 10px;
  border: 1px solid var(--accent-primary);
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.5rem;
  margin: 0 0.5rem;
}* */
