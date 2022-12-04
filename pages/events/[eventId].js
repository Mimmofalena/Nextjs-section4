import {getEventById} from '../../dummy-data'
import {useRouter} from 'next/router'

function FilteredEvents(props) {
  const router = useRouter()
  // const event = getEventById(router.query.eventId) ? getEventById(router.query.eventId) : ''
  const event = getEventById(router.query.eventId)
    return (
    <div>
      <h1>Welcome to FilteredEvents</h1>
      <h2>{event.title}</h2>
    </div>
      )
    
  }
  
  export default FilteredEvents
  