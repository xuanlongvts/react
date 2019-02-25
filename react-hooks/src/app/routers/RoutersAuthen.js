import { lazy } from 'react';

import RouterMain from './consts';
import AsyncComponent from '../components/_asynComponent';

const AsyncUseState = AsyncComponent(lazy(() => import('../components/useState')));
const AsyncUseEffect = AsyncComponent(lazy(() => import('../components/useEffect')));

const routersAuthen = [
    {
        title: 'useState',
        path: RouterMain.home,
        component: AsyncUseState,
        exact: true,
    },
    {
        title: 'useEffect',
        path: RouterMain.about,
        component: AsyncUseEffect,
    },
];

export default routersAuthen;
