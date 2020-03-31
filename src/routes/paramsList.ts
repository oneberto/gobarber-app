export enum AllRoutes {
    SignIn = 'SignIn',
    SignUp = 'SignUp',
}

export type RootStackParamList = {
    [AllRoutes.SignIn]: undefined;
    [AllRoutes.SignUp]: undefined;
};
