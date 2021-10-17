import React, { useState } from 'react'
import './productDetails.scss'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

function ProductDetails() {

    const { id } = useParams();
    let product = {};
    const  products = useSelector(state=>state.products.products);
    products.forEach((eachProduct)=>
    {
        if (eachProduct._id === id)
        {
            product = eachProduct
        }
    });
    const [productName, setProductName]=useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    
    return (
        <div className='productDetails'>
            <h2 className='productDetailsTitle'>Product Details</h2>
            <div className="productDetailsContainer">
                <p className='productInfoTitle'>Product Info</p>
                <div className="productDetailsWrapper">
                    <div className="productDetailsLeft">
                        <div className="productInfoContainer"> 
                            <form>
                                <label htmlFor="productName">Product Name</label>
                                <input name = "productName" type="text" contentEditable  defaultValue={product.productName}/>
                                <label htmlFor="category">Category</label>
                                <select  name="category" id="">
                                    {product.category.map (eachCategory=>
                                        (
                                        <option value={eachCategory}>{eachCategory}</option>
                                        ))}
                                </select>
                                <label htmlFor="description">Description</label>
                                <textarea defaultValue={product.productDescription} name="description" id="" cols="30" rows="7"></textarea>
                                <button type='submit'>Update</button>
                            </form>
                        </div>        
                    </div>
                    <div className="productDetailsRight">
                      <div className="productDetailsRightWrapper">
                            <div className="top">
                                    <div className="imageContainer">
                                        <img src={product.productImage} alt="" />
                                    </div>
                                <div className="fileInputContainer">
                                        <label htmlFor="fileInput">Update Image<AttachFileIcon /> </label>
                                        <input class='fileInput' type="file" />
                                </div>
                                </div>
                                <div className="bottom">
                                    <div className="inputDetailsContainer">
                                        <label htmlFor="productPrice">Product Price</label>
                                        <input name='productPrice' type="number" defaultValue={product.productPrice} />
                                        <label htmlFor="productSize">ProductSize</label>
                                        <input name='productSize' type="text" defaultValue={43} />
                                        <label htmlFor="productInStock">ProductInStock</label>
                                        <select defaultValue={product.productInStock} name="" id="">
                                            <option value = {true}>True</option>
                                            <option value = {false}>False</option>
                                        </select>
                                    </div>
                                </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
