import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { Feather as Icon } from "@expo/vector-icons";
import api from "../../services/api";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CardToday from "../../components/CardToday";

import { Container, Title, SubTitle } from "./styles";

export interface InfoDay {
  dt: number;
  dateFormated: string;
  day: string;
  temp: {
    min: number;
    max: number;
  };
  humidity: number;
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  cloud: "Thunderstorm" | "Drizzle" | "Rain" | "Snow" | "Clouds";
  wind_speed: number;
}

const type_clouds = {
  Thunderstorm: "cloud-rain",
  Drizzle: "cloud-drizzle",
  Rain: "cloud-rain",
  Snow: "cloud-snow",
  Clouds: "cloud",
};

const Dashboard: React.FC = () => {
  const [infoDays, setInfoDays] = useState<InfoDay[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Algo de errado aconteceu...",
          "Precisamos da sua permissão para obter sua localização"
        );
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        const { data } = await api.get("", {
          params: {
            lat: latitude,
            lon: longitude,
            appid: "5246a571bfd9a807a41199d8582ac3bc",
          },
        });

        const tempsFormatted = data.daily.map((infoDay: InfoDay) => {
          const date = new Date(Number(`${infoDay.dt}000`));
          const day =
            date.getDate() === new Date().getDate()
              ? "HOJE"
              : format(date, "cccc", {
                  locale: ptBr,
                });

          const cloud = infoDay.weather[0].main;

          return {
            ...infoDay,
            dateFormated: format(date, "dd-MM-yyyy", {
              locale: ptBr,
            }),
            day: day.toUpperCase(),
            cloud,
          };
        });

        setInfoDays(tempsFormatted);
        await AsyncStorage.setItem(
          "@bovcontrol:infoDays",
          JSON.stringify(tempsFormatted)
        );
      } catch (e) {
        Alert.alert(
          "Algo de errado aconteceu",
          `Verifica sua permisão para que possamos obter sua localização ou 
          verifique se seu GPS está ativado`
        );

        const infoDays = await AsyncStorage.getItem("@bovcontrol:infoDays");

        infoDays ? setInfoDays(JSON.parse(infoDays)) : setInfoDays([]);
      }
    }

    loadPosition();
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" color="#48d1ff" size={28} />
      </TouchableOpacity>

      <Title>Acompanhe abaixo a previsão da sua localidade</Title>
      <SubTitle>Seja online ou offline, visualize a previsão do tempo</SubTitle>

      {infoDays.map(
        (infoDay) =>
          infoDay.day.toUpperCase() === "HOJE" && (
            <CardToday
              key={infoDay.dt}
              cloud={type_clouds[infoDay.cloud]}
              info={infoDay}
            />
          )
      )}
    </Container>
  );
};

export default Dashboard;
