import React from 'react'
import { View, Text, Image } from 'react-native'

export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:props.product.title,
            description:props.product.description,
            images:props.product.images,
            id:props.product.id,
            onlineStoreUrl:props.product.onlineStoreUrl
        }
    }
    render(){
        return (
            <View style={{
                borderWidth: 1,
                borderRadius: 2,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { width: 3, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 10,
                }}>
                <Image 
                    style={{width: 100, height: 100}}
                    source={{uri:this.state.images[0]}}
                />
                <Text
                    style={{
                        
                        textAlign:'center'

                    }}
                >{this.state.title}</Text>
            </View>
        )
    }
}

