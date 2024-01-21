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

import Loading from './loading'

import TestJson from './test'

export default function BasicCard({ recipeObject }) {
  const styles = {
    container: {
      zIndex: 99999999999999,
      position: 'fixed',
      bottom: 100,
      right: 20,
      minWidth: recipeObject ? 500 : 300,
    },
  }

  return (
    <Card sx={styles.container}>
      {recipeObject && <CustomCardContent recipeObject={recipeObject}></CustomCardContent>}
      {!recipeObject && <Loading></Loading>}
    </Card>
  )
}
