import { Header } from "./Header"
import {render, screen} from '@testing-library/react'

describe('Header test', () => {
    it('should display heading role', () => {
        render(<Header title="header title" />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeTruthy()
    })

    it('should display correct title', () => {
        render(<Header title="header title" />);
        const heading = screen.getByText("header title");
        expect(heading).toBeTruthy()
    })
})