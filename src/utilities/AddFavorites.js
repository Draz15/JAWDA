import { useProduct } from "../context/ProductContext";
import { cases } from "../reducers/Cases";

export function useAddToFavorites() {
    const { dispatch, state } = useProduct()
    const { userFavorites: favorites } = state

    function addToFavorites(item) {

        const title = item?.title || "";
        const itemId = item?.itemId || "";
        const value = item?.price?.value || "";

        // check if the item exist or not on the favorites 
        let exists = favorites?.some(item => item.title == title && item?.itemId == itemId && item?.price?.value == value);

        dispatch({
            type: exists
                ? cases.REMOVE_PRODUCT_FROM_FAVORITES
                : cases.ADD_PRODUCT_TO_FAVORITES,
            payload: item,
        });
    }

    return { addToFavorites }
}
