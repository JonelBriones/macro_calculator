
import React, {useState} from 'react'
const MacroCalculator = (props) => {
    const [calories,setCalories] = useState(0)
    const [intake,setIntake] = useState({
        carbs: "",
        fats: "",
        protein: ""
    })
    const onSubmitHandler = (e) => {
        e.preventDefault()
        setCalories(
            intake.carbs * 4 +
            intake.fats * 9 +
            intake.protein * 4
        )
        setIntake({
            carbs: "",
            fats: "",
            protein: ""
    })
    }
     const onChangeHandler = (e) => {
        const intakeObject = {...intake}
        intakeObject[e.target.name] = e.target.value
        console.log(intakeObject)
        setIntake(intakeObject)
    }
    return (
        <>
        <h1>Macro Calculator</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Carbs</label>
                <input type="text" name="carbs" value={intake.carbs} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Protein</label>
                <input type="text" name="protein" value={intake.protein} onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Fats</label>
                <input type="text" name="fats" value={intake.fats} onChange={onChangeHandler}></input>
            </div>
            <button type='submit'>Calculate</button>
        </form>
        <p>Calories {calories}</p>
        {/* <p>{intake.carbs * 4}</p>
        <p>{intake.fats * 9}</p>
        <p>{intake.protein * 4}</p> */}
        </>
    )
}
export default MacroCalculator;