import imgStart from "./assets/icon-star.svg"
import imgCalton from "./assets/image-colton.jpg"
import imgIrene from "./assets/image-irene.jpg"
import imgAnne from "./assets/image-anne.jpg"

function App() {

  let imagenes = [];

  for (let i = 0; i < 5; i++) {
    imagenes.push(<img src={imgStart} alt="" />)
  }

  return (
    <>
      <section className="bg-white w-full min-h-screen p-5 flex items-center justify-center">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-[500px]">
              <h1 className="text-center text-4xl lg:text-6xl lg:text-start text-Very-Dark-Magenta font-bold p-3 lg:p-0 lg:mb-5">10,000+ of our users love our products</h1>
              <p className="text-center text-base lg:text-xl lg:text-start text-pretty text-Dark-Grayish-Magenta lg:mb-10 ">We only provide frat products combined with excellent customer service. See what our satisfied customers are saying about our services</p>
            </div>
            <div className="w-full lg:w-[500px]">
              <div className="flex flex-col py-10 lg:p-0 items-center justify-center lg:gap-10 lg:h-[300px]">
                <div className="w-full text-center mb-10 lg:mb-0 flex flex-col justify-center lg:justify-start lg:items-start">
                  <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      {imagenes}
                    </div>
                    <p className="text-center inline-block text-Very-Dark-Magenta font-bold tracking-wide">Rated 5 Stars in Reviews</p>
                  </div>
                </div>
                <div className="w-full text-center mb-10 lg:mb-0 flex flex-col justify-center lg:justify-center lg:items-center">
                  <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      {imagenes}
                    </div>
                    <p className="text-center inline-block text-Very-Dark-Magenta font-bold tracking-wide">Rated 5 Stars in Reviews</p>
                  </div>
                </div>
                <div className="w-full text-center mb-10 lg:mb-0 flex flex-col justify-center lg:justify-end lg:items-end">
                  <div className="flex flex-col lg:flex-row lg:gap-5">
                    <div className="flex justify-center items-center gap-2 mb-2">
                      {imagenes}
                    </div>
                    <p className="text-center inline-block text-Very-Dark-Magenta font-bold tracking-wide">Rated 5 Stars in Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:items-center lg:justify-center lg:flex-row lg:flex-wrap gap-5 xl-h-full xl:h-[350px] bg-white">
            <div className="flex flex-col items-start justify-start w-full lg:w-max h-full">
              <div className="w-full lg:w-[400px] bg-Very-Dark-Magenta p-10 rounded-lg text-white">
                <div className="flex items-center gap-5">
                  <img src={imgCalton} className="size-10 rounded-full object-cover object-center" alt="" />
                  <div>
                    <h2 className="font-bold text-white textxl tracking-wide">Calton Smith</h2>
                    <p className="text-Soft-Pink text-base tracking-wide">Verified Buyer</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-start text-white text-pretty">" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-max h-full">
              <div className="lg:w-[400px] bg-Very-Dark-Magenta p-10 rounded-lg text-white">
                <div className="flex items-center gap-5">
                  <img src={imgIrene} className="size-10 rounded-full object-cover object-center" alt="" />
                  <div>
                    <h2 className="font-bold text-white textxl tracking-wide">Irene Roberts</h2>
                    <p className="text-Soft-Pink text-base tracking-wide">Verified Buyer</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-start text-white text-pretty">" Customer service is alwaus excellent and very quick turn around, Completely delighted with the simplicity of the purchase and the speed of delivery"</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end lg:w-max h-full">
              <div className="lg:w-[400px] bg-Very-Dark-Magenta p-10 rounded-lg text-white">
                <div className="flex items-center gap-5">
                  <img src={imgAnne} className="size-10 rounded-full object-cover object-center" alt="" />
                  <div>
                    <h2 className="font-bold text-white textxl tracking-wide">Anne Wallan¿ce</h2>
                    <p className="text-Soft-Pink text-base tracking-wide">Verified Buyer</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-start text-white text-pretty">" Put an order with this compaty and can only praise them for the very high stardard. Will definitely use them again and recommend them to everyone! "</p>
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
