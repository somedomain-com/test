import React from 'react'
import Whaat from 'src/Whaat'

export default () => {
  const [open, change] = React.useState(false)

  return(
    <div>
      Са2л@юбюывт{' '}
      <Whaat
        onClick={() => {
          change(true)
        }}
      />
	  { open && <div>Clicked!</div> }
    </div>
  )
}
