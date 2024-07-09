import {it, describe, expect, beforeEach, vi} from 'vitest'
import {cleanup, render, screen} from '@testing-library/react'
import Router from '../Router'
import Route from '../Route'
import Link from '../Link'
import { getCurrentPath } from '../utils'

vi.mock('../utils', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router',() => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('Should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('Should render 404 if pat doesnt match', () => {
    render(<Router routes={[]} defaultComponent={()=><div>404</div>}/>)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('Shoud render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/about',
        Component: () => <h1>About</h1>
      },
      {
        path: '/about',
        Component: () => <h1>NotAbout</h1>
      },
    ]

    render(<Router routes={routes}/>)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('Should navigate using Links', () => {
    getCurrentPath.mockReturnValue('/')

    render(
      <Router>
        <Route path='/' Component={() => {
          return(
            <>
            <div>Home</div>
            <Link to="/about">About</Link>
            </>
          )
        }}/>

        <Route path='/about' Component={() => <div>Redirected</div>}/>
      </Router>
    )

    screen.getByText('About').click()
    todo fixthis
    expect(screen.getByText('Redirected')).toBeTruthy()
  })
})
