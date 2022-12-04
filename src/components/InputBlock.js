import { StyleSheet, Text, TextInput, View } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Theme from '../styles/theme';
import NeoCont from './NeoContainer';

const { colors, font } = Theme;

const InputBlock = ({ placeholder, title, onChange }) => {
  return (
    <>
      <Text style={[globalStyles.subTitleSecondary]}>{title}:</Text>
      <NeoCont>
        <View style={Styles.searchCont}>
          <TextInput
            onChangeText={onChange}
            style={Styles.searchBar}
            placeholder={placeholder}></TextInput>
        </View>
      </NeoCont>
    </>
  );
};

const Styles = StyleSheet.create({
  searchCont: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchIcon: {
    marginEnd: 10,
  },
  searchBar: {
    fontFamily: font.regular,
  },
});

export default InputBlock;
