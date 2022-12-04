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

const AddRecord = ({ route, navigation, actions }) => {
  const [data, setdata] = useState({});
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={Styles.row}>
        <Back />
        <Text style={[globalStyles.title, Styles.margin]}>Add Record</Text>
      </TouchableOpacity>
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, bloodPressure: v });
        }}
        title={'Blood Pressure (X/Y mmHg)'}
        placeholder={'Enter Value...'}
      />
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, repiratoryRate: v });
        }}
        title={'Respiratory Rate (X/min)'}
        placeholder={'Enter Value...'}
      />
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, bloodOxygen: v });
        }}
        title={'Blood Oxygen Level (X%)'}
        placeholder={'Enter Value...'}
      />
      <InputBlock
        onChange={(v) => {
          setdata({ ...data, heartRate: v });
        }}
        title={'Heartbeat Rate (X/min)'}
        placeholder={'Enter Value...'}
      />
      <StyledButton
        onPress={() => {
          if (
            data.bloodPressure &&
            data.repiratoryRate &&
            data.bloodOxygen &&
            data.heartRate
          ) {
            // data.created = new Date();
            actions.createPatientRecord({
              _id: route.params._id,
              details: { ...data, created: new Date() },
            });
            navigation.goBack();
            // navigation.popToTop();
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

export default connect(mapStateToProps, mapDispatchtoProps)(AddRecord);

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
