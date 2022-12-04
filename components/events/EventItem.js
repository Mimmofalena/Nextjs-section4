import Link from 'next/link'
import classes from './EventItem.module.css'
function EventItem(props) {
    return (
        <li className={classes.item}>
            <img  src={props.src} alt={props.title} />
            <div className={classes.content}>
            <div className={classes.summary}>
            </div>
            <h2>{props.title}</h2>
        <div className={classes.address}>
            <address>{props.location}</address>
        </div>
            <div className={classes.date}>
            <time>{props.date}</time>
            </div>
            <div className={classes.actions}>
            <Link href={props.link} >
            <a className="some-class">
            Scopri di più {props.title}</a>
            </Link>
            </div>
            </div>
        </li>
    )
  }
  
  export default EventItem