import React from 'react'

function Skill() {
  return (
    <>
     <main class="mx-auto max-w-[590px]  md:max-w-[680px] lg:max-w-[1200px] pt-20">
      <div class=" mt-8 flex items-center justify-between rounded-2xl ">
        <div class="ml-6 mt-3">
          <p class="text-3xl font-bold lg:text-4xl">Skills</p>
          <p class="my-4 text-xl font-semibold lg:text-xl">Add your top skills here</p>
        </div>
        <button
          class="mr-4 h-11 w-12 rounded-xl border-4 border-white font-bold hover:bg-white hover:text-pink-300 md:hidden"
          onclick="preview1()">p</button>
        <button
          class="hide2 mr-4 h-10 rounded-xl border-4 border-white text-lg font-bold hover:bg-white hover:text-pink-300 md:w-28 lg:hidden"
          onclick="preview1()">preview</button>
        <button
          class="hide mr-4 h-10 rounded-xl border-4 border-white text-lg font-semibold hover:bg-white hover:text-pink-400 md:w-28 lg:h-14 lg:w-36 lg:text-xl lg:font-bold"
          onclick="preview1()">preview</button>
      </div>

      <div id="we" class="flex w-full flex-col justify-evenly">
        <div id="sdiv1"
          class="flex justify-between mt-5 pb-5 lg:hidden transparent-yellow rounded-xl border-2 border-white">
          <div class="pl-9 md:pl-5 flex flex-col items-center" id="sdiv1_1">
            <div class="mt-4" id="sdiv1_1_1">
              <label for="Skill1" class="text-xl font-semibold" id="sskilllabel1">Skill</label><br />
              <input id="sskillinput1" type="text" name="level"
                class="h-14 w-[450px] border border-white rounded-xl pl-2 text-gray-400 md:w-[580px] mt-3"/>
            </div>
            <div id="sdiv1-1-2" class="mt-4">
              <label id="slevellabel1" for="Level1" class="text-xl font-semibold">Level</label><br />
                <select name="Level1" id="sselectlevel1"
                  class="h-14 w-[450px] border border-white rounded-xl pl-2 md:w-[580px]  mt-3">
                  <option id="soption1_1" value="default" class="text-base">Options</option>
                  <option id="soption1_2" value="high" class="text-base">Expert</option>
                  <option id="soption1_3" value="medium" class="text-base">Intermidiate</option>
                  <option id="soption1_4" value="low" class="text-base">Beginner</option>
                </select>
            </div>
          </div>
          <div id="sdiv1_2" class="w-20 flex justify-center items-center">
            <button id="sbutton1" class="h-5 w-5" onclick="close2()"><img src="delete.png" alt="" srcset=""/></button>
          </div>
        </div>
        {/* <!-- Small Screen --> */}

        <div id="ldiv1"
          class="lg:flex justify-evenly mt-5 pb-5 hide transparent-yellow rounded-xl border-4 border-white">
          <div id="ldiv1_1" class="mt-4">
            <label id="lskilllabel1" for="Skill1" class="text-xl font-semibold">Skill</label><br />
            <input type="text" id="lskillinput1"
              class="h-16 w-[450px] border border-white rounded-xl pl-2 lg:mt-4 lg:h-16 lg:text-xl">
            </input>
          </div>
          <div id="ldiv1_2" class="mt-4">
            <label id="llevellabel1" for="Level1" class="text-xl font-semibold">Level</label><br />
              <select name="" id="lselectlevel1"
                class="h-16 w-[450px] border border-white rounded-xl pl-2 lg:mt-4 lg:h-16 lg:text-xl">
                <option id="loption1_1" value="default" class="text-base">Options</option>
                <option id="loption1_2" value="high" class="text-base">Expert</option>
                <option id="loption1_3" value="medium" class="text-base">Intermidiate</option>
                <option id="loption1_4" value="low" class="text-base">Beginner</option>
              </select>
          </div>
          <div id="ldiv1_3" class="mt-7 pt-7 w-20 flex justify-center items-center">
            <button id="lbutton1" class="h-8 w-8" onclick="close2()"><img src="delete.png" alt="" srcset=""/></button>
          </div>
        </div>
        {/* <!-- Large Screen --> */}

        <div id="AddBtn" class="mt-9 mb-5 flex">
          <button class="w-7 rounded-xl" onclick="addNewField()"><img src="add.png" alt="add image"/></button>
          <p class="ml-5 text-lg font-semibold lg:text-xl">Add another skill</p>
        </div>
      </div>
      <div class="h-24 mt-5"></div>
    </main> 
    </>
  )
}

export default Skill
