/* eslint-disable @typescript-eslint/no-empty-function */
export const formatPrice = (price:number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price / 100)
}

export const getUniqueValues = (allProducts:any ,s:string) => {
    let unique = allProducts.map((item:any) => item[s])
    if (s === 'colors') {
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}