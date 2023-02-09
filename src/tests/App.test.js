import App from '../App'
import { shallow } from 'enzyme'

const setup = () => shallow(<App />)

// a change
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

it('App Component Renders Without Error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, "component-app")

  expect(appComponent.length).toBe(1)
})