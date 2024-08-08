import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function EventsRootPage() {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
}

export default EventsRootPage;
