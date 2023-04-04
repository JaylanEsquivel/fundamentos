
const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Aqui");
    };

  return (
    <div>
        <div>
            <button onClick={handleMyEvent} >Cique Aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log("Cliquei aqui TB")} >Cique Aqui Tambem!</button>
        </div>
    </div>
  )
}

export default Events