import React, { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/product.interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args: ProductCardHandlers) => React.ReactElement
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductCard = ({ children, product, className, style, onChange, value , initialValues}: Props ) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children({
                    count: counter,
                    product,
                    isMaxCountReached,
                    increaseBy,
                    reset,
                    maxCount: initialValues?.count
                }) }
            </div>
        </Provider>
    )
}