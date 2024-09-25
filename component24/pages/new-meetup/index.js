import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addmeetUpHandler(entredMeetupData) {
    const responce = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entredMeetupData),
    });

    const data = await responce.json();
    console.log(data);

    router.push("/");
  }

  return <NewMeetupForm onAddMeetup={addmeetUpHandler} />;
}

export default NewMeetupPage;
