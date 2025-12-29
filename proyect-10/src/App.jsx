import imgHeadCard from "./assets/image-equilibrium.jpg"
import imgEthereum from "./assets/icon-ethereum.svg"
import imgClock from "./assets/icon-clock.svg"
import imgAvatar from "./assets/image-avatar.png"
import imgView from "./assets/icon-view.svg"

function App() {
  return (
    <>
    <section>
      <div className="w-full min-h-screen bg-Blue-950 flex items-center justify-center p-5">
        <div className="bg-Blue-900 p-5 rounded-xl w-full md:w-[400px]">
          <div className="relative rounded-xl overflow-hidden group cursor-pointer">
            <img src={imgHeadCard} alt="" className="w-full h-full object-cover object-center rounded-xl" />
            <div className="hidden group-hover:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-Cyan-400/50 w-full h-full group-hover:flex items-center justify-center">
              <img src={imgView} className="size-8" alt="" /> 
            </div>
          </div>
          <div className="w-full h-full mt-5">
            <h1 className="text-2xl text-white font-medium mb-3 hover:text-Cyan-400 transition cursor-pointer">Equilibrium #3429</h1>
            <p className="text-Blue-500 font-light text-base mb-3">Our Equilibrium collection promotes balance and calm.</p>
            <div className="flex items-center justify-between">
              <div className="w-full flex items-center gap-2">
                <img src={imgEthereum} alt="" />
                <p className="text-Cyan-400 text-base">0.041 ETH</p>
              </div>
              <div className="w-full flex items-center justify-end gap-2">
                <img src={imgClock} alt="" />
                <p className="text-Blue-500 text-base font-light">3 days left</p>
              </div>
            </div>

            <div className="border border-Blue-500/20 w-full my-3 inline-block"></div>

            <div className="w-full flex items-center gap-3">
              <div>
                <img src={imgAvatar} className="size-8 border border-white rounded-full" alt="" />
              </div>
              <div>
                <p className="text-Blue-500 text-base font-light">Creation of <span className="text-White hover:text-Cyan-400 transition cursor-pointer">Jules Wyvern</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
