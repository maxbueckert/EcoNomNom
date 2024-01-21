import React from 'react'
import FloatingActionButtons from './floatingAction'
import axios from 'axios'

function App() {
  const [isRecipePage, setIsRecipePage] = React.useState(false)
  const [hasRequested, setHasRequested] = React.useState(false)
  const [recipeObject, setRecipeObject] = React.useState(null)

  React.useEffect(() => {
    const getRecipeObject = async (innerHtmlText) => {
      try {
        console.log('retreiving!!!!!!!!!!!!')

        fetch('http://127.0.0.1:5000/recommend', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ web_text: innerHtmlText }),
        })
          .then(async function (res) {
            const result = await res.json()
            console.log(result)
            setRecipeObject(result)
          })
          .catch(function (res) {
            console.log(res)
          })
        setHasRequested(true)
        console.log('received data')
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    const innerHtmlText = document.body.innerText.toLowerCase()
    const onGoogle = window.location.href.includes('google')
    const isRecipePage = innerHtmlText.includes('recipe') && innerHtmlText.includes('ingredient')
    setIsRecipePage(isRecipePage && !onGoogle)
    if (!hasRequested && isRecipePage && !onGoogle) {
      getRecipeObject(innerHtmlText)
    }
  }, [])

  return isRecipePage ? (
    <div>
      <FloatingActionButtons
        recipeObject={recipeObject}
        isRecipePage={isRecipePage}
      ></FloatingActionButtons>
    </div>
  ) : null
}

export default App
