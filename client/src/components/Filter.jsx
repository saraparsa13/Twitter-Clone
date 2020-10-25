import React, { useState } from 'react'

const Filter = ({ value, setValue }) => {
  const [icon, setIcon] = useState(true)
  
  const onchangeHandler = (e) => {
    e.target.value !== '' ? setIcon(false) : setIcon(true)

    setValue(e.target.value)
  }

  const onClickHandler = () => {
    setIcon(true)
    document.querySelector('input').value = ''
  }

  return (
    <div className="container">
      <div className="p-5">
        <form className="form-inline d-flex justify-content-center">
          {
            icon ? (
              <i className="fa fa-search text-light" aria-hidden="true"></i>
            ) : (
              <i
                onClick={onClickHandler}
                className="fa fa-times text-light"
                aria-hidden="true"
              ></i>
            )
          }
          <input
            onChange={onchangeHandler}
            className="form-control form-control-sm ml-3 w-50 p-2"
            type="text"
            placeholder="Search Twitter Hashtags"
            aria-label="Search"
            value={value}
          />
        </form>
      </div>
    </div>
  )
}

export default Filter 
