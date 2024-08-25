import React, { useState } from 'react';
import Preview from '../components/Preview';

function Achievement() {
  const [achievements, setAchievements] = useState([{ id: 1, name: '' }]);
  const [hobbies, setHobbies] = useState([{ id: 1, name: '' }]);
  const [certificates, setCertificates] = useState([{ id: 1, name: '' }]);
  const [projects, setProjects] = useState([{ id: 1, name: '' }]);

  const handleChange = (event, setState, state) => {
    const { value, dataset } = event.target;
    const newState = state.map(item =>
      item.id === parseInt(dataset.id) ? { ...item, name: value } : item
    );
    setState(newState);
  }

  const addField = (setState, state) => {
    const newField = { id: state.length + 1, name: '' };
    setState([...state, newField]);
  }

  const removeField = (setState, state, id) => {
    setState(state.filter(item => item.id !== id));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ achievements, hobbies, certificates, projects });
  }

  return (
    <>
      <main className=" mx-auto max-w-screen md:max-w-[680px] lg:max-w-[1200px] px-3">
        <Preview />

        <form className="w-full" onSubmit={handleSubmit}>
          {/* Achievements */}
          <div className="border-4 border-white rounded-xl transparent-yellow mt-10 px-2 lg:pl-5 drop-shadow-xl shadow-xl"> 
            <div className='flex justify-center md:block'>
              <span className="bg-white w-fit h-fit p-2 flex justify-center items-center mt-5 rounded-xl">
                <p className="text-lg font-bold lg:text-2xl">Achievement</p>
              </span>
            </div>
            <div className="lg:mt-10 w-full lg:w-[900px]">
              {achievements.map((achievement, index) => (
                <div className="mt-5 flex" key={achievement.id}>
                  <input
                    type="text"
                    name={`achievement${achievement.id}`}
                    data-id={achievement.id}
                    value={achievement.name}
                    onChange={(e) => handleChange(e, setAchievements, achievements)}
                    placeholder="Your Achievements here"
                    className="h-14 lg:h-16 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-lg shadow-xl"
                  />
                  <button
                    type="button"
                    className="lg:ml-7 ml-5 shadow-xl rounded-2xl w-fit h-fit p-2"
                    onClick={() => removeField(setAchievements, achievements, achievement.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> {/* remove */}
                  </button>
                </div>
              ))}
              <div className="mt-9 flex items-center pl-5 mb-5">
                <button
                  type="button"
                  className="shadow-xl rounded-2xl w-fit h-fit p-2"
                  onClick={() => addField(setAchievements, achievements)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg> {/* add */}

                </button>
                <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another achievement</p>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="border-4 border-white rounded-xl transparent-yellow mt-10 px-2 lg:pl-5 drop-shadow-xl shadow-xl">
            <div className='flex justify-center md:block'>
              <span className="bg-white w-fit h-fit p-2 flex justify-center items-center mt-5 rounded-xl">
                <p className="text-lg font-bold lg:text-2xl">Hobbies</p>
              </span>
            </div>
            <div className="lg:mt-10 w-full lg:w-[900px]">
              {hobbies.map((hobbies, index) => (
                <div className="mt-5 flex" key={hobbies.id}>
                  <input
                    type="text"
                    name={`hobbies${hobbies.id}`}
                    data-id={hobbies.id}
                    value={hobbies.name}
                    onChange={(e) => handleChange(e, setHobbies, hobbies)}
                    placeholder="Your hobbiess here"
                    className="h-14 lg:h-16 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-lg shadow-xl"
                  />
                  <button
                    type="button"
                    className="lg:ml-7 ml-5 shadow-xl rounded-2xl w-fit h-fit p-2"
                    onClick={() => removeField(setHobbies, hobbies, hobbies.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> {/* remove */}
                  </button>
                </div>
              ))}
              <div className="mt-9 flex items-center pl-5 mb-5">
                <button
                  type="button"
                  className="shadow-xl rounded-2xl w-fit h-fit p-2"
                  onClick={() => addField(setHobbies, hobbies)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg> {/* add */}

                </button>
                <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another hobbies</p>
              </div>
            </div>
          </div>

          {/* certificates */}
          <div className="border-4 border-white rounded-xl transparent-yellow mt-10 px-2 lg:pl-5 drop-shadow-xl shadow-xl">
            <div className='flex justify-center md:block'>
              <span className="bg-white w-fit h-fit p-2 flex justify-center items-center mt-5 rounded-xl">
                <p className="text-lg font-bold lg:text-2xl">Certificate</p>
              </span>
            </div>
            <div className="lg:mt-10 w-full lg:w-[900px]">
              {certificates.map((certificate, index) => (
                <div className="mt-5 flex" key={certificate.id}>
                  <input
                    type="text"
                    name={`certificate${certificate.id}`}
                    data-id={certificate.id}
                    value={certificate.name}
                    onChange={(e) => handleChange(e, setCertificates, certificates)}
                    placeholder="Your certificates here"
                    className="h-14 lg:h-16 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-lg shadow-xl"
                  />
                  <button
                    type="button"
                    className="lg:ml-7 ml-5 shadow-xl rounded-2xl w-fit h-fit p-2"
                    onClick={() => removeField(setCertificates, certificates, certificate.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> {/* remove */}
                  </button>
                </div>
              ))}
              <div className="mt-9 flex items-center pl-5 mb-5">
                <button
                  type="button"
                  className="shadow-xl rounded-2xl w-fit h-fit p-2"
                  onClick={() => addField(setCertificates, certificates)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg> {/* add */}

                </button>
                <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another certificate</p>
              </div>
            </div>
          </div>

          {/* projects */}
          <div className="border-4 border-white rounded-xl transparent-yellow mt-10 px-2 lg:pl-5 drop-shadow-xl shadow-xl">
            <div className='flex justify-center md:block'>
              <span className="bg-white w-fit h-fit p-2 flex justify-center items-center mt-5 rounded-xl">
                <p className="text-lg font-bold lg:text-2xl">Project</p>
              </span>
            </div>
            <div className="lg:mt-10 w-full lg:w-[900px]">
              {projects.map((project, index) => (
                <div className="mt-5 flex" key={project.id}>
                  <input
                    type="text"
                    name={`project${project.id}`}
                    data-id={project.id}
                    value={project.name}
                    onChange={(e) => handleChange(e, setProjects, projects)}
                    placeholder="Your projects here"
                    className="h-14 lg:h-16 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-lg shadow-xl"
                  />
                  <button
                    type="button"
                    className="lg:ml-7 ml-5 shadow-xl rounded-2xl w-fit h-fit p-2"
                    onClick={() => removeField(setProjects, projects, project.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> {/* remove */}
                  </button>
                </div>
              ))}
              <div className="mt-9 flex items-center pl-5 mb-5">
                <button
                  type="button"
                  className="shadow-xl rounded-2xl w-fit h-fit p-2"
                  onClick={() => addField(setProjects, projects)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg> {/* add */}

                </button>
                <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another project</p>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default Achievement;
