'use client'

import React from 'react'

const testimonials = [
  { name: 'Karthika K', review: 'PGBee is a very useful app for finding PG accommodations. The UI is clean, simple, and easy to navigate, making the search process smooth and hassle-free.' },
  { name: 'Samil R', review: 'Highly recommended for students! Finding a decent PG used to be a massive headache, but this app makes the whole process so much easier.' },
  { name: 'V Navaneeta Saraswathy', review: 'For students, especially freshers, who are not aware of the locality around the campus, the app seems quite helpful as it is very easy to use.' },
  { name: 'Devanandana Jayakrishnan', review: 'Very helpful app for finding PG accommodations near college. The search process is simple, and the listings are easy to browse.' },
  { name: 'Vishnu D.S', review: 'Finding a good PG near campus used to be a major headache, but this app changes that. It has helped a lot of my friends find great places.' },
  { name: 'S.Abhinav', review: 'A solid app with a very intuitive and user-friendly layout. Easy to navigate through different hostel listings near campus.' },
  { name: 'Swadish O', review: 'Great app for finding PGs and hostels. The interface is simple, listings are easy to browse, and it helps save a lot of time.' },
  { name: 'Vismay', review: 'Excellent platform for discovering PGs and hostels. Easy to use, fast, and convenient. Makes accommodation hunting much less stressful.' },
  { name: 'Athira Ramesh', review: 'Nice and clean app with a useful concept. It makes PG and hostel search easier, especially with booking and payment features in one place.' },
  { name: 'Nayana Venu', review: 'Great app! The UI is clean and attractive, and the app runs very smoothly. Definitely has the potential to be a go-to platform for students.' },
  { name: 'Devika Sai', review: 'Good app with useful PG listings around college area. Saves time and makes the search much more convenient. Easy and helpful!' },
  { name: 'ann joy', review: 'The app looks promising and addresses the challenge of finding PGs in a convenient way. The interface appears user friendly and has good potential.' },
  { name: 'Karthika A M', review: 'Nice and simple UI. The app is easy to navigate, and finding PG listings doesn\'t feel confusing or cluttered.' },
  { name: 'Aparna _', review: 'A useful app for students who are trying to find their stay. Easy to use and anybody can easily understand.' },
  { name: 'Tesa Abhilash', review: 'Very helpful for finding good hostels near college. The app is very easy to use and the design is also really nice.' },
  { name: 'Aadithya Suja', review: 'A useful app for students and working professionals to find accommodation, mentioning all necessary details like pricing, amenities and security.' },
  { name: 'Prabhin Prakash', review: 'The app is user-friendly, the listings are well organized, and the search process is smooth. Very helpful for students.' },
  { name: 'Abhinav K V', review: 'PGBee is a very useful app to find PG and hostel accommodation. The UI is so clean and user friendly and is easy to navigate.' },
  { name: 'Shriya S Nireesh', review: 'A practical and user-friendly app for PG searching. The simple interface made finding a place much more comfortable and easier.' },
  { name: 'Sneha S Nair', review: 'The app feels very smooth and simple. Extremely helpful for those who search for hostels and PGs near college.' },
  { name: 'Diya Mohamed Shafi', review: 'PGBee revolutionizes how you find PG accommodation with an incredibly sleek and intuitive UI. The app lets you swipe through verified spaces in minutes.' },
  { name: 'Smrithi S', review: 'Great concept for finding good hostels and PGs. Nice and comfortable UI which is easy to use. Great initiative!!' },
  { name: 'Aalia Thahzin', review: 'It\'s a very helpful app for finding good PGs near my college. I would recommend this to my friends.' },
  { name: 'Sabari G', review: 'Finally the headache of finding PGs for students is solved. The app has a clean user friendly UI and other useful features.' },
  { name: 'Rugma', review: 'App is great and works nicely, the UI is clean and beautifully organized. Easy to use and navigate, good app to find budget friendly stays.' },
  { name: 'Govind S Nair', review: 'This app makes it easy to find PGs and hostels by location and view the facilities available. The interface is simple and smooth.' },
  { name: 'Amal Krishna', review: 'This app also provides detailed information about each hostels and PGs. It is very useful and easy to find hostels.' },
  { name: 'Lisha R D', review: 'Good app, easy to use and navigate. It\'s user friendly and fully functional.' },
  { name: 'Abhinav A R', review: 'The app has a clean and modern UI that\'s very easy to navigate. Everything is well organized, and the design gives a polished, premium feel.' },
  { name: 'AADHITYA S GHOSH', review: 'Great app with an easy interface and great PG listings. Highly recommended!' },
  { name: 'Dheeraj. s', review: 'Very good UI. Easy to navigate and use. Easy to find good PGs.' },
  { name: 'arundhati v', review: 'The students app was very comfortable to use for a beginner.' },
  { name: 'Madana gopalan', review: 'Extremely easy to navigate through the application and find PGs.' },
  { name: 'Reethu Shivkumar', review: 'Great app especially for college students. Was able to find a PG near my college.' },
  { name: 'Amritha J', review: 'Awesome app and very thoughtful for beginners to find hostels.' },
  { name: 'Ashna', review: 'Great application to find hostels/PGs nearby. Really useful.' },
  { name: 'Agna Annet Varghese', review: 'Great app for finding hostels. Easy to use as well.' },
  { name: 'Yelda Maria K', review: 'Great app. The design is clean and the UI is so easy to use. Very useful.' },
  { name: 'Suma madan', review: 'User friendly interface and convenient in finding a PG.' },
  { name: 'Thrisha george', review: 'Useful app for finding PG, easy to navigate.' },
  { name: 'Abhishek B', review: 'PGBee made finding a PG much easier than I expected. The platform is simple to use, listings are well organized, and the overall experience felt smooth.' },
  { name: 'Vinayak H', review: 'Easy to use, very useful for finding affordable accommodation.' },
  { name: 'Vidya Anand', review: 'For those looking for the right place of accommodation, PGBee is the right app. Good UI, easy to filter, and provides all necessary details.' },
  { name: 'Atwaith Sm', review: 'PGBee sets a new standard for accommodation management by combining an elegant, user-centric interface with practical functionality.' },
  { name: 'Sree Vishnu Vardhan', review: 'This app helped me find a hostel near my college very easily. The information provided was genuine and the user experience was really good.' },
  { name: 'Hiran ps', review: 'Very user friendly application.' },
  { name: 'Madhav', review: 'Very good app. Very good UI and design.' },
  { name: 'Sharon P Shajan', review: 'A very helpful app for finding hostels near my college. The onboarding was smooth and intuitive, surely an app I would confidently refer to a friend.' },
  { name: 'Vidya S R', review: 'Highly promising and very user friendly! Easy to navigate, beautiful color scheme and smooth transitions.' },
  { name: 'SinaN', review: 'What an app! Absolutely fantastically fantastic.' },
  { name: 'Raystian D Silva', review: 'It is a very helpful app for students in Trivandrum to find PGs and accommodation easily.' },
  { name: 'Aaryan saj', review: 'Amazing experience from PGBee, would recommend to my friends.' },
  { name: 'Alwin Sunu', review: 'Good app, has a good future ahead of it.' },
  { name: 'Shreya', review: 'Good user interface.' },
  { name: 'Sarang S Nireesh', review: 'Very user friendly and reliable app for finding hostels and PGs.' },
  { name: 'Jidhin P', review: 'Great app for finding hostel, clean and simple user interface.' },
  { name: 'Meenakshi Nair', review: 'A great initiative to find PGs nearby. Helped me a lot!' },
  { name: 'Linta Treesa Joseph', review: 'User-friendly app with good PG options. Loved the experience!' },
  { name: 'DevaNanda R', review: 'A user-friendly app with a neat and professional design. Important information is easily accessible, and the overall experience feels smooth and reliable.' },
  { name: 'gayathri j', review: 'Extremely useful app.' },
  { name: 'Krishna Priya S', review: 'User experience feels nice.' },
  { name: 'Madhav M', review: 'Great app for college students.' },
  { name: 'JOY F', review: 'Excellent app.' },
  { name: 'Deeksha S', review: 'Very useful.' },
]

