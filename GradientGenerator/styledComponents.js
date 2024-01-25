// Style your elements here
import styled from 'styled-components'

export const GradientGenerateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  @media screen and (min-width: 768px) {
    max-width: 1140px;
  }
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    max-width: 550px;
  }
`
export const Heading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff79;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
export const DirectionDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #ededed;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const ColorsPickersDescription = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #ededed;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ColorValue = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: #ededed;
  font-weight: 500;
`
export const ColorInput = styled.input`
  width: 80px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => props.value};
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  width: 100px;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #1e293b;
  cursor: pointer;
  text-align: center;
`
