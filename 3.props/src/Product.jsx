import React from 'react'

export default function Product(props) {
    const { productName, price } = props
    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>
            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {price}</div>
            </div>

        </div>
    )
}
