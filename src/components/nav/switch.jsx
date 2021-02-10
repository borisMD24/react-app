import React from "react";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg"
import ThemeContext from "../themeContext/index";


const Switcher = () => {
    const contextValue = React.useContext(ThemeContext);
    return(
        <div className="switch" title="changer de theme">
            <div className={`container ${contextValue.cssClassName}`} onClick={contextValue.switchTheme}>
                <div className="sun">
                    <img src={sun} alt="" srcset=""/>
                </div>
                <div className="moon">
                    <img src={moon} alt="" srcset=""/>
                </div>
            </div>
        </div>
    )
}
export default Switcher;