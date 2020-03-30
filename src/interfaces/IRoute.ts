import React from 'react';

export default interface IRoute {
    name: string;
    component: React.ComponentType<any>;
}
