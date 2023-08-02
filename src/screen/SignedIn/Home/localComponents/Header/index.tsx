import React from "react";
import { Avatar, Container, Area, Row } from "./styled";
import useAuth from "~/hooks/useAuth";
import headerImage from '~/assets/image/header.png'
import Text from "~/components/Text";
import { useTheme } from "styled-components";
import Separator from "~/components/Separator";
import { StatusBar } from "react-native";


const Header : React.FC = () => {
    const {user} = useAuth()
    const {spacing, colors} = useTheme()
    return (
        <Container source={headerImage}>
            <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
                <Row>
                    <Area>
                        <Text color="background" typography="h5">Bem-vindx</Text>
                        <Text color="background" typography="h6">{user?.firstName}</Text>        
                    </Area>
                    <Avatar source={{uri: user?.avatar}} />
                </Row>
                <Separator height={spacing.md} />    
        </Container>


    )
}



export default Header