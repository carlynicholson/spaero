import React from 'react';
import './BookingForm.css';

const BookingForm = () {
    const [bookingForm, setBookingForm] = useState([])
    useEffect(() => {
        fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2019-09-01?inboundpartialdate=2019-12-01") {
            "method": get,
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "3f8bfd2f1emsh151e3e7783f5181p1ba74ajsnac1dd39bcb48"
            }
        )
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
        }
    )
}
