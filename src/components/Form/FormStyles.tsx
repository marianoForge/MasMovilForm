import styled from '@emotion/styled';
import { fontFamily, colors, fontSize } from '../../theme';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
`;

export const Button = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 6px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #EA904F;
  color: white;
  font-weight: bold;
  font-size: ${fontSize.medium}
  font-family: ${fontFamily};
  margin-top: 1.5rem;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: ${fontSize.medium};
  font-family: ${fontFamily};
  font-weight: bold;
  color: ${colors.primary};
`;

export const StyledError = styled.p`
  font-family: ${fontFamily};
  color: ${colors.error};
  font-size: ${fontSize.small}
  font-weight: bold;
`;

export const Success = styled.p`
  font-family: ${fontFamily};
  color: ${colors.success};
  font-size: ${fontSize.small}
  font-weight: bold;
`;

export const Loading = styled.p`
  font-family: ${fontFamily};
  color: ${colors.loading};
  font-size: ${fontSize.small}
  font-weight: bold;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;
