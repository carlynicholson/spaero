import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import {

//   Divider,
//   FlightCard,
//   FlightDetails,
//   Text,
//   SwitchPill
// } from "sandcastle-ui";

export default function Flights() {
  const [selected, setSelected] = React.useState(false);
  return (
    <Container verticalGutters>
      {/* <Card marginBottom={24}>
        <Text variant={"body"} marginBottom={4} component="div">
          COMPONENT:
        </Text>
        <Text variant={"heading"}>FLIGHT CARD</Text>
      </Card>

      <Card marginBottom={24}>
        <SwitchPill
          id="toggle-selected"
          label="Selected state"
          name="selected"
          checked={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        />
      </Card>

      <FlightCard
        CardHeaderProps={{
          heading: "Great choice dude!",
          IconButtonProps: {
            onClick: () => console.log("booyakka"),
            href:
              "https://earthjustice.org/sites/default/files/styles/image_800x600/public/pika_david-kingham-800.jpg?itok=DiD9a0Rq"
          }
        }}
        selected={selected}
      >
        <FlightCard.Leg
          departureTime={"09:00"}
          arrivalTime={"14.45"}
          departureAirport={"London Gatwick"}
          arrivalAirport={"Tenerife South"}
          stops={"Direct"}
          duration={"03h 30m"}
          airlineLogoUrl={
            "https://www.travelrepublic.co.uk/build/img/Airline/Small/ba.png"
          }
          highlightAirport={"departure"}
          carrierText="Operated by Delta Airlines"
        />
        <FlightCard.Leg
          departureTime={"09:00"}
          arrivalTime={"12:30"}
          departureAirport={"Tenerife South"}
          arrivalAirport={"London Gatwick"}
          stops={"Direct"}
          duration={"03h 30m"}
          airlineLogoUrl={
            "https://www.travelrepublic.co.uk/build/img/Airline/Small/ezy.png"
          }
          highlightAirport={"arrival"}
          carrierText="Operated by Delta Airlines"
        />
        <FlightCard.Info>
          <FlightCard.Info.Item IconProps={{ name: "suitcase" }}>
            includes 10kg hand luggage
          </FlightCard.Info.Item>
          <FlightCard.Info.Item IconProps={{ name: "plane-up" }}>
            View{" "}
            <Text
              component={"a"}
              underline={true}
              href={"http://www.bbc.co.uk"}
            >
              flight details
            </Text>{" "}
            in full
          </FlightCard.Info.Item>
        </FlightCard.Info>
        <FlightCard.PriceBlock>
          <FlightCard.PriceBlock.Caption>
            Price per adult
          </FlightCard.PriceBlock.Caption>
          <FlightCard.PriceBlock.Amount>£211</FlightCard.PriceBlock.Amount>
          <FlightCard.PriceBlock.Legend>
            (Total <strong>£844)</strong>
          </FlightCard.PriceBlock.Legend>
        </FlightCard.PriceBlock>
        <FlightCard.CTA>
          <Button
            color="accent"
            label="Select"
            onclick={() => console.log("CTA clicked")}
          />
        </FlightCard.CTA>
      </FlightCard>

      <Divider marginTop={48} marginBottom={20} />

      <Card marginBottom={32}>
        <Text variant={"body"} marginBottom={4} component="div">
          COMPONENT:
        </Text>
        <Text variant={"heading"}>FLIGHT DETAILS</Text>
      </Card>

      <FlightDetails>
        <FlightDetails.Leg
          heading="Outbound"
          departureDate="24th August 2019"
          stops="One-stop"
          duration="4h 30m"
        >
          <FlightDetails.Segment
            cabin="Economy"
            duration="2h 05m"
            flightNumber="EJ43513"
            airlineLogoUrl={
              "https://www.travelrepublic.co.uk/build/img/Airline/Small/ba.png"
            }
            departureTime={"14:50"}
            arrivalTime={"12:30"}
            departureAirport={"(LGW) Gatwick, London"}
            arrivalAirport={"(BCN) Barcelona)"}
            connection="1h 30m Layover - Barcelona"
            carrierText="Operated by Delta Airlines"
          />
          <FlightDetails.Segment
            cabin="Economy"
            duration="2h 05m"
            flightNumber="EJ43513"
            airlineLogoUrl={
              "https://www.travelrepublic.co.uk/build/img/Airline/Small/ba.png"
            }
            departureTime={"19:25"}
            arrivalTime={"21:20"}
            departureAirport={"(BCN) Barcelona)"}
            arrivalAirport={"(NAP) Naples"}
            carrierText="Operated by Delta Airlines"
          />
          <FlightDetails.Info heading="Flight inclusions">
            <FlightDetails.Info.Item>
              10kg hand luggage per person
            </FlightDetails.Info.Item>
            <FlightDetails.Info.Item>
              Food & bar service
            </FlightDetails.Info.Item>
            <FlightDetails.Info.Item>Hey you guys</FlightDetails.Info.Item>
          </FlightDetails.Info>
        </FlightDetails.Leg>
        <FlightDetails.Leg
          heading="Return"
          departureDate="30th August 2019"
          stops="Direct"
          duration="2h 50m"
        >
          <FlightDetails.Segment
            cabin="Economy"
            duration="3h 05m"
            flightNumber="EJ43513"
            airlineLogoUrl={
              "https://www.travelrepublic.co.uk/build/img/Airline/Small/ba.png"
            }
            arrivalTime={"14:50"}
            departureTime={"12:30"}
            arrivalAirport={"(LGW) Gatwick, London"}
            departureAirport={"(NAP) Naples)"}
          />
          <FlightDetails.Info heading="Flight inclusions">
            <FlightDetails.Info.Item>
              10kg hand luggage per person
            </FlightDetails.Info.Item>
            <FlightDetails.Info.Item>
              Food & bar service
            </FlightDetails.Info.Item>
            <FlightDetails.Info.Item>Hey you guys</FlightDetails.Info.Item>
          </FlightDetails.Info>
        </FlightDetails.Leg>
      </FlightDetails> */}
    </Container>
  );
}
