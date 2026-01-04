import { NavLink } from "react-router"
import previewImg from "../assets/images/preview.png";

function PredictPage() {
  return (
    // <div className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img
    //       src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VzdmtuZGxybWpsY3gzYjc1MG80NGR0MWlodG9md2RveXE3ZmFxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eyupvI48Z0b0Ax1txM/giphy.gif"
    //       className="max-w-sm rounded-lg shadow-2xl"
    //     />
    //     <div>
    //       <h1 className="text-5xl font-bold">Kelompok #</h1>
    //       <p className="py-6">
    //         Sakit Jantung? Takut Kena Serangan Jantung? Ayo Prediksi Serangan Jantung
    //       </p>
    //       <NavLink to="/predict" className="btn btn-primary">Tekan Saya</NavLink>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 lg:grid-cols-12">
    
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
        Heart Attack Risk Prediction
      </h1>

      <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400">
        Predict potential heart attack risks using data-driven medical insights.
        Designed to support early awareness — not to replace professional diagnosis.
      </p>

      <NavLink
        to="/predict"
        className="inline-flex items-center justify-center px-6 py-3 mr-3 text-base font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
      >
        Start Prediction
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </NavLink>

      <NavLink
        to="/learn-more"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-400 border border-blue-300 rounded-lg hover:bg-blue-50 transition"
      >
        Learn More
      </NavLink>
    </div>

    <div className="hidden lg:flex lg:col-span-5">
      <img
        src={previewImg}
        alt="Heart health analysis"
        className="rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

  )
}

export default PredictPage

