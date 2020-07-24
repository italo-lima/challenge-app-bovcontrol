import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import React from "react";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";

import Routes from "./src/routes";

export default function App() {
  const [fondLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fondLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}

//https://api.openweathermap.org/data/2.5/onecall?lat=-9.5878468&lon=-36.795814&exclude=hourly,current,minutely&units=metric&lang=pt_br&appid=5246a571bfd9a807a41199d8582ac3bc
