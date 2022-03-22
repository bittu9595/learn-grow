import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './courseoverview.css';
const CourseOverview = (props)=> {
    const {courseid} = useParams();
    const [courseData,setCourseData] = useState({});

    useEffect(()=> {
       const getCourseData = async()=> {
        const response = await fetch(`http://localhost:3001/courses/${courseid}`);
        const data = await response.json();
        setCourseData(data);
       }
getCourseData();
    },[courseid])

    return (
        <div className="overview">
            <div>
                <h1 id="course-1">Course Overview</h1>
            </div>
            <div className="course-2">
<div classname="img-class">
<img id="ikiak" src="https://cmsbackend.verzeo.com/assets/upload/file-0-1627730517089.webp" alt="woman with laptop" loading="lazy" class="reveal-text-left active"></img>
</div>
<div className="content">
<p>
{courseData.description}
</p>


</div>
            </div>
            </div>
    )
}
export default CourseOverview;