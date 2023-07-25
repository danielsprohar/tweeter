'use client'

import giphyCategories from '@/../json/giphy-categories.json'
import { GiphyCategory } from '@/app/models/giphy-category.model'
import Link from 'next/link'

export default function GiphyGrid() {
  return (
    <section className="h-full flex flex-col gap-y-1">
      <div className="grid grid-cols-2 gap-1">
        {giphyCategories.map((giphyCategory: GiphyCategory, i: number) => (
          <Link key={i} href={`/i/foundmedia/category/${giphyCategory.id}`}>
            <div className="relative h-full w-full">
              <img
                src={giphyCategory.original_image.still_image_url}
                alt="Gif"
                className="w-full h-full"
              />
              <div className="absolute text-lg font-bold bottom-1 left-1 text-white">
                {giphyCategory.display_name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
