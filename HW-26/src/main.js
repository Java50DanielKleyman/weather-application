import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-form.js";
const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
const schema = [
    { columnName: 'Date', fieldName: 'date' },
    { columnName: 'Hour', fieldName: 'hour' },
    { columnName: "Temperature", fieldName: 'temperature' }
]
const dataForm = new DataForm("form-section", weatherConfig.maxDays);
async function handlerFun(data) {
    const res = await dataProcessor.getTemperatureData(data.city, data.dateFrom, data.dateTo, data.hourFrom, data.hourTo)
console.log
    return res;
}
dataForm.addHandler(handlerFun);
const weatherData = dataForm.addHandler(handlerFun);
console.log(weatherData);
//const tableWeather = new Table("table-section", weatherData, schema);