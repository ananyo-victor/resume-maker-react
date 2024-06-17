import React from 'react'

function Summary() {
  return (
    <>
     <main class="mx-auto max-w-[590px] md:max-w-[680px] lg:max-w-[1200px] pt-20">
      <div class="mt-4 flex w-full">
        <div id="SmallScreen_1" class="w-full max-w-[600px] hide lg:block">
          <div class="w-full">
            <div class="flex h-12 w-full items-center border-white">
              <button class="ml-2 h-7 w-7 border border-white"></button>
              <input type="text" name="Search" id="Search" placeholder="Type here to search"
                class="ml-3 h-full w-full border-0 text-lg font-bold text-gray-900 pl-3 rounded-lg" />
            </div>
            <div class="lg:h-[600px] h-[500px] overflow-y-scroll my-3">
              <div class="mx-auto my-2 flex w-full max-w-[520px] shadow-2xl rounded-lg">
                <button class="my-auto ml-2 h-[25px] w-[60px] bg-green-500" onclick="add1()">A</button>
                <div class="my-2 w-[1100px] px-5 text-lg font-semibold"
                  id="Hardworking and passionate job seeker with strong
              organizational skills eager to secure entry-levelJob Title position. Ready to help team achieve company goals.">Hardworking and passionate job seeker with
                  strong
                  organizational skills eager to secure entry-level <span class="text-blue-500">Job Title</span>
                  position.
                  Ready to help team achieve company goals.</div>
              </div>
              <div class="mx-auto my-2 flex w-full max-w-[520px] shadow-2xl rounded-lg">
                <button class="my-auto ml-2 h-[25px] w-[60px] bg-green-500" onclick="add2()"></button>
                <div class="my-2 w-[1100px] px-5 text-lg font-semibold" id="Enthusiastic eager to contribute to team success through hard work, attention to detail and excellent
              organizational skills. Clear understanding of Task and
              training in. Motivated to learn, grow and excel in.">Enthusiastic <span class="text-blue-500">Job
                    Title</span> eager to contribute to team success through hard work, attention to detail and
                  excellent
                  organizational skills. Clear understanding of Task <span class="text-blue-500">Job Title</span>and
                  training in <span class="text-blue-500">Skill</span>. Motivated to learn, grow and excel in <span
                    class="text-blue-500">Industry</span>.</div>
              </div>
              <div class="mx-auto my-2 flex w-full max-w-[520px] shadow-2xl rounded-lg">
                <button class="my-auto ml-2 h-[25px] w-[60px] bg-green-500" onclick="add3()"></button>
                <div class="my-2 w-[1100px] px-5 text-lg font-semibold" id="Dedicated professional with history of meeting company goals utilizing
            consistent and organized practices. Skilled in working under pressure and adapting to new situations and
            challenges to best enhance the organizational brand.">Dedicated <span class="text-blue-500">Industry</span>
                  professional with history of meeting company goals utilizing
                  consistent and organized practices. Skilled in working under pressure and adapting to new situations
                  and
                  challenges to best enhance the organizational brand.</div>
              </div>
              <div class="mx-auto my-2 flex w-full max-w-[520px] shadow-2xl rounded-lg">
                <button class="my-auto ml-2 h-[25px] w-[60px] bg-green-500" onclick="add4()"></button>
                <div class="my-2 w-[1100px] px-5 text-lg font-semibold" id="To seek and maintain full-time position that
              offers professional challenges utilizing interpersonal skills, excellent time management and
              problem-solving skills.">To seek and maintain full-time position that
                  offers professional challenges utilizing interpersonal skills, excellent time management and
                  problem-solving skills.</div>
              </div>
              <div class="mx-auto my-2 flex w-full max-w-[520px] shadow-2xl rounded-lg">
                <button class="my-auto ml-2 h-[25px] w-[60px] bg-green-500" onclick="add5()"></button>
                <div class="my-2 w-[1100px] px-5 text-lg font-semibold" id="Experienced with over  years of experience in. Excellent reputation for resolving problems and improving
              customer satisfaction.">Experienced <span class="text-blue-500">Job
                    Title</span> with over <span class="text-blue-500">Number</span> years of experience in <span
                    class="text-blue-500">Industry</span>. Excellent reputation for resolving problems and improving
                  customer satisfaction.</div>
              </div>
              <div class="mx-auto my-2 flex w-full max-w-[520px] shadow-2xl rounded-lg">
                <button class="my-auto ml-2 h-[25px] w-[60px] bg-green-500" onclick="add6()"></button>
                <div class="my-2 w-[1100px] px-5 text-lg font-semibold" id="Organized and dependable candidate successful at
              managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to
              meet team goals.">Organized and dependable candidate successful at
                  managing multiple priorities with a positive attitude. Willingness to take on added responsibilities
                  to
                  meet team goals.</div>
              </div>
              <div class="mx-auto my-2 flex w-full max-w-[520px] shadow-2xl rounded-lg">
                <button class="my-auto ml-2 h-[25px] w-[60px] bg-green-500" onclick="add7()"></button>
                <div class="my-2 w-[1100px] px-5 text-lg font-semibold"
                  id="Reliable employee seeking position. Offering excellent communication and good judgment">Reliable
                  employee seeking <span class="text-blue-500">Job Title</span> position. Offering excellent
                  communication and good judgment.
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 flex justify-center items-center lg:hidden" onclick="OpenScreen()">
            <button
              class="w-48 h-14 my-2 border-4 border-white rounded-xl text-3xl font-bold hover:bg-white hover:text-pink-500">Next</button>
          </div>
        </div>
        <div id="SmallScreen_2" class="lg:flex w-full max-w-[650px] flex-col ml-11">
          <div class="mb-8 flex items-center justify-between" id="TopicName">
            <div class="ml-5">
              <p class="text-3xl font-bold lg:text-4xl">Strength</p>
              <p class="mt-4 text-xl font-semibold lg:text-xl">Add your every strength here</p>
            </div>
            <button
              class="mr-4 h-11 w-12 rounded-xl border-4 border-white font-bold hover:bg-white hover:text-pink-300 md:hidden" onclick="preview1()">p</button>
            <button
              class="hide2 mr-4 h-10 rounded-xl border-4 border-white text-lg font-bold hover:bg-white hover:text-pink-300 md:w-28 lg:hidden" onclick="preview1()">preview</button>
            <button
              class="hide mr-4 h-10 rounded-xl border-4 border-white text-lg font-semibold hover:bg-white hover:text-pink-400 md:w-28 lg:h-14 lg:w-36 lg:text-2xl lg:font-bold" onclick="preview1()">preview</button>
          </div>
          <div class="mx-auto flex w-full max-w-[520px] flex-col border-white">
            <div contenteditable="true" name="" value="hi" id="BlankSpaceForStrength"
              class="mx-auto mt-2 h-[380px] w-full max-w-[500px] border-0 rounded-md p-3 bg-white"
              onkeydown="saveMemento()"></div>
            <div class="my-8 flex justify-evenly">
              <button class="h-10 w-10 shadow-2xl border-2 border-white font-bold" id="bold" onclick="bold()">B</button>
              <button class="h-10 w-10 shadow-2xl border-2 border-white italic" id="italic"
                onclick="italic()">I</button>
              <button class="h-10 w-10 shadow-2xl border-2 border-white underline-offset-2" id="underline"
                onclick="underline()">U</button>
              <button class="h-10 w-10 shadow-2xl border-2 border-white" id="numbers" onclick="numbers()"></button>
              <button class="h-10 w-10 shadow-2xl border-2 border-white" id="undo" onclick="undo()"></button>
              <button class="h-10 w-10 shadow-2xl border-2 border-white" id="redo" onclick="redo()"></button>
            </div>
          </div>
          <div class="mt-6 flex lg:hidden mx-auto">
            <button
              class=" mx-auto w-80 h-14 max-w-[520px] border-4 border-white rounded-xl text-xl font-bold hover:bg-white hover:text-pink-400"
              onclick="OpenScreen()">Pre Written
              Contents</button>
          </div>
        </div>
      </div>
    </main> 
    </>
  )
}

export default Summary
