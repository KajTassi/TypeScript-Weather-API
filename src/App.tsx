

import useForecast from "./hooks/useForecast"
import Search from "./search"

//JSX.Element is what we are going to be returning
const App = (): JSX.Element => {

const {
  term,
  options,
  forecast,
  onInputChange,
  onOptionSelect,
  onSubmit,
} = useForecast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br 
    from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">

    {forecast ? (
      "we have a forecast"
    ) : (
      <Search 
      term={term}
      options={options}
      onInputChange={onInputChange}
      onOptionSelect={onOptionSelect}
      onSubmit={onSubmit}
      />
    )}
    </main>
  )
}

//Notes on tailwind CSS
//md: max-w-[500px] means 500 max width with a medium screen
//zing-"number" is the intensity of the color

//if there is a problem with the search bar, go back to minute 56 on the video

export default App
