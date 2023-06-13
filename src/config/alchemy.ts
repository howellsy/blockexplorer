import { AlchemySettings, Network } from 'alchemy-sdk';

export const alchemy: AlchemySettings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
