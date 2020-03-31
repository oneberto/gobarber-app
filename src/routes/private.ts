// Screens
import SignUp from '../screens/SignUp';
import { AllRoutes } from './paramsList';
import IRoute from '~/interfaces/IRoute';

// Interface

const privateRoutes: IRoute[] = [
    {
        name: AllRoutes.SignUp,
        component: SignUp,
    },
];

export default privateRoutes;
