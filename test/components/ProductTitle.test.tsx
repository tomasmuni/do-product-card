import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product2 } from '../data/products';



describe('ProductTitle',() => {

    test("debe mostrar el componente con el titulos", () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom title' className='custom-class'></ProductTitle>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test("debe mostrar el componente con el nombre del producto", () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}> 
            {
                () => (
                    <ProductTitle></ProductTitle>
                )

            } 
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

})