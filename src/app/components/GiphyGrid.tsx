'use client'

import { GiphyCategory } from '@/app/models/giphy-category.model'
import Link from 'next/link'

const resources: GiphyCategory[] = [
  {
    display_name: 'Agree',
    id: 'agree',
    thumbnail_images: [
      {
        url: 'https://media0.giphy.com/media/WJjLyXCVvro2I/200_d.gif',
        width: 227,
        height: 200,
        byte_count: 120043,
        still_image_url:
          'https://media0.giphy.com/media/WJjLyXCVvro2I/200_s.gif',
      },
      {
        url: 'https://media0.giphy.com/media/WJjLyXCVvro2I/200w_d.gif',
        width: 200,
        height: 176,
        byte_count: 88548,
        still_image_url:
          'https://media0.giphy.com/media/WJjLyXCVvro2I/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media0.giphy.com/media/WJjLyXCVvro2I/giphy.gif',
      width: 244,
      height: 215,
      byte_count: 4152601,
      still_image_url:
        'https://media0.giphy.com/media/WJjLyXCVvro2I/giphy_s.gif',
    },
    object_type: 'group',
  },
  {
    display_name: 'Applause',
    id: 'applause',
    thumbnail_images: [
      {
        url: 'https://media3.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200_d.gif',
        width: 200,
        height: 200,
        byte_count: 131110,
        still_image_url:
          'https://media3.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200_s.gif',
      },
      {
        url: 'https://media3.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200w_d.gif',
        width: 200,
        height: 200,
        byte_count: 131110,
        still_image_url:
          'https://media3.giphy.com/media/fnK0jeA8vIh2QLq3IZ/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media3.giphy.com/media/fnK0jeA8vIh2QLq3IZ/giphy.gif',
      width: 450,
      height: 450,
      byte_count: 1929059,
      still_image_url:
        'https://media3.giphy.com/media/fnK0jeA8vIh2QLq3IZ/giphy_s.gif',
    },
    object_type: 'group',
  },
  {
    display_name: 'Awww',
    id: 'awww',
    thumbnail_images: [
      {
        url: 'https://media0.giphy.com/media/rpf0Du8NasK6Q/200_d.gif',
        width: 224,
        height: 200,
        byte_count: 81656,
        still_image_url:
          'https://media0.giphy.com/media/rpf0Du8NasK6Q/200_s.gif',
      },
      {
        url: 'https://media0.giphy.com/media/rpf0Du8NasK6Q/200w_d.gif',
        width: 200,
        height: 179,
        byte_count: 72397,
        still_image_url:
          'https://media0.giphy.com/media/rpf0Du8NasK6Q/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media0.giphy.com/media/rpf0Du8NasK6Q/giphy.gif',
      width: 225,
      height: 201,
      byte_count: 409973,
      still_image_url:
        'https://media0.giphy.com/media/rpf0Du8NasK6Q/giphy_s.gif',
    },
    object_type: 'group',
  },
  {
    display_name: 'Dance',
    id: 'dance',
    thumbnail_images: [
      {
        url: 'https://media0.giphy.com/media/l4Ep3mmmj7Bw3adWw/200_d.gif',
        width: 262,
        height: 200,
        byte_count: 179960,
        still_image_url:
          'https://media0.giphy.com/media/l4Ep3mmmj7Bw3adWw/200_s.gif',
      },
      {
        url: 'https://media0.giphy.com/media/l4Ep3mmmj7Bw3adWw/200w_d.gif',
        width: 200,
        height: 154,
        byte_count: 114409,
        still_image_url:
          'https://media0.giphy.com/media/l4Ep3mmmj7Bw3adWw/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media0.giphy.com/media/l4Ep3mmmj7Bw3adWw/giphy.gif',
      width: 480,
      height: 368,
      byte_count: 4832623,
      still_image_url:
        'https://media0.giphy.com/media/l4Ep3mmmj7Bw3adWw/giphy_s.gif',
    },
    object_type: 'group',
  },
  {
    display_name: 'Deal with it',
    id: 'deal_with_it',
    thumbnail_images: [
      {
        url: 'https://media0.giphy.com/media/tqiYB9X6goN68/200_d.gif',
        width: 354,
        height: 200,
        byte_count: 156591,
        still_image_url:
          'https://media0.giphy.com/media/tqiYB9X6goN68/200_s.gif',
      },
      {
        url: 'https://media0.giphy.com/media/tqiYB9X6goN68/200w_d.gif',
        width: 200,
        height: 113,
        byte_count: 63727,
        still_image_url:
          'https://media0.giphy.com/media/tqiYB9X6goN68/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media0.giphy.com/media/tqiYB9X6goN68/giphy.gif',
      width: 480,
      height: 271,
      byte_count: 1408355,
      still_image_url:
        'https://media0.giphy.com/media/tqiYB9X6goN68/giphy_s.gif',
    },
    object_type: 'group',
  },
  {
    display_name: 'Do not want',
    id: 'do_not_want',
    thumbnail_images: [
      {
        url: 'https://media2.giphy.com/media/2pU8T0OTNkmre/200_d.gif',
        width: 223,
        height: 200,
        byte_count: 224468,
        still_image_url:
          'https://media2.giphy.com/media/2pU8T0OTNkmre/200_s.gif',
      },
      {
        url: 'https://media2.giphy.com/media/2pU8T0OTNkmre/200w_d.gif',
        width: 200,
        height: 180,
        byte_count: 180771,
        still_image_url:
          'https://media2.giphy.com/media/2pU8T0OTNkmre/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media2.giphy.com/media/2pU8T0OTNkmre/giphy.gif',
      width: 245,
      height: 220,
      byte_count: 824155,
      still_image_url:
        'https://media2.giphy.com/media/2pU8T0OTNkmre/giphy_s.gif',
    },
    object_type: 'group',
  },
  {
    display_name: 'Eww',
    id: 'eww',
    thumbnail_images: [
      {
        url: 'https://media3.giphy.com/media/10FHR5A4cXqVrO/200_d.gif',
        width: 198,
        height: 200,
        byte_count: 128174,
        still_image_url:
          'https://media3.giphy.com/media/10FHR5A4cXqVrO/200_s.gif',
      },
      {
        url: 'https://media3.giphy.com/media/10FHR5A4cXqVrO/200w_d.gif',
        width: 200,
        height: 202,
        byte_count: 124909,
        still_image_url:
          'https://media3.giphy.com/media/10FHR5A4cXqVrO/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media3.giphy.com/media/10FHR5A4cXqVrO/giphy.gif',
      width: 175,
      height: 177,
      byte_count: 497612,
      still_image_url:
        'https://media3.giphy.com/media/10FHR5A4cXqVrO/giphy_s.gif',
    },
    object_type: 'group',
  },
  {
    display_name: 'Fist bump',
    id: 'fist_bump',
    thumbnail_images: [
      {
        url: 'https://media4.giphy.com/media/Dnt2VnWFknFNm/200_d.gif',
        width: 267,
        height: 200,
        byte_count: 171607,
        still_image_url:
          'https://media4.giphy.com/media/Dnt2VnWFknFNm/200_s.gif',
      },
      {
        url: 'https://media4.giphy.com/media/Dnt2VnWFknFNm/200w_d.gif',
        width: 200,
        height: 150,
        byte_count: 94690,
        still_image_url:
          'https://media4.giphy.com/media/Dnt2VnWFknFNm/200w_s.gif',
      },
    ],
    original_image: {
      url: 'https://media4.giphy.com/media/Dnt2VnWFknFNm/giphy.gif',
      width: 200,
      height: 150,
      byte_count: 280397,
      still_image_url:
        'https://media4.giphy.com/media/Dnt2VnWFknFNm/giphy_s.gif',
    },
    object_type: 'group',
  },
]

export default function GiphyGrid() {
  return (
    <section className="h-full flex flex-col gap-y-1">
      <div className="grid grid-cols-2 gap-1">
        {resources.map((res, i) => (
          <Link href={`/i/foundmedia/category/${res.id}`}>
            <div className="relative h-full w-full">
              <img
                src={res.original_image.still_image_url}
                alt="Gif"
                className="w-full h-full"
              />
              <div className="absolute text-lg font-bold bottom-1 left-1 text-white">
                {res.display_name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
