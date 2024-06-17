import React,{useState} from 'react'

function BasicDetails() {
  const [inputs, setInputs] = useState({
    Fname: '',
    Mname: '',
    Lname: '',
    Email: '',
    Phone: '',
    Address: '',
    City: '',
    Country: '',
    Proffession: ''
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
     <main className="mx-auto max-w-[590px] md:max-w-[680px] w-full lg:max-w-[1200px]">
      <div className="flex justify-between">
        <div className="">
          <p className="text-4xl font-bold">Heading</p>
          <p className="text-lg">Here all the contact information lies</p>
        </div>
        <button
          className="mr-4 h-11 w-12 rounded-xl border-2 border-white font-bold hover:bg-white hover:text-pink-300 md:hidden" onclick="preview1()">p</button>
        <button
          className="hide2 mr-4 h-10 rounded-xl border-2 border-white text-lg font-bold hover:bg-white hover:text-pink-300 md:w-28 lg:hidden" onclick="preview1()">preview</button>
        <button
          className="hide mr-4 h-10 rounded-xl border-4 border-white text-lg font-semibold hover:bg-white hover:text-pink-400 md:w-28 lg:h-14 lg:w-36 lg:text-2xl lg:font-bold shadow-xl" onclick="preview1()">preview</button>
      </div>
      <form className="mt-6 lg:flex" onSubmit={handleSubmit}>
        <div className="w-full lg:max-w-[240px] md:max-w-[680px] max-w-[580px] mt-6">
          <div className="border-4 border-white rounded-xl flex justify-center items-center py-5 w-44 mx-auto">
            <img src="/" alt="/" className="bg-slate-500 h-40 w-32 lg:h-48 lg:w-40" />
          </div>
          <div className="mt-4 w-full flex">
            <button
              className="mx-auto border-4 border-white rounded-xl text-lg font-bold h-12 w-40 hover:bg-white hover:text-pink-400 shadow-xl">Upload Photo</button>
          </div>
        </div>
        <div className="lg:ml-5 w-full lg:max-w-[1000px]">
          <div className="my-5 lg:flex items-center justify-between">
            {/* <!-- Upper Portion --> */}
            <div className="w-full lg:max-w-[300px] md:max-w-[620px] max-w-[520px]">
              <label for="First Name" className="hide lg:text-xl lg:font-semibold">First Name</label><br />
              <input type="text" name="FName" id="FName" placeholder="First Name"
                className="pl-3 mt-3 border border-white rounded-xl h-16 w-full max-w-[600px] lg:max-w-[300px] shadow-xl" onKeyUp={handleChange} />
            </div>
            <div className="w-full lg:max-w-[300px] hide">
              <label for="Middle Name(optional)" className="lg:text-xl lg:font-semibold">Middle Name (optional)</label><br />
              <input type="text" name="MName" id="MName" placeholder="Middle Name (Optional)"
                className="pl-3 mt-3 border border-white rounded-xl lg:h-16 w-full lg:max-w-[300px] shadow-xl" value={inputs.Mname} onKeyUp={handleChange}/>
            </div>
            <div className="w-full lg:max-w-[300px] md:max-w-[620px] max-w-[520px]">
              <label for="Last Name" className="hide lg:text-xl lg:font-semibold">Last Name</label><br />
              <input type="text" name="LName" id="LName" placeholder="Last Name"
                className="pl-3 mt-3 border border-white rounded-xl h-16 w-full max-w-[600px] lg:max-w-[300px] shadow-xl" value={inputs.Lname} onKeyUp={handleChange} />
            </div>
          </div>
          <div className="my-5 lg:flex items-center">
            <div className="flex-col justify-between w-full lg:max-w-[460px]">
              <div className="w-full lg:max-w-[460px] md:max-w-[620px] max-w-[520px]">
                <label for="Proffession" className="hide lg:text-xl lg:font-semibold ">Proffession</label><br />
                <input type="text" name="Proffession" id="Proffession" placeholder="Proffession"
                  className="pl-3 mt-3 border border-white rounded-xl h-16 w-full max-w-[600px] lg:max-w-[460px] shadow-xl" value={inputs.Proffession} onKeyUp={handleChange} />
              </div>
              <div
                className="mt-5 flex items-center justify-between w-full md:max-w-[620px] max-w-[520px] lg:max-w-[460px] mx-auto">
                <div className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[230px]">
                  <label for="Country" className="hide lg:text-xl lg:font-semibold">Country</label><br />
                  <input type="text" name="Country" id="Country" placeholder="Country"
                    className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[225px] shadow-xl" value={inputs.Country} onKeyUp={handleChange} />
                </div>
                <div className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[230px]">
                  <label for="City" className="hide lg:text-xl lg:font-semibold">City</label><br />
                  <input type="text" name="City" id="City" placeholder="City"
                    className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[225px] shadow-xl" value={inputs.City} onKeyUp={handleChange} />
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[620px] max-w-[520px] lg:max-w-[460px] mx-auto">
              <label for="Address" className="hide lg:text-xl lg:font-semibold">Address</label><br />
              <textarea name="Address" id="Address" placeholder="Address"
                className="pl-3 mt-3 border border-white rounded-xl h-48 w-full max-w-[600px] lg:max-w-[460px] shadow-xl"
                style={{resize: 'none'}} value={inputs.Address} onKeyUp={handleChange}></textarea>
            </div>
          </div>
          <div className="my-5 lg:flex justify-between items-center">
            <div className="w-full lg:max-w-[460px] md:max-w-[620px] max-w-[520px]">
              <label for="Phone Number" className="lg:text-xl lg:font-semibold hide">Phone Number</label><br />
              <input type="number" name="Phone" id="PhoneNumber" placeholder="Phone Number"
                className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[460px] shadow-xl" value={inputs.Phone} onKeyUp={handleChange} />
            </div>
            <div className="w-full lg:max-w-[460px] md:max-w-[620px] max-w-[520px]">
              <label for="Email" className="lg:text-xl lg:font-semibold hide">Email</label><br />
              <input type="email" name="Email" id="Email" placeholder="Email"
                className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[460px] shadow-xl" value={inputs.Email} onKeyUp={handleChange} />
            </div>
          </div>
        </div>
      </form>
    </main> 
    </>
  )
}

export default BasicDetails
