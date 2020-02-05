import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import ChordScreen from './components/ChordScreen';
import HelpScreen from './components/HelpScreen';
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen,
        header:null},
  Chord: {screen: ChordScreen,
        header:null},
  Help: {screen: HelpScreen,
        header:null}
});

const App = createAppContainer(MainNavigator);

export default App;