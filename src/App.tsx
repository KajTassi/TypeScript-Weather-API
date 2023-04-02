const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">

      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 
      lg:p-24 h-full lg:h-[500] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">

      <h1 className="text-4x1 font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1> 

      <p className="text-sm mt-2">
        Enter below a place you to know the weather of and select an option from the dropdown search function.   
      </p> 

        <input 
        type="text"
        value={''}
        className="px-2 py-1 rounded-1-md border-2 border-white"
        />

        

      </section>

    </main>
  )
}

//Notes on tailwind CSS
//md: max-w-[500px] means 500 max width with a medium screen
//zing-"number" is the intensity of the color

export default App
