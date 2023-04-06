import { ChangeEvent, useState, useEffect } from "react"

import Search from "./search"

import { optionType } from "./types"
//JSX.Element is what we are going to be returning
const App = (): JSX.Element => {
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
const [term, setTerm] = useState<string>('')
const[city, setCity] = useState<optionType | null>(null)
const [options, setOptions] = useState<[]>([])
const [forecast, setForecast] = useState< null>(null)

//everything after q= are query params
//the 5 in the url represents the limit of responses returned
const getSearchOptions = (value: string) => {
fetch(
  `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
    process.env.REACT_APP_API_KEY
  }`
)
.then((res) => res.json())
.then((data) => setOptions(data))
}

//trim() removes spaces from the ends of a word, so it is neccessary for two letter search params
const onInputChange = (e: 
  ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.trim()
  setTerm(value)
  
  if (value === "") return

  getSearchOptions(value)
}

const getForecast = (city: optionType) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&exclude={part}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  )
  .then((res) => res.json())
  .then((data)=> setForecast(data))
}

const onSubmit = () => {
  if (!city) return 

  getForecast(city)
}


//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const onOptionSelect = (option: optionType) => {
  setCity(option)
}

//this useEffect gets rid of other options after a city.name has been selected
useEffect(() => {
if (city) {
  setTerm(city.name)
  setOptions([])
}
}, [city])

  return (
    <main className="flex justify-center items-center bg-gradient-to-br 
    from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">

    

      <Search 
      term={term}
      options={options}
      onInputChange={onInputChange}
      onOptionSelect={onOptionSelect}
      onSubmit={onSubmit}
      />

    </main>
  )
}

//Notes on tailwind CSS
//md: max-w-[500px] means 500 max width with a medium screen
//zing-"number" is the intensity of the color

//if there is a problem with the search bar, go back to minute 56 on the video

export default App
