export type HexColour = `#${string}`

export type UpdateHexAction = {
    type: 'update-hex-color'
    payload: {
        hexColor: HexColour
    }
}

export type ColorState = {
    hexColor: HexColour
}

export const initialState: ColorState = {
    hexColor: "#ff0123",
};

export const colourReducer = (state: ColorState, action: UpdateHexAction): ColorState => {
    if (action.type === 'update-hex-color') {
        const { hexColor } = action.payload;
        return { hexColor };
    }

    return state;
}