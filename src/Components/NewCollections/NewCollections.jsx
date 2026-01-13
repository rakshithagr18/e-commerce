import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/Frontend_Assets/new_collections';
import Item from '../Item/Item'; // adjust path if needed

const NewCollections = () => {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections-row">
                {new_collection.map((item) => (
                    <div className="collection-card" key={item.id}>
                        <Item
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
