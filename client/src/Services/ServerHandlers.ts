import { EventProps } from "../components/CreateEvent/NewEvent";

async function createNewEvent(newEvent: EventProps) {
  await fetch("http://localhost:8080/createEvent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  })
    .then((response) => {
      response.json().then((res) => {
        if (res.errors) window.alert("Could not save your record, please verify your inputs and try again");
        return res;
      });
    })
    .catch((error) => {
      console.log(error);
      return;
    });
}

async function fetchEvents() {
  try {
    const response = await fetch("http://localhost:8080/getAllEvents");
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    const fetchedEvents = await response.json();
    return fetchedEvents;
  } catch (e) {
    console.log(e);
  }
}

export { createNewEvent, fetchEvents };
