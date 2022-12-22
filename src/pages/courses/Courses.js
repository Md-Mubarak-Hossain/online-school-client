import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div id='course' className=' p-4'>{
            <div className="w-full " >
                <div className='w-full text-center uppercase '>
                    <p className='my-5  text-warning  text-4xl font-extrabold'>Your Favourite courses</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3  w-full flex-grow card  place-Items-center" >
                        {
                            courses.map(course =>
                                <Course key={course._id}
                                    course={course}>
                                </Course>
                            )
                        }
                    </div>
                </div>
            </div>
        }
        </div >
    );
};

export default Courses;