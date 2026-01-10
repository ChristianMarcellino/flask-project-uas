import { NavLink } from "react-router"
import previewImg from "../assets/images/preview.png";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookOpen, faHeartPulse } from '@fortawesome/free-solid-svg-icons'

function PredictPage() {

  useEffect(() => {
    document.title = "Dashboard";
  }, [])

  return (
    <section className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-12 lg:grid-cols-12">
        
        <div className="mr-auto place-self-center lg:col-span-7">

          <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl xl:text-6xl">
            Heart Attack Risk Prediction
          </h1>

          <p className="max-w-2xl mb-8 text-lg text-gray-400 leading-relaxed">
            Predict potential heart attack risks using data-driven medical insights.
            Designed to support early awareness — not to replace professional diagnosis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/predict"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 rounded-2xl bg-green-500 hover:bg-green-600 transition-all hover:shadow-lg hover:shadow-green-500/20"
            >
              <span>Start Prediction</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 ml-2" />
            </NavLink>

            <NavLink
              to="/learn-more"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-300 border border-gray-700 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5 mr-2" />
              <span>Learn More</span>
            </NavLink>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">98%</p>
              <p className="text-xs text-gray-500 mt-1">Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">8</p>
              <p className="text-xs text-gray-500 mt-1">Parameters</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
            <img
              src={previewImg}
              alt="Heart health analysis"
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PredictPage