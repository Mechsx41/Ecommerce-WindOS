import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carrucel.css'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const banners = [
    "https://uc6b6dfce9f9a467004ab81b51f3.previews.dropboxusercontent.com/p/thumb/ACf8yaPG0OqM0GAxMZqHNl0HsOhtlScRtjMw5d-08_vPj38GjdMs0FS1xexORgMTbHNDe-6EP6GPBB7hVS5LrQKJjbCI4vcQ2fFomT_4dD3kCax1cuM9rcVyhUnIP1wSJ3_JJW1pOG4l9cCaBCnBE_38rdvQwcPZWv6ewfy4N8JE2-1p71hgaDiH8oyALbwTkkqp26KgYUUGph7Mk-EQhrHpQCIUWGHeJyKCa9RTqwG0dNoxLtuD9f-4FUNBvxdf96qbzeZPiBnbBeNbXlc3QrCX9TUaSgyOdj0uQcya1lG5Klw9EU1R65hIEQtqGdJle81IbXVYAXUVuciLZ08jsnY6/p.png",
    "https://uc6117fbcb13112c5ceb1536c14c.previews.dropboxusercontent.com/p/thumb/ACfRkXhkNOLqovqOV_zOmsEu9jX0XNH4Dt_JjD2wA5fIx5zT25GNODbDo0cDJ1EdSGQlMDpP9tnv5CFRh2Lmph0z_PfLY92W5NTariD3NJR5A_jOipEx9sceJ0TySNpWTnSux6cWjufvBn4gR1qMlCVpMmVaPvxvC2d8YCyBXluNjJ6N-uQf3zMRoC4KFIMapQYQY4eqJOJm7bB_T1ArNav50U0TL4f1jzZjgitm6JjObkZoGZZav2pv9jYzI4US_sx47m1rcaURk9IPD2PP3tP19pN6x3jOAhcUsNj4_Izy13lcsjOnMIWi_mmqf5KqcjD12kwXeOykbkRRx7D6D5yt/p.png",
    "https://ucf9d7be6a5b844951b071ed9a8f.previews.dropboxusercontent.com/p/thumb/ACd5SGSfvwMuJvHlqP-TWoQUo5cvg9qnZFGS5i6B4b2jWnXS-TvvUkaKzIbK23AhpNTlFebmuqFNlowCexxeVZGcp_2_j6Tyg3Zmdvhg_yJ127DJT1lniR_xn39UX-63-k3kVv7DM_JmeLVZyHh-qz_pw6oHgDuC67KCFBxof7jxFI6J3568yuXqQ32l1FqgRR3h4o-MTJcanqwLQGcrSaEgotUuCcSu7bStAldB23pHCOPmwVy0viyUYPqeH3FV3QVwgRAPQqDXVoobNtRLTdy3ubtRKd0QyTQCIVcqpOpP5WFdgdtox37TvkGgtkfb1MSiQq8ny8bmuT49lZsDob0y/p.png",
  ]
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {banners.map((src, index) => (
          <div className="embla__slide" key={index}>
            <img className='img_banner' src={src} alt={`Banner_${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
