import React, { useState, useEffect, forwardRef, useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import Preview from '../components/Preview';

const WorkExperience = forwardRef(({ formRef }, ref) => {
  const user = Cookies.get('user');
  const { setButton } = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [workExperience, setWorkExperience] = useState([
    {
      _id: "",
      id: 1, // Unique ID using timestamp
      Position: "",
      Company: "",
      StartDate: "",
      EndDate: "",
      Current: false,
    }
  ]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Only log inputs if they are loaded
    if (isLoaded) {
      console.log("Inputs loaded:", workExperience);
      setButton(false);
      // sendToBackend(); // Call backend after inputs are updated
    }
  }, [workExperience, isLoaded]);

  const fetchData = async () => {
    try {
      const data = await axios.get(`http://localhost:3001/resume/receive`);
      console.log(data);
      // console.log(user);

      for (let i in data.data) {
        if (user === data.data[i]._id) {
          console.log("matched");
          if (data.data[i].workExperience[0]._id) {
            setWorkExperience(data.data[i].workExperience.map(work => ({
              _id: work._id ?? "",
              id: work.id ?? "",
              Position: work.Position ?? "",
              Company: work.Company ?? "",
              StartDate: work.StartDate ?? "",
              EndDate: work.EndDate ?? "",
              Current: work.Current ?? ""
            })));
            break;
          }
          else {
            setWorkExperience(workExperience.map(work => ({
              _id: work._id ?? "",
              id: work.id ?? "",
              Position: work.Position ?? "",
              Company: work.Company ?? "",
              StartDate: work.StartDate ?? "",
              EndDate: work.EndDate ?? "",
              Current: work.Current ?? ""
            })));
          }
        }
      }

      setIsLoaded(true); // Mark as loaded
      setError()
      setSuccess()
    } catch (error) {
      console.error('Error loading work experiences:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value, dataset } = event.target; // Get field name and value
    const id = parseInt(dataset.id); // Convert dataset id to integer
    setWorkExperience((prevExperiences) =>
      prevExperiences.map((item) =>
        item.id === id ? { ...item, [name]: value } : item // Update only the matching item
      )
    );
  };

  const setPresentData = (id, checked) => {
    const newState = workExperience.map(item =>
      item.id === id ? { ...item, EndDate: checked ? 'Present' : '', Current: checked } : item
    );
    setWorkExperience(newState);
  };

  const removeField = (id) => {
    setWorkExperience(workExperience.filter(item => item.id !== id));
  };

  const addField = () => {
    const newId = workExperience.length ? workExperience[workExperience.length - 1].id + 1 : 1;
    setWorkExperience([...workExperience, { id: newId, Position: '', Company: '', StartDate: '', EndDate: '', Current: false }]);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("the length is" + workExperience.length);

    for (const item of workExperience) {
      try {
        // console.log(item.Company);
        if (item._id) {
          console.log('put');
          // If the item has an _id, it's an existing item and should be updated
          await axios.put(`http://localhost:3001/resume/workExperiences/${item._id}`, item);
        } else {
          console.log('post');
          console.log(item);
          await axios.post(`http://localhost:3001/resume/upload/workExperiences/${user}`, item,
          ).then(response => {
            console.log('Data saved successfully:', response.data);
          });
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Error Status:', error.response.status);
          console.error('Error Data:', error.response.data);
          console.error('Error Headers:', error.response.headers);
        } else if (error.request) {
          // Request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request
          console.error('Error Message:', error.message);
        }
        console.error('Request Config:', error.config);
      }
    }
  };

  return (
    <>
      <main className="mx-auto container lg:px-20 px-5">
        <Preview Name='Work experience' Desc='Share your job experience from latest to old' />

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form className="w-full" onSubmit={handleSubmit} id="we" ref={formRef}>
          {workExperience.map((workExperience) => (
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
                    name="Company"
                    id={`sComapny${workExperience.id}`}
                    placeholder="Company"
                    className="h-14 w-[500px] rounded-xl border-4 border-white pl-2 md:w-[640px] my-3 shadow-xl"
                    onChange={handleChange}
                    data-id={workExperience.id}
                    value={workExperience.Company}
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
                    <label id="ljobdivlabel1" htmlFor={`Company${workExperience.id}`} className="lg:text-xl lg:font-semibold">Company</label><br />
                    <input
                      type="text"
                      name="Company"
                      id={`lComapny${workExperience.id}`}
                      placeholder="Company"
                      className="h-14 w-[500px] rounded-xl border-4 border-white pl-2 lg:mt-3 text-lg drop-shadow-xl"
                      onChange={handleChange}
                      data-id={workExperience.id}
                      value={workExperience.Company}
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
          {/* <button type="submit" className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-lg">Save Work Experiences</button> */}
        </form>

        <div className="mt-3 flex items-center" id="AddBtn">
          <button type="button" className='h-fit w-fit p-3 hover:scale-110 rounded-xl shadow-xl drop-shadow-xl' onClick={addField}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </button>
          <p className="px-2 text-lg">Add more</p>
        </div>
      </main>
    </>
  );
})

export default WorkExperience;
