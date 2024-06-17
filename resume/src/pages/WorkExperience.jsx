import React from 'react'

function WorkExperience() {
  return (
    <>
     <main class="mx-auto max-w-[590px] pt-20 md:max-w-[680px] lg:max-w-[1200px]">
        <div class="mt-8 flex items-center justify-between rounded-2xl">
          <div class="ml-6 mt-3">
            <p class="text-3xl font-bold lg:text-4xl">Job Experience</p>
            <p class="my-4 text-xl font-semibold lg:text-xl">Share your job experience from latest to old</p>
          </div>
          <button class="mr-4 h-11 w-12 rounded-xl border-2 border-white font-bold hover:bg-white hover:text-pink-300 md:hidden" onclick="preview1()">p</button>
          <button class="hide2 mr-4 h-10 rounded-xl border-2 border-white text-lg font-bold hover:bg-white hover:text-pink-300 md:w-28 lg:hidden" onclick="preview1()">preview</button>
          <button class="hide mr-4 h-10 rounded-xl border-4 border-white text-lg font-semibold hover:bg-white hover:text-pink-400 md:w-28 lg:h-14 lg:w-36 lg:text-2xl lg:font-bold" onclick="preview1()">preview</button>
        </div>

        {/* Small screen */}

        <div class="w-full" id="we">
          <div class="" id="LempJobDiv1">
            <div class="transparent-yellow mt-7 flex justify-center rounded-t-xl border-4 border-b-0 border-white py-5 lg:hidden" id="sEmpDiv1">
              <input type="text" name="Employeer" id="sEmployeer1" placeholder="Employeer" class="h-16 w-[500px] rounded-xl border-4 border-white pl-2 md:w-[640px]" onkeyup="generateResume()" />
              {/* Small Screen */}
            </div>
            <div class="transparent-yellow flex justify-center rounded-b-xl border-4 border-t-0 border-white py-5 lg:hidden" id="sJobDiv1">
              <input type="text" name="Job Title" id="sJob_Title1" placeholder="Job Title" class="h-16 w-[500px] rounded-xl border-4 border-white pl-2 md:w-[640px]" onkeyup="generateResume()" />
              {/* Small Screen */}
            </div>

            <div class="hide transparent-yellow rounded-xl border-4 border-white lg:mt-7 lg:flex lg:justify-evenly lg:py-5" id="SempJobDiv1">
              <div id="lEmpDiv1">
                <label id="lempLabel1" for="Employeer" class="lg:text-xl lg:font-semibold">Employeer</label><br />
                <input type="text" name="Employeer" id="lEmployeer1" placeholder="Employeer" class="h-16 w-[500px] rounded-xl border-4 border-white pl-2 lg:mt-3 lg:h-16 lg:text-xl" onkeyup="generateResume()" />
                {/* Large Screen */}
              </div>
              <div id="lJobDiv1">
                <label id="ljobdivlabel1" for="Job Title" class="lg:text-xl lg:font-semibold">Job Title</label><br />
                <input type="text" name="Job Title" id="lJob_Title1" placeholder="Job Title" class="h-16 w-[500px] rounded-xl border-4 border-white pl-2 lg:mt-3 lg:h-16 lg:text-xl" onkeyup="generateResume()" />
                {/* Large Screen */}
              </div>
            </div>

            <div class="transparent-pink mt-8 mb-6 flex justify-evenly rounded-2xl border-4 border-white py-4" id="StartEndDiv1">
              <div id="StartDiv1"><label for="Start Date" class="hide lg:text-xl lg:font-semibold">Start Date</label><br /><input type="text" name="Start Date" id="StartDate1" placeholder="Start Date" class="h-16 w-[227px] rounded-xl border-4 border-white pl-2 md:w-[310px] lg:mt-3 lg:h-16 lg:w-[500px] lg:text-xl" onkeyup="generateResume()" /></div>

              <div class="flex flex-col" id="EndAllDiv1">
                <div id="EndDiv1"><label for="End Date" class="hide lg:text-xl lg:font-semibold">End Date</label><br /><input type="text" name="End Date" id="EndDate1" placeholder="End Date" class="h-16 w-[227px] rounded-xl border-4 border-white pl-2 md:w-[310px] lg:mt-3 lg:h-16 lg:w-[500px] lg:text-xl" /></div>
                <span id="EndSpan1" class="my-4 flex w-[170px] justify-between md:w-[220px] lg:w-[230px]"><input type="checkbox" name="Current" id="Current" class="rounded-xl md:w-5 md:border-4 md:border-white" onclick="present()" /><label for="Current" class="md:text-xl md:font-semibold lg:text-xl">I currently work here</label></span>
              </div>
            </div>
          </div>

          <div class="mt-3 flex" id="AddBtn">
            <button class="w-7 rounded-xl" onclick="addNewWEField()" id="addBtn1"><img src="add.png" alt="/" /></button>
            <p class="ml-5 text-lg font-semibold lg:text-xl">Add more job Experience</p>
          </div>
        </div>
      </main> 
    </>
  )
}

export default WorkExperience
