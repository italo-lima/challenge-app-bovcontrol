import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
  border-width: 1px;
  border-color: #e3e3e3;
  padding: 10px;
`;

export const InfoTop = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  font-family: "Roboto_500Medium";
  margin-bottom: 10px;
`;

export const InfoCardLeft = styled.View`
  padding-right: 30px;
`;

export const InfoCardRight = styled.View`
  margin-left: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextDescribe = styled.Text`
  font-family: "Roboto_500Medium";
  margin-left: 5px;
`;

export const CardInfo = styled.View`
  flex-direction: row;
`;

export const TypeInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const TypeInfoText = styled.Text`
  font-size: 16px;
  font-family: "Roboto_400Regular";
  color: #6c6c80;
`;
