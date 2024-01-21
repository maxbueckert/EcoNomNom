import React from 'react'
import FloatingActionButtons from './floatingAction'
import axios from 'axios'

function App() {
  const [isRecipePage, setIsRecipePage] = React.useState(false)
  const [hasRequested, setHasRequested] = React.useState(false)

  React.useEffect(() => {
    const getRecipeObject = async (innerHtmlText) => {
      try {
        console.log('retreiving!!!!!!!!!!!!')
        // const response = await axios.get(
        //   `http://127.0.0.1:5000/recommend/?web_text=${innerHtmlText}`,
        // )
        fetch('http://127.0.0.1:5000/recommend', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ web_text: innerHtmlText }),
        })
          .then(function (res) {
            console.log(res)
          })
          .catch(function (res) {
            console.log(res)
          })
        setHasRequested(true)
        console.log('received data')
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    const innerHtmlText = document.body.innerText.toLowerCase()
    const onGoogle = window.location.href.includes('google')
    const isRecipePage = innerHtmlText.includes('recipe') && innerHtmlText.includes('ingredient')
    setIsRecipePage(isRecipePage && !onGoogle)
    if (!hasRequested) {
      getRecipeObject(innerHtmlText)
    }
  }, [])

  return (
    <div>
      <FloatingActionButtons isRecipePage={isRecipePage}></FloatingActionButtons>
    </div>
  )
}

export default App
