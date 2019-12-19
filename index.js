/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/containers/Home';
import { name as appName } from './app.json';
import { store } from './src/store';
import ConnectApp from './src/hocs/provider';
import theme from './src/services/theme';

const ProvidedApp = ConnectApp(store, theme)(App);

AppRegistry.registerComponent(appName, () => ProvidedApp);
