import React from 'react'

function Temp1() {
  return (
    <>
      <div className="lg:max-w-2xl max-w-80 max-h-screen h-screen mx-auto shadow-lg fixed" >

        <div className=' h-full w-full flex'>
          <div className='lg:w-1/3 h-full bg-pink-300'></div>
          <div className='lg:w-2/3 h-full bg-red-400'></div>
        </div>

        <div className=" h-full w-full bg-transparent">

          <div className='border-4 border-black p-4 flex'>
            <div className='lg:w-1/3 '>
              <div className="w-32 h-32 rounded-full bg-cover bg-center bg-black " style={{ backgroundImage: "url('path-to-your-image.jpg')" }}></div>
            </div>
            <div className='lg:w-2/3 flex items-center'>
              <div className="flex flex-col items-center">
                <h1 className="lg:text-2xl font-bold ">SANDRA BARNES</h1>
                <p className="lg:text-lg text-gray-600 text-xs">GRAPHIC DESIGNER</p>
              </div>
            </div>
          </div>

          <div className='flex'>

            <div className="w-2/5 lg:w-1/3 ">

              <div className="">
                <h2 className="lg:text-xl text-sm font-semibold">ABOUT ME</h2>
                <p className=" text-gray-700 text-xs">
                  <strong>Show your passion.</strong> Don’t be afraid to get personal, especially in your bio. After all, they’ve expressed an interest in you as a person. If you have any special talents or strongly held beliefs, jot those down.
                </p>
              </div>
              <div className="">
                <h2 className="lg:text-xl text-md font-semibold">CONTACT</h2>
                <p className=" text-gray-700 text-xs">
                  <strong>PHONE</strong><br />
                  555-555-5555
                </p>
                <p className=" text-gray-700 text-xs">
                  <strong>EMAIL</strong><br />
                  email@myemail.com
                </p>
              </div>
              <div className="">
                <h2 className="lg:text-xl text-sm font-semibold">REFERENCES</h2>
                <p className=" text-gray-700 text-xs">
                  <strong>RYAN HAUSER</strong><br />
                  555-555-5555
                </p>
                <p className=" text-gray-700 text-xs">
                  <strong>DORIS FLEMMING</strong><br />
                  555-555-5555
                </p>
              </div>
            </div>

            <div className="w-3/5 lg:w-2/3">

              <div className="lg:mb-8 mb-3">
                <h2 className="lg:text-xl text-md font-semibold">EMPLOYMENT</h2>
                <div className="">
                  <h3 className="lg:text-lg text-sm font-semibold">Position</h3>
                  <p className="text-gray-600 text-xs">2016 - Present</p>
                  <h4 className="lg:text-md text-sm font-semibold ">PLACE OF EMPLOYMENT</h4>
                  <p className="text-gray-700 text-xs">A job description is a document that describes the general tasks, or other related, and responsibilities of a position. It may specify the functionary to whom the position reports.</p>
                </div>
                <div className="">
                  <h3 className="lg:text-lg font-semibold text-sm">Position</h3>
                  <p className="text-gray-600 text-xs">2014 - 2016</p>
                  <h4 className="text-sm font-semibold ">PLACE OF EMPLOYMENT</h4>
                  <p className="text-gray-700 text-xs">A job description is a document that describes the general tasks, or other related, and responsibilities of a position. It may specify the functionary to whom the position reports.</p>
                </div>
              </div>

              <div className="lg:mb-8 mb-3">
                <h2 className="lg:text-xl text-md font-semibold">EDUCATION</h2>
                <div className="">
                  <h3 className="lg:text-lg font-semibold text-sm">Master of Design</h3>
                  <p className="text-gray-600 text-xs">2013 - 2016</p>
                  <p className="text-gray-700 text-xs">OCAD University, Toronto ON</p>
                </div>
              </div>

              <div>
                <h2 className="lg:text-xl text-md font-semibold">SKILLS</h2>
                <div className="">
                  <h3 className="lg:text-md text-sm font-semibold">Photoshop</h3>
                  <div className="bg-gray-300 lg:h-2 h-1 rounded-full">
                    <div className="bg-black lg:h-2 h-1 rounded-full w-4/5"></div>
                  </div>
                  <h3 className="lg:text-md text-sm font-semibold ">Illustrator</h3>
                  <div className="bg-gray-300 lg:h-2 h-1 rounded-full">
                    <div className="bg-black lg:h-2 h-1 rounded-full w-3/4"></div>
                  </div>
                  <h3 className="lg:text-md text-sm font-semibold ">Creativity</h3>
                  <div className="bg-gray-300 lg:h-2 h-1 rounded-full">
                    <div className="bg-black lg:h-2 h-1 rounded-full w-4/5"></div>
                  </div>
                  <h3 className="lg:text-md text-sm font-semibold ">Leadership</h3>
                  <div className="bg-gray-300 lg:h-2 h-1 rounded-full">
                    <div className="bg-black lg:h-2 h-1 rounded-full w-3/4"></div>
                  </div>
                  <h3 className="lg:text-md text-sm font-semibold ">Management</h3>
                  <div className="bg-gray-300 lg:h-2 h-1 rounded-full">
                    <div className="bg-black lg:h-2 h-1 rounded-full w-3/5"></div>
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
