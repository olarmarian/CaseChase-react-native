import React from 'react';
import { StyleSheet, Text,Dimensions, View,ScrollView,SafeAreaView } from 'react-native';
import Product from './components/Product'
import Footer from './components/Footer'
import Header from './components/Header'
import Client from 'shopify-buy';
import { DOMAIN, STORE_FRONT_ACCESS_TOKEN } from 'react-native-dotenv'
const client = Client.buildClient({
  storefrontAccessToken: STORE_FRONT_ACCESS_TOKEN,
  domain: DOMAIN
});

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Dimensions.get('window').height;

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {}
  }
  async componentWillMount(){
    await client.product.fetchAll().then((response) => {
      this.setState({
        products : response
      })
    }).catch(err=>console.log(err));
    let arrayN = [];
    this.state.products.forEach(item => {
      let product = {
        'id':item.id,
        'description':item.description,
        'onlineStoreUrl':item.onlineStoreUrl,
        'title':item.title,
      }
      product['images']=[]
      item.images.forEach(image => {
        product['images'].push(image.src)
      })
      arrayN.push(product);
    })
    
    await this.setState({
      products:arrayN
    })

    let productViews = []
    this.state.products.forEach(product => {
      productViews.push(<Product key={product.id} product={product}></Product>)
    })
    await this.setState({
      productViews
    })
  }
  render(){
    
    return ( 
      <View style={styles.container}>
      
      <SafeAreaView style={{
        marginHorizontal:20,
        height:screenHeight-50
      }}>
        <ScrollView>
          <Header/>
          <View >
            <Text style={styles.title}> Products </Text>
          </View>
          {this.state.productViews}
          <Footer/>
        </ScrollView>
      </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 25 ,
    marginTop: 0
  }
});
