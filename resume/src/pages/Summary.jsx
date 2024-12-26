// Summary.jsx
import React, { useState, useEffect, forwardRef, useContext, useRef } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
import Cookies from 'js-cookie';
import Preview from '../components/Preview';
import Description from '../components/extra/Description';

const Summary = () =>forwardRef(({ formRef }, ref) => {
  const user = Cookies.get('user');
  const { setButton } = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [summary, setSummary] = useState(
    {
      _id:"",
      id:"",
      strength:""
    }
  );
  const entries = [{
    key: 1,
    id: 'Hardworking and passionate job seeker with strong organizational skills eager to secure entry-levelJob Title position. Ready to help team achieve company goals.',
    name: 'Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level <span class="text-blue-500">Job Title</span> position. Ready to help team achieve company goals.'
  },
  {
    key: 2,
    id: 'Enthusiastic eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Task and training in. Motivated to learn, grow and excel in.',
    name: 'Enthusiastic <span class="text-blue-500">Job Title</span> eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Task <span class="text-blue-500">Job Title</span> and training in <span class="text-blue-500">Skill</span>. Motivated to learn, grow and excel in <span class="text-blue-500">Industry</span>.'
  },
  {
    key: 3,
    id: 'Dedicated professional with history of meeting company goals utilizing consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand.',
    name: 'Dedicated <span class="text-blue-500">Industry</span> professional with history of meeting company goals utilizing consistent and organized practices. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand.'
  },
  {
    key: 4,
    id: 'To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.',
    name: 'To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.'
  },
  {
    key: 5,
    id: 'Experienced with over  years of experience in. Excellent reputation for resolving problems and improving customer satisfaction.',
    name: 'Experienced <span class="text-blue-500">Job Title</span> with over <span class="text-blue-500">Number of Years</span> years of experience in <span class="text-blue-500">Industry</span>. Excellent reputation for resolving problems and improving customer satisfaction.'
  },
  {
    key: 6,
    id: 'Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.',
    name: 'Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.'
  },
  {
    key: 7,
    id: 'Reliable employee seeking position. Offering excellent communication and good judgment',
    name: 'Reliable employee seeking <span class="text-blue-500">Job Title</span> position. Offering excellent communication and good judgment.'
  }];

  const editorRef = useRef(null);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const saveMemento = (newContent) => {
    setHistory([...history, editorRef.current.innerHTML]);
    editorRef.current.innerHTML = newContent;
  };

  const Bold = () => {
    document.execCommand('bold');
    saveMemento(editorRef.current.innerHTML);
  };

  const Italics = () => {
    document.execCommand('italic');
    saveMemento(editorRef.current.innerHTML);
  };

  const Underline = () => {
    document.execCommand('underline');
    saveMemento(editorRef.current.innerHTML);
  };

  const Undo = () => {
    if (history.length > 0) {
      const newFuture = [editorRef.current.innerHTML, ...future];
      const newHistory = history.slice(0, history.length - 1);
      editorRef.current.innerHTML = history[history.length - 1];
      setHistory(newHistory);
      setFuture(newFuture);
    }
  };

  const Redo = () => {
    if (future.length > 0) {
      const newHistory = [...history, editorRef.current.innerHTML];
      const newFuture = future.slice(1);
      editorRef.current.innerHTML = future[0];
      setHistory(newHistory);
      setFuture(newFuture);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Only log inputs if they are loaded
    if (isLoaded) {
      console.log("Inputs loaded:", summary);
      setButton(false);
      // sendToBackend(); // Call backend after inputs are updated
    }
  }, [summary, isLoaded]);

  const fetchData = async () => {
    try {
      const data = await axios.get(`http://localhost:3001/resume/receive`);
      console.log(data);
      for (let i in data.data) {
        if (user === data.data[i]._id) {
          console.log("matched");
          if (data.data[i].summary[0]._id) {
            setSummary(data.data[i].summary.map(work => ({
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
            setSummary(summary.map(work => ({
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
      // setError()
      // setSuccess()
    } catch (error) {
      console.error('Error loading work experiences:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value, dataset } = event.target; // Get field name and value
    const id = parseInt(dataset.id); // Convert dataset id to integer
    setSummary((prevExperiences) =>
      prevExperiences.map((item) =>
        item.id === id ? { ...item, [name]: value } : item // Update only the matching item
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form data saved!');
  };
  return (
    <>
      <main id='main' class="mx-auto container h-full">

        <div class="flex lg:flex-row-reverse flex-col w-full h-full">

          <div id="SmallScreen_2" class="w-full max-w-1/2 px-4 lg:h-full h-1/2">

            <Preview Name='Strength' Desc='Add your strength here' />

            <form class="mx-auto h-full lg:h-fit flex items-center w-full max-w-[520px] flex-col" onSubmit={handleSubmit}  ref={formRef}>

              <input ref={editorRef} contenteditable="true" name="" value="hi" id="BlankSpaceForStrength"
                class="lg:h-[380px] h-1/2 w-full max-w-[500px] rounded-md p-3 bg-white border-2 border-gray-400 drop-shadow-2xl overflow-y-scroll"
                onChange={saveMemento}/>

              <div className='flex items-center w-full px-3 mt-2'>
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                </span>
                <p className='text-xs ml-3 text-gray-600 font-semibold'>Change the text in <span className='text-blue-600'>Blue</span> accourding to your choice.</p>
              </div>

              <div class="my-5 w-full flex justify-evenly">
                <button class="h-10 w-10 shadow-2xl font-bold bg-white drop-shadow-2xl rounded-xl transform active:scale-75 transition-transform" id="bold" onClick={Bold}>B</button>
                <button class="h-10 w-10 shadow-2xl italic bg-white drop-shadow-2xl rounded-xl  transform active:scale-75 transition-transform" id="italic" onClick={Italics}>I</button>
                <button class="h-10 w-10 shadow-2xl underline-offset-2 bg-white drop-shadow-2xl rounded-xl  transform active:scale-75 transition-transform" id="underline" onClick={Underline}>U</button>
                <button class="h-10 w-10 shadow-2xl flex justify-center items-center bg-white drop-shadow-2xl rounded-xl  transform active:scale-75 transition-transform" id="undo" onClick={Undo}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                </button>
                <button class="h-10 w-10 shadow-2xl border-2 border-white flex justify-center items-center bg-white drop-shadow-2xl rounded-xl  transform active:scale-75 transition-transform" id="redo" onClick={Redo}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                </svg>
                </button>
              </div>
            </form>

          </div>

          <div id="SmallScreen_1" class="w-full max-w-1/2 lg:h-fit h-1/2">
            <div class="w-full h-full">
              <div class="lg:h-[600px] h-full overflow-y-scroll px-3 mt-8">
                {entries.map((events) => {
                  return <Description Key={events.key} Id={events.id} Desc={events.name} saveMemento={saveMemento} />
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
})

export default Summary
