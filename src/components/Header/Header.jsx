import React from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn from '../Button/ThemeBtn'

const Header = () => {
    return (
        <div className={` `}>
            <nav className={ ` py-2 bg-black/50 border-b border-stone-700 h-fit flex flex-col flex-center`}>
                {/* ##### start upper part from nav */}
                {/* <div className={`flex flex-row flex-center`} >
                    <div className={`btn`}>
                        <Link to={'home'}>
                            <button>Home</button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder='Search . . . '  className="input w-[180px]" />
                        <ThemeBtn/>
                    </div>
                    <div className={`btn`}>
                    <Link to={'login'}>
                        <span>Log in</span>
                    </Link>
                    </div>
                </div> */}
                {/* ##### end upper part from nav */}
                {/* ##### start lower part from nav */}
                <div className="flex flex-row flex-center">
                    <div>
                        <Link to={'hangMan'}>
                            <button className="content-btn">Hang Man</button>
                        </Link>
                        <Link to={'memoryBlocks'}>
                            <button className="content-btn">Memory Blocks</button>
                        </Link>
                        {/* <Link to={'guessWord'}>
                            <button className="content-btn">Guess The Word</button>
                        </Link>
                        <Link to={'js'}>
                            <button className="content-btn">JS</button>
                        </Link> */}
                    </div>
                </div>
                {/* ##### end lower part from nav */}
            </nav>
        </div>
)
}

export default Header
