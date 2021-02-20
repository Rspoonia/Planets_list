import React from 'react'

export function Heart(props) {
  const { className } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fillRule="nonzero"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 22.85l9.54-11.086c2.27-2.623 2.289-6.633.017-9.186C19.293.14 15.632.14 13.39 2.555L12 4.18l-.57-.668-.81-.947C9.56 1.376 8.131.78 6.537.78c-1.594 0-3.023.595-4.083 1.786-2.283 2.565-2.263 6.575.008 9.2L12 22.85z"
      />
    </svg>
  )
}
