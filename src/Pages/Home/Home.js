import React, {useState} from "react";
import Navb from "../../components/Navb";
import Welcome from "../../components/Welcome";
import Speakers from "../../components/Speakers";
import Menu from "../../components/Menu";
import Landing from "../../components/Landing";
import Madeit from "../../components/Madeit";
import Gallery from "../../components/Gallery";

export default function Home() {
    const [showMenu, setShowMenu] = useState(false);

    return(
        <>
            <div className={'z-50 absolute w-screen'}>
                <Navb menuControl={setShowMenu} menuState={showMenu}/>
            </div>
            {!showMenu &&
                <div>
                    <Landing />
                    <Welcome />
                    <Speakers />
                    <Madeit />
                    <Gallery />
                </div>
            }
            {showMenu &&
                <div>
                    <Menu />
                </div>
            }
        </>
    )
}