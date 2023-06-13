import { Alchemy } from 'alchemy-sdk';
import { ReactNode, createContext, useMemo } from 'react';
import { alchemy as alchemySettings } from '../../../config';
import { createContextHook } from '../../../utils';

interface AlchemyState {
  alchemySdk: Alchemy
}

export type AlchemyProviderProps = {
  children: ReactNode;
}

const alchemySdk = new Alchemy(alchemySettings);

const AlchemyContext = createContext<AlchemyState | undefined>(undefined)

const AlchemyProvider = ({ children }: AlchemyProviderProps) => {
  const alchemySdkValue = useMemo(() => ({ alchemySdk }), []);
  
  return (
    <AlchemyContext.Provider value={alchemySdkValue}>
      {children}
    </AlchemyContext.Provider>
  )
}

export default AlchemyProvider;

export const useAlchemy = createContextHook(AlchemyContext, 'AlchemyContext')
