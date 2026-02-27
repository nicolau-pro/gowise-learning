import { useContext } from 'react';
import { AppStateContext } from 'contexts/AppStateContext.jsx';

export const useAppState = () => useContext(AppStateContext);
