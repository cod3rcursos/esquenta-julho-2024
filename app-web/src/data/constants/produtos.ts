import Produto from '@/data/model/Produto'

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Smartphone XYZ',
        descricao: 'Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera tripla.',
        preco: 1999.9,
        imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNtYXJ0cGhvbmV8ZW58MHx8fHwxNjA2NTQ2NjUx&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
        id: 2,
        nome: 'Notebook ABC',
        descricao: 'Notebook com processador Intel i7, 16GB de RAM e 512GB SSD.',
        preco: 4999.9,
        imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhcHRvcHxlbnwwfHx8fDE2MDY1NDY2NTE&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
        id: 3,
        nome: 'Fone de Ouvido Bluetooth',
        descricao: 'Fone de ouvido Bluetooth com cancelamento de ruído e bateria de longa duração.',
        preco: 299.9,
        imagem: 'https://images.unsplash.com/photo-1618414074972-723c8314d3db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        nome: 'Smartwatch DEF',
        descricao:
            'Smartwatch com monitoramento de atividades físicas e notificações de smartphone.',
        preco: 799.9,
        imagem: 'https://images.unsplash.com/photo-1523395243481-163f8f6155ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 5,
        nome: 'Câmera Digital GHI',
        descricao: 'Câmera digital com 20MP, zoom óptico de 10x e gravação de vídeo em 4K.',
        preco: 2499.9,
        imagem: 'https://images.unsplash.com/photo-1590292339438-5fc3be7fca9d?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default produtos
