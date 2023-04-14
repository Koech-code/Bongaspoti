import React, {useEffect, useState} from "react";
import axios from "axios";
const GetAthletesInfo = () => {
  const [athleticsData, setAthleticsData] = useState([]);
  const baseURL = "http://127.0.0.1:8000/api/profiles/allprofiles/";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAthleticsData(response.data);
    });
  }, []);

  return (
//     <table className="table-auto border border-gray-500">
//   <thead>
//     <tr>
//       <th className="font-bold border-gray-500">Athlete Information</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td className="px-4 py-2 font-bold border-r border-b border-gray-500">Events</td>
//       {athleticsData.map((athlete) => (
//             <td key={athlete.id}>
//               <td className="px-4 py-2 border-b border-gray-500">{athlete.events + ","}</td>
//             </td>
//           ))}
//     </tr>
//     <tr>
//       <td clasName="px-4 py-2 font-bold border-r border-gray-500">Height</td>
//        {athleticsData.map((athlete) => (
//             <td key={athlete.id}>
//               <td className="px-4 py-2">{athlete.height + ","}</td>
//             </td>
//           ))}
//     </tr>
//   </tbody>
// </table>
 <table class="m-2 border-collapse border border-gray-400 w-auto">
  <thead>
    <tr>
      <th class="border-gray-400 px-4 py-2 border " colSpan="100%">Athlete Information</th>
    </tr>
  </thead>
  <tbody>
   <tr>
  <td class="border font-bold border-gray-400 px-4 py-2 w-1">Events</td>
  <td class="border border-gray-400 px-4 py-2 w-full">
    {athleticsData.map((athlete) => (
      <td key={athlete.id} class="w-1/2">
        <td class="border-gray-400 ">{athlete.events + ","}</td>
      </td>
    ))}
  </td>
</tr>

     <tr>
  <td class="border font-bold border-gray-400 px-4 py-2 w-1">Height</td>
  <td class="border border-gray-400 px-4 py-2 w-full">
    {athleticsData.map((athlete) => (
      <td key={athlete.id} class="w-1/2">
        <td class="border-gray-400 ">{athlete.height + ","}</td>
      </td>
    ))}
  </td>
</tr>

<tr>
  <td class="border font-bold border-gray-400 px-4 py-2 w-1">Weight</td>
  <td class="border border-gray-400 px-4 py-2 w-full">
    {athleticsData.map((athlete) => (
      <td key={athlete.id} class="w-1/2">
        <td class="border-gray-400 ">{athlete.weight + ","}</td>
      </td>
    ))}
  </td>
</tr>

<tr>
  <td class="border font-bold border-gray-400 px-4 py-2 w-1">Club</td>
  <td class="border border-gray-400 px-4 py-2 w-full">
    {athleticsData.map((athlete) => (
      <td key={athlete.id} class="w-1/2">
        <td class="border-gray-400 ">{athlete.club + ","}</td>
      </td>
    ))}
  </td>
</tr>

<tr>
  <td class="border font-bold border-gray-400 px-4 py-2 w-1">Training Hours</td>
  <td class="border border-gray-400 px-4 py-2 w-full">
    {athleticsData.map((athlete) => (
      <td key={athlete.id} class="w-1/2">
        <td class="border-gray-400 ">{athlete.training_hours + ","}</td>
      </td>
    ))}
  </td>
</tr>
  </tbody>
</table>

  );
};

export default GetAthletesInfo;
