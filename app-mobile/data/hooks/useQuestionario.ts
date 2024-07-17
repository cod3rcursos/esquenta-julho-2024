import { useState } from 'react'
import todasAsPerguntas from '@/data/constants/perguntas'

export default function useQuestionario() {
    const [indicePergunta, setIndicePergunta] = useState(0)
    const [respostas, setRespostas] = useState<number[]>([])
    const [perguntas, setPerguntas] = useState(sortearPerguntas())

    function sortearPerguntas() {
        const perguntasEmbaralhadas = [...todasAsPerguntas]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10)
        return perguntasEmbaralhadas
    }

    return {
        get pergunta() {
            return perguntas[indicePergunta]
        },
        get pontuacao() {
            return perguntas
                .map((p) => p.resposta)
                .map((r, i) => r === respostas[i])
                .filter(Boolean).length
        },
        get totalDePerguntas() {
            return perguntas.length
        },
        get concluido() {
            return indicePergunta === perguntas.length
        },
        responder(resposta: number) {
            setRespostas([...respostas, resposta])
            setIndicePergunta(indicePergunta + 1)
        },
        reiniciar() {
            setIndicePergunta(0)
            setRespostas([])
            setPerguntas(sortearPerguntas())
        },
    }
}
