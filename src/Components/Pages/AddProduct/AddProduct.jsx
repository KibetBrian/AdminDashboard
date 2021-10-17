import React from 'react'
import { useState } from 'react'
import './addProduct.scss'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import app from '../../../firebase'
import { createProduct } from '../../../Redux/apiCall'
import { useDispatch } from 'react-redux'

function AddProduct() { 

    const [inputs, setInputs] = useState({});
    const [productImage, setProductImage] = useState(null);
    const [category, setCategory] = useState([]);
    const [productImageUrl, setProductImageUrl] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e)=>
    {
        setInputs(prev =>
            {
                return {...prev, [e.target.name]:e.target.value}
            })
        }
    const toArray = (e)=>
    {
        const input = e.target.value;
        const output =input.split(',');
        setCategory(output)
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        const productImageName = new Date().getTime() + productImage.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, productImageName);
        const uploadTask = uploadBytesResumable(storageRef, productImage)

        uploadTask.on('state_changed', 
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            default: 
            break;
            }
        }, 
        (error) => {
            console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProductImageUrl(downloadURL);
            });
        }
        );
        createProduct(dispatch, {...inputs, category, productImage: productImageUrl})
        console.log({...inputs, category,productImage: productImageUrl})
    }
        
    return (
        <div className='addProduct'>
            <form onSubmit={handleSubmit} className="inputContainer">
                <label htmlFor="productName">Product Name</label>
                <input onChange={handleChange} name = "productName" type="text" />
                <label htmlFor="productPrice">Product Price</label>
                <input onChange={handleChange} name = "productPrice" type="text" />
                <label htmlFor="productDescription">Product Description</label>
                <textarea onChange={handleChange} name = "productDescription" type="text" />
                <label htmlFor="category">Category</label>
                <input onChange={toArray} name = "category" type="text" />
                <label htmlFor="productColor">Product Color</label>
                <input onChange={handleChange} name = "productColor" type="text" />
                <label htmlFor="productName">ProductSize</label>
                <input onChange={handleChange} name = "productSize" type="text" />
                <label htmlFor="productImage">Product Image</label>
                <input name = "productImage" onChange={(e)=>setProductImage(e.target.files[0])} type="file" />
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AddProduct
