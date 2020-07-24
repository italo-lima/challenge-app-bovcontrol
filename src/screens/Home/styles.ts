import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Main = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  margin-top: 70px;
  width: 260px;
  height: 77px;
`;

export const Wellcome = styled.Text`
  padding: 30px 0;
  font-size: 24px;
  font-family: "Roboto_500Medium";
`;

export const FooterText = styled.Text`
  padding-bottom: 10px;
  font-size: 16px;
  font-family: "Roboto_500Medium";
  text-align: center;
`;

export const Description = styled.Text`
  margin-bottom: 15px;
  font-size: 22px;
  font-family: "Roboto_400Regular";
`;

export const OpenForecast = styled(RectButton)`
  background-color: #48d1ff;
  height: 60px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ButtonOpenSite = styled(RectButton)`
  background-color: #48d1ff;
  height: 60px;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: "Roboto_500Medium";
  font-size: 16px;
`;
