
import { DivAction, Td, Tr } from './style'
import { Button } from '../../atoms/Button'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import formatPrice from '../../../utils/formatPrice.js'

export const TableRow = ({ item }) => {


  return (

    <Tr key={item.id}>
      <Td>{item.name}</Td>
      <Td>{item.category === 'MOTHERBOARD' ? 'Placa mãe' : item.category}</Td>
      <Td>{formatPrice(item.price)}</Td>
      <Td>
        <DivAction>

          <Button>
            <FaPen />
          </Button>

          <Button $variant='danger'>
            <FaRegTrashAlt />
          </Button>

        </DivAction>
      </Td>
    </Tr>



  )
}