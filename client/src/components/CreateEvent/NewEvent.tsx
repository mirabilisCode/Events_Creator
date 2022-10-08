import React, { ReactElement, useState } from "react";
import "./newEvent.css";
import { CustomButton, CustomInputField } from "../../Interactives/Interactives";
import { getDayName, getMonthName, getDateWithOrder } from "../../toolbox/DateToolbox";
import { createNewEvent } from "../../Services/ServerHandlers";

type NewEventProps = {
  toggleForm: () => void;
};

const NewEvent = (props: NewEventProps): ReactElement => {
  const [newEvent, setEventValue] = useState({} as EventProps);
  const today = new Date();

  return (
    <>
      <div id="new_event_container" className="smoothly_render">
        <header className="new_event_header">
          <h2>{`${getDayName(today)}, ${getDateWithOrder(today)}`}</h2>
          <p>{`${getMonthName(today)}`}</p>
        </header>

        <form id="new_event_form" onSubmit={async (event: React.FormEvent<Element>) => await handleSubmit(event)}>
          <CustomInputField
            aria-label="First Name"
            label="First Name *"
            name="firstName"
            type="text"
            value={newEvent.firstName ?? ""}
            onChange={(event) => handleChange(event)}
            key="new-event-first-name"
            required={true}
          />
          <CustomInputField
            aria-label="Last Name"
            label="Last Name *"
            name="lastName"
            type="text"
            value={newEvent.lastName ?? ""}
            onChange={(event) => handleChange(event)}
            key="new-event-last-name"
            required={true}
          />
          <CustomInputField
            aria-label="Email"
            label="Email *"
            name="email"
            type="email"
            value={newEvent.email ?? ""}
            onChange={(event) => handleChange(event)}
            key="new-event-email"
            required={true}
          />
          <CustomInputField
            aria-label="Event Date"
            label="Event Date *"
            name="eventDate"
            type="date"
            value={newEvent.eventDate ?? ""}
            onChange={(event) => handleChange(event)}
            key="new-event-event-date"
            required={true}
          />
          <div className="dual_buttons_container">
            <CustomButton
              aria-label="Cancel"
              className="button_light custom_buttons"
              label="Cancel"
              type="reset"
              onClick={() => handleCancel()}
              key="add-new-event-reset"
            />
            <CustomButton aria-label="Create Event" className="button_filled custom_buttons" label="Create Event" type="submit" key="add-new-event-button" />
          </div>
        </form>
      </div>
    </>
  );

  /// <--------- ---------> \\\

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setEventValue((prevState) => ({
      ...prevState,
      [name]: value ?? "",
    }));
  }

  function handleCancel() {
    props.toggleForm();
    setEventValue({} as EventProps);
  }

  async function handleSubmit(event: React.FormEvent<Element>) {
    event.preventDefault();

    await createNewEvent(newEvent);

    setEventValue({} as EventProps);
    props.toggleForm();
  }
};

export default NewEvent;

export interface EventProps {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}
