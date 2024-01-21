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
      <Typography
        sx={{ fontSize: 18, fontWeight: 'bold' }}
        color="primary"
        variant="h2"
        gutterBottom
      >
        Welcome to EcoNomNom, where every 'Nom' is a step towards a greener planet!
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ marginTop: 2, marginBottom: 1 }}
        color="text.secondary"
      >
        How do we work our magic?
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.5, marginTop: 1 }}>
        Simple! Stumble upon any online recipe, and our clever NomNom Monster jumps in, suggesting
        scrumptious, sustainable swaps for your dish. Cook, munch, and smile benevolently, knowing
        you're helping the Earth with every bite!
        <br />
        <em>{'"a benevolent smile"'}</em>
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
