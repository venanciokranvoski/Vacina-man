import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Props } from "./types";

const Header: React.FC<Props> = ({name, title}) => {
    const [name1, setName1] = useState<string>('venancio')
    return (
        <View style={style.app}>
            <Text style={style.tx}>Ola, </Text>
            <Text  style={style.tx}>{title}</Text>
            <Text  style={style.tx}>{name}</Text>
        </View>
    )
}




export default Header;


const style = StyleSheet.create({
    app: {
      padding: 15
    },
    tx: {
        color: '#FFFFFF',
        fontSize: 25
    }
})