const row1 = testimonials.slice(0, 8)
const row2 = testimonials.slice(8, 16)

const StarRating = () => (
  <div className="flex gap-0.5 mb-3" role="img" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const TestimonialCard = ({ name, review }: { name: string; review: string }) => (
  <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
    <StarRating />
    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-4 line-clamp-4">{review}</p>
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-sm">
        {name.charAt(0)}
      </div>
      <span className="text-sm font-semibold text-gray-800">{name}</span>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section className="w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-eyebrow mb-3 sm:mb-4">
            Testimonials
          </span>
          <h2 className="section-title mb-4 sm:mb-6 px-4">
            What early users say<br className="hidden sm:block" />about PgBee
          </h2>
          <p className="section-description max-w-3xl mx-auto px-4">
            Real feedback from students exploring PGs and hostels with PgBee.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 marquee-row">
            <div className="flex gap-5 marquee-content">
              {row1.map((t, i) => (
                <TestimonialCard key={`r1-a-${i}`} name={t.name} review={t.review} />
              ))}
            </div>
            <div className="flex gap-5 marquee-content" aria-hidden>
              {row1.map((t, i) => (
                <TestimonialCard key={`r1-b-${i}`} name={t.name} review={t.review} />
              ))}
            </div>
          </div>

          <div className="flex gap-5 marquee-row marquee-reverse">
            <div className="flex gap-5 marquee-content">
              {row2.map((t, i) => (
                <TestimonialCard key={`r2-a-${i}`} name={t.name} review={t.review} />
              ))}
            </div>
            <div className="flex gap-5 marquee-content" aria-hidden>
              {row2.map((t, i) => (
                <TestimonialCard key={`r2-b-${i}`} name={t.name} review={t.review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
