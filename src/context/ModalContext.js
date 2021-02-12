import React, { createContext, useEffect, useState } from 'react';


export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idreceta, guardarIdReceta] = useState(null)


    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta

            }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;