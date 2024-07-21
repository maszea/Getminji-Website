import iconApple from "../assets/images/icons/icon-apple.svg";
import minjiYellow from "../assets/images/illustrations/illustration-yellow.svg";
import minjiBlack from "../assets/images/illustrations/illustration-black.svg";
import appIllustration from "../assets/images/illustrations/illustration-app.png";
import dotsIllustration from "../assets/images/illustrations/illustration-dots.png";
import { motion } from "framer-motion"

export default function hero() {
    return (
        <>
            <div className={"pb-14"}>
                <div className={"container mx-auto"}>
                    <div className={"flex flex-row justify-center"}>
                        <div className={"py-14 hidden lg:block"}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                animate={{y: -40}}
                                transition={{type: "spring", delay: 0.35}}
                                viewport={{ once: true }}
                            >
                                <img src={minjiBlack} alt={"Minji"} width={600} height={600} />
                            </motion.div>
                        </div>
                        {/*HERO TEXT*/}
                        <div className={"text-center"}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                animate={{y: -40}}
                                transition={{type: "spring", delay: 0.25}}
                                viewport={{ once: true }}
                            >
                                <h1 className={"font-ohno font-bold text-4xl sm:text-8xl pb-8 text-center leading-tight"}>
                                    Track your project Anywhere. Anytime.
                                </h1>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                animate={{y: -40}}
                                transition={{type: "spring", delay: 0.5}}
                                viewport={{ once: true }}
                            >
                                <p className={"font-ohno font-normal text-slate-500 text-xl text-center px-[5%] sm:px-[28%]"}>
                                    Minji is a simple app for managing your personal project. <span
                                    className={"font-medium text-black"}>
                                It’s 100% Free and Offline, forever!</span>
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                animate={{y: -40}}
                                transition={{type: "spring", delay: 0.75}}
                                viewport={{ once: true }}
                            >
                                <div className={"py-10"}>
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        transition={{type: "spring", damping: 5}}
                                    >
                                        <a href={"https://apps.apple.com/app/minji/id6535674383"} target={"_blank"}>
                                            <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4
                                focus:outline-none focus:ring-[#050708]/50 font-bold rounded-full text-xl text-center inline-flex
                                 items-center px-8 py-4">
                                                <img src={iconApple} alt="icon" width={16} height={16} className={"mr-4"}/>
                                                Download
                                            </button>
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className={"py-14 hidden lg:block"}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                animate={{y: -40}}
                                transition={{type: "spring", delay: 0.30}}
                                viewport={{ once: true }}
                            >
                                <img src={minjiYellow} alt={"Minji"} width={600} height={600}/>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full">
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        animate={{y: -40}}
                        transition={{type: "spring", delay: 0.65}}
                        viewport={{ once: true }}
                    >
                        <img
                            src={appIllustration}
                            alt="App Screenshot"
                            className="relative z-50 w-[80%] sm:w-[50%] mx-auto"
                        />
                    </motion.div>
                    <div
                        className="absolute -z-50 inset-0 top-1/2 transform -translate-y-1/2 w-[100%]">
                        <img
                            src={dotsIllustration}
                            alt="Doodles"
                            className="w-full -z-50"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
