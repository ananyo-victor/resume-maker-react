import React, { useState } from 'react';
import Preview from '../components/Preview';

function WorkExperience() {
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      Position: '',
      JobTitle: '',
      StartDate: '',
      EndDate: '',
      Current: false,
    }
  ]);

  const handleChange = (event) => {
    const { name, value, dataset } = event.target;
    const newState = workExperiences.map(item =>
      item.id === parseInt(dataset.id) ? { ...item, [name]: value } : item
    );
    setWorkExperiences(newState);
  };

  const setPresentData = (id, checked) => {
    const newState = workExperiences.map(item =>
      item.id === id ? { ...item, EndDate: checked ? 'Present' : '', Current: checked } : item
    );
    setWorkExperiences(newState);
  };

  const addField = () => {
    const newField = {
      id: workExperiences.length + 1,
      Position: '',
      JobTitle: '',
      StartDate: '',
      EndDate: '',
      Current: false,
    };
    setWorkExperiences([...workExperiences, newField]);
  };

  const removeField = (id) => {
    setWorkExperiences(workExperiences.filter(item => item.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ workExperiences });
  };

  return (
    <>
      <main className="mx-auto container lg:px-20 px-5">
        <Preview Name='Work experience' Desc='Share your job experience from latest to old' />

        <form className="w-full" onSubmit={handleSubmit} id="we">
          {workExperiences.map((workExperience) => (
            <div className='w-full px-3 my-3 rounded-xl lg:flex flex-row-reverse drop-shadow-xl shadow-xl' key={workExperience.id}>
              <div className='flex justify-end pt-3 pr-3 lg:px-3'>
                <button type="button" className='h-fit w-fit p-3 hover:scale-110 rounded-xl shadow-xl drop-shadow-xl' onClick={() => removeField(workExperience.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>

              <div className="w-full" id="LempJobDiv1">

                <div className="flex justify-center rounded-xl border-2 border-b-0 border-white lg:py-5 lg:hidden" id="sEmpDiv1">
                  <input
                    type="text"
                    name="Position"
                    id={`sPosition${workExperience.id}`}
                    placeholder="Position"
                    className="h-14 w-[500px] rounded-xl border-2 border-white pl-2 my-3 md:w-[640px] shadow-xl"
                    onChange={handleChange}
                    data-id={workExperience.id}
                    value={workExperience.Position}
                  />
                  {/* Small Screen */}
                </div>

                <div className="transparent-yellow flex justify-center rounded-xl lg:py-5 lg:hidden" id="sJobDiv1">
                  <input
                    type="text"
                    name="JobTitle"
                    id={`sJob_Title${workExperience.id}`}
                    placeholder="Job Title"
                    className="h-14 w-[500px] rounded-xl border-4 border-white pl-2 md:w-[640px] my-3 shadow-xl"
                    onChange={handleChange}
                    data-id={workExperience.id}
                    value={workExperience.JobTitle}
                  />
                  {/* Small Screen */}
                </div>

                <div className="hidden rounded-xl border2 border-white lg:my-7 lg:flex lg:justify-evenly lg:py-5" id="SempJobDiv1">
                  <div id="lEmpDiv1">
                    <label id="lempLabel1" htmlFor={`Position${workExperience.id}`} className="lg:text-xl lg:font-semibold">Position</label><br />
                    <input
                      type="text"
                      name="Position"
                      id={`lPosition${workExperience.id}`}
                      placeholder="Position"
                      className="h-14 w-[500px] rounded-xl border-2 border-white pl-2 lg:mt-3 text-lg drop-shadow-xl"
                      onChange={handleChange}
                      data-id={workExperience.id}
                      value={workExperience.Position}
                    />
                    {/* Large Screen */}
                  </div>
                  <div id="lJobDiv1">
                    <label id="ljobdivlabel1" htmlFor={`JobTitle${workExperience.id}`} className="lg:text-xl lg:font-semibold">Job Title</label><br />
                    <input
                      type="text"
                      name="JobTitle"
                      id={`lJob_Title${workExperience.id}`}
                      placeholder="Job Title"
                      className="h-14 w-[500px] rounded-xl border-4 border-white pl-2 lg:mt-3 text-lg drop-shadow-xl"
                      onChange={handleChange}
                      data-id={workExperience.id}
                      value={workExperience.JobTitle}
                    />
                    {/* Large Screen */}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-evenly rounded-2xl lg:py-4" id="StartEndDiv1">
                  <div id="StartDiv1" className='flex flex-col justify-center lg:block'>
                    <label htmlFor={`StartDate${workExperience.id}`} className="hidden lg:block text-lg lg:font-semibold py-3">Start Date</label>

                    <input
                      type="date"
                      name="StartDate"
                      id={`StartDate${workExperience.id}`}
                      placeholder="Start Date"
                      className="h-14 w-full rounded-xl border-2 border-white pl-2 md:w-[310px] lg:w-[500px] lg:text-xl my-3 drop-shadow-xl"
                      onChange={handleChange}
                      data-id={workExperience.id}
                      value={workExperience.StartDate}
                    />
                  </div>

                  <div className="flex flex-col" id="EndAllDiv1">
                    <div id="EndDiv1">
                      <label htmlFor={`EndDate${workExperience.id}`} className="hidden lg:block text-lg lg:font-semibold py-3">End Date</label>

                      <input
                        type="date"
                        name="EndDate"
                        id={`EndDate${workExperience.id}`}
                        placeholder="End Date"
                        className="h-14 w-full rounded-xl border-4 border-white pl-2 md:w-[310px] lg:w-[500px] lg:text-xl my-3 drop-shadow-xl"
                        onChange={handleChange}
                        data-id={workExperience.id}
                        value={workExperience.Current ? '' : workExperience.EndDate}
                        disabled={workExperience.Current}
                      />
                    </div>
                    <span id="EndSpan1" className="my-4 lg:mt-4 lg:my-0 flex w-[170px] justify-between md:w-[220px] lg:w-[230px]">
                      <input
                        type="checkbox"
                        name="Current"
                        id={`Current${workExperience.id}`}
                        className="rounded-xl md:w-5"
                        onChange={(e) => setPresentData(workExperience.id, e.target.checked)}
                        checked={workExperience.Current}
                      />
                      <label htmlFor={`Current${workExperience.id}`} className="md:font-semibold lg:text-lg">I currently work here</label>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </form>

        <div className="mt-3 flex items-center" id="AddBtn">
          <button type="button" className="w-fit h-fit p-2 shadow-xl drop-shadow-xl rounded-xl hover:scale-110" onClick={addField} id="addBtn1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <p className="ml-5 text-base lg:text-lg font-semibold">Add more job Experience</p>
        </div>
      </main>
    </>
  );
}

export default WorkExperience;
