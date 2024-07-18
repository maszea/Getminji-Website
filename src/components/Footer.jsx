import iconTwitter from '.././assets/images/icons/icon-twitter.svg'
import iconDribbble from '.././assets/images/icons/icon-dribbble.svg'
import logo from '.././assets/images/logo.svg'

export default function topNav() {
    return (
        <>
            <div className={"bg-slate-50 border-t border-slate-200"}>
                <div className={"container mx-auto flex flex-col sm:flex-row p-4"}>
                    <div className="flex-1 p-2 sm:p-4">
                        <a href={"https://www.getminji.app"}>
                            <img src={logo} alt="Useminji Logo" className="h-6 sm:h-8"/>
                        </a>
                    </div>
                    <div className={"flex-1 py-2 sm:p-4"}>
                        <p className={"py-2 justify-center text-slate-500"}>Made with 💛 and 🍵 by
                            <a href={"https://x.com/helloalzea"} target={"_blank"}
                               className={"hover:text-yellow-500 transition\n" +
                                   "duration-300 ease-in-out"}> Alzea</a>
                        </p>
                    </div>
                    <div className="flex flex-row sm:justify-between items-center p-2 sm:p-4 space-x-4">
                        <a href={"https://x.com/helloalzea"} target={"_blank"} className="flex items-center text-black
                        space-x-2 hover:text-cyan-500 transition
                        duration-300 ease-in-out">
                            <img src={iconTwitter} alt="icon" width={18} height={18}/>
                            <span className={"font-bold text-xl"}>X (Twitter)</span>
                        </a>
                        <span className={"font-bold"}>•</span>
                        <a href={"https://dribbble.com/alzea"} target={"_blank"} className="flex items-center text-black
                         space-x-2 hover:text-pink-500 transition
                        duration-300 ease-in-out">
                            <img src={iconDribbble} alt="icon" width={18} height={18}/>
                            <span className={"font-bold text-xl"}>Dribbble</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
