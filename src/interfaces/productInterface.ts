interface IProduct {
    name: string,
    price: number,
    categories: string[]
    created: Date
}

interface INProduct {
    name: string,
    price: number,
    currency: string,
    categories: string[]
    created: Date
}
   
export { IProduct, INProduct }