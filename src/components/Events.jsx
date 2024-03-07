// const Events = () => {
//   return (
//     <div className="flex">
//       <div className="flex-container">
//         <div className="flex-col">
//           <div className="mx-12">
//             <h1
//               style={{
//                 fontSize: "36px",
//                 fontStyle: "strong",
//                 marginTop: "60px",
//               }}
//             >
//               Meteor
//             </h1>
//           </div>
//           <p className="mx-12" style={{ fontSize: "20px" }}>
// To give your brain a creative spin by testing your technical skills,
// this event was organized by TEAM AI & NLP on 2nd February 2020. It
// consists of questions revolving debugging, coding and objective
// type. The event was a great success as it involves variety of
// questions encouraging more and more students to participate. The
// winners of this competition were then rewarded with amazing cash
// prizes and certificates.
//           </p>
//           <div className="mx-12">
//             <button
//               className="btn btn-lg mt-5 border"
//               style={{ fontSize: "20px", padding: "10px" }}
//             >
//               View Details
//             </button>
//           </div>
//         </div>
//         <div className="flex">
//           <img
//             className="img-fluid -mx-5"
//             src="../public/images/events/meteor1.jpg"
//             style={{ height: "20em", width: "100em", marginTop: "85px" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;

// import React from "react";

// export default function Events() {
//   const clubEvents = [
//     {
//       title: "Meteor",
//       description:
//         "To give your brain a creative spin by testing your technical skills, this event was organized by TEAM AI & NLP on 2nd February 2020. It consists of questions revolving debugging, coding and objective type. The event was a great success as it involves variety of questions encouraging more and more students to participate. The winners of this competition were then rewarded with amazing cash prizes and certificates.",
//       image: "../public/images/events/meteor1.jpg",
//     },
//     {
//       title: "Club Event 2",
//       description: "Description of Club Event 2 goes here",
//       image: "club-event-image2.jpg",
//     },
//     {
//       title: "Club Event 3",
//       description: "Description of Club Event 3 goes here",
//       image: "club-event-image3.jpg",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center">
//       {clubEvents.map((event, index) => (
//         <div key={index} className="flex justify-space-between ">
//           <div className="mw-100">
//             <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-4">
//               <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
//                 <div className="flex items-center">
//                   <div className="w-1/2">
//                     <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
//                       {event.title}
//                     </h2>
//                     <p>{event.description}</p>
//                   </div>
//                   <div className="flex items-center">
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="my-4 ml-4"
//                     />
//                   </div>
//                 </div>
//                 <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// const Events = () => {
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="ml-2 mr-2 mx-auto p-6 bg-white rounded-lg shadow-lg my-4">
//         <div className="flex items-center ">
//           <img
//             src="https://source.unsplash.com/random/200x200"
//             alt="Event"
//             className="w-32 h-32 object-cover rounded-lg float-right"
//             style={{ float: "right", marginLeft: "10px" }}
//           />
//           <div className="ml-6">
//             <h2 className="text-2xl font-bold">Meteor 1</h2>
//             <p className="text-gray-600 mt-2">
//               To give your brain a creative spin by testing your technical
//               skills, this event was organized by TEAM AI & NLP on 2nd February
//               2020. It consists of questions revolving debugging, coding and
//               objective type. The event was a great success as it involves
//               variety of questions encouraging more and more students to
//               participate. The winners of this competition were then rewarded
//               with amazing cash prizes and certificates.
//             </p>
//             <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="ml-2 mr-2 mx-auto p-6 bg-white rounded-lg shadow-lg my-4">
//         <div className="flex items-center">
//           <img
//             src="https://source.unsplash.com/random/200x200"
//             alt="Event"
//             className="w-32 h-32 object-cover rounded-lg"
//           />
//           <div className="ml-6">
//             <h2 className="text-2xl font-bold">Meteor 2</h2>
//             <p className="text-gray-600 mt-2">
//               To give your brain a creative spin by testing your technical
//               skills, this event was organized by TEAM AI & NLP on 2nd February
//               2020. It consists of questions revolving debugging, coding and
//               objective type. The event was a great success as it involves
//               variety of questions encouraging more and more students to
//               participate. The winners of this competition were then rewarded
//               with amazing cash prizes and certificates.
//             </p>
//             <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="ml-2 mr-2 mx-auto p-6 bg-white rounded-lg shadow-lg my-4">
//         <div className="flex items-center">
//           <img
//             src="https://source.unsplash.com/random/200x200"
//             alt="Event"
//             className="w-32 h-32 object-cover rounded-lg"
//           />
//           <div className="ml-6">
//             <h2 className="text-2xl font-bold">Meteor 3</h2>
//             <p className="text-gray-600 mt-2">
//               To give your brain a creative spin by testing your technical
//               skills, this event was organized by TEAM AI & NLP on 2nd February
//               2020. It consists of questions revolving debugging, coding and
//               objective type. The event was a great success as it involves
//               variety of questions encouraging more and more students to
//               participate. The winners of this competition were then rewarded
//               with amazing cash prizes and certificates.
//             </p>
//             <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;

const Events = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="w-[500px] h-[300px] mx-auto my-4"
          src="../public/images/events/meteor1.jpg"
          alt="oops!"
        />
        <div className="flex flex-col ">
          <h1 className="font-bold py-1" style={{ fontSize: "x-large" }}>
            Meteor 1
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            possimus aliquam error ex magnam nulla, impedit dicta placeat
            repellendus. Ipsa debitis, quibusdam praesentium labore sit
            exercitationem odio vero animi voluptas?
          </p>
          <button className="bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            View Details
          </button>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px]  mx-auto my-4"
          src="../public/images/events/meteor1.jpg"
          alt="oops!"
        />
        <div className="flex flex-col ">
          <h1 className="font-bold" style={{ fontSize: "x-large" }}>
            Meteor 1
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            possimus aliquam error ex magnam nulla, impedit dicta placeat
            repellendus. Ipsa debitis, quibusdam praesentium labore sit
            exercitationem odio vero animi voluptas?
          </p>
          <button className="bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default Events;
