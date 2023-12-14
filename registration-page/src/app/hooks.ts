import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux';

import {RootState,AppDispatch} from './store';

//use throught your app insted of plain 'useDispatch' and 'useSelector'

export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;