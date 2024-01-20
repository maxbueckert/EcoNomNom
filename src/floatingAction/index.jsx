import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import LocalDining from '@mui/icons-material/LocalDining'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NavigationIcon from '@mui/icons-material/Navigation'

export default function FloatingActionButtons() {
  const containerStyle = {
    position: 'fixed',
    zIndex: 9999,
    bottom: 20,
    right: 20,
  }

  const ecoGreenStyle = {
    backgroundColor: '#8BC34A',
    color: 'white',
  }

  return (
    <Box sx={containerStyle}>
      <Fab sx={ecoGreenStyle} aria-label="edit" size="large">
        <LocalDining />
      </Fab>
    </Box>
  )
}
