export interface Hotel {
  comment: string
  contents: string
  id: string
  images: string[]
  location: { directions: string; pointGeoloation: { x: number; y: number } }
  mainImageUrl: string
  name: string
  price: number
  starRating: number
}
