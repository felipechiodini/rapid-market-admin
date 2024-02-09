export const OPEN = 1
export const PREPARATION = 2
export const DISPATCHED = 3
export const DELIVERED = 4
export const CANCELED = 5

export const getButton = (status) => {
  const buttonConfigs = {
    1: {
      label: 'Confirmar Pedido',
      request: orderId => `order-manager/${orderId}/confirm`,
      status: PREPARATION
    },
    2: {
      label: 'Despachar Pedido',
      request: orderId => `order-manager/${orderId}/dispatch`,
      status: DISPATCHED
    }
  }

  return buttonConfigs[status]
}
