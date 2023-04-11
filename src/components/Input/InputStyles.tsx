import styled from '@emotion/styled';
import { fontFamily, colors, fontSize } from '../../theme';

export const InputStyle = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const StyledError = styled.p`
  font-family: ${fontFamily};
  color: ${colors.error};
  font-size: ${fontSize.small};
  font-weight: bold;
`;

export const Option = styled.option`
  width: 300px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
