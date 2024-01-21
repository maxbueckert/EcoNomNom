import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function Ingredient({ recipeObject, recipeType }) {
  console.log(recipeType)
  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        <Typography component="span" sx={{ fontStyle: 'italic', fontSize: 16 }}>
          {recipeType}
        </Typography>
        {' - ' + recipeObject.Title}
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </Box>
  )
}
