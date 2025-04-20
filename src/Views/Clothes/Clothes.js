
import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts, setFilteredProducts } from '../../Redux/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { closeModal, openModal } from '../../Redux/modelSlice';
import { AiOutlinePlusCircle } from "react-icons/ai";
import RightSideModal from '../../Components/Model';
import Search from '../../Components/Search';
import { useState } from 'react';
const Clothes = () => {
    const dispatch = useDispatch();
    const { productitem, loading, error, filteredProductItems } = useSelector((state) => state.products);
    const show = useSelector((state) => state.modal.showModal);
    const [selectproduct, setSelectproduct] = useState([])
    const [order, setOrder] = useState([])
    const [isOrderView, setIsOrderView] = useState(false);

    useEffect(() => {
        dispatch(getProducts(1));
    }, [dispatch])
    const handleImageClick = (product) => {
        setSelectproduct(product);
        setIsOrderView(false);
        dispatch(openModal());
    };
    const handleAddToOrder = (product) => {
        setOrder(prev => [...prev, product]);
        setSelectproduct(null);
        setIsOrderView(true);
        dispatch(openModal());
    };

    const handleDeleteOrder = (idx) => {
        const updatedOrder = order.filter((_, index) => index !== idx);
        setOrder(updatedOrder);
    }
    const handleSearch = (query) => {
        dispatch(setFilteredProducts(query));
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div className='container mt-5'>
                <Search onSearch={handleSearch} />
                <div className='row mt-4'>
                    {
                        filteredProductItems.map((product) => (
                            <div className='col-12 col-md-6 col-sm-12 col-lg-3 mb-3' key={product.id}>

                                <div className='position-relative'>
                                    <img src={product.images[0]} alt={product.title}
                                        className='img-fluid rounded product-images'
                                        onClick={() => handleImageClick(product)}
                                    />
                                    <AiOutlinePlusCircle
                                        onClick={() => handleAddToOrder(product)}
                                        className='product-plus-icon' />
                                    <span className='product-category-style'>{product.category.name}</span>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="mb-0">{product.title}</p>
                                    <p className="mb-0 fw-bold">₹{product.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <RightSideModal
                    show={show}
                    title={isOrderView ? "Your Order" : (selectproduct ? "Details" : "No Product Selected")}
                    onClose={() => dispatch(closeModal())}
                    onSave={() => {
                        alert('Save clicked!');
                        dispatch(closeModal());
                    }}
                >
                    {isOrderView ? (
                        <ul>
                            {order.map((item, idx) => (
                                <div key={idx} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                                    <img src={item.images?.[0]} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />

                                    <div className="ms-3 flex-grow-1">
                                        <h6 className="mb-1">{item.title}</h6>
                                        <p className="mb-0 text-muted">₹{item.price}</p>
                                        <button onClick={() => handleDeleteOrder(idx)}>X</button>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-sm btn-outline-secondary me-2"
                                        //   onClick={() => handleDecreaseQty(idx)}
                                        >−</button>

                                        <span>{item.quantity}</span>

                                        <button
                                        //   className="btn btn-sm btn-outline-secondary ms-2"
                                        //   onClick={() => handleIncreaseQty(idx)}
                                        >+</button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    ) : selectproduct ? (
                        <div>
                            {selectproduct?.images?.[0] && (
                                <img src={selectproduct.images[0]} alt={selectproduct.title} className='img-fluid mb-3' />
                            )}
                            <p> <strong> $ {selectproduct?.title}</strong></p>
                            <p> <strong> ${selectproduct?.price}</strong></p>
                            <p>  ${selectproduct?.description}</p>
                        </div>
                    ) : (
                        <p>No Product Selected</p>
                    )}
                </RightSideModal>

            </div>
        </>
    )
}

export default Clothes