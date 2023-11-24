import './style.css'

export function Modal (props) {
    if(props.isOpen) {
        return (
            <div className="background">
                <div className="modal">
                    <h1>
                        
                        criando um Modal
                    </h1>
                    <p>tentando criar algo</p>
                    <button onClick={props.showModal}>fechar</button>
                </div>
            </div>
        )
    }
}