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
    <div className="w-full">
      <div className=" w-[min(1100px,100%)] m-auto">
        {clubEvents.map((event, index) => (
          <div key={index}>
            <div className="w-full p-3 ">
              <div className=" w-full mx-auto p-6 rounded-lg shadow-lg my-4 ">
                <div className="py-8 text-base leading-7 space-y-6 text-gray-600 ">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className=" w-full ">
                      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl mb-10 ">
                        {event.title}
                      </h2>
                      <p>{event.description}</p>
                    </div>
                    <div
                      className="flex m-auto"
                      style={{
                        position: "relative",
                        height: "100%",
                        width: "50%",
                      }}
                    >
                      <img
                        className="w-full  transition duration-300 ease-in-out hover:scale-110 rounded-xl "
                        src={event.image}
                        alt={event.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
