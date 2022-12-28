import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { setLanguage } from '../app/languageSlice'
import translate from '../functions/translate'

import '@testing-library/jest-dom/extend-expect'

import Main from '../features/main'

describe('Test Main feature', () => {
    const language = translate()

    beforeEach(() => {
        store.dispatch(setLanguage(language))

        render(
            <Provider store={store}>
                <Main/>
            </Provider>
        )
    })

    it('Checked correct text', () => {
        expect(screen.queryByText(language.dashboard.title)).toBeInTheDocument()
        expect(screen.queryByText(language.dashboard.subtitle)).toBeInTheDocument()
    })
})