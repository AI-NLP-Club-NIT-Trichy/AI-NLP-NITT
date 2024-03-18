/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import linked from '../../public/images/linkedin.png';

const Memb= (props) => {
    const {id,image,name,position}= props.data;
    return (
        <article className="card h-[300px] border-gradient btn-gradient-1 ">
            <img src={image} alt="" className="object-cover image" />
            {/* <a id="linkhover"> <img src={linked}/></a> */}
            <div className="border-4">
                <h5 className="text text-center font-bold">{name}</h5>
                <h4 className="text text-center font-medium">{position}</h4>
                
            </div>
        </article>
    );
}

export default Memb;