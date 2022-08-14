import React from 'react'

function Alert(props) {
    const capitalize = (text) => {
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{ height: '55px' }} className="container my-3">
      {
        props.alert && 
        <div className={ `alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
          </div>
      }
    </div>
  )
}

export default Alert
