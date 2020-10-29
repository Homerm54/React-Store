import React from 'react'
import { render } from '@testing-library/react';

// Pages
import Landpage from '../pages/index';
import Categories from '../pages/categories/[categories]';
import Checkout from '../pages/checkout/index';
import Product_Description from '../pages/products/[product_name]';
import Settings from '../pages/settings/index';
import Search_Results from '../pages/search';

//Icons
import '../utils/icons.lib';

describe('Snapshot of the whole site', ()=>{
  test('Landpage', ()=>{

    const { container } = render(<Landpage />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Categories', ()=>{

    const { container } = render(<Categories />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Product_Description', ()=>{

    const { container } = render(<Product_Description />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Settings', ()=>{

    const { container } = render(<Settings />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Search_Results', ()=>{

    const { container } = render(<Search_Results />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Checkout', ()=>{

    const { container } = render(<Checkout />)
    expect(container.firstChild).toMatchSnapshot()
  })
})