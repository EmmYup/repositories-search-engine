import styled from 'styled-components';
import { Text } from 'react-native';

export const NameText = styled(Text)`
    padding: 10px;
    font-size: 18;
    height: 44;
    color: ${props => props.inputColor || '#e5e5e5'};
`;
