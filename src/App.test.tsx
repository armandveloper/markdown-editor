import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import App from './App'

const user = userEvent.setup()

const md = new MarkdownIt({
  linkify: true,
  typographer: true
}).use(emoji)

it('should be able to type headings and preview it as html', async () => {
  const { getByTestId } = render(<App />)
  const $textArea = getByTestId('editor')
  const $preview = getByTestId('preview')
  const inputMarkdown = `
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  `
  await user.type($textArea, inputMarkdown)
  const expectedResult = md.render(inputMarkdown)
  expect($preview.innerHTML).toBe(expectedResult)
})

it('should be able to type paragraphs and preview it as html', async () => {
  const { getByTestId } = render(<App />)
  const $textArea = getByTestId('editor')
  const $preview = getByTestId('preview')
  const inputMarkdown = `
  This is a paragraph.

  This is another paragraph.
  `
  await user.type($textArea, inputMarkdown)
  const expectedResult = md.render(inputMarkdown)
  expect($preview.innerHTML).toBe(expectedResult)
})

it('should be able to type ordered lists and preview it as html', async () => {
  const { getByTestId } = render(<App />)
  const $textArea = getByTestId('editor')
  const $preview = getByTestId('preview')
  const inputMarkdown = `
  1. First item
  2. Second item
  `
  await user.type($textArea, inputMarkdown)
  const expectedResult = md.render(inputMarkdown)
  expect($preview.innerHTML).toBe(expectedResult)
})

it('should be able to type undered lists and preview it as html', async () => {
  const { getByTestId } = render(<App />)
  const $textArea = getByTestId('editor')
  const $preview = getByTestId('preview')
  const inputMarkdown = `
  - Apple
  - Banana
  `
  await user.type($textArea, inputMarkdown)
  const expectedResult = md.render(inputMarkdown)
  expect($preview.innerHTML).toBe(expectedResult)
})

it('should be able to type markdown emojies and preview it as html', async () => {
  const { getByTestId } = render(<App />)
  const $textArea = getByTestId('editor')
  const $preview = getByTestId('preview')
  const inputMarkdown = `
  :smile:
  :+1:
  `
  await user.type($textArea, inputMarkdown)
  const expectedResult = md.render(inputMarkdown)
  expect($preview.innerHTML).toBe(expectedResult)
})

it('should display the same input as output if the source is html', async () => {
  const { getByTestId } = render(<App />)
  const $textArea = getByTestId('editor')
  const $preview = getByTestId('preview')
  const inputMarkdown = `
  <h1>Hello</h1>
  `
  await user.type($textArea, inputMarkdown)
  const expectedResult = md.render(inputMarkdown)
  expect($preview.innerHTML).toBe(expectedResult)
})
