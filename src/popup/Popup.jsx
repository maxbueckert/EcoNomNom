import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'

const MonsterAndGitHub = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center', // Align items vertically in the center
        justifyContent: 'center', // Center content horizontally
        position: 'relative', // Needed for absolute positioning of the IconButton
      }}
    >
      <img
        src={'icons/character.png'}
        alt="Character"
        style={{
          right: '70%', // Align it to the center-right
          width: '70px',
          height: '80px',
          objectFit: 'contain',
          transform: 'translateX(-30%)', // Adjust horizontally to align properly
        }}
      />
      <IconButton
        aria-label="github"
        onClick={() => window.open('https://github.com/maxbueckert/EcoNomNom', '_blank')}
        style={{
          position: 'absolute', // Position the button absolutely within the div
          right: '32%', // Align it to the center-right
          // transform: 'translateX(10%)', // Adjust horizontally to align properly
          top: '5px', // Adjust the top position to make the character point at it
        }}
      >
        <GitHubIcon />
      </IconButton>
    </div>
  )
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 18, marginBottom: 1 }} color="text.secondary" variant="h2">
        EcoNomNom
      </Typography>
      <Typography variant="subtitle1" sx={{ fontStyle: 'italic', fontSize: 14, color: '#228B22' }}>
        Climate Conscious Cuisine!
      </Typography>
      <Typography
        sx={{ mb: 1.5, fontSize: 14, fontWeight: 'bold' }}
        color="text.secondary"
        variant="h6"
      >
        How's the Magic Done?
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 14 }}>
        Spot a recipe online? Bam! NomNom jumps in, suggesting eco-friendlier twists. Simple, smart,
        sustainable!
      </Typography>
    </CardContent>
    <MonsterAndGitHub></MonsterAndGitHub>
  </React.Fragment>
)

export default function OutlinedCard() {
  console.log('card is rendering')
  return (
    <Box sx={{ minWidth: 275, minHeight: 200 }}>
      <Card elevation={0}>{card}</Card>
    </Box>
  )
}
