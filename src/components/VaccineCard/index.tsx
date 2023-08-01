import React, {useMemo} from "react";
import styles, { BadgeLeft, Chip, ChipWar, Container, VaccineDate } from "./styled";
import TextMain from "../Text";
import Separator from "../Separator";
import { Pressable, View } from "react-native";
import Icon from "../Icon";
import { VaccinecardProps } from "./types";
import { format, isBefore } from "date-fns";
import { useTheme } from "styled-components";

const VaccineCard = ({date, shot, title, onPress}: VaccinecardProps) => {

    const {colors} = useTheme()

    const isBeforeToday = useMemo(()=> {
     return isBefore(new Date(date), new Date());
    }, [date])

    const formattedDate = useMemo(()=> {
       return format(new Date(date), 'dd/MM/yy');
    }, [date])

    const dose = useMemo(()=> {
      switch (shot) {
        case 'first-dose': 
        return {
            color: 'black',
            title: '1º dose'
        };
        case 'second-dose':
            return {
                color: 'red',
                title: '2º dose'
            };
            default: 
            return {
                color: 'green',
                title: 'Dose Única'
            }
        }
    }, [shot])



    return ( 
        <Pressable onPress={onPress} style={styles.shadow}>
            <Container>
                <BadgeLeft color={isBeforeToday ? 'red' : 'purple' } />
                <View>
                    <TextMain typography="body2">{title}</TextMain>
                    <Separator height={5} /> 
                    <ChipWar>
                        <Chip color={dose.color}>
                            <TextMain color="background">{dose.title}</TextMain>
                        </Chip>
                    </ChipWar>
                </View>
                <VaccineDate>
                    <Icon icon="calendario" />
                    <Separator width={18} />
                    <TextMain>{formattedDate}</TextMain>
                </VaccineDate>
            </Container>
        </Pressable>

    )
}

export default VaccineCard;