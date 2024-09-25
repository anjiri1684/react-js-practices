import classes from "./MeetupDetail.module.css";

function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img className={classes.image} src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>
        <p>{props.address}</p>
      </address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetails;
