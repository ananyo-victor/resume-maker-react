import React, { useState, useEffect, forwardRef } from 'react'
import Preview from '../components/Preview';
// import axios from 'axios';

const BasicDetails = forwardRef(({ formRef }, ref) => {
  const [inputs, setInputs] = useState({
      // Fname: '',
      // Mname: '',
      // Lname: '',
      // Email: '',
      // Phone: '',
      // Address: '',
      // City: '',
      // Country: '',
      // Proffession: ''
  });
  useEffect(()=>{
    // axios.get(/);
  },[])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    // alert(inputs);
  }
  return (
    <>
      <main className="mx-auto max-w-[590px] md:max-w-[680px] w-full lg:max-w-[1200px]">

        <Preview Name='Heading' Desc='Here all the contact information lies' />

        <form className="mt-6 lg:flex" onSubmit={handleSubmit} ref={formRef}>

          <div className="w-full lg:max-w-[240px] md:max-w-[680px] max-w-[580px] mt-6">
            <div className="border-4 border-white rounded-xl flex justify-center items-center py-5 w-44 mx-auto">
              <img src="/" alt="/" className="bg-slate-500 h-40 w-32 lg:h-48 lg:w-40" />
            </div>
            <div className="mt-4 w-full flex"><button className='mx-auto rounded-xl h-fit w-fit p-2.5 hover:bg-white shadow-xl drop-shadow-2xl transform active:scale-75 transition-transform'>
              <label htmlFor="image_upload" className=" text-lg font-bold"><input type="file" id="image_upload" className='hidden' /> Upload Photo</label></button>
            </div>
          </div>

          <div className="lg:ml-5 px-5 lg:px-0 w-full py-6">


            <div className="lg:my-5 lg:flex items-center justify-between">
              {/* <!-- Upper Portion --> */}
              <div className="w-full lg:max-w-[300px] md:max-w-[620px] max-w-[520px]">
                <label htmlFor="First Name" className="hidden lg:inline lg:text-xl lg:font-semibold">First Name</label>
                <input type="text" name="Fname" id="FName" placeholder="First Name"
                  className="pl-3 mt-3 border border-white rounded-xl h-16 w-full max-w-[600px] lg:max-w-[300px] shadow-xl drop-shadow-2xl" value={inputs.Fname} onChange={handleChange} />
              </div>
              <div className="w-full lg:max-w-[300px] hide">
                <label htmlFor="Middle Name(optional)" className="hidden lg:inline lg:text-xl lg:font-semibold">Middle Name (optional)</label><br />
                <input type="text" name="Mname" id="MName" placeholder="Middle Name (Optional)"
                  className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[300px] shadow-xl drop-shadow-2xl" value={inputs.Mname} onChange={handleChange} />
              </div>
              <div className="w-full lg:max-w-[300px] md:max-w-[620px] max-w-[520px]">
                <label htmlFor="Last Name" className="hidden lg:inline lg:text-xl lg:font-semibold">Last Name</label><br />
                <input type="text" name="Lname" id="LName" placeholder="Last Name"
                  className="pl-3 mt-3 border border-white rounded-xl h-16 w-full max-w-[600px] lg:max-w-[300px] shadow-xl drop-shadow-2xl" value={inputs.Lname} onChange={handleChange} />
              </div>
            </div>


            <div className="lg:my-5 lg:flex items-center">

              <div className="flex-col justify-between w-full lg:max-w-[460px]">

                <div className="w-full lg:max-w-[460px] md:max-w-[620px] max-w-[520px]">
                  <label htmlFor="Proffession" className="hidden lg:inline lg:text-xl lg:font-semibold ">Proffession</label><br />
                  <input type="text" name="Proffession" id="Proffession" placeholder="Proffession"
                    className="pl-3 mt-3 border border-white rounded-xl h-16 w-full max-w-[600px] lg:max-w-[460px] shadow-xl drop-shadow-2xl" value={inputs.Proffession} onChange={handleChange} />
                </div>

                <div className="lg:mt-5 flex flex-col lg:flex-row items-center justify-between w-full md:max-w-[620px] max-w-[520px] lg:max-w-[460px] mx-auto">
                  <div className="w-full max-w-[520px] md:max-w-[280px] lg:max-w-[230px]">
                    <label htmlFor="Country" className="hidden lg:inline lg:text-xl lg:font-semibold">Country</label><br />
                    <input type="text" name="Country" id="Country" placeholder="Country"
                      className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[225px] shadow-xl drop-shadow-2xl" value={inputs.Country} onChange={handleChange} />
                  </div>
                  <div className="w-full max-w-[520px] md:max-w-[280px] lg:max-w-[230px]">
                    <label htmlFor="City" className="hidden lg:inline lg:text-xl lg:font-semibold">City</label><br />
                    <input type="text" name="City" id="City" placeholder="City"
                      className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[225px] shadow-xl drop-shadow-2xl" value={inputs.City} onChange={handleChange} />
                  </div>
                </div>

              </div>

              <div className="w-full md:max-w-[620px] max-w-[520px] lg:max-w-[460px] mx-auto">
                <label htmlFor="Address" className="hidden lg:inline lg:text-xl lg:font-semibold">Address</label><br />
                <textarea name="Address" id="Address" placeholder="Address"
                  className="pl-3 mt-3 border border-white rounded-xl h-48 w-full max-w-[600px] lg:max-w-[460px] shadow-xl drop-shadow-2xl"
                  style={{ resize: 'none' }} value={inputs.Address} onChange={handleChange}></textarea>
              </div>

            </div>


            <div className="lg:my-5 lg:flex justify-between items-center">
              <div className="w-full lg:max-w-[460px] md:max-w-[620px] max-w-[520px]">
                <label htmlFor="Phone Number" className="hidden lg:inline lg:text-xl lg:font-semibold hide">Phone Number</label><br />
                <input type="number" name="Phone" id="PhoneNumber" placeholder="Phone Number"
                  className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[460px] shadow-xl drop-shadow-2xl" value={inputs.Phone} onChange={handleChange} />
              </div>
              <div className="w-full lg:max-w-[460px] md:max-w-[620px] max-w-[520px]">
                <label htmlFor="Email" className="hidden lg:inline lg:text-xl lg:font-semibold hide">Email</label><br />
                <input type="email" name="Email" id="Email" placeholder="Email"
                  className="pl-3 mt-3 border border-white rounded-xl h-16 w-full lg:max-w-[460px] shadow-xl drop-shadow-2xl" value={inputs.Email} onChange={handleChange} />
              </div>
            </div>


          </div>

        </form>
      </main>
    </>
  )
});

export default BasicDetails
