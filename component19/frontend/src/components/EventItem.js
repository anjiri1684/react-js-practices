import { Form, Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proced = window.confirm("Are you sure yiu want to delete the event?");

    if (proced) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <Form>
          <button onClick={startDeleteHandler}>Delete</button>
        </Form>
      </menu>
    </article>
  );
}

export default EventItem;
