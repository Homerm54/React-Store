import React from 'react'
import { render, screen, act, waitForElementToBeRemoved } from '@testing-library/react';

// Pages
import Landpage from '../pages/index';
import Categories from '../pages/categories/[categories]';
import Checkout from '../pages/checkout/index';
import Product_Description from '../pages/products/[product_name]';
import Settings from '../pages/settings/index';
import Search_Results from '../pages/search/[search]';

//Icons
import '../utils/icons.lib';

/**** IMPORTANT: 
 * Act should be used to wrap a user accion that changes the component's state
 * because act() waits until the updates are compleated, some ASYNC / useEffect / timeOuts
 * are always involved when updating, even more, updates might take time, using act makes
 * sure that everything has been rendered as it should.
 * 
 * act(()=>{
 *  //User accion that afect the state
 * })
 * 
 * //Other assersion here, after update.
 * 
 * 
 * USEFUL LINKS:
 * How to use the act: https://medium.com/flatiron-labs/testing-async-react-hooks-6a4d0ce2654c
 * Compleate Tutorial: https://www.robinwieruch.de/react-testing-library
 * *****/

// Fake timers using Jest
jest.useFakeTimers()
/*beforeEach(() => {
  jest.useFakeTimers()
})*/

// Running all pending timers and switching to real timers using Jest
/*afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})*/


describe('Snapshot of the whole site', () => {
  test('Landpage', ()=>{
 
     const { container } = render(<Landpage />)
     expect(container.firstChild).toMatchSnapshot()
   })

  test('Categories', async () => {

    let container, getByTestId;

    act(()=>({ container, getByTestId } = render(<Categories />)));

    expect(getByTestId('loading')).toBeTruthy(); //Chech the existance of a loading element
    await waitForElementToBeRemoved(() => getByTestId('loading'))

    //After loading done, expect to match the very same snapshot
    expect(container.firstChild).toMatchSnapshot();
  })

  test('Product_Description', async () => {

    let container, getByTestId;

    act(()=>({ container, getByTestId } = render(<Product_Description />)));

    expect(getByTestId('loading')).toBeTruthy(); //Chech the existance of a loading element
    await waitForElementToBeRemoved(() => getByTestId('loading'))

    //After loading done, expect to match the very same snapshot
    expect(container.firstChild).toMatchSnapshot();
  })

  test('Settings', () => {

    const { container } = render(<Settings />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Search_Results', async () => {

    let container, getByTestId;

    act(()=>({ container, getByTestId } = render(<Search_Results />)));

    expect(getByTestId('loading')).toBeTruthy(); //Chech the existance of a loading element
    await waitForElementToBeRemoved(() => getByTestId('loading'))

    //After loading done, expect to match the very same snapshot
    expect(container.firstChild).toMatchSnapshot();
  })

  test('Checkout', () => {

    const { container } = render(<Checkout />)
    expect(container.firstChild).toMatchSnapshot()
  })
})