import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #f2f2f2;
`;

export const List = styled.FlatList.attrs({
  width: Dimensions.get('window').width,
})`
  flex: 1;
  margin-top: 5px;
  background: #fff;
`;

export const Card = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
})`
  background: #fff;
  border-radius: 2px;
  align-items: center;
  margin: 5px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 180px;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 5px;
`;

export const TextInfoBold = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TextInfo = styled.Text`
  text-align: center;
  color: #707070;
  font-weight: bold;
  font-size: 16px;
  padding: 5px 5px 5px 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const LogoutButton = styled(RectButton)`
  height: 46px;
  width: 260px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #ad1785;
`;
