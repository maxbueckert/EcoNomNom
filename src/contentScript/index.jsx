import React from 'react'
import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App'

const body = document.querySelector('body')
const app = document.createElement('div')

app.id = 'EcoNomNom'

if (body) {
  body.prepend(app)
}

console.log('LOOOOOK FOR ME')

const container = document.getElementById('EcoNomNom')
const root = createRoot(container)

root.render(<App />) // Render react component
