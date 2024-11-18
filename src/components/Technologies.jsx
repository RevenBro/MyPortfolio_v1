import {RiReactjsLine, RiJavascriptLine, RiGithubLine  } from "react-icons/ri"
import {TbBrandNextjs, TbBrandTypescript  } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className="rounded-2xl border-4 border-neutral-700 p-4">
                <RiJavascriptLine className="text-5xl text-yellow-300 "/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-700 p-4">
                <TbBrandTypescript className="text-5xl text-blue-700 "/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-700 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400 "/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-700 p-4">
                <TbBrandNextjs className="text-5xl "/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-700 p-4">
                <RiGithubLine    className="text-5xl  "/>
            </div>
        </div>
    </div>
  )
}

export default Technologies