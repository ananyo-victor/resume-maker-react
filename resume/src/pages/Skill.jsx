import React, { useState, useEffect, forwardRef, useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import Preview from '../components/Preview';

const Skill = forwardRef(({ formRef }, ref) => {
  const user = Cookies.get('user');
  const [skills, setSkills] = useState([{ _id: '', id: 1, name: '', level: '' }]);
  const { setButton } = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value, dataset } = event.target;
    const newState = skills.map(item =>
      item.id === parseInt(dataset.id) ? { ...item, [name]: value } : item
    );
    setSkills(newState);
  };

  const addField = () => {
    const newField = {
      id: skills.length + 1,
      name: '',
      level: ''
    };
    setSkills([...skills, newField]);
  };

  const removeField = (id) => {
    setSkills(skills.filter(item => item.id !== id));
  };
  const fetchData = async () => {
    try {
      const data = await axios.get(`http://localhost:3001/resume/receive`);
      // console.log(data);
      // console.log(user);

      for (let i in data.data) {
        if (user === data.data[i]._id) {
          console.log("matched ");
          if (data.data[i].skills[0]._id) {
            setSkills(data.data[i].skills.map(skill => ({
              _id: skill._id ?? "",
              id: skill.id ?? "",
              name: skill.name ?? "",
              level: skill.level ?? ""
            })));
          }
          else {
            setSkills(skills.map(skill => ({
              _id: skill._id ?? "",
              id: skill.id ?? "",
              name: skill.name ?? "",
              level: skill.level ?? ""
            })));
          }
        }
      }

      setIsLoaded(true); // Mark as loaded
    } catch (error) {
      console.error('Error loading work experiences:', error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    for (const item of skills) {
      try {
        // console.log(item.Company);
        if (item._id) {
          console.log('put');
          // If the item has an _id, it's an existing item and should be updated
          await axios.put(`http://localhost:3001/resume/skills/${item._id}`, item);
        } else {
          console.log('post');
          console.log(item);
          await axios.post(`http://localhost:3001/resume/upload/skills/${user}`, item,
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
      <main className="mx-auto max-w-screen md:max-w-[680px] lg:max-w-[1200px]">
        <Preview Name='Skills' Desc='Add your top skills here' />

        <form id="we" className="flex w-full flex-col px-2" onSubmit={handleSubmit} ref={formRef}>
          {skills.map((skill) => (
            <div key={skill.id}>

              {/* Small Screen */}
              <div id={`sdiv${skill.id}`} className="flex mt-5 lg:hidden rounded-xl border-2 border-white w-full shadow-xl">
                <div className="flex flex-col w-full py-5 pl-3" id={`sdiv${skill.id}_1`}>
                  <div className="w-full" id="sdiv1_1_1">
                    <label
                      htmlFor={`Skill${skill.id}`}
                      className="text-xl font-semibold"
                      id={`sskilllabel${skill.id}`}
                      data-id={skill.id}
                    >
                      Skill
                    </label><br />
                    <input
                      id={`sskillinput${skill.id}`}
                      type="text"
                      name="name"
                      value={skill.name}
                      data-id={skill.id}
                      onChange={handleChange}
                      className="h-14 border border-white rounded-xl pl-2 text-gray-400 md:w-[580px] mt-3 w-full shadow-xl"
                    />
                  </div>

                  <div id="sdiv1-1-2" className="mt-4 w-full">
                    <label
                      id={`slevellabel${skill.id}`}
                      htmlFor={`Level${skill.id}`}
                      className="text-xl font-semibold"
                    >
                      Level
                    </label><br />
                    <select
                      name="level"
                      id={`sselectlevel${skill.id}`}
                      value={skill.level}
                      data-id={skill.id}
                      onChange={handleChange}
                      className="h-14 border border-white rounded-xl mt-3 w-full shadow-xl"
                    >
                      <option id={`soption${skill.id}_1`} value="default" className="text-base">Options</option>
                      <option id={`soption${skill.id}_2`} value="high" className="text-base">Expert</option>
                      <option id={`soption${skill.id}_3`} value="medium" className="text-base">Intermediate</option>
                      <option id={`soption${skill.id}_4`} value="low" className="text-base">Beginner</option>
                    </select>
                  </div>
                </div>

                <div id={`sdiv${skill.id}_2`} className='flex items-center mx-3'>
                  <button type="button" className='h-fit w-fit p-2 shadow-xl rounded-xl' onClick={() => removeField(skill.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <!-- Small Screen --> */}

              {/* Large Screen */}
              <div id="ldiv1" className="lg:flex justify-evenly mt-5 py-5 hidden rounded-xl border-2 border-white drop-shadow-2xl bg-white">
                <div id="ldiv1_1" className="mt-5">
                  <label
                    id={`lskilllabel${skill.id}`}
                    htmlFor={`Skill${skill.id}`}
                    className="text-xl font-semibold h-fit w-fit py-1 px-2 shadow-xl bg-white rounded-xl"
                  >
                    Skill
                  </label><br />
                  <input
                    type="text"
                    id={`lskillinput${skill.id}`}
                    name="name"
                    value={skill.name}
                    placeholder='Enter your skill here'
                    data-id={skill.id}
                    onChange={handleChange}
                    className="h-14 w-[450px] border border-white rounded-xl pl-2 my-5 text-lg drop-shadow-2xl shadow-2xl"
                  />
                </div>
                <div id="ldiv1_2" className="mt-4">
                  <label
                    id={`llevellabel${skill.id}`}
                    htmlFor={`Level${skill.id}`}
                    className="text-xl font-semibold h-fit w-fit py-1 px-2 shadow-xl bg-white rounded-xl"
                  >
                    Level
                  </label><br />
                  <select
                    name="level"
                    id={`lselectlevel${skill.id}`}
                    value={skill.level}
                    data-id={skill.id}
                    onChange={handleChange}
                    className="h-14 w-[450px] border border-white rounded-xl pl-2 my-5 text-lg shadow-2xl drop-shadow-2xl"
                  >
                    <option id={`loption${skill.id}_1`} value="default" className="text-base">Options</option>
                    <option id={`loption${skill.id}_2`} value="high" className="text-base">Expert</option>
                    <option id={`loption${skill.id}_3`} value="medium" className="text-base">Intermediate</option>
                    <option id={`loption${skill.id}_4`} value="low" className="text-base">Beginner</option>
                  </select>
                </div>
                <div id={`ldiv${skill.id}_3`} className="w-20 flex justify-center items-center">
                  <button type="button" id={`lbutton${skill.id}`} className="h-fit w-fit p-3 shadow-xl rounded-xl hover:scale-110" onClick={() => removeField(skill.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <!-- Large Screen --> */}
            </div>
          ))}
          <div id="AddBtn" className="mt-9 mb-5 flex items-center">
            <button type="button" className="w-fit h-fit p-2 rounded-xl shadow-xl hover:scale-110" onClick={addField}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <p className="ml-5 text-lg font-semibold lg:text-xl">Add another skill</p>
          </div>
        </form>
        <div className="h-24 mt-5"></div>
      </main>
    </>
  );
})

export default Skill;
