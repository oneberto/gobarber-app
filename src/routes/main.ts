// Screens
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

// Interface
import IRoute from '~/interfaces/IRoute';

const mainRoutes: IRoute[] = [
    {
        name: 'SignIn',
        component: SignIn,
    },
    {
        name: 'SignUp',
        component: SignUp,
    },
];

export default mainRoutes;
