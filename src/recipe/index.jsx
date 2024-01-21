import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import CustomCardContent from './tab'

import TestJson from './test'

export default function BasicCard() {
  const [recipeObject, setRecipeObject] = React.useState(null)
  const styles = {
    container: {
      zIndex: 999,
      position: 'fixed',
      bottom: 100,
      right: 20,
      minWidth: 500,
      minHeight: 500,
    },
  }

  React.useEffect(() => {
    setRecipeObject(TestJson)
  }, [])

  return !recipeObject ? null : (
    <Card sx={styles.container}>
      <CustomCardContent recipeObject={recipeObject}></CustomCardContent>
    </Card>
  )
}
