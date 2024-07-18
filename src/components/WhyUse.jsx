import iconFree from '../assets/images/icons/icon-free.svg';
import iconOffline from '../assets/images/icons/icon-offline.svg';
import iconCat from '../assets/images/icons/icon-cat.svg';
import { motion } from "framer-motion"

export default function whyUse() {
    const features = [
        {
            icon: iconFree,
            title: "It's free",
            description: "Get a simple project tracking app without spending a dime. It's 100% free. Forever."
        },
        {
            icon: iconOffline,
            title: "It's offline",
            description: "Keep things moving even without the internet. Manage your projects anytime, anywhere."
        },
        {
            icon: iconCat,
            title: "It's simple",
            description: "A straightforward app to keep your projects on track. Fast, easy to use, no extra fuss."
        }
    ];

    return (
        <div className="container mx-auto pb-20 sm:pb-40">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                animate={{y: -40}}
                transition={{type: "spring", delay: 0.25}}
                viewport={{once: true}}
            >
                <h2 className="text-3xl sm:text-5xl font-bold text-center pb-4 sm:pb-6">Why use minji?</h2>
                <p className="text-xl text-center text-gray-600 pb-14">
                    It gets the 💩 done. No more. No less.
                </p>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                animate={{y: -40}}
                transition={{type: "spring", bounce: 0.25, delay: 0.5}}
                viewport={{ once: true }}
            >
                <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-40">
                    {features.map((feature, index) => (
                        <div key={index} className="text-left p-8 bg-slate-50 rounded-2xl hover:bg-yellow-300 transition
                        duration-500 ease-in-out">
                            <div className={"flex flex-row"}>
                                <img src={feature.icon} alt={feature.title} className="pr-4 w-[15%] sm:w-[12.9%]"/>
                                <h3 className="text-2xl font-bold">{feature.title}</h3>
                            </div>
                            <p className="text-gray-500 pt-4 font-normal text-xl sm:text-lg hover:text-black">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
);
}
