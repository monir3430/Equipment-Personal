
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const handleAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const available = event.target.available.value;
        const lot = event.target.lot.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        console.log(name, price, available, lot, description, img)
        const addTool = {name, price, available, lot, description, img}
        


        // Post data to server-------------------------

        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTool)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Tool Added')
                event.target.reset();

            })

    }

    return (
        <section className='grid justify-center items-center'>
            <div style={{
                backgroundColor: '#d2c6c6',
                width: '300px',
                height: '470px',
            }} className='mb-10 mt-5 p-2 '>
                <h3 className='text-xl font-bold text-blue-900 p-2'>Add Product Details</h3>
                <form onSubmit={handleAddProduct}>
                    <input className='pl-2' type="text" name="name" placeholder='Tools Name' required autoComplete='off'/><br /><br />
                    <input className='pl-2' type="number" name="price" placeholder='price' required /><br /><br />
                    <input className='pl-2' type="number" name="available" placeholder='Available' required /><br /><br />
                    <input className='pl-2' type="number" name="lot" placeholder='Minimum order' /><br /><br />
                    <input className='pl-2' type="img" name="img" placeholder='Image URL' required autoComplete='off' /><br /><br />
                    <textarea className='pl-2' name="description" cols="21" rows="4" placeholder='Description'></textarea><br />
                    <input type="submit" value="Add Tool" className="btn" />
                    <ToastContainer />
                </form>
            </div>
        </section>
    );
};

export default AddProduct;