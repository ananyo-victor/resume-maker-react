import React, { useState } from 'react';
import Preview from '../components/Preview';

function Education() {
    const [educations, setEducations] = useState([
        {
            id: 1, EName: '',
            ECity: '',
            EState: '',
            EDegree: '',
            EField: '',
            EPassingYear: ''
        }
    ]);

    const handleChange = (event) => {
        const { name, value, dataset } = event.target;
        const newState = educations.map(item =>
            item.id === parseInt(dataset.id) ? { ...item, [name]: value } : item
        );
        setEducations(newState);
    };

    const addField = () => {
        const newField = {
            id: educations.length + 1,
            EName: '',
            ECity: '',
            EState: '',
            EDegree: '',
            EField: '',
            EPassingYear: ''
        };
        setEducations([...educations, newField]);
    };

    const removeField = (id) => {
        setEducations(educations.filter(item => item.id !== id));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ educations });
    };

    return (
        <>
            <main id="main" className="mx-auto max-w-[590px] md:max-w-[680px] lg:max-w-[1200px]">
                <Preview Name="Educations" Desc="Here add your academic details" />

                <form onSubmit={handleSubmit} className="mt-2 lg:mt-10 w-full border rounded-xl shadow-2xl drop-shadow-2xl">
                    {educations.map((education) => (
                        <div key={education.id}>
                            <div className='lg:hidden px-3'>
                                <div className='flex justify-end pt-2 pr-2'>
                                    <span className='h-fit w-fit p-1 rounded-xl shadow-xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg></span>
                                </div>
                                <div className="my-4 flex justify-center">
                                    <input
                                        type="text"
                                        name="EName"
                                        data-id={education.id}
                                        placeholder="Name"
                                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl"
                                        onChange={handleChange}
                                        value={education.EName}
                                    />
                                </div>
                                <div className="my-4 flex justify-center">
                                    <input
                                        type="text"
                                        name="ECity"
                                        data-id={education.id}
                                        placeholder="City"
                                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl"
                                        onChange={handleChange}
                                        value={education.ECity}
                                    />
                                </div>
                                <div className="my-4 flex justify-center">
                                    <input
                                        type="text"
                                        name="EState"
                                        data-id={education.id}
                                        placeholder="State"
                                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl"
                                        onChange={handleChange}
                                        value={education.EState}
                                    />
                                </div>
                                <div className="my-4 flex justify-center">
                                    <select
                                        name="EDegree"
                                        data-id={education.id}
                                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 bg-white md:w-[640px] shadow-xl"
                                        onChange={handleChange}
                                        value={education.EDegree}
                                    >
                                        <option value="Degree">Degree</option>
                                        <option value="HighSchool">High School</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Bachelors">Bachelors</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </div>
                                <div className="my-4 flex justify-center">
                                    <input
                                        type="text"
                                        name="EField"
                                        data-id={education.id}
                                        placeholder="Field of Study"
                                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl"
                                        onChange={handleChange}
                                        value={education.EField}
                                    />
                                </div>
                                <div className="my-4 flex justify-center">
                                    <input
                                        type="text"
                                        name="EPassingYear"
                                        data-id={education.id}
                                        placeholder="Passing Year"
                                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl"
                                        onChange={handleChange}
                                        value={education.EPassingYear}
                                    />
                                </div>
                            </div>

                            {/* Large Screen */}
                            <div className="justify-evenly lg:flex lg:flex-col mb-5 hidden">
                                <button className='flex justify-end pt-5 pr-5' onClick={()=>removeField(education.id)}>
                                    <span className='h-fit w-fit p-3 rounded-xl shadow-xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg></span>
                                </button>
                                <div className="lg:flex lg:justify-evenly">
                                    <div className="lg:flex lg:flex-col">
                                        <label htmlFor={`lName${education.id}`} className="lg:text-2xl lg:font-semibold">Name</label>
                                        <input
                                            type="text"
                                            name="EName"
                                            data-id={education.id}
                                            placeholder="Name"
                                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-14 mt-3 text-lg shadow-xl"
                                            onChange={handleChange}
                                            value={education.EName}
                                        />
                                    </div>
                                    <div className="lg:flex lg:flex-col">
                                        <label htmlFor={`lCity${education.id}`} className="lg:text-2xl lg:font-semibold">City</label>
                                        <input
                                            type="text"
                                            name="ECity"
                                            data-id={education.id}
                                            placeholder="City"
                                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-14 mt-3 text-lg shadow-xl"
                                            onChange={handleChange}
                                            value={education.ECity}
                                        />
                                    </div>
                                </div>
                                <div className="lg:mt-5 lg:flex lg:justify-evenly">
                                    <div className="lg:flex lg:flex-col">
                                        <label htmlFor={`lState${education.id}`} className="lg:text-2xl lg:font-semibold">State</label>
                                        <input
                                            type="text"
                                            name="EState"
                                            data-id={education.id}
                                            placeholder="State"
                                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-14 mt-3 text-lg shadow-xl"
                                            onChange={handleChange}
                                            value={education.EState}
                                        />
                                    </div>
                                    <div className="lg:flex lg:flex-col">
                                        <label htmlFor={`lDegree${education.id}`} className="lg:text-2xl lg:font-semibold">Degree</label>
                                        <select
                                            name="EDegree"
                                            data-id={education.id}
                                            className="w-[500px] border-2 border-white rounded-xl px-2 h-16 lg:mt-3 lg:h-16 lg:text-xl bg-white shadow-xl"
                                            onChange={handleChange}
                                            value={education.EDegree}
                                        >
                                            <option value="Degree">Degree</option>
                                            <option value="HighSchool">High School</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Bachelors">Bachelors</option>
                                            <option value="Masters">Masters</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="lg:mt-5 lg:flex lg:justify-evenly">
                                    <div className="lg:flex lg:flex-col">
                                        <label htmlFor={`lField-Of-Study${education.id}`} className="lg:text-2xl lg:font-semibold">Field Of Study</label>
                                        <input
                                            type="text"
                                            name="EField"
                                            data-id={education.id}
                                            placeholder="Field Of Study"
                                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-14 mt-3 text-lg shadow-xl"
                                            onChange={handleChange}
                                            value={education.EField}
                                        />
                                    </div>
                                    <div className="lg:flex lg:flex-col">
                                        <label htmlFor={`lPassing-Year${education.id}`} className="lg:text-2xl lg:font-semibold">Passing Year</label>
                                        <input
                                            type="text"
                                            name="EPassingYear"
                                            data-id={education.id}
                                            placeholder="Passing Year"
                                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-14 mt-3 text-lg shadow-xl"
                                            onChange={handleChange}
                                            value={education.EPassingYear}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </form>
                <div className="mt-3 flex ml-5">
                    <button className="rounded-xl w-fit h-fit drop-shadow-2xl shadow-2xl" onClick={addField}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <p className="md:text-xl md:font-semibold lg:text-xl ml-4">Add another qualification</p>
                </div>
            </main>
        </>
    );
}

export default Education;
