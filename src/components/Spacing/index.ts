import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  flex,
  space,
  SpaceProps,
  ColorProps,
  HeightProps,
  FlexboxProps,
  BorderProps,
  BorderRadiusProps,
  WidthProps,
  PositionProps,
} from 'styled-system';
import Colors from '../../contants';

type BoxProps =
  | SpaceProps
  | ColorProps
  | HeightProps
  | ViewProps
  | BorderProps
  | BorderRadiusProps
  | FlexboxProps
  | WidthProps
  | PositionProps;

export const Container = styled.View`
  background-color: ${Colors.PRIMARY_BACKGROUND_COLOR};
  padding: 10px;
  flex: 1;
`;

export const Box = styled.View<BoxProps>`
  ${color}
  ${space}
 	${flex}
	position: relative;
`;

export const HorizontalDivider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #d9dbe9;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
