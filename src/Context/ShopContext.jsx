import React, { createContext } from "react";
import all_product from "../Components/Assets/Frontend_Assets/all_product.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const contextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
