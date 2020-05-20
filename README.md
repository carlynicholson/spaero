## Spaero
This project uses the Skyscanner Flights API to allow users to search for desired flights. 


## Screenshots
![Preview of Project](https://res.cloudinary.com/df6sigxz7/image/upload/v1589998915/spaero/spaero.png "Preview of Project")


## Tech Stack
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Additional Libraries
 - [React Bootstrap](https://react-bootstrap.github.io/)
 - [Animate.css](https://animate.style/)
 - [AOS](https://michalsnik.github.io/aos/)


## API Reference
I've leveraged the [Skyscanner Flight Search](https://rapidapi.com/skyscanner/api/skyscanner-flight-search) API to pull flight data, including quotes, places, carriers, and currencies.


## How to Use
To use this app, a user must know the origin and destination airport codes, and their departure and return dates for their desired trip. They can then search for available flights within their specifications. 


## Future Plans
- Integrate the [City Geo-Location Lookup](https://rapidapi.com/dev132/api/city-geo-location-lookup/) API for imroved UX purposes
- Create setup so that clicking "Book" on flights list page redirects user to carrier's website
- Integrate filtering capabilities so users may search for flights based on departure/arrival times, booking cost, and airlines


## Code Example 
The [Skyscanner Flight Search](https://rapidapi.com/skyscanner/api/skyscanner-flight-search) API returns the below data for flights from San Francisco International airport going to John F. Kennedy International airport.

```JSON
{
    "Quotes": [
       {
          "QuoteId":1,
          "MinPrice":336,
          "Direct":true,
          "OutboundLeg": {
             "CarrierIds": [
                1864
             ],
             "OriginId":81727,
             "DestinationId":60987,
             "DepartureDate":"2018-04-01T00:00:00"
          },
          "InboundLeg": {
             "CarrierIds": [
                851
             ],
             "OriginId":60987,
             "DestinationId":81727,
             "DepartureDate":"2018-05-01T00:00:00"
          },
          "QuoteDateTime":"2018-03-08T04:54:00"
       }
    ],
    "Places": [
       {
          "PlaceId":60987,
          "IataCode":"JFK",
          "Name":"New York John F. Kennedy",
          "Type":"Station",
          "SkyscannerCode":"JFK",
          "CityName":"New York",
          "CityId":"NYCA",
          "CountryName":"United States"
       },
       {
          "PlaceId":81727,
          "IataCode":"SFO",
          "Name":"San Francisco International",
          "Type":"Station",
          "SkyscannerCode":"SFO",
          "CityName":"San Francisco",
          "CityId":"SFOA",
          "CountryName":"United States"
       }
    ],
    "Carriers": [
       {
          "CarrierId":851,
          "Name":"Alaska Airlines"
       },
       {
          "CarrierId":870,
          "Name":"jetBlue"
       },
       {
          "CarrierId":1721,
          "Name":"Sun Country Airlines"
       },
       {
          "CarrierId":1864,
          "Name":"Virgin America"
       }
    ],
    "Currencies": [
       {
          "Code":"USD",
          "Symbol":"$",
          "ThousandsSeparator":",",
          "DecimalSeparator":".",
          "SymbolOnLeft":true,
          "SpaceBetweenAmountAndSymbol":false,
          "RoundingCoefficient":0,
          "DecimalDigits":2
       }
    ]
}
```


## Contribute
Here are some following guidelines to contribute to Spaero. 

### Include Details
Detailed information is necessary in order to understand an issue.

For example:
* How to reproduce the issue, step-by-step.
* The expected behavior (or what is wrong).
* Screenshots for issues.
* The application version.
* The operating system.

### Pull Requests
Pull requests are always welcome. 

1. When you edit the code, please run `npm run test` to check the formatting of your code before you `git commit`.
2. Ensure the PR description clearly describes the problem and solution.


## License
Spaero © Carly Nicholson




