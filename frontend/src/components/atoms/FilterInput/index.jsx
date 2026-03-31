import { Button, Container } from "./style"


export const FilterInput = ({ activeCategory, onFilterChange }) => {

  const categories = ['All', 'CPU', 'GPU', 'RAM', 'SSD', 'MOTHERBOARD'];


  return (
    <Container>

      <p>Filtrar por categoria</p>
      <div>
        {categories.map(category => (
          <Button
            onClick={() => onFilterChange(category)}
            key={category}
            $isActive={activeCategory === category}
          >
            {category}
          </Button>
        ))}
      </div>
    </Container>
  )

}