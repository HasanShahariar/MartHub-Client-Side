import React, { useRef } from 'react';

const AddProduct = () => {
    const NameRef = useRef()
    const DescriptionRef = useRef()
    const PriceRef = useRef()
    const imgRef = useRef()

    const handleAddProduct = (e) => {
        console.log("in order place handler");

        const Name = NameRef.current.value;
        const Description = DescriptionRef.current.value;
        const Price = PriceRef.current.value;
        const img = imgRef.current.value;
        const product = { Name, Description, Price, img }
        console.log(product);

        fetch('https://pure-spire-90343.herokuapp.com/explore', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Successfully added", data.insertedId)
                    e.target.reset();
                }
                else {
                    console.log("data not inserted");
                }
            })
        e.preventDefault()
    }
    return (
        <div className="container text-start p-4">
            <form onSubmit={handleAddProduct} className="w-50">
                <div class="form-group mb-4">
                    <label >Product Name </label>
                    <input ref={NameRef} type="text" class="form-control"  placeholder="Product Name"/>
                </div>
                <div class="form-group mb-4">
                    <label className="mb-3">Description</label>
                    <textarea ref={DescriptionRef} type="text" class="form-control"  placeholder="Description"/>
                </div>
                <div class="form-group mb-4">
                    <label >Price</label>
                    <input ref={PriceRef} type="number" class="form-control"  placeholder="Product Price"/>
                </div>
                <div class="form-group mb-4">
                    <label >Image</label>
                    <input ref={imgRef} type="text" class="form-control"  placeholder="Product Image"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
       
        </div >
    );
};

export default AddProduct;