import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Wrap = styled(View)`
    margin-top: 50px;
`;

export const CloseWrap = styled(View)`
    display: flex;
    flex-direction: row-reverse;
    right: 10px;
`;

export const CloseText = styled(Text)`
    font-size: 18px;
    height: 50;
`;

export const LoadingContainer = styled(View)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
