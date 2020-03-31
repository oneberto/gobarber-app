import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';
import { ColorsVariant } from '~/settings/colors';

interface IProps {
    variant?: ColorsVariant;
    loading?: boolean;
    children: any;
    bottom?: number;
    top?: number;
    onPress: () => void;
}

export default function Button({
    loading = false,
    children,
    bottom = 0,
    top = 0,
    variant = 'info',
    ...rest
}: IProps) {
    return (
        <ButtonContainer {...rest} bottom={bottom} top={top} variant={variant}>
            {loading ? (
                <ActivityIndicator />
            ) : (
                <ButtonText>{children}</ButtonText>
            )}
        </ButtonContainer>
    );
}
