import { Container } from "./style";
import { Input } from '../../atoms/Input'
import { SearchInput } from "../../atoms/SearchInput";
import { FilterInput } from "../../atoms/FilterInput";
import { FaArrowDownWideShort } from "react-icons/fa6";


export function InputsRow({ activeCategory, onFilterChange, onSearchChange }) {

  return (
    <Container>
      <SearchInput
        onSearchChange={onSearchChange}
      />
      <FilterInput
        activeCategory={activeCategory}
        onFilterChange={onFilterChange}
      />
      <Input>
        Ordenar
        <FaArrowDownWideShort />
      </Input >
    </Container>
  )
}
