/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from "react";
import {team} from "./Members.jsx";
import Memb from "./Memb.jsx"

const MembersLayout = () =>{
    return (
    <div className="outer">
        {
            team.map((batch, i) => {

                return (<div key={i} className=" border">
                <h1 className="h1 font-bold text-center"> Batch - {batch.batch}</h1>
                <div className="cards">
                {batch.members.map((member) => (
                    <Memb key={member.id} data={member} />
                    ))}
                </div>
                 </div>
                )
            })
}
    </div>)
}

export default MembersLayout;