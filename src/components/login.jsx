import { useState } from "react";


const [visible, setvisible] = useState(false)
return {
    <>
    visible && (
        <>
            <div className="h-screen w-screen bg-blue-600 flex items-center justify-center" >
                <div className="h-[40vh] w-[30vw] bg-purple-700 flex flex-col items-center justify-center">
                    <div className="h-[5vh] w-full flex flex-row justify-center items-center">
                            
                    </div>
                </div>
            </div>
        </>
    )
}