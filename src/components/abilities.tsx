import React from "react";

export type AbilitiesProps = {
    abilities: any[]
}

export const Abilities = (props: AbilitiesProps) => {
    return <div>
        <h3>Abilities:</h3>
        <div className="abilities">
            {
                props.abilities.map(item => 
                <div key={item.ability.name} className="ability">
                    {item.ability.name}
                </div>)
            }
        </div>
    </div>
}