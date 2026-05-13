export default function Filters({
  name,
  house,
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
          onInput={handleInputName}
          value={name}
        ></input>
      </label>
      <label className='' htmlFor='search_house'>
        Casa:
        <select
          className=''
          name='search_house'
          id='search_house'
          onInput={handleInputHouse}
          value={house}
        >
          <option></option>
        </select>
      </label>
    </form>
  );
}
