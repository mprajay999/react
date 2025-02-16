import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    text: "This is amazing. I loved the experience and the food was superb!",
    name: "John Doe",
    rating: 5,
  },
  {
    id: 2,
    text: "A delightful culinary journey that exceeded my expectations.",
    name: "Jane Smith",
    rating: 4,
  },
  {
    id: 3,
    text: "The ambiance and service were exceptional, truly a top-notch dining experience.",
    name: "Emily Johnson",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100" id="testimonials">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center text-primary mb-8">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <p className="text-lg text-text-secondary mb-4">
                  {testimonial.text}
                </p>
                <div className="flex justify-center mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <svg
                      key={`filled-${index}`}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.365 2.1 10.635 2.1 10.951 2.927l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.957c.316.827-.675 1.51-1.37.99l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.695.52-1.686-.163-1.37-.99l1.286-3.957a1 1 0 00-.364-1.118L2.11 10.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
                    <svg
                      key={`outline-${index}`}
                      className="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.365 2.1 10.635 2.1 10.951 2.927l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.957c.316.827-.675 1.51-1.37.99l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.695.52-1.686-.163-1.37-.99l1.286-3.957a1 1 0 00-.364-1.118L2.11 10.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
                <p className="font-medium text-primary">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

