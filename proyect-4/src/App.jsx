import imgDrawers from "./assets/drawers.jpg"
import imgAvatar from "./assets/avatar-michelle.jpg"
import { useState } from "react"

function App() {
  const [isActive, setActive] = useState(false);

  console.log(isActive)

  const handleActiveState = () => {
    setActive(!isActive)
  }

  return (
    <>
      <section className="w-full min-h-screen bg-Light-Grayish-Blue flex flex-col justify-center items-center p-5">
        <div className="w-full md:w-[500px] lg:w-[800px] flex items-center flex-col lg:flex-row shadow-xl rounded-xl overflow-hidden lg:overflow-visible">
          <div className="w-full lg:w-[500px] h-full grow">
            <img src={imgDrawers} alt="" className="w-full h-full lg:h-[316px] object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-t-none object-left" />
          </div>
          <div className="w-full h-full grow rounded-r-xl">
            <div className="p-10 bg-white lg:px-10 lg:pt-10 lg:pb-5 lg:rounded-tr-xl">
              <h1 className="text-Very-Dark-Grayish-Blue font-bold mb-5 lg:text-xl">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
              <p className="text-Desaturated-Dark-Blue  text-base">Ever been in a and feit like somethinf was missing? Perhaps it feit slightly bare and Univiting I've got some simple tips to help you make any room feel complete</p>
            </div>
            <div className={`w-full lg:relative z-10 ${isActive ? "bg-Very-Dark-Grayish-Blue lg:bg-white p-5 lg:p-0" : "bg-white pb-10"} px-10 lg:px-10 lg:pb-10 flex justify-between items-center rounded-b-xl lg:rounded-br-xl`}>
              {
                isActive ?
                  <div>
                    <div className="relative lg:absolute bg-Very-Dark-Grayish-Blue lg:px-5 lg:rounded-xl lg:left-[60%] lg:-top-full">
                      <div className="hidden lg:block absolute left-1/2 -bottom-2 w-4 h-4 bg-Very-Dark-Grayish-Blue transform -translate-x-1/2 rotate-45"></div>

                      <div className="flex items-center gap-5 lg:p-5">
                        <p className="text-base uppercase text-Grayish-Blue tracking-widest">
                          Share
                        </p>
                        <div className="flex items-center gap-5">
                          <i className="fa-brands fa-square-facebook text-2xl text-white"></i>
                          <i className="fa-brands fa-twitter text-2xl text-white"></i>
                          <i className="fa-brands fa-pinterest text-2xl text-white"></i>
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <div className="flex items-center gap-5">
                        <img src={imgAvatar} alt="" className="size-10 object-cover rounded-full" />
                        <div className="text-start">
                          <h2 className="text-xs text-Very-Dark-Grayish-Blue font-bold mb-1">Michelle Appleton</h2>
                          <p className="text-xs text-Desaturated-Dark-Blue">28 Jun 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div className="block">
                    <div className="flex items-center gap-5">
                      <img src={imgAvatar} alt="" className="size-10 object-cover rounded-full" />
                      <div className="text-start">
                        <h2 className="text-xs text-Very-Dark-Grayish-Blue font-bold mb-1">Michelle Appleton</h2>
                        <p className="text-xs text-Desaturated-Dark-Blue">28 Jun 2020</p>
                      </div>
                    </div>
                  </div>
              }
              <button type="buttom" onClick={handleActiveState} className={`${isActive ? "bg-Desaturated-Dark-Blue" : "bg-Light-Grayish-Blue"} size-10 rounded-full flex items-center justify-center cursor-pointer`}><i className={`fa-solid fa-share ${isActive ? "text-white" : "text-Desaturated-Dark-Blue"} text-xl pointer-events-none`}></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
