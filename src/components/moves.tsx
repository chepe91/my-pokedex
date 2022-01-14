import React, { useEffect, useState } from "react";

import { MovesFilter } from "./MovesFilter";
import { MovesTable } from "./MovesTable";

export type MovesProps = {
  moves: Move[];
};

export type Move = {
  id: number;
  name: string;
  accuracy: number;
  power: number;
  type: string;
  pp: number;
  names: any[];
  damage_class: string;
};

export const Moves = (props: MovesProps) => {
  const [loading, setLoading] = useState(true);
  const [moves, setMoves] = useState<Move[]>([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    async function fetchMoveData(move: any) {
      const data = await (await fetch(move.move.url)).json();
      const moveInfo: Move = {
        id: data.id,
        name: data.name,
        names: data.names,
        accuracy: data.accuracy,
        power: data.power,
        type: data.type.name,
        pp: data.pp,
        damage_class: data.damage_class.name,
      };
      setMoves((prevState: Move[]) => {
        return [...prevState, moveInfo];
      });
    }

    Promise.all(props.moves.map((move) => fetchMoveData(move))).then(() => {
      setLoading(false);
    });
  }, [props.moves]);

  // const fetchMoveData = (move: any) => {
  //   fetch(move.move.url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const moveInfo: Move = {
  //         id: data.id,
  //         name: data.name,
  //         names: data.names,
  //         accuracy: data.accuracy,
  //         power: data.power,
  //         type: data.type.name,
  //         pp: data.pp,
  //         damage_class: data.damage_class.name,
  //       };
  //       setMoves((prevState: Move[]) => {
  //         return [...prevState, moveInfo];
  //       });
  //     })
  //     .catch(console.error);
  // };

  // const onLoadMoves = () => {
  //   props.moves.forEach((move) => fetchMoveData(move));
  // };

  const onFilterChanged = (event: any) => {
    setTypeFilter(event.target.value);
  };

  const onSearchTextChanged = (event: any) => {
    setSearchText(event.target.value);
  };

  const onSortClicked = (sort: string) => {
    let direction = "asc";

    if (sortField === sort) {
      direction = sortDirection === "asc" ? "desc" : "asc";
    }
    setSortDirection(direction);
    setSortField(sort);
  };

  const filterMoveList = () => {
    const filterList = moves.filter(
      (item) =>
        (typeFilter === "" || item.type === typeFilter) &&
        (searchText === "" || item.name.includes(searchText))
    );

    if (sortField) {
      return filterList.sort(dynamicSort(sortField, sortDirection));
    }

    return filterList;
  };

  const dynamicSort = (key: string, order = "asc") => {
    return (a: any, b: any) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  return (
    <div>
      <h3>Moves:</h3>
      {loading && <div>Loading</div>}
      {/* <button onClick={onLoadMoves}>Load moves</button> */}

      <MovesFilter
        onSearchTextChanged={onSearchTextChanged}
        onFilterChanged={onFilterChanged}
      />

      <MovesTable onSortClicked={onSortClicked} moves={filterMoveList()} />
    </div>
  );
};
