


import { useState } from 'react';

const StockTransfer = () => {
  const farmvalues = {
    cabage: 50,
    been: 10,
    carrot: 23,
    apple: 234,
    strawberry: 234,
    orange: 12,
    freshmilk: 31,
    cheese: 12,
    youghurt: 900
  };

  const [disabled, setDisabled] = useState({
    cabage: true,
    been: true,
    carrot: true,
    apple: true,
    strawberry: true,
    orange: true,
    freshmilk: true,
    cheese: true,
    youghurt: true

  });

  const handleButtons = (e, key) => {
    e.preventDefault();
  
    e.target.name==='accept'?
    setDisabled((prevState) => ({ ...prevState, [key]: true })):
    setDisabled((prevState) => ({ ...prevState, [key]: false }))
   
  };

  return (
    <div className="stockContainer">
      <form action="">
        <table className="farmValuesTable">
          <tbody>
            {Object.entries(farmvalues).map(([key, value]) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td className='valuetd text-center'>{value}</td>
                  <td><button onClick={(e) => handleButtons(e, key)} name='accept' className='btn btn-success'>Accept </button></td>
                  <td><button onClick={(e) => handleButtons(e, key)} className='btn btn-danger'>Reject </button></td>
                  <td><input className='variation' type="number" disabled={disabled[key]} name="" id="" /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
            <input className='verificationSubmit' type="submit" name="submit" id="subit" />
      </form>
    </div>
  );
};

export default StockTransfer;