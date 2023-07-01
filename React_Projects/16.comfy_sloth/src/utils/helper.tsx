/* eslint-disable @typescript-eslint/no-empty-function */
export const formatPrice = (price:number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price / 100)
}

export const getUniqueValues = () => {}