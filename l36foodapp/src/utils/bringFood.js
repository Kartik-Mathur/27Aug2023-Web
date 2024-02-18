import axios from "axios";
export default async function bringFood(){
    let foodData = await axios.get('http://localhost:4444/');
    console.log(foodData);
    return foodData.data;
}
