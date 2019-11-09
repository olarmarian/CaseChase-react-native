import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	Image,
	ListView,
	StyleSheet,
    Dimensions,
    FlatList
} from 'react-native';
import ProgressBar from './ProgressBar';
import Product from './Product';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');



export default class ProductsList extends Component {
   constructor(props) {
		super(props);
        this.state = {
            isLoading: true,
            dataSource: this.props.products,
            numColumns:2
        }
	}
   componentDidMount() {
		var self = this;
		setTimeout(function () {
			self.setState({ isLoading: false });
		}, 1);
    }
    
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  


    renderItem = (product) => {
        return <View style={{width:window.width,borderBottomColor:'red',borderWidth:1}}>
        <Text>ceva</Text>
        
    </View>
    }

   render() {
        return (
            this.state.isLoading ? <View ><ProgressBar /></View> :
                <View >
                   <Product product={this.state.products[0]}/>
                </View>
        );
    }
}