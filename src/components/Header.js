import React from "react";
import {FaCartArrowDown} from 'react-icons/fa'
export default function Header(props){
    const {cartitemsno}=props;
    return(
        <div>
            <header className="row block center">
                <div>
                    <a href="#">
                        <h1>Shopping Cart </h1>
                    </a>
                </div>
                <div>
                    <a href="cart">
                    <FaCartArrowDown />{' '}
                        {

                            cartitemsno ?(
                                <button className="badge">{cartitemsno}</button>
                            ):''
                        }
                        </a> <a href="signin">Signin</a>
                </div>
            </header>
        </div>
    )
}