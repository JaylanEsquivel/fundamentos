
const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Aqui");
    };

    const renderizeFund = (vl) => {
        if(vl){
            return <h1>TESTE TRUE</h1>
        }else{
            return <h1>TESTE False</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleMyEvent} >Cique Aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log("Cliquei aqui TB")} >Cique Aqui Tambem!</button>
        </div>

        {renderizeFund(true)}
        {renderizeFund(false)}

    </div>
  )
}

export default Events