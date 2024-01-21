import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h2">
        Welcome to EcoNomNom!
      </Typography>
      <Typography variant="body3" component="div">
        Munching Towards a Greener Planet with Every Nom!
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        How does it work?
      </Typography>
      <Typography variant="body2">
        Any time you enter a website which contains a recipe, NomNom will detect it and reccomend
        you more sustainable adjustments
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <div>
      <img
        src={'icons/character.png'}
        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
      ></img>
    </div>
  </React.Fragment>
)

export default function OutlinedCard() {
  console.log('card is rendering')
  return (
    <Box sx={{ minWidth: 275, minHeight: 200 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}
