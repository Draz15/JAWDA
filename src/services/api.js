import axios from 'axios';
///////// create the base api instance /////////////


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

// check if the accessToken exist or not then sending it with each request 

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

// if the access token exist it will return res and if not it will return error

api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);


export const productService = {

    // fetch the products  

    async getAllProducts() {
        try {
            const res = await api.get("/search", {
                params: {
                    category_id: "11450"
                }

            });
            return res;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Could not fetch products");
        }
    },

    // fetch the sunglasses

    async getSunglasses() {
        try {
            const res = await api.get("/search", {
                params: {
                    category_id: "79720"
                }
            });
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch sunglasses");
        }
    },

    // fetch the jewelries

    async getJewelries() {
        try {
            const res = await api.get("/search", {
                params: {
                    category_id: "10968"
                }
            });
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch jewelries");
        }
    },

    // fetch the wallets

    async getWallets() {
        try {
            const res = await api.get("/search", {
                params: {
                    category_id: "2996"
                }
            });
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch wallets");
        }
    },

    // fetch the belts  

    async getBelts() {
        try {
            const res = await api.get("/search", {
                params: {
                    category_id: "2993"
                }
            });
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch belts");
        }
    },

    // fetch the watches  

    async getWatches() {
        try {
            const res = await api.get("/search", {
                params: {
                    category_id: "260324"
                }
            });
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch Watches");
        }
    },

    // fetch the handBags 

    async getHandbags() {
        try {
            const res = await api.get("/search", {
                params: {
                    category_id: "169291"
                }
            });
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch handbags");
        }
    },

    async getRelatedProducts(category_id) {
        try {
            const res = await api.get("/products/relatedProducts", {
               params: {
                    category_id
                }
            });
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch related products");
        }
    },

    async getProductById(itemId) {
        try {
            const res = await api.get(`/products/${encodeURIComponent(itemId)}`);
            return res;
        } catch (error) {
            throw new Error(error.response.data.message || "could not fetch the item required");
        }
    }

}