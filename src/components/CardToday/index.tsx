import React from "react";
import { View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { InfoDay } from "../../screens/Dashboard";
import {
  Container,
  InfoCardLeft,
  InfoTop,
  InfoCardRight,
  TextDescribe,
  TypeInfo,
  CardInfo,
} from "./styles";

interface Props {
  info: InfoDay;
  cloud: string;
}

const CardToday: React.FC<Props> = ({ info, cloud }) => {
  return (
    <Container>
      <InfoTop>
        <Icon name="calendar" color="#48d1ff" size={22} />
        <TextDescribe>
          {info.dateFormated} - {info.day}
        </TextDescribe>
      </InfoTop>
      <CardInfo>
        <InfoCardLeft>
          <TypeInfo>
            <Icon name="droplet" color="#48d1ff" size={22} />
            <TextDescribe>{info.humidity}%</TextDescribe>
          </TypeInfo>
          <TypeInfo>
            <Icon name={cloud} color="#48d1ff" size={22} />
            <TextDescribe>{info.weather[0].description}</TextDescribe>
          </TypeInfo>
        </InfoCardLeft>

        <View>
          <TypeInfo>
            <Icon name="thermometer" color="#48d1ff" size={22} />
            <TextDescribe>Min: {Math.round(info.temp.min)}º</TextDescribe>
          </TypeInfo>
          <TypeInfo>
            <Icon name="thermometer" color="#48d1ff" size={22} />
            <TextDescribe>Max: {Math.round(info.temp.max)}º</TextDescribe>
          </TypeInfo>
        </View>

        <InfoCardRight>
          <Icon name={cloud} color="#48d1ff" size={32} />
          <TypeInfo>
            <Icon name="wind" color="#48d1ff" size={22} />
            <TextDescribe>
              {Math.round(info.wind_speed * 3.6)} km/h
            </TextDescribe>
          </TypeInfo>
        </InfoCardRight>
      </CardInfo>
    </Container>
  );
};

export default CardToday;
