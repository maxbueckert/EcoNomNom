import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

export default function Loading() {
  return (
    <Card
      sx={{
        minWidth: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 2,
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 16, mb: 1 }} color="text.secondary">
          Hold tight...
        </Typography>
        <Typography
          sx={{ fontSize: 18, mb: 2, margninTop: 1, marginBottom: -1 }}
          color="text.primary"
          variant="h5"
        >
          NomNom is calculating your carbon!
        </Typography>
      </CardContent>
      <CardActions>
        <CircularProgress sx={{ color: '#8BC34A' }} size={'2rem'} />
      </CardActions>
    </Card>
  )
}
