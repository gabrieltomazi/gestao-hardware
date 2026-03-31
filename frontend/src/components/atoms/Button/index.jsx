import { StyledButton } from "./style"

export const Button = ({ children, $variant, ...props }) => {
  return (
    <StyledButton {...props} $variant={$variant}>{children}</StyledButton>
  )
}
