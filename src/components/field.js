import React,{ useState } from 'react';

const Field = (props) => {
  const [text,handleChange] = useState(props.text)

  return (
      <div className='field'>
        {props.mode === 'edit' ? <input type="text" value={text} onChange={(event)=>handleChange(event.target.value)}></input> : <p>{text}</p>}
      </div>
  )
}

export default Field;