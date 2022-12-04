import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NeoCont from '../../components/NeoContainer';
import Search from '../../assets/images/Search.svg';
import Plus from '../../assets/images/Plus.svg';

import globalStyles from '../../styles/globalStyles';
import Theme from '../../styles/theme';
import { FAB } from 'react-native-paper';
import FabButton from '../../components/FabButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../redux/actions/Patients.action';
import React,{ useEffect, useState } from 'react';
import { ActivityIndicator } from '@react-native-material/core';

const { colors, font } = Theme;
const Home = ({ navigation, actions, data, loading }) => {
  const [filter, setfilter] = useState('');
  const [filteredData, setfilteredData] = useState(data);
  useEffect(() => {
    actions.fetchPatients();
    return () => {};
  }, []);

  useEffect(() => {
    setfilteredData(
      data.filter((o) => o.name.toLowerCase().includes(filter.toLowerCase()))
    );
    return () => {};
  }, [filter, data]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Clinical Patient Management</Text>
      <NeoCont>
        <View style={Styles.searchCont}>
          <Search style={Styles.searchIcon}></Search>
          <TextInput
            onChangeText={(e) => {
              // console.log(e);
              setfilter(e);
            }}
            style={Styles.searchBar}
            placeholder='Search'></TextInput>
        </View>
      </NeoCont>
      {loading && (
        <View style={[Styles.centerLoading]}>
          <ActivityIndicator
            color={colors.primary}
            size={'large'}></ActivityIndicator>
        </View>
      )}
      {!loading &&
        (filteredData.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={(patient) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ViewDetails', { _id: patient.item._id });
                  console.log(patient);
                }}
                activeOpacity={0.6}>
                <NeoCont>
                  <Text style={globalStyles.subTitle}>{patient.item.name}</Text>
                  <View style={Styles.row}>
                    <Text style={globalStyles.caption}>
                      Age: {patient.item.age}
                    </Text>
                    <Text style={globalStyles.caption}>
                      Room: {patient.item.room}
                    </Text>
                  </View>
                  <Text style={[globalStyles.subTitleSecondary]}>
                    Diagnosis: {patient.item.diagnosis}
                  </Text>
                </NeoCont>
              </TouchableOpacity>
            )}></FlatList>
        ) : (
          <Text style={globalStyles.subTitle}>No data</Text>
        ))}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddPatient');
        }}
        activeOpacity={0.6}
        style={Styles.fab}>
        <Plus />
      </TouchableOpacity>

      {/* <FabButton></FabButton> */}
    </View>
  );
};

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
    bottom: 0,
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
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

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions }, dispatch),
});

const mapStateToProps = (state) => ({
  ...state.Patients,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
