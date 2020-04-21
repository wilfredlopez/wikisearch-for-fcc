// import axios from "axios"

export interface PageItem {
  ns: number
  title: string
  pageid: number
  size: number
  wordcount: number
  snippet: string
  timestamp: "2020-03-30T14:20:33Z"
}

export type PagesObject = { [key: number]: PageItem }

export interface WikipediaResponse {
  batchcomplete: string
  continue: {
    gsroffset: number
    continue: string
  }
  query: {
    search: PageItem[]
  }
  limits: {
    pageimages: number
    extracts: number
  }
}

export default function fetchWikipediaData(searchText: string) {
  // return axios
  //   .get<WikipediaResponse>(generateHref(searchText), {
  //     withCredentials: false,
  //     // headers: {
  //     //   "Access-Control-Allow-Origin": "*",
  //     //   "Access-Control-Allow-Credentials": false,
  //     // },
  //   })
  //   .then((response) => {
  //     console.log(response.data.query)

  //     return response.data
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //     return null
  //   })

  return fetch(generateHref(searchText))
    .then<WikipediaResponse | null>((response) => {
      console.log(response)
      if (response.ok === false) {
        return null
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
      if (data) return data
      return null
    })
    .catch((e) => {
      console.log(e)
      return null
    })
}

function generateHref(searchText: string) {
  // const cb = "&callback=JSON_CALLBACK"
  // var page = "https://en.wikipedia.org/?curid="
  return `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&list=search&srsearch=${searchText}`
  //   return `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchText}&callback=angular.callbacks._2`
}
