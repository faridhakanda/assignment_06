// const fetchProductsData = async () => {
//     const products = await fetch('/data.json');
//     return products.json();
// } 
// export default fetchProductsData;

export const fetchProductsData = async() => {
    const res = await fetch('./data.json');
    if (!res.ok) {
        throw new Error("Failed to fetch products data!");
    }
    return res.json();
}
export const fetchProducts = fetchProductsData();
