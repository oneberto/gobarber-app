import styled from 'styled-components/native';

const Form = styled.View<{
    bottom?: number;
    top?: number;
}>`
    padding: 10px;
    align-self: stretch;

    margin-bottom: ${({ bottom }) => bottom || 0}px;
    margin-top: ${({ top }) => top || 0}px;
`;

export default Form;
