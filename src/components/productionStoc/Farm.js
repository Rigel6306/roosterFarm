import { useState } from 'react'
import '../../css/production/farm.css'
const Farm = () => {

    const date = new Date()
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    const day = date.getDate();

    const fullDate = `${day}/${month}/${year}`
    const [farmvalues, setfarmValues] = useState(
        {
            cabage: undefined,
            been: undefined,
            carrot: undefined,
            apple: undefined,
            strawberry: undefined,
            orange: undefined,
            freshmilk: undefined,
            cheese: undefined,
            youghurt: undefined
        }
    );

    const handleValues = (e) => {
        console.log(e.target.value)
        setfarmValues((prev) => {
            return { ...prev, [e.target.name]: e.taget }
        })
    }




    return (
        <div className="farmContainer">
            <div className="farmHeading">
                <h1>Enter Production Details for  {fullDate} </h1>
            </div>

            <form className='formContainer' >

                    <table className='formTable'>
                        <tbody>
                            <tr>
                                <td> <label htmlFor="cabage">Cabage</label></td>
                                <td><input type="number" value={farmvalues.cabage} 
                                onChange={handleValues} name="cabage" id="" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="been">Been</label></td>
                                <td> <input type="number" value={farmvalues.been}
                                 onChange={handleValues} name="been" id="" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="carrot">Carrot</label></td>
                                <td><input type="number" value={farmvalues.carrot}
                                 onChange={handleValues} name="carrot" id="" /></td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="apple">Apple</label></td>
                                <td> <input type="number" value={farmvalues.apple} 
                                onChange={handleValues} name="apple" id="" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="strawberry">Strawberry</label></td>
                                <td><input type="number" value={farmvalues.strawberry} 
                                onChange={handleValues} name="strawberry" id="" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="orange">Orange</label></td>
                                <td><input type="number" value={farmvalues.orange}
                                 onChange={handleValues} name="orange" id="" /></td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="freshmilk">Freshmilk</label></td>
                                <td><input type="number" value={farmvalues.freshmilk}
                                 onChange={handleValues} name="freshmilk" id="" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="cheese">Cheese</label></td>
                                <td><input type="number" value={farmvalues.cheese}
                                onChange={handleValues} name="cheese" id="" /></td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="youghurt">Youghurt</label></td>
                                <td><input type="number" value={farmvalues.youghurt}
                                 onChange={handleValues} name="youghurt" id="" /></td>
                            </tr>
                        </tbody>
                    </table>
                
                <input type="submit" className='submitbtn' name="" value="Submit" id="" />
            </form>


        </div>
    );
}

export default Farm;