import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product1 } from '../data/products';



describe('ProductImage',() => {

    test("debe mostrar el componente con la imagen", () => {
        const wrapper = renderer.create(
            <ProductImage img={product1.img} className='custom-class'></ProductImage>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test("debe mostrar el componente con la imagen", () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}> 
            {
                () => (
                    <ProductImage img={product1.img}></ProductImage>
                )

            } 
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

})