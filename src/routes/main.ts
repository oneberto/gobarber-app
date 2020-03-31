// Screens
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import IRoute from '~/interfaces/IRoute';
import { AllRoutes } from './paramsList';

// Interface

const mainRoutes: IRoute[] = [
    {
        name: AllRoutes.SignIn,
        component: SignIn,
    },
    {
        name: AllRoutes.SignUp,
        component: SignUp,
    },
];

export default mainRoutes;
