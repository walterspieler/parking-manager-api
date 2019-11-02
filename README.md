# Parking Manager API

## ENDPOINTS

### USERS

- `GET api/users/:id` returns user with specified id
- `POST api/users` creates a new User
  - BODY: `UserModel`
- `PUT api/users/:id` updates user with specified id
  - BODY: `Partial<UserModel>`
- `DELETE api/users/:id` deletes user with specified id

### BOOKINGS

- `GET api/bookings/:userId` returns parkingspace of the user specified
- `POST api/booking` assigns a parkingspace to a user
  - BODY: `{user_id: number; parking_space_id: number; }`
- `DELETE api/bookings/:userId` removes the current booking of the specified user.

### PARKING SPACES

- `GET api/parking-spaces/:id?floor=:FloorNumber` returns parking space with specified id
  - notes: FloorNumber is required
- `POST api/parking-spaces` creates a new Parking space
  - BODY: `ParkingSpaceModel`
- `PUT api/parking-spaces/:id` updates parking space with specified id
  - BODY: `Partial<ParkingSpaceModel>`
- `DELETE api/parking-spaces/:id` deletes parking space with specified id

## INIT DEMO

1. Create a mySql database, create a `env.js` duplicating `env.sample.js` and setting the right values (depending on the db you created).
2. `node initDemo` to create the right tables and feed them with data.

## COMMANDS

- Start server: `npm run start:dev`
- Lint: `npm run lint`
- Coverage: `npm run test:coverage`
- Unit Tests: `npm run test:dev`

## Valid Bearer Token to add to headers (header.authorization)

```jwt
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiTWF0dCIsImxhc3RfbmFtZSI6IldBTFRFUlNQSUVMRVIiLCJyb2xlIjoidXNlciIsImlkIjoxfQ.  zHQFhaHld_ljhOPmI8GYwz3k2u6r876Q5ZDdu0Lj3O4
```
