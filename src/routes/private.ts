// Screens
import SignUp from '../screens/SignUp';

// Interface
import IRoute from '~/interfaces/IRoute';

const privateRoutes: IRoute[] = [
    {
        name: 'SignUp',
        component: SignUp,
    },
];

export default privateRoutes;
