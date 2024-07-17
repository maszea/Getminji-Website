import iconTwitter from '.././assets/images/icons/icon-twitter.svg'
import iconDribbble from '.././assets/images/icons/icon-dribbble.svg'
import logo from '.././assets/images/logo.svg'

export default function topNav() {
    return (
        <>
            <div className={"bg-slate-50 border-t border-slate-200"}>
                <div className={"container mx-auto flex flex-col sm:flex-row p-4"}>
                    <div className="flex-1 p-2 sm:p-4">
                        <img src={logo} alt="Useminji Logo" className="h-6 sm:h-8"/>
                    </div>
                    <div className="flex flex-row sm:justify-between items-center p-2 sm:p-4 space-x-4">
                        <a href="#" className="flex items-center text-black space-x-2 hover:text-slate-700">
                            <img src={iconTwitter} alt="icon" width={18} height={18}/>
                            <span className={"font-bold text-xl"}>X (Twitter)</span>
                        </a>
                        <span className={"font-bold"}>•</span>
                        <a href="#" className="flex items-center text-black space-x-2 hover:text-slate-700">
                            <img src={iconDribbble} alt="icon" width={18} height={18}/>
                            <span className={"font-bold text-xl"}>Dribbble</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
