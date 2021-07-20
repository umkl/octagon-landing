import eventStyles from "./events.module.scss";
import React from "react";
import { getEventData, IEventData } from "./../../lib/events";

async function Event(props: IEventData) {
    
  const { id, title, date } = props;
  const eventData = await getEventData(props.id as string);
  
  return (
    <div className={eventStyles.eventContainer}>
      <div className={eventStyles.textpart}>
        <span className={eventStyles.teaser}>{title}</span>
      </div>
      <div className={eventStyles.image}>
        
      </div>
    </div>
  );
}

export default Event;
