# seat_reservation_system
## Frontend
Tech stack - Angular

In frontend just created the basic UI for the given assessment which it gets data using API's from backend

- [GET API](https://backend-reservation-system-tloy.vercel.app/api/seats/get) With this we get the details of available seats
- [POST API](https://backend-reservation-system-tloy.vercel.app/api/seats/create) With this we save the data to MongoDB

## Backend
Tech stack - Nodejs, Expressjs

Backend is mainly used for creating the Rest API's

Post API just save the data to databse which we get from frontend and Get API retreive all the data present in the database and check the available seats and return the availble seat numbers

## Database
Tech stack - MongoDB

```yaml
{
    name: {
      type: String,
      trim: true,
    },
    seats: {
      type: Number,
    },
    seatNumbers: {
      type: Array,
    }
}
```
 
Frontend deployed in netlify -  [URL](https://app.netlify.com/sites/unstop-fullstack-assessment/settings/general)

Backend deployed in vercel - [URL](https://backend-reservation-system-tloy.vercel.app/)
