import React from 'react'

function ProductList({products, passObjId}) {
  return (
    <>
    <div className="productsListDiv">
        {products.map((product, index) => (
            <div className="mapDiv" key={index} onClick={() => passObjId(product.id)}>
                <p className="productName">{product.productName}</p>
                <img src={product.imgUrl} alt="Product Img" />
            </div>
        ))}
      </div>
    </>
  )
}

export default ProductList;