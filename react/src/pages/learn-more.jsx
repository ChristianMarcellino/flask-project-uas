import { NavLink } from "react-router";
import heart_attack from "../assets/images/heart_attack.jpg";
import aduhduh from "../assets/images/aduhduh.jpg";
import medicine from "../assets/images/medicine.jpg"
function LearnMore() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 lg:grid-cols-12">

                <div className="mr-auto place-self-center lg:col-span-7 bg-white shadow-xl px-5 py-30 rounded-2xl">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                        What is a heart attack?
                    </h1>

                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400">
                        A heart attack (myocardial infarction) is an extremely dangerous condition that happens because you don’t have enough blood flow to some of your heart muscle. This lack of blood flow can occur because of many different factors but is usually related to a blockage in one or more of your heart’s arteries.
                    </p>
                </div>

                <div className="hidden lg:flex lg:col-span-5">
                    <img
                        src={heart_attack}
                        alt="Heart Attack"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
            <div className="grid max-w-screen-xl px-9 py-16 mx-auto lg:gap-8 lg:grid-cols-12 bg-white rounded-2xl shadow-xl">

                <div className="mr-auto place-self-center lg:col-span-6">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                        What exactly happens during a heart attack?
                    </h1>

                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400">
                        When a heart attack happens, blood flow to a part of your heart stops or is far below normal, which causes injury or death to that part of your heart muscle. When a part of your heart can’t pump because it’s dying from lack of blood flow, it can disrupt the pumping function of your heart.
                        This can reduce or stop blood flow to the rest of your body, which can be deadly if someone doesn’t correct it quickly.
                    </p>
                </div>
                <div className="mr-auto place-self-center lg:col-span-6">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                        What does a heart attack feel like?
                    </h1>

                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400">
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
                        className="rounded-xl shadow-2xl"
                    />
                </div>
                <div className="mr-auto place-self-center lg:col-span-6 bg-white rounded-xl px-5 shadow-xl">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
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

                <div className="mr-auto place-self-center lg:col-span-6 bg-white rounded-xl px-5 shadow-xl">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                        How do I take care of myself ?
                    </h1>
                    <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400">
                        After a heart attack, you’ll continue to take medicines — some of which you received for immediate treatment of your heart attack — long term.
                        These include:<br />
                        • Beta-blockers<br />
                        • ACE inhibitors<br />
                        • Aspirin and other blood-thinning agents<br />
                        • Statins
                    </p>
                </div>
                <div className="hidden lg:flex lg:col-span-6">
                    <img
                        src={medicine}
                        alt="Medicine"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>


    )
}
export default LearnMore;