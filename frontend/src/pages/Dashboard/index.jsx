
import { Button } from '../../components/atoms/Button'
import { Container, Content, Header, Title } from './style'
import { HardwareTable } from '../../components/organisms/HardwareTable'
import { AddHardwareForm } from '../../components/organisms/AddHardwareForm'
import { useEffect, useState } from 'react';
import api from '../../services/api';

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [hardwares, setHardwares] = useState([])
  const [filter, setFilter] = useState('All');

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  const handleModal = () => {
    setIsModalOpen(prevState => !prevState)
  }

  async function fetchHardwares() {
    const params = filter !== 'All' ? { category: filter } : {};
    if (search) params.name = search
    try {
      const { data } = await api.get('/', { params })
      setHardwares(data)

    } catch (error) {
      console.error("Erro ao buscar hardwares:", error);
    }
  }

  useEffect(() => {
    fetchHardwares()

  }, [filter, search])

  return (
    <Container>
      <Content>
        {isModalOpen && (
          <AddHardwareForm
            handleModal={handleModal}
            onSuccess={fetchHardwares}
          />
        )}
        <Header>
          <Title>Inventário de Hardwares</Title>
          <Button onClick={handleModal} >Add new Hardware +</Button>
        </Header>

        <HardwareTable
          onSearchChange={handleSearchChange}
          handleFilterChange={handleFilterChange}
          hardwares={hardwares}
          filter={filter}
        />

      </Content>
    </Container>
  )
}

