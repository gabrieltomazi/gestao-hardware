

// Recebe o issue do tipo ZodIssue caso de erro
export function buildValidationErrorMessage(issues) {
  
  // Fazer um map para cada  
  const errors = issues.map(
    (item) => `${item.path.join('.')}: ${item.message}`
  )
  return errors
}

