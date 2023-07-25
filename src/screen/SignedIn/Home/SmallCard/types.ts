import { NameIconTypes } from "~/constants/styles/icons";

export interface Props{
    title: string;
    icon: NameIconTypes
    onPress?: () => void;
}