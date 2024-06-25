// Description.jsx
import React from 'react'

function Description(props) {
    const addText = () => {
        props.saveMemento(props.Desc);
    };
    return (
        <>
            <div class="lg:mx-auto my-2 flex w-full max-w-[520px] drop-shadow-2xl shadow-xl rounded-lg bg-white" key={props.Key}>
                <button class="my-auto ml-2 h-fit w-fit rounded-lg p-1 shadow-slate-300 shadow-xl transform active:scale-75 transition-transform" onClick={addText}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <div class="my-2 mx-4 text-justify lg:text-lg text-base font-semibold"
                    id={`${props.Id}`}>{props.Id}</div>
            </div>
        </>
    )
}

export default Description
