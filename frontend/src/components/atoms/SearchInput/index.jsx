
import { FaSearch } from "react-icons/fa";
import { Container } from "./style";


export const SearchInput = ({ onSearchChange }) => {

  return (
    <Container>

      <input type="text" placeholder="Procurar hardware..." onChange={onSearchChange} />
      <FaSearch />

    </Container>
  )

}  