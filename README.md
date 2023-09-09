# Ethereum Block Explorer

A simple Ethereum block explorer built for Alchemy's Ethereum Developer Bootcamp course using the [Alchemy SDK](https://docs.alchemy.com/reference/alchemy-sdk-quickstart). 

<img width="1169" alt="image" src="https://github.com/howellsy/blockexplorer/assets/82221637/adcde044-003a-4dda-8e19-586b18dc95d9">

## Getting Started

Create an empty `.env` file in the base directory of this project.

Add the following line to the `.env` file replacing `YOUR_ALCHEMY_API_KEY` with your API key.

```sh
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
```

> **NOTE**: Your Alchemy API Mainnet Key is a sensitive piece of data. If/when productionising this app, we would want to manage this secret properly and keep it out of the client code of our app where it could potentially be read by anyone.

Install the project dependencies using

`yarn install`

## Start the Webserver

`yarn start`

Running the command above will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
