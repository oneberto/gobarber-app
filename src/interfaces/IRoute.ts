import React from 'react';
import { AllRoutes } from '~/routes/paramsList';

export default interface IRoute {
    name: AllRoutes;
    component: React.ComponentType<any>;
}
