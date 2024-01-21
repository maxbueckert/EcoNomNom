import React from 'react'
import FloatingActionButtons from './floatingAction'
import axios from 'axios'

function App() {
  const [isRecipePage, setIsRecipePage] = React.useState(false)

  React.useEffect(() => {
    console.log('reloading')
    const innerHtmlText = document.body.innerText.toLowerCase()
    const onGoogle = window.location.href.includes('google')
    console.log(innerHtmlText)
    const isRecipePage = innerHtmlText.includes('recipe') && innerHtmlText.includes('ingredient')
    console.log('recipe page? ' + isRecipePage)
    setIsRecipePage(isRecipePage && !onGoogle)
  }, [document.body])

  React.useEffect(() => {
    const getRecipeObject = async () => {
      try {
        const response = await axios.get('your-api-endpoint')
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }, [])

  return (
    <div>
      <FloatingActionButtons isRecipePage={isRecipePage}></FloatingActionButtons>
    </div>
  )
}

export default App
