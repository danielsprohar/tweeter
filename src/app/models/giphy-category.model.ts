export interface GiphyCategory {
  display_name: string
  id: string
  thumbnail_images: LImage[]
  original_image: LImage
  object_type: string
}

export interface LImage {
  url: string
  width: number
  height: number
  byte_count: number
  still_image_url: string
}
