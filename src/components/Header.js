import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import ShoppingCart from "./ShoppingCart";
import Search from './Search';
import cartImage from '../images/icons8-shopping-bag-32.png';
import cartImageBlack from '../images/icons8-shopping-bag-32-black.png';

const Header = ({cart,rfc,hs}) => {
    const [isVisible,setVisible] = useState(false);

    const handleDisplayDesc = () =>{
        setVisible(!isVisible);
    }

    let amount=0;
    if(cart.length>0) cart.map(el => amount+=el.quantity);

    return ( 
        <header className="header">
            <Search className={"header"} hs={hs}/>
            <div className="header__box" onClick={handleDisplayDesc}>
                <img className={isVisible ? "header__cartIcon header__cartIcon--active" : "header__cartIcon"} src={isVisible ? cartImageBlack : cartImage}></img>
                <span className="header__cartQuantity">{amount}</span>
            </div>
            <CSSTransition
                in={isVisible}
                timeout={500}
                classNames="shoppingCart"
                unmountOnExit
            >
                <ShoppingCart cart={cart} rfc={rfc}/>
            </CSSTransition>        
        </header>
    );
}
 
export default Header;