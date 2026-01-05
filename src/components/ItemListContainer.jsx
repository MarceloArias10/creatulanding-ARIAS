import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const products = [
        { id: 1, name: "Auriculares Pro", price: "$299", category: "Audio", stock: 15 },
        { id: 2, name: "SmartWatch V2", price: "$199", category: "Wearables", stock: 8 },
        { id: 3, name: "Laptop Ultra", price: "$1299", category: "Computers", stock: 5 },
        { id: 4, name: "Cámara 4K", price: "$899", category: "Photo", stock: 3 }
    ];

    return (
        <section className="item-list-container container">
            <div className="greeting-card">
                <h1 className="greeting-text title-gradient">{greeting}</h1>
                <p className="greeting-subtext">Explora nuestra colección premium de tecnología</p>
            </div>

            <div className="catalog-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-placeholder">
                            <span>{product.category}</span>
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                            <button className="add-btn">Ver Detalles</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ItemListContainer;
