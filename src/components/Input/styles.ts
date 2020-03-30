import styled from 'styled-components/native';

export const ContainerInput = styled.View`
    padding: 0 15px;
    height: 45px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

export const InputElement = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.6)',
})<{ withIcon: boolean }>`
    flex: 1;
    font-size: 15px;
    margin-left: ${({ withIcon }) => (withIcon ? 10 : 0)}px;
    color: #fff;
`;
