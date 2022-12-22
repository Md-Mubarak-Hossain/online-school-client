import React from 'react';
import bkash from '../pages/courses/PaymentLogo/bkash.png';
import rocket from '../pages/courses/PaymentLogo/rocket.png';
import { BiPhoneCall } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    const { image, name, title } = course;

    return (
        <div className='bg-white'>
            <div className='w-full text-center '>
                <h2 className='text-3xl font-bold text-warning'>Pay now</h2>
            </div>
            <div className='p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 h-screen'>
                <div className='px-4'>
                    <div className="justify-center items-center my-5 pb-10">
                        <div className='grid grid-cols-1'>
                            <div>
                                <figure>
                                    <img src={image} alt="img" className="rounded-xl w-full" />
                                </figure>
                            </div>
                            <div>
                                <p className='text-xl font-semibold text-primary'>Course: {title}</p>
                                <h2 className="text-xl font-semibold">{name}</h2>
                                <h2 className="text-xl font-semibold">Course fee:$50</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    <div className='py-16 flex flex-col justify-center items-center place-items-center rounded-xl'>
                        {/* bkash account */}
                        <label htmlFor="bkashPay" className="bg-transparent my-5">
                            <img src={bkash} alt="img" className='btn btn-outline btn-secondary  h-32 w-72' />
                        </label>
                        <input type="checkbox" id="bkashPay" className="modal-toggle" />
                        <form className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-pink-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={bkash} alt=" img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-pink-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $50</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your bkash account number</h2>
                                    <p className='text-black-600'>
                                        <input type="text" name='number' placeholder="e.g 01xxxxxxxxx" className="w-48 h-8  bg-white rounded pl-2" />
                                    </p>
                                </div>
                                <div className='px-2'>
                                    <div className="flex justify-center place-items-center">
                                        <label className="label cursor-pointer ">
                                            <input type="checkbox" required className=" checkbox-white bg-white checkbox-xs" />
                                        </label>
                                        <p className="text-white text-xs">I agree to the<span className="btn btn-link lowercase text-xs text-white">terms & conditions!!!</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center place-items-center text-center">
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0"
                                    >procced</label>
                                    <label htmlFor="bkashPay" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-pink-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </form>
                        {/* rocket account */}
                        <label htmlFor="rocketPay" className="bg-transparent">
                            <img src={rocket} alt="img" className='btn btn-outline  btn-primary h-32 w-72' />
                        </label>
                        <input type="checkbox" id="rocketPay" className="modal-toggle" />
                        <div className="modal  sm:modal-middle h-screen right-10  ">
                            <div className="w-80  bg-fuchsia-600 pb-5">
                                <h3 className="font-bold text-lg py-2 ">
                                    <img src={rocket} alt=" img" className='bg-white w-full h-24' />
                                </h3>
                                <div className='p-5'>
                                    <div className='card text-white shadow-fuchsia-900 shadow-2xl p-2 text-center'>
                                        <h2>Merchant:{Math.floor(Math.random() * 100)}{(Math.random() + 1).toString(36).substring(7)}</h2>
                                        <h2>Invoice no:{Math.random()}</h2>
                                        <h2>Amount: $50</h2>
                                    </div>
                                </div>
                                <div className='card text-white text-center w-full'>
                                    <h2 className='pb-4'>Your rocket account number</h2>
                                    <p>
                                        <input type="text" placeholder="e.g 01xxxxxxxxx" className="w-48 h-8  bg-white rounded pl-2" />
                                    </p>
                                </div>
                                <div className='px-2'>
                                    <div className="flex justify-center place-items-center">
                                        <label className="label cursor-pointer ">
                                            <input type="checkbox" required className=" checkbox-white bg-white checkbox-xs" />
                                        </label>
                                        <p className="text-white text-xs">I agree to the<span className="btn btn-link lowercase text-xs text-white">terms & conditions!!!</span></p>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center place-items-center text-center">
                                    <label className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-fuchsia-900 rounded-0">procced</label>
                                    <label htmlFor="rocketPay" className="w-24 mx-1 px-5 text-xs shadow-xl py-2 text-white bg-fuchsia-900 rounded-0">close</label>
                                </div>
                                <div className='w-full py-5'>
                                    <h2 className='flex justify-center items-center place-items-center'><p><BiPhoneCall></BiPhoneCall></p><p>16247</p></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Checkout;