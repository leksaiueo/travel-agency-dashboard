import React from "react";
import { Header } from "../../../components";

const Trips = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Trips"
        description="Filter, sort, and access detailed user profiles"
        ctaText="Create a trip"
        ctaUrl="/trips/create"
      />
    </main>
  );
};

export default Trips;
