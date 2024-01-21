import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import Footer from './footer'
import { Numbers } from '@mui/icons-material'

export default function Ingredient({ recipeObject, recipeType }) {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const listStyles = {
    height: '300px', // Fixed height
    overflowY: 'auto',
    padding: '10px',
  }

  return (
    <Box sx={{ flex: 1, p: 3, flexGrow: 1 }}>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        {recipeObject.Title}
      </Typography>

      <Typography sx={{ mb: 1.5, fontStyle: 'italic' }} color="text.secondary">
        {recipeType}
      </Typography>

      <div>
        <List sx={listStyles}>
          {Object.keys(recipeObject)
            .filter((item) => item.includes('Ingredient'))
            .map((item, index) => {
              const num = String(index + 1)
              const obj = recipeObject[item]
              const name = Object.keys(obj)[0]
              const carbon = obj[name].carbon
              const amount = obj[name].amound
              return (
                <ListItem disablePadding key={name}>
                  <Typography variant="body2">
                    {num + ') ' + capitalizeFirstLetter(name)}
                  </Typography>
                </ListItem>
              )
            })}
        </List>
      </div>
    </Box>
  )
}
