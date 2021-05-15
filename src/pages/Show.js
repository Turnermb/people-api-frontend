import {useState} from 'react'
function Show(props) {
    //Grab the id from the URL
    const id = props.match.params.id
    //Put the people array in its own variable
    const people = props.people
    //Find the individual person in [people]
    const person = people.find(p => p._id === id)
  
    //State for form
    const [editForm, setEditForm] = useState(person)

    //Handle Change for form
    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value})
    }

    //Handle Submit for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updatePeople(editForm, person._id)
        //redirect back to index
        props.history.push('/')
    }

    const deletePeople = () => {
        props.deletePeople(person._id)
        props.history.push("/")
      }

    return (
      <div className="person">
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img src={person.image} alt={person.name} />
        <button id="delete" onClick={deletePeople}>
        DELETE
      </button>
        <form onSubmit={handleSubmit}>
            <input type='text' value={editForm.name} name='name' placeholder='name' onChange={handleChange} />
            <input type='text' value={editForm.image} name='image' placeholder='image URL' onChange={handleChange} />
            <input type='text' value={editForm.title} name='title' placeholder='title' onChange={handleChange} />
            <input type='submit' value='Update Person' />   
        </form>
      </div>
    )
  }
  
  export default Show