import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {
    const [ userChoices, setUserChoices ] = useState(
        JSON.parse(localStorage.getItem('shoesUser')) || {onCart: [], fav: []}
        );

        const [ isFavVisible, setIsFavVisible ] = useState(false);
        const [ isCartVisible, setIsCartVisible ] = useState(false);
        const [isUserVisible, setIsUserVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem('shoesUser', JSON.stringify(userChoices))
    },[userChoices]);

    return <DataContext.Provider value={{ userChoices, setUserChoices, isFavVisible, setIsFavVisible, isCartVisible, setIsCartVisible, isUserVisible, setIsUserVisible }}>
                {children}
            </DataContext.Provider>
};