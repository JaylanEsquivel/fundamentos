const TemplateExpressions = () => {

    const name = "Jaylan";
    const data = {
        age: 25,
        job: 'Developer'
    }

  return (
    <div>
        Nome: {name}
    <p>Idade: {data.age} Ocupação: {data.job}</p>
    </div>
  )
}

TemplateExpressions.propTypes = {}

export default TemplateExpressions