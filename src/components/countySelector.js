import {useState} from 'react'
//---------Function to create dropdown of counties---------//
function CountySelector() {

  const [chosen, setChosen] = useState(null)
  const [selected, setSelected] = useState('Addison')

  function submitForm(evt) {
    evt.preventDefault()

    setChosen({
      county: selected
    })
  }

  function changeSelection(evt) {
    setSelected(evt.target.value)
  }

  return (
    <div>
      
{/* Creates dropdown with all VT Counties  */}
      <form onSubmit={submitForm} style = {{marginRight: '50%', marginLeft: '30%'}}>
        
        <select value={selected} onChange={changeSelection}>
          <option value="Addison">Addison</option>
          <option value="Bennington">Bennington</option>
          <option value="Caledonia">Caledonia</option>
          <option value="Chittenden">Chittenden</option>
          <option value="Essex">Essex</option>
          <option value="Franklin">Franklin</option>
          <option value="Grand-Isle">Grand Isle</option>
          <option value="Lamoille">Lamoille</option>
          <option value="Orange">Orange</option>
          <option value="Orleans">Orleans</option>
          <option value="Rutland">Rutland</option>
          <option value="Washington">Washington</option>
          <option value="Windham">Windham</option>
          <option value="Windsor">Windsor</option>
        </select>

        <input type='submit' />
      </form>
    </div>
  );
}

export default CountySelector;