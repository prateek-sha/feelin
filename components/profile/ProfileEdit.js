import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native'

export const ProfileEdit = ({setclickEditProfile}) => {
    const handleProfile = () => {
        setclickEditProfile(true)
    }
    return (
        <View style={styles.wrapper}>
            <TouchableWithoutFeedback onPress={handleProfile} >
                <View style={styles.button}>
                    <Text style={styles.text}>
                        Edit Profile
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback >
                <View style={styles.button}>
                    <Text style={styles.text}>
                        Cool Down
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        marginTop:15,
        marginLeft:20,
        marginRight:20,
        justifyContent:'space-around'
    },
    button:{
        backgroundColor:'#EF3251',
        width:'45%',
        height:36,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:15,
        color:'white'
    }
})