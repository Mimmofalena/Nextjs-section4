import {getAllEvents} from '../../dummy-data'
function Events() {
    const data = getAllEvents()
    console.log(data)
    return (
        <div>
    <h1>Welcome to Events</h1>
            <ul>
                {data.map(el=> 
                <li key={el.id}>{el.title}</li>)}
            </ul>
        </div>
    )
  }
  
  export default Events
  