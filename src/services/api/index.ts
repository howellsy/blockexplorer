import { Alchemy } from 'alchemy-sdk';
import { alchemy as alchemySettings } from '../../config';

const api = new Alchemy(alchemySettings);

export default api;
