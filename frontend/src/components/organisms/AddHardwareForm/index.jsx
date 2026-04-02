import { useEffect, useState } from "react"
import { Category, Container, Content, DivButtons, Name, Price, Title } from "./style";
import { Button } from "../../atoms/Button";
import api from "../../../services/api.js"



export const AddHardwareForm = ({ handleModal, onSuccess, editingHardware }) => {


  const [fields, setFields] = useState({
    name: editingHardware?.name || '',
    category: editingHardware?.category || '',
    price: editingHardware?.price || ''
  });


  useEffect(() => {
    if (editingHardware) {
      setFields({
        name: editingHardware.name,
        category: editingHardware.category,
        price: editingHardware.price,
      })
    } else {
      setFields({ name: '', category: '', price: '' })
    }
  }, [editingHardware])


  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prevState) => ({
      ...prevState,
      [name]: value
    }))

  }

  const handleSaveHardware = async () => {
    if (!fields.name || !fields.category || !fields.price) {
      alert("por favor, preencha todos os campos!")
      return;
    }


    try {

      const hardware = {
        name: fields.name,
        category: fields.category,
        price: parseFloat(fields.price)
      }

      if (editingHardware) await api.put(`/${editingHardware.id}`, hardware)
      else await api.post('/', hardware)

      if (onSuccess) await onSuccess();

      handleModal();

    } catch (error) {
      console.log("Erro ao adicionar hardware:", error.response?.data)
    }

  }

  return (
    <Container>
      <Content>
        <Title>Add / Edit Hardware Form</Title>
        <Name>
          <label>Nome</label>
          <input
            required
            name="name"
            value={fields.name}
            type="text"
            placeholder="Ex: RTX 4060 Ti"
            onChange={handleChange}
          />
        </Name>
        <Category>
          <label>Categoria</label>
          <select required
            name="category"
            value={fields.category}
            onChange={handleChange}>
            <option value="" hidden>Selecione a categoria...</option>
            <option value="MOTHERBOARD">MOTHERBOARD</option>
            <option value="GPU">GPU</option>
            <option value="CPU">CPU</option>
            <option value="RAM">RAM</option>
            <option value="SSD">SSD</option>
          </select>
        </Category>
        <Price >
          <label>Preço</label>
          <input
            required value={fields.price}
            name="price"
            min={1}
            type="number"
            placeholder="Digite o preço do produto..."
            onChange={handleChange}
          />

        </Price>
        <DivButtons >

          <Button onClick={handleSaveHardware}>
            {editingHardware ? 'Salvar Alterações' : 'Adicionar'}
          </Button>

          <Button $variant='danger' onClick={handleModal}>Cancelar</Button>
        </DivButtons>
      </Content>
    </Container>
  )

}