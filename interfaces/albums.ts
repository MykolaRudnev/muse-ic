export  interface IAlbums {
  results :{
    id:string | number
    resultCount:number
    artworkUrl100: string| number
    collectionCensoredName: string
    artistName:string
    primaryGenreName:string
    releaseDate:string

  }
}

export interface AlbumPost {
  results: IAlbums[]
}
