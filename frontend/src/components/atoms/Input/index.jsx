import { Container, InputContainer } from "./style";

export function Input({ Icon, placeholder, ...props }) {
  return (
    <Container>
      <InputContainer>
        {Icon && <Icon size={20} />}
        <input type="text" placeholder={placeholder} {...props} />
      </InputContainer>
    </Container>

  )
}

