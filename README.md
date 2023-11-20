# Pool Contract Backend - API Service for Pool Contract

This repository contains a simple Node.js app that serves the api with the blockchain data fetched from The Graph.
## Installation

Follow these steps to install and run the app:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)

### Clone the repository

```bash
git clone https://github.com/rabindraregmi/pool-contract-backend.git
```

### Navigate to the project directory

```bash
cd pool-contract-backend
```

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm run dev
```

## Usage

Open your web browser and go to `http://localhost:3000` to see the app in action.



## API Endpoints

### 1. Get User Borrows

- **Endpoint:** `/v1/pool/<wallet_address>/borrows`
- **Method:** GET
- **Description:** Returns the borrow list for given user.


**Example Response:**

```json
{
    "data": [{
        "__typename": "Borrow",
        "tokenAmount": "50000000000000000000",
        "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
        "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "blockNumber": "34938648",
        "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "transactionHash": "0xce9b631328f9ec46baeefa0aaad90f6c6ea58959aabeac7bacc22f15c5683ea8"
    }]
}
```

### 2. Get All the Borrowings

- **Endpoint:** `/v1/pool/borrows`
- **Method:** GET
- **Description:** Returns all the borrowings from the system


**Example Response:**

```json
{
    "data": [{
        "__typename": "Borrow",
        "tokenAmount": "50000000000000000000",
        "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
        "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "blockNumber": "34938648",
        "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "transactionHash": "0xce9b631328f9ec46baeefa0aaad90f6c6ea58959aabeac7bacc22f15c5683ea8"
    }]
}
```


### 3. Get All the Deposits

- **Endpoint:** `/v1/pool/deposits`
- **Method:** GET
- **Description:** Returns all the deposits from the system


**Example Response:**

```json
{
    "data": [{
        "__typename": "Deposit",
        "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
        "blockNumber": "34938482",
        "tokenAmount": "500000000000000000000",
        "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "transactionHash": "0x1e516b112510fbc7786b8eba466d71a67037ce870faa5e7ed49028bf88480570"
    }, {
        "__typename": "Deposit",
        "user": "0x9f358d16a28f69f451439124bfe9dc934b0a9894",
        "blockNumber": "35149402",
        "tokenAmount": "1000000000000000000",
        "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "transactionHash": "0x55f38e5ae0525cc4644691a0ef281b13b6896355ae030696180ebba66f7c255f"
    }, {
        "__typename": "Deposit",
        "user": "0x9f358d16a28f69f451439124bfe9dc934b0a9894",
        "blockNumber": "35004275",
        "tokenAmount": "1000000000000000000",
        "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "transactionHash": "0xaf836f954e7799b28d914c5c4838cab8652ced49008fdf81767a8ca194aa023a"
    }]
}
```

### 4. Get All the Deposits of User

- **Endpoint:** `/v1/pool/<wallet_address>/deposits`
- **Method:** GET
- **Description:** Returns all the deposits from the system of given user


**Example Response:**

```json
{
    "data": [{
        "__typename": "Deposit",
        "tokenAmount": "500000000000000000000",
        "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
        "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "blockNumber": "34938482",
        "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000",
        "transactionHash": "0x1e516b112510fbc7786b8eba466d71a67037ce870faa5e7ed49028bf88480570"
    }]
}
```

### 5. Get User Borrow and Deposit Trend

- **Endpoint:** `/v1/pool/<wallet_address>/trend`
- **Method:** GET
- **Description:** Returns all the deposits & borrow trend from the system of given user


**Example Response:**

```json
{
    "data": {
        "34938482": {
            "borrows": [],
            "deposits": [{
                "__typename": "Deposit",
                "tokenAmount": "500000000000000000000",
                "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
                "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
                "blockNumber": "34938482",
                "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000"
            }]
        },
        "34938648": {
            "borrows": [{
                "__typename": "Borrow",
                "tokenAmount": "50000000000000000000",
                "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
                "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
                "blockNumber": "34938648",
                "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000"
            }],
            "deposits": []
        }
    }
}
```
### 4. Get All the Deposits & Borrow Trends of System

- **Endpoint:** `/v1/pool/trends`
- **Method:** GET
- **Description:** Returns all the deposits from the system of given user


**Example Response:**

```json
{
    "data": {
        "34938482": {
            "borrows": [],
            "deposits": [{
                "__typename": "Deposit",
                "tokenAmount": "500000000000000000000",
                "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
                "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
                "blockNumber": "34938482",
                "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000"
            }]
        },
        "34938648": {
            "borrows": [{
                "__typename": "Borrow",
                "tokenAmount": "50000000000000000000",
                "user": "0x5ba85d71ef9ae0edc180a6bf5e65f0a749f062dc",
                "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
                "blockNumber": "34938648",
                "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000"
            }],
            "deposits": []
        },
        "35004275": {
            "borrows": [],
            "deposits": [{
                "__typename": "Deposit",
                "tokenAmount": "1000000000000000000",
                "user": "0x9f358d16a28f69f451439124bfe9dc934b0a9894",
                "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
                "blockNumber": "35004275",
                "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000"
            }]
        },
        "35149402": {
            "borrows": [],
            "deposits": [{
                "__typename": "Deposit",
                "tokenAmount": "1000000000000000000",
                "user": "0x9f358d16a28f69f451439124bfe9dc934b0a9894",
                "Pool_id": "0x46544d0000000000000000000000000000000000000000000000000000000000",
                "blockNumber": "35149402",
                "chainId": "0x46544d0000000000000000000000000000000000000000000000000000000000"
            }]
        }
    }
}
```




Happy coding!

