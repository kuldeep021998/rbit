import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Entypo';

export default function SkinCare(props) {
  const {handleNavigate, skinCare} = props;

  const getSkinCare = () => {
    return skinCare.map((item, index) => {
      return (
        <View key={index} style={styles.box}>
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={item.img1} />
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.pn}>{item.productName}</Text>
          <Text style={styles.dsc}>{item.desc.substring(0, 50)}</Text>
          <View style={styles.mainView}>
            <View>
              <TouchableOpacity onPress={() => handleNavigate(item)}>
                <Text style={styles.view}>view</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Icon name="heart-outlined" size={30} />
            </View>
            <View style={styles.dots}>
              <Icon
                name="dots-three-horizontal"
                size={20}
                style={{
                  padding: 4,
                }}
              />
            </View>
          </View>
          <View style={styles.matchCont}>
            <View style={styles.matchBox}>
              <Image source={item.icon} />
              <Text style={styles.matchText}>{item.match}</Text>
            </View>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>{getSkinCare()}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: height * 0.001,
    height: (height * 2) / 3,
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '100%',
  },

  box: {
    width: 160,
    height: 330,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    position: 'relative',
  },

  photoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
  },

  photo: {
    width: 135,
    height: 135,
  },

  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#000000',
  },

  pn: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 17,
    marginLeft: 10,
    color: '#000000',
    marginTop: 15,
    marginBottom: 10,
  },

  dsc: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 17,
    marginLeft: 10,
    color: '#000000',
  },

  mainView: {
    marginTop: 30,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  view: {
    width: 60,
    height: 32,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    textAlign: 'center',
  },

  dots: {
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
  },

  matchCont: {
    position: 'absolute',
    top: -13,
    left: 30,
  },

  matchBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 2,
    width: 100,
    height: 25,
    borderRadius: 10,
    backgroundColor: 'black',
  },

  matchText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 17,
    marginLeft: 10,
    color: '#ffffff',
  },
});
