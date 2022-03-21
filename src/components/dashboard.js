import './dashboard.css'
import image from '../learn.jpg';
import reactImg from '../Learn-Reactjs.jpeg';
import angularImg from '../download.png';
import webImg from '../Web-Blog.png'
import { useEffect, useState } from 'react';
import MediaCard from './Card';
const Dashboard = (props)=> {
    const [courses,setCourses] = useState([]);

useEffect(()=> {
getAsyncData();
},[]);

const getAsyncData = async ()=> {
    let courseData = await fetch('http://localhost:3001/courses');
    courseData = await courseData.json();
    setCourses(courseData);
}

    return (
        <div className="dashboard">
            <div className="image-container">
                <img className='image' alt = "imag" src={image}/>
            </div>
            <div>
              
                <h2 style = {{textAlign: "center"}}>Our Courses</h2>
                </div>
                 <div  className='course-card'>
            {
                courses.map(data => {
                    return (
                        <MediaCard image = {data.imgUrl} title = {data.coursename} />
                    )
                })
            }
            </div>
            </div>
        
    )
}

export default Dashboard;