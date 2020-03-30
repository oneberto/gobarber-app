import React, { forwardRef, Ref } from 'react';

import { InputElement, ContainerInput } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
    style?: any;
    icon?: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    keyboardType?:
        | 'default'
        | 'number-pad'
        | 'decimal-pad'
        | 'numeric'
        | 'email-address'
        | 'phone-pad';
    autoCorrect?: boolean;
    placeholder?: string;
}

const Input = forwardRef((props: IProps, ref: Ref<any>) => {
    const { style, icon, ...rest } = props;

    return (
        <ContainerInput style={style}>
            {icon && (
                <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />
            )}
            <InputElement withIcon={!!icon} ref={ref} {...rest} />
        </ContainerInput>
    );
});

export default Input;
