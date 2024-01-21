import * as React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import Ingredient from './ingredient'

function TabPanel(props) {
  const { children, value, index, recipeObject } = props
  const tabLabels = ['Low Carbon', 'Vegetarian', 'Vegan']

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Ingredient recipeType={tabLabels[index]} recipeObject={recipeObject}></Ingredient>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    backgroundColor: '#8BC34A',
  }
}

export default function FullWidthTabs({ recipeObject }) {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static" sx={{ bgcolor: '#8BC34A' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '.MuiTabs-indicator': {
              backgroundColor: '#228B22', // Custom color for the tab indicator
            },
          }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Low Carbon" {...a11yProps(0)} />
          <Tab label="Vegetarian" {...a11yProps(1)} />
          <Tab label="Vegan" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel recipeObject={recipeObject} value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel recipeObject={recipeObject} value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel recipeObject={recipeObject} value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}
