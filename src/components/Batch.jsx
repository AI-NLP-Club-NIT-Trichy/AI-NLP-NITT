import React from 'react'
import ProfileCard from './ProfileCard'
const Batch = (props) => {
  return (
    <div>

<div className="text-4xl  w-full  text-start p-5">{props.year}</div>

<div className="flex flex-wrap justify-center items-center gap-5">
  {props.membersData.map((details, index) => {
    return <ProfileCard details={details} key={index} />;
  })}
</div>
    </div>
  )
}

export default Batch