// Essa Função exibe o primeiro component

import MyComponent from "./MyComponent";

const FirstComponet = () => {
    return (
        <div>
            {/* Aqui é um comentario JSX que exibe apenas no code */}
           <p>'Meu primeiro Componente'</p> 
           <MyComponent/>
        </div>
    );
}

export default FirstComponet;