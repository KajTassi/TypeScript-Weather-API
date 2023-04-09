import { forecastType } from "../../types"

//referenced in index.ts
type Props = {
    data: forecastType
}

const Forecast = ({ data }: Props): JSX.Element => {

    return (
        <div className="w-full md:max-w-[500px] py-4 md:py-4
        md:px-10 lg:px-24 h-full lg:h-auto bg-white
        bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
            <p>Forecast</p>
        </div>
    )
}

export default Forecast