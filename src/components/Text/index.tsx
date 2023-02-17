import React from "react";
import { Props } from "./types";
import { Container } from "./styles";

const TextMain = ({children, color, typography,...rest}: Props) => {
    return (
        <Container
           color={color || 'surface'}
           typography={typography || 'body1'}
           {...rest}>{children}
        </Container>
    )
}

export default TextMain;