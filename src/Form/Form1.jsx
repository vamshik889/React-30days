import React from 'react'

const Form1 = () => {
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" onChange={handleChange}/>
            <input type="text" onChange={handleChange} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form1