import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NeoCont from '../../components/NeoContainer';
import globalStyles from '../../styles/globalStyles';
import Theme from '../../styles/theme';
import Back from '../../assets/images/Back.svg';
import InputBlock from '../../components/InputBlock';
import StyledButton from '../../components/StyledButton';
import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../redux/actions/Patients.action';

const { colors, font } = Theme;

const AddPatient = ({ route, navigation, actions }) => {
  const [data, setdata] = useState({});
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={Styles.row}>
        <Back />
        <Text style={[globalStyles.title, Styles.margin]}>Add Patient</Text>
      </TouchableOpacity>
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, name: v });
        }}
        placeholder={'Name'}
        title={'Name'}
      />
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, age: v });
        }}
        placeholder={'Age'}
        title={'Age'}
      />
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, room: v });
        }}
        placeholder={'Room'}
        title={'Room'}
      />
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, diagnosis: v });
        }}
        placeholder={'Diagnosis'}
        title={'Diagnosis'}
      />
      <StyledButton
        onPress={() => {
          console.log('Inside Styled Button');
          if (data.name && data.age && data.room && data.diagnosis) {
            actions.createPatient(data);
            navigation.goBack();
          }
        }}
        text={'Save'}
      />
    </View>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions }, dispatch),
});

const mapStateToProps = (state) => ({
  ...state.Patients,
});

export default connect(mapStateToProps, mapDispatchtoProps)(AddPatient);

const Styles = StyleSheet.create({
  details: {
    display: 'flex',
  },

  captionBold: {
    fontFamily: font.bold,
    fontSize: 16,
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  margin: {
    marginStart: 10,
  },
});
