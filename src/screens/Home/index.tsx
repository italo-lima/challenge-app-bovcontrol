import React, { useCallback } from "react";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import {
  Container,
  Logo,
  Main,
  Wellcome,
  Description,
  ButtonOpenSite,
  ButtonIcon,
  FooterText,
  TextButton,
  OpenForecast,
} from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigationToDashboard() {
    navigation.navigate("Dashboard");
  }

  const handleUrlBovcontrol = useCallback(() => {
    Linking.openURL("https://www.bovcontrol.com.br/");
  }, []);

  return (
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Main>
        <Wellcome>Bem vindo ao Leiteria</Wellcome>
        <Description>
          Acompanhe a previsão da sua localidade, simples e rápido
        </Description>
        <OpenForecast onPress={handleNavigationToDashboard}>
          <ButtonIcon>
            <Icon name="arrow-right" size={24} color="#fff" />
          </ButtonIcon>
          <TextButton>Acompanhar previsão</TextButton>
        </OpenForecast>
      </Main>
      <FooterText>Curtiu o aplicativo?</FooterText>
      <ButtonOpenSite onPress={handleUrlBovcontrol}>
        <ButtonIcon>
          <Icon name="external-link" size={24} color="#fff" />
        </ButtonIcon>
        <TextButton>Visite nosso site</TextButton>
      </ButtonOpenSite>
    </Container>
  );
};

export default Home;
