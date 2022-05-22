import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const handleAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const author = event.target.author.value;
        const publisher = event.target.publisher.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const stock = event.target.stock.value;
        console.log(name, email, price, author, publisher, img, description, stock)
        const bookInfo = { name, email, price, author, publisher, img, description, stock}


           // Post data to server

    fetch('https://afternoon-lake-29194.herokuapp.com/bookInfo', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(bookInfo)
    })
    .then(res=>res.json())
    .then(data=>{ console.log(data)
        event.target.reset();
        toast('Data successfully added')
        
    })

    }

    return (
        <div className='addproduct'>
            <h3>Add Product Details</h3>
            <form onSubmit={handleAddProduct}>
                <input type="text" name="name" placeholder='Book Name' /><br /><br />
                <input type="text" name="author" placeholder='Author' /><br /><br />
                <input type="text" name="publisher" placeholder='Publisher' /><br /><br />
                <input type="number" name="price" placeholder='price' /><br /><br />
                <input type="email" name="email" placeholder='Admin Email' /><br /><br />
                <input type="url" name="img" placeholder='imageUrl' /><br /><br />
                <input type="number" name="stock" placeholder='Stock' /><br /><br />
                <textarea name="description" cols="21" rows="6" placeholder='Description'></textarea><br /><br />
                <input type="submit" value="Add Book" />
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddProduct;