
import React from "react"
import Layout from "../../components/Layout"
import BlogRoll from "../../components/BlogRoll"

// ✅ Import Swiper React
import { Swiper, SwiperSlide } from "swiper/react"

// ✅ Import modul langsung dari props (Swiper v9+ cara baru)
import { Autoplay, Pagination } from "swiper/modules"

// ✅ Import CSS
import "swiper/css"
import "swiper/css/pagination"

const BlogPage = () => {
  const images = [
    "/img/DESIGNN.png",
  "/img/dEsign2.png",
  "/img/Design3.png",
  ]

  return (
    <Layout>
      {/* 🔹 Hero Banner Blog pakai Swiper */}
      <section className="relative text-white overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}   // ✅ sudah bener sekarang
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          grabCursor={true}
          className="w-full h-[400px] md:h-[500px]"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <img
                  src={src}
                  alt={`Slide ${idx}`}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🔹 Blog List */}
      <section className="section">
        <div className="container">
          <BlogRoll />
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage
