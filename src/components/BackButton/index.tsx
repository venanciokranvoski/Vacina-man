import React from "react";
import Icon from "../Icon";
import { Container } from "./styles";
import { Props } from "./types";

const BackButton = ({icon, onPress}: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon icon={icon} size={23} />
        </Container>
    )

}

export default BackButton;