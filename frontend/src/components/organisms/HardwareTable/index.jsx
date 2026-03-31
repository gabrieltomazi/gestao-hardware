import { TableRow } from '../../molecules/TableRow'
import { Container, StyledTable, Thead } from "./style"
import { InputsRow } from "../../molecules/InputsRow"

export function HardwareTable({ onSearchChange, handleFilterChange, hardwares, filter, handleModal, handleDelete }) {


  return (
    <Container>
      <InputsRow
        onSearchChange={onSearchChange}
        activeCategory={filter}
        onFilterChange={handleFilterChange}

      />
      <StyledTable>

        <Thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </Thead>
        <tbody>
          {hardwares.length > 0 ? (
            hardwares.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                handleModal={handleModal}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>
                Nenhum hardware encontrado para esta categoria. 🔍
              </td>
            </tr>
          )}
        </tbody>
      </StyledTable >
    </Container >
  )
}
