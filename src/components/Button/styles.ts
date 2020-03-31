import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors, { ColorsVariant } from '~/settings/colors';

export const ButtonContainer = styled(RectButton)<{
    bottom: number;
    top: number;
    variant: ColorsVariant;
}>`
    height: 46px;
    background: ${({ variant }) => colors[variant]};
    border-radius: 4px;

    align-items: center;
    justify-content: center;

    margin-bottom: ${({ bottom }) => bottom}px;
    margin-top: ${({ top }) => top}px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
