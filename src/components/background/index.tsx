import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const Background = styled(LinearGradient).attrs({
    colors: ['#000', '#1c1c1c'],
})`
    flex: 1;
`;

export default Background;
