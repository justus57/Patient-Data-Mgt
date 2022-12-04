import Plus from '../assets/images/Plus.svg';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Theme from '../styles/theme';

const { colors, font } = Theme;

const FabButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={Styles.fab}>
      <Plus />
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  fab: {
    backgroundColor: colors.secondary,
    width: 70,
    height: 70,
    borderRadius: 100,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 100,
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FabButton;
