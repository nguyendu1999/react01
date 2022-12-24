import React from 'react';
import "./style.css";

export default function BoxMilk(props) {
    return (
        <>
            <div className='boxBig'>
                <div className='box1'>
                    <img className='boxImg' src={props.img} alt={props.img}></img>
                </div>
                <div className='box2'>
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                    <div className='box3'>
                        <p>{props.price}</p>
                        <button>Mua Ngay</button>
                    </div>
                </div>
            </div>
        </>
    )
}
