import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanetsData = async () => {
  const res = await fetch(`http://swapi.dev/api/planets/`);
  const data = await res.json();
  return data;
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanetsData);
  console.log(data);

  return (
    <div>
      <h3>Hey from Planets</h3>
      {status === "error" && <div> Failed To Fetch Data </div>}
      {status === "loading" && <div> <img src="https://media4.giphy.com/media/MyFJBXz1cm4I5g4eco/giphy.webp" alt="Gif" /></div>}
      {status === "success" && (
        <div>
          {data.results.map((planet, idx) => (
            <Planet planet={planet} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
