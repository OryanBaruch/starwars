import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeopleData = async () => {
  const res = await fetch(`http://swapi.dev/api/people/`);
  const data = await res.json();
  return data;
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeopleData);
  console.log(data);

  return (
    <div>
      <h3>Hey from Planets</h3>
      {status === "error" && <div> Failed To Fetch People Data </div>}
      {status === "loading" && <div> Loading... </div>}
      {status === "success" && (
        <div>
          {data.results.map((person, idx) => (
            <Person person={person} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
