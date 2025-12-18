import imgVictor from "./assets/image-victor.jpg"

function App() {

  return (
    <>
      <section className={`relative w-full bg-Blue-600 min-h-screen  flex items-center justify-center p-5 overflow-hidden`}>
        <div className="absolute w-full h-full -top-[30%] -left-[40%]  md:-top-[30%] md:-left-[40%] bg-[url(./assets/bg-pattern-top.svg)] bg-no-repeat bg-center bg-contain"></div>
        <div className="absolute w-full h-full -bottom-[35%] -right-1/2 md:-bottom-[50%] md:-right-[30%] bg-[url(./assets/bg-pattern-top.svg)] bg-no-repeat bg-center bg-contain"></div>
        <div className="w-full md:w-[400px] shadow-lg rounded-xl overflow-hidden z-10">
          <div className="relative w-full h-[150px] bg-[url(./assets/bg-pattern-card.svg)]">
            <img src={imgVictor} className="size-25 border-5 border-white rounded-full absolute top-full left-1/2 -translate-1/2" alt="" />
          </div>
          <div className="w-full bg-white p-5">
            <div className="my-10">
              <h1 className="text-center font-bold mb-2 md:text-xl">Victor Crest <span className="font-light md:text-base">26</span></h1>
              <p className="text-center mb-10 text-xs text-Gray-500">London</p>
            </div>
            <div className="flex justify-center items-center gap-10">
              <div className="text-center">
                <h2 className="font-bold text-Navy-950 text-xl">80K</h2>
                <p className="text-center font-light text-Gray-500 text-xs">Followes</p>
              </div>
              <div className="text-center">
                <h2 className="font-bold text-Navy-950 text-xl">803K</h2>
                <p className="text-center font-light text-Gray-500 text-xs">Likes</p>
              </div>
              <div className="text-center">
                <h2 className="font-bold text-Navy-950 text-xl">1.4K</h2>
                <p className="text-center font-light text-Gray-500 text-xs">Photos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
