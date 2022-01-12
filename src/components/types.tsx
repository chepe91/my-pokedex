import React from "react";

export type TypesProps = {
    types: any[]
}

export const Types = (props: TypesProps) => {
    
    return <div className="types">
        {props.types.map(item => <div key={item.type.name} className={`type type-${item.type.name}`} >{item.type.name}</div>)}
    </div>
}