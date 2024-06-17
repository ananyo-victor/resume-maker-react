import React,{useState} from 'react'
import Preview from '../components/Preview'

function Achievement() {
  const [inputs, setInputs] = useState({
    
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
     <main className="mx-auto max-w-[590px] md:max-w-[680px] lg:max-w-[1200px]">
<Preview/>

      <form className="w-full" id="DivAll" action="index.php" method="post" onSubmit={handleSubmit}>
        {/* <!-- Achievment --> */}
        <div id="div1" className="border-4 border-white rounded-xl transparent-yellow mt-10">
          <div id="div1-1" className="bg-white w-72 h-14 flex justify-center items-center ml-5 mt-5 rounded-xl">
            <p id="div1-1-1" className="ml-2 text-xl dark-yellow-text font-bold lg:text-4xl">Achievement</p>
          </div>
          <div id="div1-2" className="ml-7 lg:mt-10 lg:ml-16 w-[550px] lg:w-[900px]">
            <div className="mt-5" id="Achievement1">
              <label id="Alabel1" for="Name1" className="lg:text-3xl lg:font-semibold hide">Achievement 1</label><br />
              <div id="div1-2-1-1" className="flex lg:mt-10">
                <input id="Ainput1" type="text" name="Name1" placeholder="Your Achievements here"
                  className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                <button id="Abutton1" className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                  onclick="removeElement()"></button>
              </div>
            </div>
            <div className="mt-5" id="Achievement2">
              <label id="Alabel2" for="Name2" className="lg:text-3xl lg:font-semibold hide">Achievement 2</label><br />
              <div id="div1-2-1-2" className="flex lg:mt-10">
                <input id="Ainput2" type="text" name="Name2" placeholder="Your Achievements here"
                  className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                <button id="Abutton2" className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                  onclick="removeElement()"></button>
              </div>
            </div>
          </div>
          <div id="div1-3" className="mt-9 flex pl-5 mb-5">
            <button className="w-7 border border-white rounded-xl" onclick="abcd()"></button>
            <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another achievement</p>
          </div>
        </div>
        {/* <!--  // Achievment --> */}

        {/* <!--  Hobbies --> */}
        <div id="div2" className="border-4 border-white rounded-xl transparent-pink mt-10">
          <div id="div2-1" className="bg-white w-72 h-14 flex justify-center items-center ml-5 mt-5 rounded-xl">
            <p id="div2-1-1" className="ml-2 text-xl dark-pink-text font-bold lg:text-4xl">Hobbies</p>
          </div>
          <div id="div2-2" className="ml-7 lg:mt-10 lg:ml-16 w-[550px] lg:w-[900px] ">
            <div className="mt-5" id="Hobbie1">
              <label id="Hlabel1" for="Name1" className="lg:text-3xl lg:font-semibold hide">Hobbie 1</label><br />
              <div id="div2-2-1-1" className="flex lg:mt-10">
                <input id="Hinput1" type="text" name="Name1" placeholder="Your Hobbies here"
                  className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                <button id="Hbutton1" className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                  onclick="removeElement()"></button>
              </div>
            </div>
            <div className="mt-5" id="Hobbie2">
              <label id="Hlabel2" for="Name2" className="lg:text-3xl lg:font-semibold hide">Hobbie 2</label><br />
              <div id="div2-2-2-1" className="flex lg:mt-10">
                <input id="Hinput2" type="text" name="Name2" placeholder="Your Hobbies here"
                  className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                <button id="Hbutton2" className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                  onclick="removeElement()"></button>
              </div>
            </div>
          </div>
          <div id="div2-3" className="mt-9 flex pl-5 mb-5">
            <button className="w-7 border border-white rounded-xl" onclick="AddNewField2()"></button>
            <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another qualification</p>
          </div>
        </div>
        {/* <!--  // Hobbies --> */}

        {/* <!--  Certificate --> */}
        <div id="div3" className="border-4 border-white rounded-xl transparent-orange mt-10">
          <div id="div3-1" className="bg-white w-72 h-14 flex justify-center items-center ml-5 mt-5 rounded-xl">
            <p className="ml-2 text-xl dark-orange-text font-bold lg:text-4xl">Certificates</p>
          </div>
          <div id="div3-2" className="ml-7 lg:mt-10 lg:ml-16 w-[550px] lg:w-[900px] ">
            <div className="mt-5" id="Certificate1">
              <label id="Clabel1" for="Name1" className="lg:text-3xl lg:font-semibold hide">Certificate 1</label><br />
              <div id="div3-2-1-1" className="flex lg:mt-10">
                <input id="Cinput1" type="text" name="Name1" placeholder="Your Certificates here"
                  className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                <button id="Cbutton1" className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                  onclick="removeElement()"></button>
              </div>
            </div>
            <div className="mt-5" id="Certificate2">
              <label for="Name2" className="lg:text-3xl lg:font-semibold hide">Certificate 2</label><br />
              <div className="flex lg:mt-10">
                <input type="text" name="Name2" id="CName2" placeholder="Your Certificates here"
                  className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                <button className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                  onclick="removeElement()"></button>
              </div>
            </div>
          </div>
          <div id="div3-3" className="mt-9 flex pl-5 mb-5">
            <button className="w-7 border border-white rounded-xl" onclick="AddNewField3()"></button>
            <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another qualification</p>
          </div>
        </div>
        {/* <!--  // Certificate --> */}

        {/* Projects */}
        <div id="div4" className="border-4 border-white rounded-xl transparent-yellow mt-10">
          <div className="bg-white w-72 h-14 flex justify-center items-center ml-5 mt-5 rounded-xl">
            <p className="ml-2 text-xl dark-yellow-text font-bold lg:text-4xl">Projects</p>
          </div>

          <div className="ml-7 lg:mt-10 lg:ml-16 w-[550px] lg:w-[900px] ">
            <div className="mt-5" id="Project1">
              <label for="Name" className="lg:text-3xl lg:font-semibold hide">Project 1</label><br />
              <div className="flex lg:mt-10">
                <input type="text" name="Name1" id="PName1" placeholder="Your Projects here"
                  className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                <button className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                  onclick="removeElement()"></button>
              </div>
              <div className="mt-5" id="Project2">
                <label for="Name" className="lg:text-3xl lg:font-semibold hide">Project 2</label><br />
                <div className="flex lg:mt-10">
                  <input type="text" name="Name2" id="PName2" placeholder="Your Projects here"
                    className="h-16 w-[450px] lg:h-20 lg:w-[900px] border border-white rounded-xl pl-2 md:w-[500px] text-2xl" />
                  <button className="ml-7 h-16 w-[70px] lg:h-20 lg:w-[100px] border border-white rounded-xl"
                    onclick="removeElement()"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 flex pl-5 mb-5">
            <button className="w-7 border border-white rounded-xl" onclick="AddNewField4()"></button>
            <p className="ml-4 md:text-xl md:font-semibold lg:text-xl">Add another qualification</p>
          </div>
        </div>
        {/* // Projects */}
      </form>
    </main> 
    </>
  )
}

export default Achievement
