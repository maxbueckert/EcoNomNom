import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Typography
      sx={{ color: 'grey', position: 'absolute', bottom: 10, right: 10, marginTop: 50 }}
      variant="caption"
    >
      Powered by EcoNomNom ©
    </Typography>
  )
}
