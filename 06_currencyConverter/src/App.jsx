import { useState,useEffect } from 'react'


function App() {

  const [currencies,setCurrencies]=useState([]);
  const [fromCurrency,setFromCurrency]=useState('USD');
  const [toCurrency,setToCurrency]=useState('INR');
  const [amount,setAmount]=useState(1);
  const [convertedAmount,setConvertedAmount]=useState(null);
  const [rate,setRate]=useState(null);

  useEffect(()=>{
    fetch('api here')
    .then((curr)=>curr.json())
    .then((data)=>{
      setCurrencies([...Object.keys(data.rates)]);
      setRate(data.rates[toCurrency])
    })
    .catch((err)=>console.log("Error fetching the data",err))
  },[]);

  useEffect(()=>{
    if(fromCurrency && toCurrency){
      fetch('api here')
      .then((curr)=>curr.json())
      .then((data)=>{
        setRate(data.rates[toCurrency])
      })
      .catch((err)=>console.log('Error Fetching the data',err))
    }
  },[fromCurrency,toCurrency]);

  const handleAmount=(e)=>{
    setAmount(e.target.value);
  }

  const handleConvert=()=>{
    if(rate){
      setConvertedAmount((amount*rate).toFixed(2));
    }
  }



  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-lg p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-center mb-4'>Currency Converter</h1>

        <div className='flex flex-col  items-center space-y-4'>
          <input 
          type="number" 
          value={amount}
          onChange={handleAmount}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <div className='flex w-full space-x-4'>
            <select
            value={fromCurrency}
            onChange={(e)=>{
              setFromCurrency(e.target.value)
            }}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              {...currencies.map((currency)=>{
              <option
              key={currency}
              value={currency}
              >{currency}
              </option>
            })}
            </select>
            <span className='flex items-center justify-center'>to</span>
            <select 
            value={toCurrency}
            onChange={(e)=>{
              setToCurrency(e.target.value)
            }}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              {...currencies.map((currency)=>{
                <option
                key={currency}
                value={currency}
                >
                  {currency}
                </option>
              })}
            </select>
          </div>
          <button
          onClick={handleConvert}
          className='w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Convert
          </button>
        </div>
        {convertedAmount && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </h2>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
