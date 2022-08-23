import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
  Image, ScrollView, FlatList, Animated} from 'react-native';

//card view
import {Card} from 'react-native-shadow-cards'

//icons
import listview from './assets/icons/listview.png'
import image from './assets/icons/image.jpeg'
import cardview from './assets/icons/cardview.png'
import aboutus from './assets/icons/aboutus.png'

//Scroll images
import image1 from './assets/scrollImages/coffee1.jpg'
import image2 from './assets/scrollImages/coffee2.jpeg'
import image3 from './assets/scrollImages/coffee3.jpeg'
import image4 from './assets/scrollImages/coffee4.jpeg'
import image5 from './assets/scrollImages/coffee5.jpg'
import image6 from './assets/scrollImages/coffee6.jpeg'
import image7 from './assets/scrollImages/coffee7.jpg'
import image8 from './assets/scrollImages/coffee8.jpg'
import image9 from './assets/scrollImages/coffee9.jpeg'
import image10 from './assets/scrollImages/coffee10.jpeg'

//Card View images
import ph from './assets/cardImage/ph.gif'
import sa from './assets/cardImage/sa.gif'
import russia from './assets/cardImage/russia.png' 
import us from './assets/cardImage/us.gif'
import france from './assets/cardImage/france.png'
import egypt from './assets/cardImage/egypt.png'
import iran from './assets/cardImage/iran.png'
import israel from './assets/cardImage/israel.png'
import turkey from './assets/cardImage/turkey.png'

//AboutUs
import cj from './assets/aboutUs/cj.png'
import jerad from './assets/aboutUs/jerad.jpg'
import jude from './assets/aboutUs/jude.jpg'
import neil from './assets/aboutUs/neil.jpg'
import sharmaine from './assets/aboutUs/sharmaine.png'
import camila from './assets/aboutUs/camila.jpg'

export default function App() {
  const [bottomTab, setBottomTab] = useState('ScrollView')

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
     
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }
      ).start();
    })
    return(
      <Animated.View style={{
        opacity: fadeAnim,         // Bind opacity to animated value
      }}>
        {props.children}
      </Animated.View>
    );
  }


  return (

    <View style={styles.container}>

      {/* Main Display */}
    <View style={{height: '90%', 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',}}>

    <View style={{alignSelf: 'flex-start', marginTop: -20, marginBottom: 20, marginStart: 10}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'blue' }}>{bottomTab}</Text>
    </View>

    <FadeInView>
    {navigationTab(bottomTab)}
    </FadeInView>
    </View>


    <View style={{flexDirection: 'row', 
    backgroundColor: 'red', 
    borderTopRightRadius: 10, 
    borderTopLeftRadius: 10, 
    width: '100%',
    height: '10%',}}>
    {BottomTab(bottomTab, setBottomTab, "ScrollView", image)}
    {BottomTab(bottomTab, setBottomTab, "ListView", listview)}
    {BottomTab(bottomTab, setBottomTab, "CardView", cardview)}
    {BottomTab(bottomTab, setBottomTab, "AboutUs", aboutus)}
    </View>


      <StatusBar style="auto" />
    </View>
  );
}

//Bottom layout
const BottomTab = (bottomTab, setBottomTab, title, icons) => {
  return(
    <TouchableOpacity style={{flexGrow: 1,
      justifyContent: 'center', }} onPress={() =>{
        setBottomTab(title)
      }}>
        <View style={{backgroundColor: bottomTab == title ? 'yellow':'transparent', 
        padding: 15, 
        margin: 10, 
        borderRadius: 10,}}>
        <Image source={icons} style={{
        width: 23, height: 23,
        alignSelf: 'center',
      }}></Image>

          <Text style={{color: bottomTab == title ? 'blue':'white', 
          fontSize: 12, 
          fontWeight: 'bold'}}>
            {title}
          </Text>
        </View>
    </TouchableOpacity>
  );

}



