import React from 'react';
import "./style.css";
import { products } from '../../../data/data (1)';

export default function BoxMilk(props) {
    return (
        <>
            <span>
                <div className='boxBig'>
                    <div className='box1'>
                        <img className='boxImg' src={props.img} alt={props.img}></img>
                    </div>
                    <div className='box2'>
                        <h1>{props.name}</h1>
                        <p>{props.desc}</p>
                        <div className='box3'>
                            <p>{props.price}</p>
                            <button>Mua Ngay</button>
                        </div>
                    </div>
                </div>
            </span>
        </>
    )
}
