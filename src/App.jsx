import '../global.css'
import logo from '../public/ableNFT_green.svg'
import nftgirl from '../public/NFT_girl.png'
import nftboy from '../public/NFT_boy.png'
import purplesidebar from '../public/purple-vertical.png'
import fbicon from '../public/facebook.svg'
import twicon from '../public/twitter.svg'
import liicon from '../public/linkedin.svg'
import inicon from '../public/instagram.svg'
import hozbar from '../public/horizontal-bar.png'

function App() {

  return (
    <main className="bg-gradient-to-br from-slate-900 to-indigo-950 bg-repeat-x bg-contain min-w-screen">
      <section className='min-h-screen min-w-full'>



        {/* Nav Section */}



        <div className="bg-[url('../public/top_squiggly.svg')] bg-no-repeat ">

        <nav className='flex flex-col text-white text-sm lg:text-xl'>
 
          <ul className='flex justify-evenly py-10 md:justify-items-stretch xl:justify-evenly'>

            <div className='flex '>
              <img className='resize  h-0 sm:h-7 invisible md:visible md:h-5 md:pl-10 lg:h-7 xl:h-14' src= {logo} />
            </div>

            <li className='my-auto xl:font-bold'>
              <a href="https://discord.gg/28FnMgzKtU">Discord</a>
            </li>

            <li className='my-auto xl:font-bold'>
              <a href="mailto:hello@abletoshare.org">Contact</a>
             </li>

            <li className='flex invisible w-0 md:w-auto md:visible my-auto '>
             <label className="block">
                <input type="email" className="form-input block bg-slate-800 text-white text-sm text-center placeholder-slate-300 
                w-44 h-8 md:h-6 md:text-left xl:h-14 xl:text-lg 2xl:w-72" placeholder="Search Here..." />
              </label>
   
              <a className='bg-violet-500 rounded-md mx-1 h-8 md:h-6 xl:h-14' href="#">
                <span className="material-symbols-outlined text-white text-xl m-1 md:text-sm xl:m-2 xl:text-4xl">search</span></a>
            </li>

            <li className='my-auto sm:mr-10 md:pr-10 xl:flex xl:mr-0 xl:pr-0'>
              <a className="bg-indigo-500 py-2 rounded-md sm:px-3 md:py-1 xl:py-4 xl:px-5 " href="#">Connect Wallet</a>
            </li>

          </ul>

          <div>
            <img className='resize h-12 mx-auto my-10 md:hidden' src= {logo} />
          </div>

          </nav> 



          {/* Hero Section */}



          <div className='flex flex-col lg:flex-row xl:mx-10 2xl:px-20 2xl:mx-auto'>

            <div className='flex flex-col py-10 px-8 sm:px-16 md:mx-10 lg:mt-48 lg:mr-0 xl:mt-60 2xl:my-auto 2xl:pl-0'>
              <h1 className='text-white text-xl sm:text-3xl md:text-4xl md:text-left md:w-4/6 lg:w-9/12 lg:text-4xl lg:leading-relaxed 
              xl:text-6xl xl:leading-normal'><span className='whitespace-nowrap'>
              Regenerate the planet</span> <span className='whitespace-nowrap'>with our <span className='text-lime-500 whitespace-nowrap'>
              NFT Token</span>.</span></h1>
              <p className='text-gray-300 text-sm py-10 sm:pr-48 md:px-0 xl:text-lg 2xl:py-4 2xl:whitespace-nowrap'>
              Now, it is possible to regenerate the planet and make a profit at the same time.</p>
              <a className='text-white bg-purple-500 w-24 py-2 mx-auto px-3 rounded-md md:mx-24 lg:mx-0 
              xl:h-16 xl:w-36 xl:text-xl xl:py-5 xl:px-7'href="#">Mint NFT</a>
           </div>

            <div className='flex flex-col md:flex-row md:py-10 lg:flex-col lg:my-32 lg:pr-40 2xl:flex-row 2xl:w-full 2xl:pr-0 2xl:justify-center'>
              <img className='mx-auto size-2/4 sm:max-w-60 pb-4 md:size-1/3 md:mr-3 lg:size-full lg:mx-0 lg:w-72 xl:w-96 2xl:w-60' src= {nftgirl} />
              <img className='mx-auto size-2/5 sm:max-w-60 md:size-1/4 md:ml-3 md:mt-8 lg:size-full lg:mx-0 lg:mt-0 lg:w-72 xl:w-96 2xl:w-60' src= {nftboy} />
            </div>

          </div>
          


          {/* Subscribe Section */}



          <div className='flex flex-col py-10 mx-16 sm:mx-7 xl:py-20 2xl:py-10'>
            <h1 className='text-white text-2xl text-center py-10 mx-7 md:text-3xl xl:text-4xl xl:font-semibold'>
              Understanding ableNFT Solutions</h1>
            <p className='text-gray-300 text-sm text-center leading-loose xl:text-xl xl:leading-9'>It&apos;s time for us to take 
            responsibility for making this world a better place.<br></br>
            Click <a className='font-bold' href="#"></a> to download our white paper.
            And <a className='font-bold' href="#">here</a> to download our business plan/road map.</p>
          </div>

          <div className='flex flex-col py-10 lg:flex-row lg:justify-center xl:pt-32'>

          <img className='invisible h-7 lg:visible lg:h-12 lg:my-auto' src= {purplesidebar} />

            <h1 className='text-white text-lg text-center mx-12 lg:my-auto lg:text-2xl lg:mx-7 xl:text-3xl'>
              Subscribe to our newsletter:</h1>

            <div className='flex justify-center py-4 lg:pr-16'>
              <img className='h-8 mx-1 md:mx-5 lg:hidden' src= {purplesidebar} />
              <label className="block">
                <input type="email" className="form-input block bg-indigo-900 text-white text-sm text-center 
                placeholder-slate-300 w-44 h-8 sm:w-64 md:w-80 lg:h-12 xl:text-2xl xl:w-full" placeholder="Enter your email..." />
              </label>
   
              <a className='bg-violet-500 rounded-md mx-1 h-8 md:mx-5 lg:h-12 lg:p-2' href="#">
                <span className="material-symbols-outlined text-white text-2xl mx-1">arrow_forward</span></a>
            </div>
          </div>

          <div>
            <img className='invisible mx-auto w-0 lg:h-4 lg:w-5/6 lg:visible lg:mb-20' src= {hozbar} />
          </div>


        </div>

      

       {/* Logo and Icons Section */}



       <div className='flex flex-col lg:flex-row 2xl:mx-20'>

       <div className='flex flex-col lg:pl-16 lg:flex-1'>

        <div className='flex justify-center py-10 md:pb-0 lg:py-0 lg:pb-30'>
          <img className='h-14 md:h-24 lg:h-40 lg:w-56' src= {logo} />
        </div>

        <div className='flex justify-center mb-10 sm:mb-0 md:invisible md:h-0 lg:visible'>
          <ul className='flex'>
            <li>
              <a href="www.facebook.com/able"><img className='w-6 mx-4 sm:mx-10' src= {fbicon} /></a>
            </li>
            <li>
            <a href=" https://x.com/__able?s=21&t=bytZO---hBasSbKdEwJ6pQ"><img className='w-6 mx-4 sm:mx-10' src= {twicon} /></a>
            </li>
            <li>
            <a href=" https://x.com/__able?s=21&t=bytZO---hBasSbKdEwJ6pQ"><img className='w-6 mx-4 sm:mx-10' src= {liicon} /></a>
            </li>
            <li>
            <a href="www.instagram.com/abletoshare"><img className='w-6 mx-4 sm:mx-10' src= {inicon} /></a>
            </li>
          </ul>
        </div>

       </div>



       {/* About Us Section */}



       <div className='flex flex-col lg:pb-16 lg:mx-10 lg:flex-'>
          <h1 className='text-white text-lg font-bold text-center py-6 md:text-left md:mx-20 lg:mx-2 lg:py-2 2xl:py-0'>About Us</h1>
          <p className='text-slate-300 text-justify text-xs leading-loose py-6 mx-10 md:mx-20 md:w-9/12 lg:mx-2 lg:w-11/12
          xl:text-lg xl:mx-0 2xl:leading-8'>
            AbleNFT stands at the intersection of innovation and regeneration, pioneering a revolutionary approach to 
            blockchain technology. Our mission is simple yet profound: to co-create collective abundance while regenerating
            our planet. Through blockchain, we empower individuals to access financial resources and investment opportunities,
            fostering financial inclusivity on a global scale.<br></br>
            At AbleNFT, we believe in the transformative power of sustainable finance and regenerative initiatives. By
            integrating blockchain technology with our core values of regeneration, community, empowerment, inclusivity, and innovation,
            we&apos;re shaping a future where financial resoureces are accessible to all, and our planet thrives in harmony with its
            inhabitants. <span className='text-lime-500 font-bold'>Join us on this journey towards a birghter, greener tomorrow</span>
          </p>
       </div>


        <div className='flex justify-center mb-10 invisible w-0 h-0 md:visible md:w-auto md:h-auto py-8 lg:hidden'>
            <ul className='flex w-0 h-0 md:w-auto md:h-auto'>
              <li>
                <a href="www.facebook.com/able"><img className='md:w-6 md:mx-10' src= {fbicon} /></a>
              </li>
              <li>
              <a href=" https://x.com/__able?s=21&t=bytZO---hBasSbKdEwJ6pQ"><img className='md:w-6 md:mx-10' src= {twicon} /></a>
             </li>
              <li>
              <a href=" https://x.com/__able?s=21&t=bytZO---hBasSbKdEwJ6pQ"><img className='md:w-6 md:mx-10' src= {liicon} /></a>
              </li>
              <li>
              <a href="www.instagram.com/abletoshare"><img className='md:w-6 md:mx-10' src= {inicon} /></a>
              </li>
            </ul>
        </div>

      </div>



       {/* Footer Section */}



       <div className='flex flex-col mx-auto py-10'>

        <div className='bg-gradient-to-br from-slate-900 to-indigo-950 py-3 flex flex-col lg:flex-row lg:justify-evenly xl:justify-between 2xl:px-8'>

        <div className='flex py-3 mx-auto lg:my-auto'>
          <ul className='flex text-white text-[10px] sm:text-xs lg:text-md xl:text-lg xl:mx-6' >
              <li>
                <a className='mx-2 sm:mx-12 md:font-semibold leading-7 md:mx-8 lg:mx-6' href="pdfs/Terms-Conditions.pdf">Terms & Conditions</a>
              </li>

            <li>
                <a className='mx-2 sm:mx-12 md:font-semibold leading-7 md:mx-8 lg:mx-6' href="#">Privacy Policy</a>
              </li>

              <li>
              < a className='mx-2 sm:mx-12 md:font-semibold leading-7 md:mx-8 lg:mx-6' href="pdfs/WhitePaper.pdf">White Paper</a>
              </li>
          </ul> 
        </div>


        <div className='flex mx-auto  lg:my-auto'>
          <p className='text-white text-[10px] sm:text-xs sm:p-3 md:font-semibold leading-7 lg:mx-0  lg:text-md xl:text-lg xl:mx-12'>
            © 2023 by ableNFT Solutions. All rights reserved.</p>
        </div>

        </div>

      </div>

      </section>

    </main>
  )
}

export default App
