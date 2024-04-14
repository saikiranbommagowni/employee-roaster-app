import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

import { setupStore } from '../src/store'

// overriding render method which includes rtl render
export function render(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'