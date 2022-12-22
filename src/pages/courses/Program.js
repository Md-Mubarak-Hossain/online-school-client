import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FcDownload } from 'react-icons/fc';
import developer from '../../components/flags/images.webp'
const ref = createRef();
const Program = () => {
    const course = useLoaderData();
    console.log(course);
    const { description, image, name, title, free, medium, premium } = course;
    console.log(free)


    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className='w-full flex mx-auto px-3 lg:w-11/12 my-5 py-5 uppercase text-xl lg:text-4xl lg:font-extrabold lg:leading-6 text-warning'>
                    <span className='text-center px-2'> Welcome </span>
                    <img className='w-12 h-12 rounded-full  block ' src={image} alt={name} />
                    <span className='px-3'>{title} </span>
                </div>
                <div className=" w-full  ">
                    <figure><img src={developer} alt={name} className='w-screen' /></figure>
                    <div className="card-body ">
                        <div className='lg:w-11/12 mx-auto'>
                            <div className=' text-justify' ref={ref}>
                                <h2 className="card-title">
                                    {title}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{description}</p>
                            </div>
                            {/* React to pdf downloader  */}
                            <Pdf targetRef={ref} filename={`${title}.pdf`}>
                                {({ toPdf }) => <button className='badge badge-outline  btn-outline btn-warning w-40 p-3' onClick={toPdf}><FcDownload></FcDownload>Download Pdf</button>}
                            </Pdf>
                        </div>
                        <div className="card-actions  lg:justify-end w-full">
                            {
                                <div className='lg:flex w-full mx-auto'>
                                    <div className="card lg:w-80 p-2 m-3  bg-success shadow-xl mx-auto">
                                        <div className="card-body">
                                            <h2 className="card-title">Free!</h2>

                                            <figure><img src={image} alt={name} /></figure>
                                            {
                                                free.map(f => <li>{f}</li>)
                                            }
                                            <div className="card-actions lg:justify-end">
                                                <Link to='/checkout'><button className="badge badge-outline  btn-outline btn-secondary w-40 p-3">Enroll Now</button></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card lg:w-80 p-2 m-3  bg-warning  shadow-xl mx-auto">

                                        <div className="card-body">
                                            <h2 className="card-title">Pro Medium!!</h2>

                                            <figure><img src={image} alt={name} /></figure>
                                            {
                                                medium.map(m => <li>{m}</li>)
                                            }
                                            <div className="card-actions justify-end">
                                                <Link to='/checkout'><button className="badge badge-outline  btn-outline btn-primary w-40 p-3">Enroll Now</button></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card lg:w-80 p-2 m-3  bg-primary mx-auto">
                                        <div className="card-body">
                                            <h2 className="card-title">Pro Premium!!!</h2>

                                            <figure><img src={image} alt={name} /></figure>
                                            {
                                                premium.map(p => <li>{p}</li>)
                                            }
                                            <div className="card-actions justify-end">
                                                <Link to='/checkout'><button className="badge badge-outline  btn-outline btn-warning w-40 p-3">Enroll Now</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div >
                    <div className='w-2/12 mx-auto mb-5 pb-5'><Link to='/checkout'><button className=" badge badge-outline btn-outline btn-warning w-40 p-3 ">Get Premium access</button></Link></div>
                </div>
            </div >
        </div >
    );
};

export default Program;