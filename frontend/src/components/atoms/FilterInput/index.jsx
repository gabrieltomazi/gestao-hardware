import { Container, Select } from "./style"


export const FilterInput = ({ activeCategory, onFilterChange }) => {

  const categories = ['All', 'CPU', 'GPU', 'RAM', 'SSD', 'MOTHERBOARD'];


  return (
    <Container>

      <p>Filtrar por categoria</p>
      <Select
        onChange={(e) => onFilterChange(e.target.value)}
        $item={activeCategory}
      >


        {categories.map(category => (
          <option
            key={category}
            value={category}
          >{category}</option>
        ))}
      </Select>

      {/* <div>
        {categories.map(category => (
          <Button
            onClick={() => onFilterChange(category)}
            key={category}
            $isActive={activeCategory === category}
          >
            {category}
          </Button>
        ))}
      </div> */}
    </Container>
  )

}