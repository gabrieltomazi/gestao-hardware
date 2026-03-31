import styled from "styled-components";



export const Container = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px;
  overflow: hidden;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid black;
  border-radius: 5px;

  thead tr:first-child th:first-child {
    border-top-left-radius: 5px;
  }
  thead tr:first-child th:last-child {
    border-top-right-radius: 5px;
  }

  td:nth-child(1){
    padding-left: 12px;
  }

  td{
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  tbody tr:last-child td:first-child{
  border-bottom-left-radius: 20px;
 
  }

  tbody tr:last-child td:last-child{
    border-bottom-right-radius: 20px;
  }

`

export const Thead = styled.thead`

  text-align: left;
  background-color: #F2F3F5;
  border-bottom: 1px solid #eee;

  th{
    padding: 12px;
    text-align: left;
    color: black;
    font-size: 14px;
    font-weight: 800;
  }
`
