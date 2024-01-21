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
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import Footer from './footer'
import { Numbers } from '@mui/icons-material'

export default function Ingredient({ recipeObject, recipeType }) {
  const [totalCarbon, setTotalCarbon] = React.useState(null)

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const tableContainerStyles = {
    maxHeight: '400px',
    minWidth: '400px',
    overflowY: 'auto',
  }

  const rows = Object.keys(recipeObject[recipeType])
    .filter((ingred) => ingred.includes('Ingredient'))
    .map((item) => {
      const x = recipeObject[recipeType][item]
      return x
    })

  React.useEffect(() => {
    const lineItems = rows
    let carbonCount = 0
    lineItems.forEach((item) => {
      carbonCount += item.carbon
    })
    setTotalCarbon(parseFloat(carbonCount.toFixed(2)))
  }, [recipeObject, recipeType])

  const headerStyles = { fontWeight: 'bold', color: '#4B4B4B' }
  console.log('in ingredient!!!!!!!!')
  console.log(recipeObject)
  console.log(Object.keys(recipeObject[recipeType]))
  console.log(
    Object.keys(recipeObject[recipeType]).filter((ingred) => ingred.includes('Ingredient')),
  )

  return (
    <Box sx={{ flex: 1, p: 3, flexGrow: 1 }}>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        {recipeObject['original'].Title}
      </Typography>

      <Typography sx={{ mb: 1.5, fontStyle: 'italic' }} color="text.secondary">
        {recipeType == 'optimized' ? 'Low Emissions' : capitalizeFirstLetter(recipeType)}
      </Typography>

      <Typography sx={{ mb: 1.5, fontSize: 14, marginBottom: 2 }} color="text.secondary">
        {`Carbon Emissions: ${totalCarbon} kg CO2e`}
      </Typography>

      <TableContainer component={Paper} style={tableContainerStyles} elevation={1}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={headerStyles}>
                Ingredient
              </TableCell>
              <TableCell align="right" style={headerStyles}>
                Amount
              </TableCell>
              <TableCell align="right" style={headerStyles}>
                Total Carbon (kg CO2e)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name + String(index)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {capitalizeFirstLetter(row.name)}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.carbon}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
