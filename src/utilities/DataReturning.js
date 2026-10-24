//   destructuring required data from items 

export const CreateItems = (items) => {
    if (!items) return [];

    if (items) {

        return items.map((item) => {
            const {
                itemId,
                title,
                additionalImages,
                categories,
                image,
                itemLocation,
                price,
                itemWebUrl,
                condition,
                seller,

            } = item;
            return {
                itemId,
                title,
                additionalImages,
                categories,
                image,
                itemLocation,
                price,
                itemWebUrl,
                condition,
                seller,
            };

        });
    }
    else {
        return [];
    }
}

export const CreateItem = (item) => {
    const {
        itemId,
        title,
        categoryPath,
        categoryId,
        image,
        description,
        additionalImages,
        itemLocation,
        price,
        itemWebUrl,
        condition,
        seller,
        color,
        size,
        material,
        pattern,
        brand,
        sizeType,
        estimatedAvailabilities
    } = item

    return {
        itemId,
        title,
        categoryPath,
        categoryId,
        image,
        additionalImages,
        itemLocation,
        description,
        price,
        itemWebUrl,
        condition,
        seller,
        color,
        size,
        material,
        pattern,
        brand,
        sizeType,
        estimatedAvailabilities
    }

}