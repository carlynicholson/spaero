import React, { useContext } from "react";
import FlightsListItem from "./FlightsListItem";
import {UniversalProps} from "../../App";

export default function Flights() {
  const universalProps = useContext(UniversalProps);

  const destinationsArr = universalProps.destinations.Quotes.map((e, index) => {
    return(
      <FlightsListItem
        element={e}
        key={index}
      />
    )
  })
  return(
  <div className="list-group">{destinationsArr}</div>
  )
}
