import React from 'react'
import { View, Text, Image,StyleSheet, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faUser,faUsers,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default class Header extends React.Component{
    render(){
        return <View>
                <View
                    style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignItems:"center",
                            height:90,
                            fontSize:10,
                        }}
                        >
                        <Image
                            style={{height:30,width:100}}
                            source={{uri:"https://cdn.shopify.com/s/files/1/0249/3664/4688/files/4d8e91bade1979e0231dcca5627c62d7_300x300.png?v=1568755811"}}
                        />
                            <View
                                style={{
                                    display:"flex",
                                    flexDirection:'row',
                                }}    
                                >
                                <FontAwesomeIcon icon={faSearch}
                                    size={27}
                                    style={{marginRight:10}}
                                />
                                <FontAwesomeIcon icon={faUser}
                                    size={27}
                                    style={{marginRight:10}}
                                />
                                <FontAwesomeIcon icon={faCartArrowDown}
                                    size={27}
                                    style={{marginRight:10}}
                                />
                            </View>
                        </View>
                        <Image
                            style={{width:screenWidth,height:200}} 
                            source={{uri:"https://cdn.shopify.com/s/files/1/0249/3664/4688/files/beverage-3157395_960_720_900x.jpg?v=1569400417 900w 540h"}}
                        />
                </View>
    }
}

