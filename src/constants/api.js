export const GET_ALL_PRODUCTS_PATH = process.env.NODE_ENV === "development" ? "http://localhost:8000/" : "the url for when the server is in the cloud";
export const GET_PRODUCT_BY_ID = process.env.NODE_ENV === "development" ? "http://localhost:8000/" + "product/" : "the url for when the server is in the cloud";