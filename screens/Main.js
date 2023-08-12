import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SkinCare from './SkinCare';
import MakeUp from './MakeUp';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('window');

export default function Main({navigation}) {
  const [showMakeUp, setShowMakeUp] = useState(true);
  const [showSkinCare, setShowSkinCare] = useState(false);

  const handleMakeUp = () => {
    setShowMakeUp(true);
    setShowSkinCare(false);
  };

  const handleSkinCare = () => {
    setShowMakeUp(false);
    setShowSkinCare(true);
  };

  const handleNavigate = item => {
    navigation.navigate('Details', {
      item: item,
    });
  };


  const skinCare = [
    {
      id: 1,
      productName: 'Nykaa faceWash',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'super Match',
      icon: require('./assets/super.png'),
    },
    {
      id: 2,
      productName: 'Nykaa Day Cream',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'good Match',
      icon: require('./assets/good.png'),
    },
    {
      id: 3,
      productName: 'Nykaa Night Cream',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'average Match',
      icon: require('./assets/average.png'),
    },
    {
      id: 4,
      productName: 'Nykaa Sunscreen',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'poor Match',
      icon: require('./assets/poor.png'),
    },
    {
      id: 5,
      productName: 'Nykaa Serum',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'super Match',
      icon: require('./assets/super.png'),
    },
    {
      id: 6,
      productName: 'Nykaa BB Cream',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'good Match',
      icon: require('./assets/good.png'),
    },
    {
      id: 7,
      productName: 'Nykaa D Cream SPF 50',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'average Match',
      icon: require('./assets/average.png'),
    },
    {
      id: 8,
      productName: 'Nykaa N Cream SPF 30',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'poor Match',
      icon: require('./assets/poor.png'),
    },
  ];

  const makeUpData = [
    {
      id: 1,
      productName: 'Nykaa Serum',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'super Match',
      icon: require('./assets/super.png'),
    },
    {
      id: 2,
      productName: 'Nykaa Moisturizer',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'good Match',
      icon: require('./assets/good.png'),
    },
    {
      id: 3,
      productName: 'Nykaa Cream',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'average Match',
      icon: require('./assets/average.png'),
    },
    {
      id: 4,
      productName: 'Nykaa Oil',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'poor Match',
      icon: require('./assets/poor.png'),
    },
    {
      id: 5,
      productName: 'Nykaa Shampoo',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'super Match',
      icon: require('./assets/super.png'),
    },
    {
      id: 6,
      productName: 'Nykaa plus+',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'good Match',
      icon: require('./assets/good.png'),
    },
    {
      id: 7,
      productName: 'Nykaa Day Cream',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'average Match',
      icon: require('./assets/average.png'),
    },
    {
      id: 8,
      productName: 'Nykaa Night Cream',
      desc: 'This serum Revitalift Hydrated, Plump Skin Combo includes the hyaluronic acid serum, plumping cream and gel cleanser for hydrated, plump and radiant-looking skin.',
      img1: require('./assets/product.png'),
      img2: require('./assets/product.png'),
      match: 'poor Match',
      icon: require('./assets/poor.png'),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.hiText}>hi, aishwarya !</Text>
        </View>
        <View>
          <Icon name="menu" size={30} color="#900" />
        </View>
      </View>
      <Text style={styles.beautyText}>beauty starts here</Text>
      <View style={styles.mainBox}>
        <TouchableOpacity onPress={handleMakeUp}>
          <View style={showMakeUp ? styles.box1 : styles.box}>
            <Image
              source={require('./assets/lipstic.png')}
              style={{height: 22, width: 22}}
              resizeMode="contain"
            />
            <Text style={styles.mainText}>Make Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkinCare}>
          <View style={showSkinCare ? styles.box1 : styles.box}>
            <Image
              source={require('./assets/abc.png')}
              style={{height: 22, width: 22}}
              resizeMode="contain"
            />
            <Text style={styles.mainText}>Skin Care</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.weekly}>weekly Top 4</Text>
        <Text style={styles.perfect}>Perfect-for-you based on your goals!</Text>
      </View>
      <View>
        {showMakeUp && (
          <MakeUp makeUpData={makeUpData} handleNavigate={handleNavigate} />
        )}
        {showSkinCare && (
          <SkinCare skinCare={skinCare} handleNavigate={handleNavigate} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {margin: height * 0.001, padding: 8},
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12.5,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000000',
    padding: 8,
  },
  beautyText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000000',
    padding: 8,
  },
  mainText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    marginLeft: 10,
    color: '#1E2121',
  },

  mainBox: {
    width: 307,
    height: 75,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },

  box: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 135,
    height: 43,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

  box1: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 135,
    height: 43,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F3FAAB',
  },

  weekly: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 17,
    marginLeft: 10,
    color: '#000000',
  },
  perfect: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
    marginLeft: 10,
    color: '#000000',
    marginTop: 10,
  },
});
