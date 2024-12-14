const Banner = () => {
   return (
     <div>
       <section className="mb-24">
         <div className="w-full h-[600px] rounded-3xl bg-banner_img flex items-center justify-center text-center">
           <div className="max-w-[930px] text-white">
             <h1 className="text-[52px] font-bold mb-6">
               Discover an exceptional cooking class tailored for you!
             </h1>
             <p className="font-medium text-lg">
               Learn and Master Basic Programming, Data Structures, Algorithm,
               OOP, Database and solve 500+ coding problems to become an
               exceptionally well world-class Programmer.
             </p>
             <div className="flex gap-6 justify-center mt-10">
               <button className="transition-all hover:bg-[#0BE58A] font-semibold text-xl py-5 px-8 rounded-full text-white hover:text-[#150B2B] border hover:border-[#0BE58A]">
                 Explore Now
               </button>
               <button className="transition-all hover:bg-[#0BE58A] font-semibold text-xl py-5 px-8 rounded-full text-white hover:text-[#150B2B] border hover:border-[#0BE58A]">
                 Our Feedback
               </button>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
};

export default Banner;