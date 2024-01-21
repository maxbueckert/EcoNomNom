import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import LocalDining from '@mui/icons-material/LocalDining'

import Recipe from '../recipe'

export default function FloatingActionButtons({ isRecipePage }) {
  const [showPopUp, setShowPopUp] = React.useState(false)
  React.useEffect(() => {
    // This will not work
    setShowPopUp(false)
    console.log('hit')
  }, [document.body])

  const styles = {
    fabContainer: {
      position: 'fixed',
      zIndex: 99999999999999,
      bottom: 20,
      right: 20,
    },
    fabLogoUnselected: {
      backgroundColor: '#8BC34A',
      color: 'white',
    },
    fabLogoSelected: {
      backgroundColor: '#e0e0e0', // A light grey color
      color: 'white', // Black color for the icon for better contrast
    },
  }

  return (
    <>
      {showPopUp && <Recipe></Recipe>}
      <Box sx={styles.fabContainer}>
        <Fab
          sx={showPopUp || !isRecipePage ? styles.fabLogoSelected : styles.fabLogoUnselected}
          aria-label="edit"
          size="large"
          onClick={() => setShowPopUp((prev) => !prev)}
        >
          <LocalDining />
        </Fab>
      </Box>
    </>
  )
}
