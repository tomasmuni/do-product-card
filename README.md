# DO-PRODUCT-CARD

Paquete de pruebas de despliegue en NPM

### TOMAS MUÑOZ

## EJEMPLO

```
import {ProductImage,ProductTitle,ProductButtons } from 'do-product-card'
```

```
 <ProductCard 
                            key={ product.id }
                            product={ product }
                            initialValues={{
                              count:4,
                              maxCount:10
                            }}>
                                {
                                    ( { reset,increaseBy,isMaxCountReached, count, maxCount}) => (
                                        <>
                                            <ProductImage />
                                            <ProductTitle />
                                            <ProductButtons />
                                        </>
                                    )
                                }
                            
                        </ProductCard>
```