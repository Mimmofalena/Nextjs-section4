import EventList from "../components/events/EventList"
import { getFeaturedEvents } from "../dummy-data"

function HomePage() {
  const featuredEvents = getFeaturedEvents()
  return (
  <div>
    <h1>Welcome to Homepage</h1>
    <EventList items={featuredEvents}/>
    </div>
  )
}

export default HomePage
