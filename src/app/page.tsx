

import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";



export default function Home() {
  
    return (
      <main className='m-5 relative z-10'>
        <div className="flex overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-200/20">
          <div className="fixed top-0 left-0 w-full h-36 bg-green-primary/80 dark:bg-transparent -z-30"/>
            <LeftPanel />
            <RightPanel />
        </div>
      </main>
        
    )
}