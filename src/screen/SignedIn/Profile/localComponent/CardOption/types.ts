import { NameIconTypes } from "~/constants/styles/icons";

export interface  OptionProps  {
    title: string;
    icon: NameIconTypes;
    onPress ?: ()=> void;
}