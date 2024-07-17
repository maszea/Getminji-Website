import iconApple from "../assets/images/icons/icon-apple.svg";
import minjiYellow from "../assets/images/illustrations/illustration-yellow.svg";
import minjiBlack from "../assets/images/illustrations/illustration-black.svg";
import appIllustration from "../assets/images/illustrations/illustration-app.png";
import dotsIllustration from "../assets/images/illustrations/illustration-dots.png";

export default function hero() {
    return (
        <>
            <div className={"pb-14"}>
                <div className={"container mx-auto"}>
                    <div className={"flex flex-row justify-center"}>
                        <div className={"py-14 hidden lg:block"}>
                            <img src={minjiBlack} alt={"Minji"} width={340} height={340}/>
                        </div>
                        {/*HERO TEXT*/}
                        <div className={"text-center"}>
                            <h1 className={"font-ohno font-bold text-4xl sm:text-8xl pb-8 text-center leading-tight"}>
                                Track your project Anywhere. Anytime.
                            </h1>
                            <p className={"font-ohno font-normal text-slate-500 text-xl text-center px-[5%] sm:px-[28%]"}>Minji is a
                                simple app for managing your personal project. <span
                                    className={"font-medium text-black"}>
                                    It’s free and it’s fully offline!</span>
                            </p>
                            <div className={"py-10"}>
                                <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4
                                focus:outline-none focus:ring-[#050708]/50 font-bold rounded-full text-xl text-center inline-flex
                                 items-center px-8 py-4">
                                    <img src={iconApple} alt="icon" width={16} height={16} className={"mr-4"}/>
                                    Download
                                </button>
                            </div>
                        </div>
                        <div className={"py-14 hidden lg:block"}>
                            <img src={minjiYellow} alt={"Minji"} width={340} height={340}/>
                        </div>
                    </div>
                </div>
                <div className="relative w-full overflow-hidden">
                    <img
                        src={appIllustration}
                        alt="App Screenshot"
                        className="relative z-10 w-[80%] sm:w-[50%] mx-auto"
                    />
                    <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 overflow-hidden w-[220%] sm:w-[120%]">
                        <img
                            src={dotsIllustration}
                            alt="Doodles"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
