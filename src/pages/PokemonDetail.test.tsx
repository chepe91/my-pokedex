import { render, screen } from '@testing-library/react';
import { PokemonDetail }  from "./PokemonDetail"

describe("pokemon detail page", () => {


    const response = {
        id: 1,
        name: "test pokemon",
        abilities: [],
        moves: [],
        types: [],
        sprites: {
            other: {
                home: {
                    front_default: ""
                }
            }
        }
    }

    /*
    test("renders page" , async () => {

        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return response
            }
        })

        render(<PokemonDetail />)

        const nameElement = await screen.findByText("test pokemon", { exact:false });
        expect(nameElement).toBeInTheDocument();
    });
    */

    test("tbd",() => {

        expect(true).toBeTruthy();
    })

});