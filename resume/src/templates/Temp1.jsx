import React, {} from 'react'

function Temp1() {
  // const [count, setCount] = useState(0);
  
  return (
    <>
      <div className="lg:max-w-md max-w-80 w-full h-[95%] shadow-lg fixed" >

        <div className='absolute h-full w-full flex bg-white'>
          <div className='w-1/3 h-full bg-pink-300'></div>
          <div className='w-2/3 h-full bg-white'></div>
        </div>
        <div className="absolute h-full w-full bg-transparent z-10 p-1">

          <div className='border-4 border-black py-4 flex'>
            <div className='w-1/3 flex items-center justify-center'>
              <div className="w-20 h-20 rounded-full bg-cover bg-center bg-black " style={{ backgroundImage: "url('path-to-your-image.jpg')" }}></div>
            </div>
            <div className='w-2/3 flex justify-center items-center'>
              <div className="flex flex-col items-center">
                <h1 className="lg:text-xl font-bold ">SANDRA BARNES</h1>
                <p className="lg:text-base text-gray-600 text-xs">GRAPHIC DESIGNER</p>
              </div>
            </div>
          </div>

          <div className='flex'>

            <div className="w-1/3 text-wrap p-1">

              <div className="">
                <h2 className="lg:text-xl text-[0.75rem] font-semibold">ABOUT ME</h2>
                <p className=" text-gray-700 text-[0.65rem]">
                  <strong>Show your passion.</strong> Don’t be afraid to get personal, especially in your bio. After all, they’ve expressed an interest in you as a person. If you have any special talents or strongly held beliefs, jot those down.
                </p>
              </div>
              <div className="">
                <h2 className="lg:text-xl text-[0.8rem] font-semibold">CONTACT</h2>
                <p className=" text-gray-700 text-[0.65rem]">
                  <strong>PHONE</strong><br />
                  555-555-5555
                </p>
                <p className=" text-gray-700 text-[0.65rem]">
                  <strong>EMAIL</strong><br />
                  email@myemail.com
                </p>
              </div>
              <div className="">
                <h2 className="lg:text-xl text-[0.75rem] font-semibold">REFERENCES</h2>
                <p className=" text-gray-700 text-[0.65rem]">
                  <strong>RYAN HAUSER</strong><br />
                  555-555-5555
                </p>
                <p className=" text-gray-700 text-[0.65rem]">
                  <strong>DORIS FLEMMING</strong><br />
                  555-555-5555
                </p>
              </div>
            </div>

            <div className="w-2/3 text-wrap p-1">

              <div className="lg:mb-8 mb-3">
                <h2 className="lg:text-xl text-[0.8rem] font-semibold">EMPLOYMENT</h2>
                <div className="">
                  <h3 className="lg:text-lg text-[0.75rem] font-semibold">Position</h3>
                  <p className="text-gray-600 text-[0.65rem]">2016 - Present</p>
                  <h4 className="lg:text-base text-[0.75rem] font-semibold ">PLACE OF EMPLOYMENT</h4>
                  <p className="text-gray-700 text-[0.65rem]">A job description is a document that describes the general tasks, or other related, and responsibilities of a position. It may specify the functionary to whom the position reports.</p>
                </div>
                <div className="">
                  <h3 className="lg:text-lg font-semibold text-[0.75rem]">Position</h3>
                  <p className="text-gray-600 text-[0.65rem]">2014 - 2016</p>
                  <h4 className="text-sm font-semibold ">PLACE OF EMPLOYMENT</h4>
                  <p className="text-gray-700 text-[0.65rem]">A job description is a document that describes the general tasks, or other related, and responsibilities of a position. It may specify the functionary to whom the position reports.</p>
                </div>
              </div>

              <div className="lg:mb-8 mb-3">
                <h2 className="lg:text-xl text-[0.8rem] font-semibold">EDUCATION</h2>
                <div className="">
                  <h3 className="lg:text-lg font-semibold text-[0.75rem]">Master of Design</h3>
                  <p className="text-gray-600 text-[0.65rem]">2013 - 2016</p>
                  <p className="text-gray-700 text-[0.65rem]">OCAD University, Toronto ON</p>
                </div>
              </div>

              <div>
                <h2 className="lg:text-xl text-[0.8rem] font-semibold">SKILLS</h2>
                <div className="">
                  <h3 className="lg:text-base text-[0.75rem] font-semibold">Photoshop</h3>
                  <div className="bg-gray-300 lg:h-2 h-[0.165rem] rounded-full">
                    <div className="bg-black lg:h-2 h-[0.165rem] rounded-full w-4/5"></div>
                  </div>
                  <h3 className="lg:text-base text-[0.75rem] font-semibold ">Illustrator</h3>
                  <div className="bg-gray-300 lg:h-2 h-[0.165rem] rounded-full">
                    <div className="bg-black lg:h-2 h-[0.165rem] rounded-full w-3/4"></div>
                  </div>
                  <h3 className="lg:text-base text-[0.75rem] font-semibold ">Creativity</h3>
                  <div className="bg-gray-300 lg:h-2 h-[0.165rem] rounded-full">
                    <div className="bg-black lg:h-2 h-[0.165rem] rounded-full w-4/5"></div>
                  </div>
                  <h3 className="lg:text-base text-[0.75rem] font-semibold ">Leadership</h3>
                  <div className="bg-gray-300 lg:h-2 h-[0.165rem] rounded-full">
                    <div className="bg-black lg:h-2 h-[0.165rem] rounded-full w-3/4"></div>
                  </div>
                  <h3 className="lg:text-base text-[0.75rem] font-semibold ">Management</h3>
                  <div className="bg-gray-300 lg:h-2 h-[0.165rem] rounded-full">
                    <div className="bg-black lg:h-2 h-[0.165rem] rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Temp1
