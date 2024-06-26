import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";


const CategoryList = () => {
    const [jobs, setJobs] = useState([]);
    // const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-extrabold text-center mt-32'>Job Category List</h2>
            <p className='text-lg text-center mt-4 mb-6'>Explore thousands of job opportunities with all the information you need. Its your future.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
                {
                    jobs.map(j => <CategoryCard key={j.id} c={j}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryList;