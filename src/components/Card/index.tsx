import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { View } from "react-native";

import { Container, InfoCard, InfoTop, TextDescribe, TypeInfo } from "./styles";
import { InfoDay } from "../../screens/Dashboard";

interface Props {
  info: InfoDay;
  cloud: string;
}

const CardTemp: React.FC<Props> = ({ info, cloud }) => {
  return (
    <Container>
      <InfoTop>
        <Icon name="calendar" color="#48d1ff" size={22} />
        <TextDescribe>
          {info.dateFormated} - {info.day}
        </TextDescribe>
      </InfoTop>
      <InfoCard>
        <View>
          <TypeInfo>
            <Icon name="droplet" color="#48d1ff" size={22} />
            <TextDescribe>{info.humidity}%</TextDescribe>
          </TypeInfo>
          <TypeInfo>
            <Icon name={cloud} color="#48d1ff" size={22} />
            <TextDescribe>{info.weather[0].description}</TextDescribe>
          </TypeInfo>
          <TypeInfo>
            <Icon name="wind" color="#48d1ff" size={22} />
            <TextDescribe>
              {Math.round(info.wind_speed * 3.6)} km/h
            </TextDescribe>
          </TypeInfo>
        </View>
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
      </InfoCard>
    </Container>
  );
};

export default CardTemp;
