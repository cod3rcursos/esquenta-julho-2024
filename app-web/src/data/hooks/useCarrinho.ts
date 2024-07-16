import { useContext } from 'react'
import ContextoCarrinho from '../contexts/ContextoCarrinho'

const useCarrinho = () => useContext(ContextoCarrinho)
export default useCarrinho
