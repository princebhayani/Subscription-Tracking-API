# Subscription Tracking API

This API allows users to manage their subscriptions, receive reminders for upcoming renewals, and handle user authentication.

## Getting Started

### Prerequisites

- Node.js
- Express.js
- MongoDB
- Postman (for testing the API)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Subscription-Tracking-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create `.env.development.local` and `.env.production.local` files in the root directory.
   - Add the necessary environment variables as shown in the provided `.env` files.

4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication Routes

- **Sign Up**
  - **URL:** `/api/v1/auth/sign-up`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Sign In**
  - **URL:** `/api/v1/auth/sign-in`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Sign Out**
  - **URL:** `/api/v1/auth/sign-out`
  - **Method:** `POST`

### User Routes

- **Get All Users**
  - **URL:** `/api/v1/users`
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`

- **Get User by ID**
  - **URL:** `/api/v1/users/:id`
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`

### Subscription Routes

- **Create Subscription**
  - **URL:** `/api/v1/subscriptions`
  - **Method:** `POST`
  - **Headers:** `Authorization: Bearer <token>`
  - **Body:**
    ```json
    {
      "name": "Netflix",
      "price": 15.99,
      "currency": "USD",
      "frequency": "monthly",
      "category": "entertainment",
      "paymentMethod": "Credit Card",
      "startDate": "2023-01-01"
    }
    ```

- **Get All Subscriptions**
  - **URL:** `/api/v1/subscriptions`
  - **Method:** `GET`

- **Get Subscription by ID**
  - **URL:** `/api/v1/subscriptions/:id`
  - **Method:** `GET`

- **Get User Subscriptions**
  - **URL:** `/api/v1/subscriptions/user/:id`
  - **Method:** `GET`
  - **Headers:** `Authorization: Bearer <token>`

- **Cancel Subscription**
  - **URL:** `/api/v1/subscriptions/:id/cancel`
  - **Method:** `PUT`

- **Get Upcoming Renewals**
  - **URL:** `/api/v1/subscriptions/upcoming-renewals`
  - **Method:** `GET`

### Workflow Routes

- **Send Subscription Reminder**
  - **URL:** `/api/v1/workflows/subscription/reminder`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "subscriptionId": "subscription_id"
    }
    ```

## Using Postman

1. **Set Up Environment Variables:**
   - Open Postman and go to the "Environments" tab.
   - Create a new environment and add the following variables:
     - `baseUrl`: `http://localhost:5500/api/v1`
     - `token`: `<your_jwt_token>`

2. **Create a New Collection:**
   - Create a new collection in Postman and name it "Subscription Tracking API".

3. **Add Requests:**
   - Add requests for each endpoint as described above.
   - For protected routes, add the `Authorization` header with the value `Bearer {{token}}`.

4. **Test the Endpoints:**
   - Send requests and verify the responses.

### Example Environment Variables

#### .env.development.local
```
PORT=5500
NODE_ENV=development
SERVER_URL=http://localhost:5500
DB_URI=
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=your_qstash_token
EMAIL_PASSWORD=your_email_password
```

#### .env.production.local
```
NODE_ENV=production
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=your_qstash_token
QSTASH_CURRENT_SIGNING_KEY=sig_current_signing_key
QSTASH_NEXT_SIGNING_KEY=sig_next_signing_key
```