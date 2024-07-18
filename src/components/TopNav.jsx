import iconAppleWhite from '.././assets/images/icons/icon-apple-white.svg'
import iconTwitter from '.././assets/images/icons/icon-twitter.svg'
import iconDribbble from '.././assets/images/icons/icon-dribbble.svg'
import logo from '.././assets/images/logo.svg'

export default function topNav() {
    return (
        <>
            <div className={"container mx-auto"}>
                <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4">
                    <div className="md:flex flex-row items-center space-x-4 hidden sm:block">
                        <a href={"https://x.com/helloalzea"} target={"_blank"} className="flex items-center text-black
                        space-x-2 hover:text-cyan-500 transition
                        duration-300 ease-in-out">
                            <img src={iconTwitter} alt="icon" width={18} height={18} />
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
                    <div className="justify-center hidden sm:block">
                        <a href={"https://www.getminji.app"}>
                            <img src={logo} alt="Useminji Logo" className="h-8"/>
                        </a>
                    </div>
                    <div className={"hidden sm:block"}>
                        <a href={"https://apps.apple.com/app/minji/id6535674383"} target={"_blank"}>
                            <button type="button"
                                    className="text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none
                                     focus:ring-[#050708]/50 font-bold rounded-full text-xl text-center inline-flex
                                     items-center px-6 py-3">
                                <img src={iconAppleWhite} alt="icon" width={16} height={16} className={"mr-4"}/>
                                Download
                            </button>
                        </a>
                    </div>
                    <div className={"flex flex-row sm:hidden"}>
                        <div className="py-2 pr-10">
                            <img src={logo} alt="Useminji Logo" className="h-7 sm:h-8"/>
                        </div>
                        <div className={"pl-10"}>
                            <a href={"https://apps.apple.com/app/minji/id6535674383"} target={"_blank"}>
                                <button type="button"
                                        className="text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none
                                 focus:ring-[#050708]/50 font-bold rounded-full text-xl text-center inline-flex
                                 items-center py-2 px-4 sm:px-6 sm:py-3 transition
                        duration-300 ease-in-out">
                                    <img src={iconAppleWhite} alt="icon" width={16} height={16} className={"mr-4"}/>
                                    Download
                                </button>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className={"pb-20 sm:pb-40"}/>
        </>
    );
}
