import styled, { keyframes } from "styled-components";



export const Container = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .8);
`


const entry = keyframes`
  0% {
    transform: translateY(400px);
  }
  100%{
    transform: translateY(0px);
  
  }

`

export const Content = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  gap: 10px;
  height: 20rem;
  scale: 1.3;
  animation: .2s ${entry} ease-out;
`



export const Title = styled.h2`


`


export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  input{
    outline: none;
  }
`

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  gap: 4px;
  input{
    outline: none;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  input{
    outline: none;
  }
`

export const DivButtons = styled.div`
  display: flex;
  gap: .7rem;
  margin-top: .5rem;
`