const navigationTab = (bottomTab) =>{
  //scrollView

  if(bottomTab === 'ScrollView'){
  return(
    <View style={{alignSelf: 'center', height: 500, width: 400,}}>
    <ScrollView style={{alignSelf:'center', }}>
      <Image source={image1} style={styles.scrollImage}></Image>
      <Image source={image2} style={styles.scrollImage}></Image>
      <Image source={image3} style={styles.scrollImage}></Image>
      <Image source={image4} style={styles.scrollImage}></Image>
      <Image source={image5} style={styles.scrollImage}></Image>
      <Image source={image6} style={styles.scrollImage}></Image>
      <Image source={image7} style={styles.scrollImage}></Image>
      <Image source={image8} style={styles.scrollImage}></Image>
      <Image source={image9} style={styles.scrollImage}></Image>
      <Image source={image10} style={styles.scrollImage}></Image>
    </ScrollView>
    </View>
  );
  }//listView
  else if(bottomTab === 'ListView'){
    return (
    <View style={{alignSelf: 'center', height: 500, width: 400}}>
      <FlatList
        data={[
          {key: 'Afghanistan'},
          {key: 'Bahamas'},
          {key: 'Cambodia'},
          {key: 'Denmark'},
          {key: 'Egypt'},
          {key: 'Fiji'},
          {key: 'Gabon'},
          {key: 'Haiti'},
          {key: 'Iceland'},
          {key: 'Japan'},
        ]}
        renderItem={({item}) => <Text style={styles.listView}>{item.key}</Text>}
      />
    </View>
  );
  } 
  //cardView
  else if(bottomTab === 'CardView'){
    return(
      <View style={{height: 500, 
        width: 400, }}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Image source={ph} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Philippines</Text>
          <Text style={styles.cardText}>Content: Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={sa} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: South Africa</Text>
          <Text style={styles.cardText}>Content: Africa</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={russia} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Russia</Text>
          <Text style={styles.cardText}>Content: Eurasia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={us} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: United States of America</Text>
          <Text style={styles.cardText}>Content: America</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={france} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: France</Text>
          <Text style={styles.cardText}>Content: Europe</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={egypt} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Egypt</Text>
          <Text style={styles.cardText}>Content: Africa, Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={iran} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Iran</Text>
          <Text style={styles.cardText}>Content: Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={israel} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Israel</Text>
          <Text style={styles.cardText}>Content: Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={turkey} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Turkey</Text>
          <Text style={styles.cardText}>Content: Europe, Asia</Text>
        </Card>
    </ScrollView>
    </View>
    );
  }
  //aboutUs
  else if(bottomTab === 'AboutUs'){
    return(
      <View style={{width: 400, height: 500, marginTop: -30}}>
        <View style={styles.parent}>
        <Card style={styles.child}>
          <Image source={neil} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Vilaga, Neil Christian O.</Text>
        </Card> 
        <Card style={styles.child}> 
          <Image source={jude} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Calma, Jude Martin V.</Text>
        </Card>
        </View>
        <View style={styles.parent}>
        <Card style={styles.child}>
          <Image source={cj} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Caballero, Ceejay, B.</Text>
        </Card>
        <Card style={styles.child}>
          <Image source={jerad} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Fajardo, Jerad Andrei C.</Text>
        </Card>
        </View>
        <View style={styles.parent}>
        <Card style={styles.child}>
          <Image source={sharmaine} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Miranda, Sharmaine F.</Text>
        </Card>
        <Card style={styles.child}>
          <Image source={camila} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Suyat, Camila O.</Text>
        </Card>
        </View>
        </View>
    );
  }
  else {
    return null;
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: 'green',
  },
  scrollImage: {
    width: 250, 
    height: 200, 
    margin: 20, 
    borderRadius: 10
  },
  listView:{
    alignSelf: 'center',
    fontSize: 30,
    margin: 20,
    color: 'white',
  },
  cardstyle: {
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    margin: 20,
    elevation: 20,
  },
  cardImage: {
    width: 250, 
    height: 100, 
    margin: 20, 
    borderRadius: 10
  },
  cardText:{
    alignSelf: 'center', 
    fontSize: 15,
  },
  parent: {
    flexDirection: 'row', 
    alignSelf: 'center',
  },
  child: {
    borderRadius: 20, 
    width: 150, 
    height: 150, 
    margin: 15, 
    alignSelf: 'flex-start',
    elevation: 20,
  }, 
  aboutImage:{
    width: 80, 
    height: 80, 
    margin: 20, 
    borderRadius: 10, 
    alignSelf: 'center',
  },
  aboutText: {
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});
