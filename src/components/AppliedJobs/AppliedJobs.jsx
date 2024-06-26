import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import { IoIosArrowDropdown } from "react-icons/io";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if( filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if ( filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if ( filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
        
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job=> storedJobIds.includes(job.id) )
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id == id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div className="min-h-[calc(100vh-150px)]">
            <details className="dropdown">
                <summary className="btn btn-outline m-1 flex items-center justify-center">Filter <IoIosArrowDropdown/></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('all')}><a>ALL</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>REMOTE</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>ONSITE</a></li>
                </ul>
            </details>
            {/* <h2>Applied Jobs</h2> */}
            {
                displayJobs.map(job =>
                    <li className="list-none" key={job.id}>
                        {/* <img src={job.logo} alt="" />
                        <span>{job.job_title}</span>
                        <span>{job.company_name}</span> */}
                        <div className="flex justify-start bg-base-200 p-5 min mb-16">
                            <div className="hero-content min-h-min flex-col lg:flex-row">
                                <img src={job.logo} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{job.job_title}</h1>
                                    <p className="py-6">{job.company_name}</p>
                                    <div className="">
                                        <button className="btn btn-primary">{job.remote_or_onsite}</button>
                                        <button className="btn btn-primary ml-4">{job.job_type}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>)
            }

        </div>
    );
};

export default AppliedJobs;