import React,{useState} from 'react'
import Preview from '../components/Preview'

function Education() {
    const [inputs, setInputs] = useState({
        EName: '',
        ECity: '',
        EState: '',
        EDegree: '',
        EField: '',
        EPassingYear: ''
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }
  return (
    <>
     <main id="main" className="mx-auto max-w-[590px] md:max-w-[680px] lg:max-w-[1200px]">
            <Preview Name = "Education" Desc = "Here add your academics details"/>

            {/* <!-- school --> */}
            <form onSubmit={handleSubmit} id="div1" className="mt-10 w-full border-4 transparent-yellow border-white rounded-xl">
                {/* <!-- <div className="bg-white w-40 h-14 flex justify-center items-center ml-5 mt-5 rounded-xl"><p className="ml-2 text-xl dark-yellow-text font-bold lg:text-4xl">School</p></div> --> */}

                {/* <!-- Small Screens --> */}
                <div id="sdiv1" className="mt-5 flex justify-center lg:hidden">
                    <input type="text" name="EName" id="sName1" placeholder="Name"
                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" onChange={handleChange} value={inputs.EName} />
                </div>

                <div id="sdiv2" className="mt-6 flex justify-center lg:hidden">
                    <input type="text" name="ECity" id="sCity1" placeholder="City"
                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" onChange={handleChange} value={inputs.ECity} />
                </div>

                <div id="sdiv3" className="mt-6 flex justify-center lg:hidden">
                    <input type="text" name="EState" id="sState1" placeholder="State"
                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" onChange={handleChange} value={inputs.EState} />
                </div>

                <div id="sdiv4" className="mt-6 flex justify-center lg:hidden">
                    <select name="EDegree" id="sDegree1"
                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 bg-white md:w-[640px] shadow-xl" onChange={handleChange} value={inputs.EDegree}>
                        <option value="Degree">Degree</option>
                        <option value="HighSchool">High School</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                    </select>
                </div>

                <div id="sdiv5" className="mt-6 flex justify-center lg:hidden">
                    <input type="text" name="EField" id="sField-of-Study1" placeholder="Field of Study"
                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" onChange={handleChange} value={inputs.EField} />
                </div>

                <div id="sdiv6" className="mt-6 flex justify-center lg:hidden">
                    <input type="text" name="EPassingYear" id="sPassing-Year1" placeholder="Passing Year"
                        className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" onChange={handleChange} value={inputs.EPassingYear} />
                </div>

                {/* <!-- Large Screen --> */}

                <div id="ldiv1" className="justify-evenly lg:flex lg:flex-col mb-5">
                    {/* <!-- <div className="hide lg:mt-5 lg:flex lg:justify-end mr-5"> <button id="lbutton1" className="h-8 w-8"
                            onclick="close2()"><img src="delete.png" alt="" srcSet=""/></button>
                    </div> --> */}
                    <div id="ldiv1-1" className="hide lg:mt-8 lg:flex lg:justify-evenly">
                        <div id="ldiv1-1-1" className="lg:flex lg:flex-col">

                            <label id="lname-label1" forhtml="Name" className="lg:text-2xl lg:font-semibold">Name</label>
                            <input type="text" name="EName" id="lName1" placeholder="Name"
                                className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" onChange={handleChange} value={inputs.EName} />
                        </div>

                        <div id="ldiv1-1-2" className="lg:flex lg:flex-col">
                            <label id="lCity-label1" forhtml="City" className="lg:text-2xl lg:font-semibold">City</label>
                            <input type="text" name="ECity" id="lCity1" placeholder="City"
                                className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" onChange={handleChange} value={inputs.ECity} />
                        </div>

                    </div>
                    <div id="ldiv1-2" className="hide lg:mt-8 lg:flex lg:justify-evenly">

                        <div id="ldiv1-2-1" className="lg:flex lg:flex-col">
                            <label id="lState-label1" forhtml="Name" className="lg:text-2xl lg:font-semibold">State</label>
                            <input type="text" name="EState" id="lState1" placeholder="State"
                                className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" onChange={handleChange} value={inputs.EState} />
                        </div>

                        <div id="ldiv1-2-2" className="lg:flex lg:flex-col">
                            <label id="ldegree-label1" forhtml="Degree" className="lg:text-2xl lg:font-semibold">Degree</label>
                            <select name="EDegree" id="lDegree1"
                                className="w-[500px] border-2 border-white rounded-xl px-2 h-16 lg:mt-3 lg:h-16 lg:text-xl bg-white shadow-xl" onChange={handleChange} value={inputs.EDegree}>
                                <option className="lg:text-gray-400" value="Degree">Degree</option>
                                <option value="HighSchool">High School</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Bachelors">Bachelors</option>
                                <option value="Masters">Masters</option>
                            </select>
                        </div>

                    </div>
                    <div id="ldiv1-3" className="hide lg:mt-8 lg:flex lg:justify-evenly">

                        <div id="ldiv1-3-1" className="lg:flex lg:flex-col">
                            <label id="lField-Of-Study-label1" forhtml="Name" className="lg:text-2xl lg:font-semibold">Field Of
                                Study</label>
                            <input type="text" name="EField" id="lField-Of-Study1" placeholder="Field Of Study"
                                className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" onChange={handleChange} value={inputs.EField} />
                        </div>

                        <div id="ldiv1-3-2" className="lg:flex lg:flex-col">
                            <label id="lPassing-Year-label1" forhtml="City" className="lg:text-2xl lg:font-semibold">Passing
                                Year</label>
                            <input type="text" name="EPassingYear" id="lPassing-Year1" placeholder="Passing Year"
                                className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" onChange={handleChange} value={inputs.EPassingYear} />
                        </div>

                    </div>
                </div>

            </form>
            <div id="AddBtn1" className="mt-9 flex ml-5">
                <button className="w-7 rounded-xl" onclick="AddField()"><img src="add.png" alt="/" srcSet=""/></button>
                <p className="md:text-xl md:font-semibold lg:text-xl ml-4">Add another qualification</p>
            </div>

            {/* <!-- college --> */}
            {/* <!-- <div className="mt-20 w-full border-4 transparent-pink border-white rounded-xl">
            <div className="bg-white w-40 h-14 flex justify-center items-center ml-5 mt-5 rounded-xl"><p className="ml-2 text-xl dark-pink-text font-bold lg:text-4xl">College</p></div>

            Small Screens
            <div className="mt-5 flex justify-center lg:hidden">
                <input type="text" name="Name" id="Name" placeholder="Name"
                    className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" />
            </div>
            <div className="mt-6 flex justify-center lg:hidden">
                <input type="text" name="City" id="City" placeholder="City"
                    className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" />
            </div>
            <div className="mt-6 flex justify-center lg:hidden">
                <input type="text" name="State" id="State" placeholder="State"
                    className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" />
            </div>
            <div className="mt-6 flex justify-center lg:hidden">
                <select name="degree" id="degree"
                    className="h-16 w-[500px] border-2 border-white rounded-xl pl-2  md:w-[640px] shadow-xl">
                    <option value="Degree">Degree</option>
                    <option value="HighSchool">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                </select>
            </div>
            <div className="mt-6 flex justify-center lg:hidden">
                <input type="text" name="Field of Study" id="Field of Study" placeholder="Field of Study"
                    className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" />
            </div>
            <div className="mt-6 flex justify-center lg:hidden">
                <input type="text" name="Passing Year" id="Passing Year" placeholder="Passing Year"
                    className="h-16 w-[500px] border-2 border-white rounded-xl pl-2 md:w-[640px] shadow-xl" />
            </div>

            Large Screen
            <div className="justify-evenly lg:flex lg:flex-col">
                <div className="hide lg:mt-8 lg:flex lg:justify-evenly">
                    <div>
                        <label forhtml="Name" className="lg:text-2xl lg:font-semibold">Name</label>
                        <input type="text" name="Name" id="Name" placeholder="Name"
                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" />
                    </div>
                    <div>
                        <label forhtml="City" className="lg:text-2xl lg:font-semibold">City</label>
                        <input type="text" name="City" id="City" placeholder="City"
                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" />
                    </div>
                </div>
                <div className="hide lg:mt-8 lg:flex lg:justify-evenly">
                    <div>
                        <label forhtml="Name" className="lg:text-2xl lg:font-semibold">State</label>
                        <input type="text" name="State" id="State" placeholder="State"
                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" />
                    </div>
                    <div>
                        <label forhtml="Degree" className="lg:text-2xl lg:font-semibold">Degree</label>
                        <select name="degree" id="degree"
                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl lg:">
                            <option value="Degree">Degree</option>
                            <option value="HighSchool">High School</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                        </select>
                    </div>
                </div>
                <div className="hide lg:mt-8 lg:flex lg:justify-evenly">
                    <div>
                        <label forhtml="Name" className="lg:text-2xl lg:font-semibold">Field Of Study</label>
                        <input type="text" name="Field Of Study" id="Field Of Study" placeholder="Field Of Study"
                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" />
                    </div>
                    <div>
                        <label forhtml="City" className="lg:text-2xl lg:font-semibold">Passing Year</label>
                        <input type="text" name="Passing Year" id="Passing Year" placeholder="Passing Year"
                            className="w-[500px] border-2 border-white rounded-xl pl-2 h-16 lg:mt-3 lg:h-16 lg:text-xl shadow-xl" />
                    </div>
                </div>
            </div>

            <div className="mt-9 flex ml-5 mb-5">
                <button className="w-7 border-2 border-white rounded-xl"></button>
                <p className="md:text-xl md:font-semibold lg:text-xl ml-4">Add another qualification</p>
            </div>
        </div> --> */}
        </main> 
    </>
  )
}

export default Education
