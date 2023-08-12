import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const {height, width} = Dimensions.get('window');
export default function Details({route, navigation}) {
  const data = route.params.item;
  // console.log(data);
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="left" size={24} color="#323232" onPress={handleBack} />
        <View style={styles.header1}>
          <Icon name="sharealt" size={24} color="#323232" />
          <Icon name="hearto" size={24} color="#323232" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <View style={styles.imgBox}>
            <Image style={styles.img} source={data.img1} />
          </View>
        </View>

        <View style={styles.container2}>
          <Text style={styles.text1}>{data.productName}</Text>
          <Text style={styles.text2}>{data.desc}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: height * 0.001,
    height: height,
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },

  container2: {
    margin: 16,
  },

  header1: {
    display: 'flex',
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },

  imgBox: {
    width: 307,
    height: 368,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    marginBottom: 25,
  },

  img: {
    display: 'flex',
    width: 177,
    height: 286,
  },

  text1: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    marginLeft: 10,
    color: '#7B7B7B',
  },
  text2: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 17,
    marginLeft: 10,
    color: '#000000',
    marginTop: 4,
    gap: 4,
  },
});
