import { NavLink } from "react-router"

function PredictPage() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3VzdmtuZGxybWpsY3gzYjc1MG80NGR0MWlodG9md2RveXE3ZmFxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eyupvI48Z0b0Ax1txM/giphy.gif"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Kelompok #</h1>
          <p className="py-6">
            Sakit Jantung? Takut Kena Serangan Jantung? Ayo Prediksi Serangan Jantung
          </p>
          <NavLink to="/predict" className="btn btn-primary">Tekan Saya</NavLink>
        </div>
      </div>
    </div>
  )
}

export default PredictPage