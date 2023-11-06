import React from "react";
import { View, StyleSheet, Text, StatusBar,TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'

export default function Header({name}) {

    return (
        <View style={Styles.container}>
            <View style={Styles.content}>
                <Text style={Styles.userName}>{name}</Text>
                 <TouchableOpacity activeOpacity={0.9} style={Styles.buttonUser}>
                    <Feather style={Styles.feather} name="user" size={23} color="#fff"></Feather>
                 </TouchableOpacity>
            </View>
        </View>
    )
}

const StatusBarPadding = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: StatusBarPadding,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    userName: {
        fontSize: 18,
        color:"#fff",
        fontWeight: 'bold'
    },
    buttonUser: {
        width:44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 44/2
    },
    feather:{
        textAlign:'center'
    }
})