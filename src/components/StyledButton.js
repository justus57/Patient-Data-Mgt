import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import Theme from '../styles/theme';
import NeoCont from './NeoContainer';

const { colors, font } = Theme;

const StyledButton = ({ text, onPress }) => {
  return (
    <>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} style={Styles.button}>
          <Text style={[Styles.buttonText]}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 100,
  },
  details: {
    display: 'flex',
  },
  buttonContainer: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: font.bold,
    fontSize: 20,
    color: colors.background,
  },
});

export default StyledButton;
