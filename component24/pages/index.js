import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  MongoClient.connect();

  const meetupscollection = db.collection("meetups");

  const meetups = await meetupscollection.find().toArray();
  client.close;
  return {
    props: meetups.map((meetup) => ({
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      description: meetup.description,
    })),
    revalidate: 1,
  };
}

export default HomePage;
