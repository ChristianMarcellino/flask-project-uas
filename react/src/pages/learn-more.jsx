import { NavLink } from "react-router";
import heart_attack from "../assets/images/heart_attack.jpg";
import aduhduh from "../assets/images/aduhduh.jpg";
import medicine from "../assets/images/medicine.jpg"
import { useEffect } from "react";

function LearnMore() {
    
useEffect(() => {
    document.title = "About Heart Attack";
  }, [])
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 lg:grid-cols-12">

               <div className="lg:col-span-7 flex flex-col justify-center bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                        What is a heart attack?
                    </h1>
                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400">
                        A heart attack (myocardial infarction) is an extremely dangerous condition that happens because you don’t have enough blood flow to some of your heart muscle. This lack of blood flow can occur because of many different factors but is usually related to a blockage in one or more of your heart’s arteries.
                    </p>
                </div>
                <div className="lg:col-span-5 lg:flex items-center justify-center">
                    <img
                        src={heart_attack}
                        alt="Heart Attack"
                        className="rounded-xl shadow-lg opacity-80 hover:opacity-90 transition-opacity duration-300"
                    />
                </div>
            </div>

            <div className="grid max-w-screen-xl px-6 py-16 mx-auto lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-6 flex flex-col justify-center bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8 lg:mb-0">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white mb-6">
                        What exactly happens during a heart attack?
                    </h1>
                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        When a heart attack happens, blood flow to a part of your heart stops or is far below normal, which causes injury or death to that part of your heart muscle. When a part of your heart can’t pump because it’s dying from lack of blood flow, it can disrupt the pumping function of your heart. 
                        This can reduce or stop blood flow to the rest of your body, which can be deadly if someone doesn’t correct it quickly.
                    </p>
                </div>
                <div className="lg:col-span-6 flex flex-col justify-center bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white mb-6">
                        What does a heart attack feel like?
                    </h1>
                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Many people feel pain in their chest during a heart attack. 
                        It can feel like discomfort, squeezing or heaviness, or it can feel like crushing pain. 
                        It may start in your chest and spread (or radiate) to other areas like your left arm (or both arms), shoulder, neck, jaw, back or down toward your waist.
                    </p>
                </div>
            </div>

            <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 lg:grid-cols-12">
                <div className="hidden lg:flex lg:col-span-6">
                    <img
                        src={aduhduh}
                        alt="aduhduh"
                        className="rounded-xl shadow-lg opacity-80 hover:opacity-90 transition-opacity duration-300"
                    />
                </div>
                <div className="mr-auto place-self-center lg:col-span-6 bg-gray-800 rounded-xl px-5 shadow-xl">
                    <h1 className="max-w-2xl mb-4 p-3 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                        What are the symptoms of a heart attack?
                    </h1>

                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400">
                        • Chest pain (angina)<br />
                        • Shortness of breath or trouble breathing<br />
                        • Trouble sleeping (insomnia)<br />
                        • Nausea or stomach discomfort<br />
                        • Heart palpitations<br />
                        • Anxiety or a feeling of “impending doom”<br />
                        • Feeling lightheaded, dizzy or passing out<br />
                        <br />
                        Men are likely to have different heart attack symptoms. Women are less likely to have chest pain or discomfort that feels like indigestion. They’re more likely to have shortness of breath, fatigue and insomnia that started before the heart attack. They also have nausea and vomiting or pain in their back, shoulders, neck, arms or abdomen.
                    </p>
                </div>
            </div>
            <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 lg:grid-cols-12">

                <div className="mr-auto place-self-center lg:col-span-6 bg-gray-800 rounded-xl px-5 shadow-xl">
                    <h1 className="max-w-2xl mb-4 p-3 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                        How do I take care of myself ?
                    </h1>
                    <p className="max-w-2xl mb-6 mt-6 text-lg p-3 text-gray-600 dark:text-gray-400">
                        After a heart attack, you’ll continue to take medicines — some of which you received for immediate treatment of your heart attack — long term.
                        These include:<br />
                        • Beta-blockers<br />
                        • ACE inhibitors<br />
                        • Aspirin and other blood-thinning agents<br />
                        • Statins <br />
                        
                        Along with your medicines, it’s important to follow a heart-healthy lifestyle. Eat nutritious foods, stay active with safe exercises, avoid smoking, limit alcohol, manage stress, and attend regular check-ups. These steps help protect your heart and reduce the risk of another heart attack.
                    </p>
                </div>
                <div className="hidden lg:flex lg:col-span-6">
                    <img
                        src={medicine}
                        alt="Medicine"
                        className="rounded-xl shadow-lg opacity-80 hover:opacity-90 transition-opacity duration-300"
                    />
                </div>
            </div>
        </section>


    )
}
export default LearnMore;