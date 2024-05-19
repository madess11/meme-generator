/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen, } from '@testing-library/react'
import Page from './page'
import { ThemeProvider } from '@material-tailwind/react'

describe('Page', () => {
    it("S'assurer que la page de création s'affiche correctement", () => {
        render(
            <ThemeProvider value={{}}>
                <Page />
            </ThemeProvider>

        );

        const heading = screen.getByRole('heading', { level: 1 });

        expect(heading).toBeInTheDocument();
    })
})




