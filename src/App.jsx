import React from 'react'
import FloatingActionButtons from './floatingAction'

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

  return (
    <div>
      <FloatingActionButtons isRecipePage={isRecipePage}></FloatingActionButtons>
    </div>
  )
}

export default App
