import React from "react"

export const MovesFilter = (props: any) => {

    return (
        <div>
            <input type="text" onChange={props.onSearchTextChanged} />
            <select id="type" onChange={props.onFilterChanged}>
                <option value="">All</option>
                <option value="fire">Fire</option>
                <option value="normal">Normal</option>
                <option value="flying">Flying</option>
                <option value="steel">Steel</option>
                <option value="water">Water</option>
            </select>
        </div>
    )


}