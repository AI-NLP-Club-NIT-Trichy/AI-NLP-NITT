export default function Events() {
  const clubEvents = [
    {
      title: "Meteor",
      description:
        "To give your brain a creative spin by testing your technical skills, this event was organized by TEAM AI & NLP on 2nd February 2020. It consists of questions revolving debugging, coding and objective type. The event was a great success as it involves variety of questions encouraging more and more students to participate. The winners of this competition were then rewarded with amazing cash prizes and certificates.",
      image: "club-event-image2.jpg",
    },
    {
      title: "Club Event 2",
      description:
        "To give your brain a creative spin by testing your technical skills, this event was organized by TEAM AI & NLP on 2nd February 2020. It consists of questions revolving debugging, coding and objective type. The event was a great success as it involves variety of questions encouraging more and more students to participate. The winners of this competition were then rewarded with amazing cash prizes and certificates.",
      image: "club-event-image2.jpg",
    },
    {
      title: "Club Event 3",
      description:
        "To give your brain a creative spin by testing your technical skills, this event was organized by TEAM AI & NLP on 2nd February 2020. It consists of questions revolving debugging, coding and objective type. The event was a great success as it involves variety of questions encouraging more and more students to participate. The winners of this competition were then rewarded with amazing cash prizes and certificates.",
      image: "club-event-image3.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {clubEvents.map((event, index) => (
        <div key={index} className="flex justify-space-between ">
          <div className="mw-100">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-4">
              <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
                <div className="flex items-center">
                  <div className="w-1/2">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      {event.title}
                    </h2>
                    <p>{event.description}</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="my-4 ml-4"
                    />
                  </div>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
