import EventItem from "./EventItem"
import classes from './EventList.module.css'

function EventList(props) {
    const dateHandler = (date) => {
        return new Date(date).toLocaleDateString('it-IT', {
            day:'numeric',
            month:'long',
            year:'numeric'
        })
    }

    const addressHandler = (address) => {
        return address.replace(',', '\n')
    }
    return (
        <ul className={classes.list}>
         {props.items.map(event => {
            return <EventItem 
            title={event.title}
            location={addressHandler(event.location)}
            date={dateHandler(event.date)}
            key={event.id}
            src={event.image}
            link={`/events/${event.id}`}
            />
         })}   
            
        </ul>
    )
  }
  
  export default EventList