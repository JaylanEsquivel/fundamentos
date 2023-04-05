const Challange = () => {

    const valorOne = 2;
    const valorTwo = 3;

    return(
        <div>
            <p>{valorOne}</p>
            <p>{valorTwo}</p>
            <button onClick={() => console.log(valorOne + valorTwo)} >Click para Somar</button>
        </div>
    )

}

export default Challange;