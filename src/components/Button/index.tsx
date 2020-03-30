import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface IProps {
    loading?: boolean;
    children: any;
    onPress: () => void;
}

export default function Button({ loading = false, children, ...rest }: IProps) {
    return (
        <ButtonContainer {...rest}>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <ButtonText>{children}</ButtonText>
            )}
        </ButtonContainer>
    );
}
