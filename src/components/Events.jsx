import Background from "./background/Background";

export default function Events() {
  const clubEvents = [
    {
      title: "Meteor",
      description:
        "To give your brain a creative spin by testing your technical skills, this event was organized by TEAM AI & NLP on 2nd February 2020. It consists of questions revolving debugging, coding and objective type. The event was a great success as it involves variety of questions encouraging more and more students to participate. The winners of this competition were then rewarded with amazing cash prizes and certificates.",
      image: "../images/events/meteor1.jpg",
    },
    {
      title: "AI_CATECHISM",
      description:
        "To unlock the knowledge of AI, students had to make technical memes revolving artificial intelligence and its field. This was a fun event which involves students to have a bit knowledge about AI and their creative skills. The event was a great hit as a lot of students participated with full enthusiasm. Based on how different, thoughtful and creative your meme is, winners were selected and rewarded with cash prizes and certificates.",
      image: "../images/events/aicat1.jpg",
    },
    {
      title: "INNOPRENEURS",
      description:
        "By showing where your imagination can take you into the world of advancement, students had to present their project ideas related to AI field by making a power point presentation. On the basis of how innovative, different and useful their idea is and how wonderfully they have presented it, the winners were shortlisted. All in all, it was a great event as it impressed everyone by such advanced and creative project ideas coming out of the beautiful minds of the students. The winners were then rewarded with cash prizes and certificates.",
      image: "../images/events/inno1.jpg",
    },
  ];

  return (
    <div className="bg-black text-white w-full flex items-center justify-center flex-col mb-5">
      {clubEvents.map((event, index) => (
        <div
          className=" flex items-center justify-center gap-6 p-0.5 lg:p-6 w-full lg:w-[1200px] flex-col lg:flex-row"
          key={index}
        >
          <div className="pl-5 pr-5 pb-5 mt-10">
            <h2 className="font-bold text-2xl sm:text-3xl mb-5 lg:mb-10">
              {event.title}
            </h2>
            <p className="text-base mr-0 lg:mr-10 sm:text-xl">
              {event.description}
            </p>
          </div>
          <img
            className="w-80 lg:w-[600px] h-64 lg:h-80 transition duration-300 ease-in-out hover:scale-110 rounded-xl"
            src={event.image}
            alt={event.title}
          />
        </div>
      ))}
    </div>
  );
}
