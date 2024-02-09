export const OPEN = 1
export const PREPARATION = 2
export const DISPATCHED = 3
export const DELIVERED = 4
export const CANCELED = 5
export const OPEN_LABEL = 'Em Aberto'
export const PREPARATION_LABEL = 'Em Preparação'
export const DISPATCHED_LABEL = 'Despachado'
export const DELIVERED_LABEL = 'Entregue'
export const CANCELED_LABEL = 'Cancelado'

export const getButton = (status) => {
  const buttonConfigs = {
    1: {
      label: 'Confirmar Pedido',
      request: orderId => `order-manager/${orderId}/confirm`,
      status: {
        value: OPEN,
        label: OPEN_LABEL
      }
    },
    2: {
      label: 'Despachar Pedido',
      request: orderId => `order-manager/${orderId}/dispatch`,
    }
  }

  return buttonConfigs[status]
}
