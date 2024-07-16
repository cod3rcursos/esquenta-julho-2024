'use client'
import { useCallback } from 'react'

export default function useLocalStorage() {
    const get = useCallback((chave: string) => {
        const valor = localStorage.getItem(chave)
        return valor ? JSON.parse(valor) : null
    }, [])

    const set = useCallback((chave: string, valor: any) => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [])

    const remove = useCallback((chave: string) => {
        localStorage.removeItem(chave)
    }, [])

    return { get, set, remove }
}
