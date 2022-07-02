import styled from 'styled-components/native';

export const PictureWrapper = styled.View``;

export const Picture = styled.Image`
  width: 120px;
  height: 120px;

  margin: 0 auto;
  margin-top: -60px;

  border-radius: 60px;
  border: 4px solid ${({theme}) => theme.colors.white};
`;
