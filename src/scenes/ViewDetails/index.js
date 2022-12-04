import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FabButton from '../../components/FabButton';
import NeoCont from '../../components/NeoContainer';
import globalStyles from '../../styles/globalStyles';
import Theme from '../../styles/theme';
import Plus from '../../assets/images/Plus.svg';
import Back from '../../assets/images/Back.svg';
import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import * as Actions from '../../redux/actions/Patients.action';
import { ActivityIndicator } from '@react-native-material/core';

const { colors, font } = Theme;

const ViewDetails = ({ route, navigation, actions, loading, historicData }) => {
  console.log(route.params, historicData, loading);
  useEffect(() => {
    actions.getSpecificPateient(route.params._id);
    return () => {};
  }, []);

  if (loading || historicData.length == 0) {
    return (
      <View style={globalStyles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.row}>
          <Back />
          <Text style={[globalStyles.title, Styles.margin]}></Text>
        </TouchableOpacity>
        <View style={[Styles.centerLoading]}>
          <ActivityIndicator
            color={colors.primary}
            size={'large'}></ActivityIndicator>
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={globalStyles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.row}>
          <Back />
          <Text style={[globalStyles.title, Styles.margin]}>
            {historicData[0].name}
          </Text>
        </TouchableOpacity>
        <View style={Styles.details}>
          <Text style={globalStyles.caption}>Age: {historicData[0].age}</Text>
          <Text style={globalStyles.caption}>Room: {historicData[0].room}</Text>
          <Text style={[globalStyles.subTitleSecondary]}>
            Diagnosis: {historicData[0].diagnosis}
          </Text>
        </View>
        <Text style={globalStyles.title}>Details:</Text>
        {historicData[0] &&
        historicData[0].history &&
        historicData[0].history.length > 0 ? (
          <FlatList
            data={historicData[0].history}
            keyExtractor={(item) => item._id}
            renderItem={(patient) => (
              <NeoCont>
                <Text style={[globalStyles.subTitleSecondary]}>
                  {moment(patient.item.created).format('Do MMM YY')}
                </Text>
                <Text style={Styles.captionBold}>
                  Blood Pressure (X/Y mmHg) : {patient.item.bloodPressure} mmHg
                </Text>
                <Text style={Styles.captionBold}>
                  Respiratory Rate (X/min) : {patient.item.repiratoryRate}/min
                </Text>
                <Text style={Styles.captionBold}>
                  Blood Oxygen Level (X%): {patient.item.bloodOxygen}%
                </Text>
                <Text style={Styles.captionBold}>
                  Heartbeat Rate (X/min): {patient.item.heartRate}/min
                </Text>
              </NeoCont>
            )}></FlatList>
        ) : (
          <Text style={globalStyles.subTitle}>No data</Text>
        )}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddRecord', { _id: route.params._id });
          }}
          activeOpacity={0.6}
          style={Styles.fab}>
          <Plus />
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions }, dispatch),
});

const mapStateToProps = (state) => ({
  ...state.Patients,
});

export default connect(mapStateToProps, mapDispatchtoProps)(ViewDetails);

const Styles = StyleSheet.create({
  centerLoading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
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
  details: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  captionBold: {
    fontFamily: font.bold,
    fontSize: 16,
    color: colors.text,
  },
  margin: {
    marginStart: 10,
  },
});
