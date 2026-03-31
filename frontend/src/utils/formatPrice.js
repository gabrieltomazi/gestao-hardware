




function formatPrice(price) {

  const priceFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price)

  return priceFormated

}

export default formatPrice