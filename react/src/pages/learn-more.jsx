import { NavLink } from "react-router";
import heart_attack from "../assets/images/heart_attack.jpg";
import aduhduh from "../assets/images/aduhduh.jpg";
import medicine from "../assets/images/medicine.jpg"
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartPulse, faStethoscope, faPills, faExclamationTriangle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function LearnMore() {
    
useEffect(() => {
    document.title = "About Heart Attack"
  }, [])

    return (
        <section className="min-h-screen w-screen bg-slate-800">
            <div className="max-w-5xl mx-auto px-4 py-20">
                <div className="mb-12">
                    <NavLink to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
                        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Back to Dashboard</span>
                    </NavLink>
                    <div className="text-center mb-4">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                            <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-red-500 mr-2" />
                            <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">Medical Guide</span>
                        </div>
                        <h1 className="text-xl md:text-6xl font-extrabold text-white mb-4">
                            Understanding Heart Attacks
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Essential information about heart attacks, symptoms, and recovery
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-3 bg-red-500/10 rounded-xl">
                                <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-red-500" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                What is a Heart Attack?
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-lg text-gray-400 leading-relaxed mb-4">
                                    A heart attack (myocardial infarction) is an extremely dangerous condition that happens because you don't have enough blood flow to some of your heart muscle.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    This lack of blood flow can occur because of many different factors but is usually related to a blockage in one or more of your heart's arteries.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/10 blur-2xl rounded-full"></div>
                                <img
                                    src={heart_attack}
                                    alt="Heart Attack"
                                    className="relative rounded-xl shadow-xl border border-gray-800 w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-3 bg-red-500/10 rounded-xl">
                                <FontAwesomeIcon icon={faHeartPulse} className="w-6 h-6 text-red-500" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                What Happens During a Heart Attack?
                            </h2>
                        </div>
                        
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            When a heart attack happens, blood flow to a part of your heart stops or is far below normal, which causes injury or death to that part of your heart muscle.
                        </p>
                        
                        <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                            <p className="text-gray-400 leading-relaxed">
                                <span className="font-semibold text-white">Critical Impact:</span> When a part of your heart can't pump because it's dying from lack of blood flow, it can disrupt the pumping function of your heart. This can reduce or stop blood flow to the rest of your body, which can be deadly if someone doesn't correct it quickly.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-3 bg-red-500/10 rounded-xl">
                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6 text-red-500" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Recognizing the Symptoms
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">How It Feels (Uhuk Uhuk)</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Many people feel pain in their chest during a heart attack. It can feel like discomfort, squeezing or heaviness, or it can feel like crushing pain. It may start in your chest and spread to other areas like your left arm, shoulder, neck, jaw, back or down toward your waist.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/10 blur-2xl rounded-full"></div>
                                <img
                                    src={aduhduh}
                                    alt="Symptoms"
                                    className="relative rounded-xl shadow-xl border border-gray-800 w-full"
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">Common Warning Signs</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Chest Pain</p>
                                    <p className="text-sm text-gray-400">Angina or discomfort</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Breathing Issues</p>
                                    <p className="text-sm text-gray-400">Shortness of breath</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Sleep Problems</p>
                                    <p className="text-sm text-gray-400">Insomnia or fatigue</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Nausea</p>
                                    <p className="text-sm text-gray-400">Stomach discomfort</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Heart Palpitations</p>
                                    <p className="text-sm text-gray-400">Irregular heartbeat</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Anxiety</p>
                                    <p className="text-sm text-gray-400">Feeling of impending doom</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-800 rounded-xl border border-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Dizziness</p>
                                    <p className="text-sm text-gray-400">Lightheaded or fainting</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                            <p className="text-sm text-gray-300 leading-relaxed">
                                <span className="font-semibold text-yellow-400">Important Note:</span> Men and women may experience different symptoms. Women are less likely to have chest pain and more likely to experience shortness of breath, fatigue, insomnia, nausea, and pain in the back, shoulders, neck, arms or abdomen.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-3 bg-green-500/10 rounded-xl">
                                <FontAwesomeIcon icon={faPills} className="w-6 h-6 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-extrabold text-white">
                                Recovery & Self-Care
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Essential Medications</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    After a heart attack, you'll continue to take medicines long-term. These medications help prevent future heart attacks and manage your heart health.
                                </p>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 text-center">
                                        <p className="text-white font-semibold">Beta-blockers</p>
                                    </div>
                                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 text-center">
                                        <p className="text-white font-semibold">ACE Inhibitors</p>
                                    </div>
                                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 text-center">
                                        <p className="text-white font-semibold">Aspirin</p>
                                    </div>
                                    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 text-center">
                                        <p className="text-white font-semibold">Statins</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/10 blur-2xl rounded-full"></div>
                                <img
                                    src={medicine}
                                    alt="Medicine"
                                    className="relative rounded-xl shadow-xl border border-gray-800 w-full"
                                />
                            </div>
                        </div>

                        <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                            <h3 className="text-lg font-semibold text-green-400 mb-3">Heart-Healthy Lifestyle</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Along with your medicines, it's important to follow a heart-healthy lifestyle. Eat nutritious foods, stay active with safe exercises, avoid smoking, limit alcohol, manage stress, and attend regular check-ups. These steps help protect your heart and reduce the risk of another heart attack.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
                        <FontAwesomeIcon icon={faStethoscope} className="w-8 h-8 text-blue-400 mb-3" />
                        <p className="text-gray-300 leading-relaxed">
                            <span className="font-semibold text-blue-400">Medical Disclaimer:</span> This information is for educational purposes only and should not replace professional medical advice. If you experience symptoms of a heart attack, seek immediate emergency medical attention.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LearnMore;