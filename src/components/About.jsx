import React from 'react';

const About = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="w-[min(1150px,100%)] mx-auto justify-center items-center about-us-container flex flex-col md:flex-row m-5 md:m-10 p-5 md:p-12 border rounded-xl text-xl bg-gray-100 animate__animated animate__fadeIn">
        <div className="about-us-text mx-auto md:w-[50%]">
          <h2 className="font-bold text-3xl">About Us</h2><br />
          <p className="text-xl animate__animated animate__fadeInLeft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <br />
          <p className="animate__animated animate__fadeInLeft">
            Nulla facilisi. Sed fringilla mauris sit amet nibh. Donec sodales
            sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
            cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend
            sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
            metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
            hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; In ac dui quis mi
            consectetuer lacinia.
          </p>
        </div>
        <div className="ai-image-container md:w-[50%] p-5 md:p-10 flex justify-center">
          <img
            src=".//public/images/ai-nlp-aboutus.jpg"
            alt="AI"
            className="ai-image max-w-full h-auto"
          />
        </div>
      </div>

    </div>

  );
};

export default About;
