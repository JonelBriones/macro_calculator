
import React, {useState} from 'react'
const MacroCalculator = (props) => {
    const [animate,setAnimate] = useState(false)
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
        setAnimate(!animate)
        setAnimate(!animate)
        // setIntake({
        //     carbs: "",
        //     fats: "",
        //     protein: ""
        // })
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
            <div className='slidecontainer'>
                <label>{intake.carbs? intake.carbs: 0} Carbs 🍞</label>
                <input className='slide' type="range" min="0" max="500" name="carbs" value={intake.carbs?intake.carbs:0} onChange={onChangeHandler}></input>
            </div>
            <div className='slidecontainer'>
                <label>{intake.protein? intake.protein: 0} Protein 🍗</label>
                <input className='slide' type="range" min="0" max="500" name="protein" value={intake.protein?intake.protein:0} onChange={onChangeHandler}></input>
            </div>
            <div className='slidecontainer'>
                <label>{intake.fats? intake.fats: 0} Fats 🥑</label>
                <input className='slide' type="range" min="0" max="500" name="fats" value={intake.fats?intake.fats:0} onChange={onChangeHandler}></input>
            </div>
            <div>
            <button type='submit' className='btn'>Calculate</button>
            </div>
        </form>
        <p className='calories' style={{transform: animate?"scale(1.10)":null}}>Calories {calories}</p>
        {/* <p>{intake.carbs * 4}</p>
        <p>{intake.fats * 9}</p>
        <p>{intake.protein * 4}</p> */}
        </>
    )
}
export default MacroCalculator;