import styled from "styled-components";


export const Container = styled.main`

  background-image: linear-gradient(to bottom, #060c24, #07102e, #061438, #071642, #0a184c);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const Content = styled.div`
  background-color: #fff;
  text-align: center;
  h1{
    color: rgb(2, 114, 250);
  }

`

export const Title = styled.div`
  margin: 20px;

`

export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`