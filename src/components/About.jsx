import React, { useState } from 'react'
import { motion } from "framer-motion"

const Faculty = (props) => {
  return (
    <div className=' w-[min(2200px,75%)] mx-auto'>
      <div className='flex space-x-3 md:space-x-10'>
        <div className='flex flex-col items-center mt-8'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: false }} className='relative'>
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase text-white">
              <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 0.4, delay: 0.6 }} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]" ></motion.div>
        </div>
        <div className='md:w-10/12 mb-24 mt-10'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }} viewport={{ once: false }} className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '200ms' }}>FACULTY ADVISOR</motion.div>
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
            <span className="text-[#7ee787]">Introducing The Cornerstone of our Club, our Esteemed Faculty Advisor. </span><br />
            Dr.(Mrs.) S. Sangeetha
          </motion.h3>
        </div>
      </div>
      <div className='flex justify-between items-center md:space-x-10 max-md:flex-col ml-8'>

        <div className='w-full md:w-1/3 h-96 md:h-auto flex justify-center items-center'>
          <img className='object-cover object-center h-full w-full' src='/images/staff/dr_sangeetha1.jpg' alt='Dr. Sangeetha' />
        </div>

        <div className='w-full md:w-2/3 border rounded-xl border-transparent flex justify-center items-center bg-[#161b22] lg:pl-8 lg:pr-8 lg:py-8 sm:p-10 p-8'>
          <p className='text-sm lg:text-base lg:leading-10 mb-7 text-center lg:text-left font-medium text-[#7d8590]'>
            Dr. (Mrs.) S.Sangeetha has obtained her Undergraduate degree in B.Sc. (Computer Science) from Avinashilingam University, Coimbatore, Postgraduate degree in M.C.A from the Bharathidasan University, Tiruchirappalli and Ph.D. from National Institute of Technology, Tiruchirappalli. She is working as Assistant Professor in the Department of Computer Applications, National Institute of Technology, Tiruchirappalli, Tamil Nadu, India from 2007 onwards with a great passion towards teaching and continuous learning. Feedback from students makes enthusiastic progress in her teaching career. She started her research career in 2008 and her field of research includes Information Extraction and Natural Language processing. She has published papers in International conferences and International Journals. She is a member of Computer Society of India and Indian Society for Technical Education.
          </p>
        </div>

      </div>

      <motion.div initial={{ height: 0 }} whileInView={{ height: '160px' }} transition={{ delay: 0.3 }} viewport={{ once: false }} className=" md:ml-3  h-[160px] mt-[-20x] mb-[30px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]" ></motion.div>
    </div>
  )
};
const Description = (props) => {
  return (
    <div className=' w-[min(2200px,75%)] mx-auto'>
      <div className='flex space-x-3 md:space-x-10'>
        <div className='flex flex-col items-center'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3 }} viewport={{ once: false }} className='relative'>
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase text-white">
              <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 0.4, delay: 0.6 }} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#e0413e]" ></motion.div>
        </div>
        <div className='md:w-10/12 mb-24'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }} viewport={{ once: false }} className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '200ms' }}>ABOUT AI & NLP CLUB</motion.div>
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
            <span className="text-[#d1623d]">Unleash The Power of Language With Our </span> AI-NLP CLUB <span className="text-[#d1623d]">Where Innovation Speaks Volumes In Every Algorithm And Conversation. </span>
          </motion.h3>
        </div>
      </div>
      <div className='flex justify-between items-center md:space-x-10 max-md:flex-col ml-8'>

        <div className='w-full md:w-1/3 h-80 md:h-auto flex justify-center items-center'>
          <img className='object-cover object-center h-full w-full' src='/images/ai-nlp-aboutus.jpg' alt='About Us Image' />
        </div>

        <div className='w-full md:w-2/3 border rounded-xl border-transparent flex justify-center items-center bg-[#161b22] lg:pl-8 lg:pr-8 lg:py-8 sm:p-10 p-8'>
          <p className='text-sm lg:text-base lg:leading-10 mb-7 text-center lg:text-left font-medium text-[#7d8590]'>
            Artificial Intelligence and Natural Language Processing (AI & NLP) is a club of NIT Trichy launched in 2018, initiated by the students of CA department under the guidance of Dr. S. Sangeetha. We welcome everyone to explore the emerging world of Artificial Intelligence along with its branch of Natural Language Processing. This club provides an opportunity for students to connect with the technologies of artificial intelligence by building up their skills in Natural Language Processing (NLP), machine learning (ML), etc., and learn about creating systems that read, decipher, understand, and make sense of human languages in a valuable manner.
          </p>
        </div>

      </div>

    </div>
  )
};
const Hero = (props) => {
  return (
    <div className='w-[min(2200px,75%)] mx-auto  bg-black'>
      <div className='flex'>
        <div className=' '>
          <img aria-hidden="true" className='' src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" width="437" height="637" alt="" />
          <div className='mx-auto my-3 '>
            <span className='relative z-[11]'>
              <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className=" text-white">
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow " style={{ backgroundColor: 'var(--mktg-accent-primary)', filter: 'blur(17px)' }}></span>
            </span>
          </div>
          <div style={{ background: 'linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)', marginLeft: '11px' }} className=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"></div>
        </div>
        <div className='  pt-0 mt-28 max-md:px-4 ml-4 md:ml-12'>
          <h1 className="md:mt-24 lg:mt-28 sm:mt-10  z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white"> ABOUT AI-NLP CLUB</h1>
          <p className=" z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
            Step into our virtual haven, where the boundaries of language and technology blur. Welcome to our world of AI-NLP, where every interaction sparks new insights.
          </p>
        </div>
        

      </div>
    </div>

  );
};
const About = (props) => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  return (
    <div className=' w-[100%] lg:pt-10 md:px-10 mx-auto pt-8 bg-black	'>

      <Hero></Hero>
      <Faculty></Faculty>
      <Description></Description>
      <div className=''>
        <div className="flex flex-wrap justify-between items-center mt-7">
          <img src="/images/social_media/instagram.png" alt="Instagram logo" height="44px" width='100px' className="my-3 scale-50" />
          <img src="/images/social_media/github.png" alt="Github logo" height="44px" width='100px' className="my-3 scale-50" />
          <img src="/images/social_media/Twitter.png" alt="Twitter logo" height="44px" width='100px' className="my-3 scale-50" />
          <img src="/images/social_media/linkedin.png" alt="Linked in logo" height="44px" width='100px' className="my-3 scale-50" />
          <img src="/images/social_media/facebook.png" alt="Facebook logo" height="44px" width='100px' className="my-3 scale-50" />

        </div>
      </div>
    </div>

  );
};

export default About;
