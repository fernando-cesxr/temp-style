import { Text, View, StyleSheet ,Image, TouchableOpacity } from 'react-native';
import nubIcon from './nub-icon.png'
import windIcon from './windIcon.png'
import tempIcon from './icons8-temperature-30.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#212529'}}>
        <Text style={styles.date}> 25 de setembro de 2023</Text>
        <Text style={styles.city}> São Paulo</Text>
      </View>  
      <View style={styles.container} >
        <View style={styles.row} >
          <Text style={styles.temp}>30c</Text>
          <Image source={nubIcon} style={styles.image}/> 
        </View>
      </View>
      <View style={styles.info}>
        <View>
          <Image source={windIcon} style={styles.windImage}/>
          <Text style={styles.text}>14.98 Km  </Text>
        </View>
        <View>
          <Image source={tempIcon} style={styles.windImage}/>
          <Text style={styles.text}>30.3c</Text>
        </View>
        <View>
          <Image source={tempIcon} style={styles.windImage}/>
          <Text style={styles.text}>30.3c</Text>
        </View>
      </View>
      <Text style={styles.aqi}>AQI</Text>
      <View style={styles.aqiView}>
        <Text style={{margin: 20, color: '#6a994e', fontWeight: 'bold', fontSize: 40, flex: 1}}>36</Text>
        <TouchableOpacity>
          <View>
            <Text style={{  color: '#d3d3d3', borderRadius: 5, marginTop: 35, paddingTop: 10, backgroundColor: '#6a994e', paddingHorizontal: 20, marginHorizontal: 40, fontWeight: 'bold'}}>Good</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.aqi}>Today</Text>
      <View>
        <View style={styles.row}>
          <Image source={nubIcon} style={styles.windImage}/>
          <Text>30c</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    padding: 8,
  },
  row: {    
    flex: 1,
    backgroundColor: '#212529',
    padding: 8,
    flexDirection: 'row',
  },
  date: {
    alignItems: 'center',
    fontSize: 15,
    backgroundColor: '#212529',
    textAlign: 'center',
    color: '#D3D3D3',
    marginTop: 30
  },
  city: {
    alignItems: 'center',
    fontSize: 15,
    backgroundColor: '#212529',
    textAlign: 'center',
    color: '#D3D3D9',
    marginTop: 10
  },
  image: {
    width: 200, 
    height: 250, 
    flex: 1,
    marginTop: 30
  },
  temp: {
    color: '#D3D3D3',
    fontWeight: 'bold',
    fontSize: 70,
    marginTop: 90
  },
  info: {    
    flex: 1,
    padding: 8,
    backgroundColor: '#343a40',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    maxHeight: 80
  },
  windImage: {
    maxWidth: 30,
    maxHeight: 30,
    flex: 1,
    marginHorizontal: 50  
    },
  text: {
    color: '#D3D3D3',
    fontWeight: 'bold',
    flex: 1,
    marginHorizontal: 50  
  },
  aqi: {
    color: '#D3D3D3',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30
  },
  aqiView : {
    marginTop: 30,
    backgroundColor: "#344e41",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 100
  },
  
});
