import { useEffect, useState } from "react";

export function useLocalStorage(key, initialState){
    const [state, setState] = useState(initialState)

    useEffect(() => {
        const item = localStorage.getItem(key)
        if(item) setState(JSON.parse(item))
    }, [])

    useEffect(() => {
        if(state.length > 0){
            localStorage.setItem(key, JSON.stringify(state))
        }
    }, [state])

    return [state, setState]
}