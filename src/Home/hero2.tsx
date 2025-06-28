import on from '../assets/1.jpg'
import on2 from '../assets/2.jpg'
import on3 from '../assets/3.jpg'
import on4 from '../assets/4.jpg'
import on5 from '../assets/6.jpg'
import on6 from '../assets/7.jpg'

const HelpSection = () => {
  // Icons (Replace these with actual imported images)
  const icons = [
    { src: on, text: "MOBILE APP" },
    { src: on2, text: "PERSONAL" },
    { src: on3, text: "BUSINESS" },
    { src: on4, text: "LOANS & MORTGAGES" },
    { src: on5, text: "LOCATIONS" },
    { src: on6, text: "NEWS" },
  ];

  return (
    <><section className="flex flex-col items-center text-center py-10">
      <h2 className="text-lg font-semibold text-red-700 mb-6 uppercase mt-[100px]">
        What can we help you with?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <img src={item.src} alt={item.text} className="w-16 h-16" />
            <p className="text-red-700 font-semibold">{item.text} →</p>
          </div>
        ))}
      </div>
    </section>


    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://apexbank.com/wp-content/uploads/2018/11/blog-bg-1920x1824.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative bg-white p-8 md:p-12 w-[90%] h-[400px] md:w-[50%] rounded-lg shadow-lg">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">
          ←
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
          →
        </div>

        {/* News Content */}
       <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">IN THE NEWS</h3>
<h2 className="text-red-700 text-lg text-center font-bold mt-2 mb-4">
  CKT TRUST BANK 
</h2>
<p className="text-gray-600 text-sm mt-8">
  United States – On Thursday, October 1, 2020, CKT Trust Bank officially commenced operations in the heart of a major U.S. city. In August, CKT Trust Bank entered into an agreement with People’s Community Bank to acquire the building...
</p>



        {/* Read More Button */}
        <div className="mt-6 text-center">
          <button className="px-6 mt-8  py-2 border-2 border-red-600 text-red-600 rounded-full hover:bg-blue-600 hover:text-white transition">
            CLICK TO READ FULL ARTICLE
          </button>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default HelpSection;
