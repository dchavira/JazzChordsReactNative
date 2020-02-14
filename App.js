import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import ChordScreen from './components/ChordScreen';
import HelpScreen from './components/HelpScreen';
import SearchTutorialScreen from './components/SearchTutorialScreen';
import ScaleScreen from './components/ScaleScreen';
import { YellowBox } from 'react-native'
const MainNavigator = createStackNavigator({
      Home: {
            screen: HomeScreen,
            header: null
      },
      SearchTutorial: {
            screen: SearchTutorialScreen,
            header: null
      },
      Chord: {
            screen: ChordScreen,
            header: null
      },
      Scale: {
            screen: ScaleScreen,
            header: null
      },
      Help: {
            screen: HelpScreen,
            header: null
      }
});

YellowBox.ignoreWarnings(['Setting a timer']);
const App = createAppContainer(MainNavigator);

export default App;