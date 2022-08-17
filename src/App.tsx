import { useState } from 'react'
import './App.css'

function App () {
  const [users, setUser] = useState([])

  return (
    <div className='App'>
      <form
        onSubmit={event => {
          // stop the form from refreshing
          event.preventDefault()

          // collect some data from the inputs
          const user = {
            name: event.target.name.value,
            lastName: event.target.lastName.value,
            age: event.target.age.valueAsNumber,
            favouriteColor: event.target.favouriteColor.value,
            musicGenre: event.target.musicGenre.value
          }

          // do whatever we want with that data
          setUser([...users, user])
        }}
      >
        <input type='text' name='name' />
        <input type='text' name='lastName' />
        <input type='number' name='age' />
        <input type='text' name='favouriteColor' />

        <p>What's your favourite music genre?</p>
        <label>
          Rock
          <input type='radio' value='rock' name='musicGenre' />
        </label>
        <label>
          Pop
          <input type='radio' value='pop' name='musicGenre' />
        </label>
        <label>
          Rap
          <input type='radio' value='rap' name='musicGenre' />
        </label>

        <button>SUBMIT</button>
      </form>

      {users.map(user => (
        <div>{user.name}</div>
      ))}
    </div>
  )
}

export default App
