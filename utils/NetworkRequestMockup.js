const Category_Search = [
  {
    name: 'Product Title',
    price: 200000,
    link: 'the-best-product-ever',
    image_url: "images/holders/286x180.svg",
  },
  {
    name: 'Product Title',
    price: 200000,
    link: 'the-best-product-ever',
    image_url: "images/holders/286x180.svg",
  }
]

const Checkout = [
  {
    name: 'Product Title',
    price: 200000,
    image_url: "images/holders/286x180.svg",
    //extra_component: <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>X</Col>,
    quantity: 2
  }, {
    name: 'Product Title',
    price: 200000,
    image_url: "images/holders/286x180.svg",
    //extra_component: <Col as='span' className='d-inline-block text-danger pt-4' role='button' xs={1}>X</Col>,
    quantity: 2
  }
]

const Product = {
  name: 'Product Title',
  price: 200000,
  img_url: [
    "images/holders/286x180.svg", "images/holders/286x180.svg",
    "images/holders/286x180.svg", "images/holders/286x180.svg",
    "images/holders/286x180.svg", 'images/holders/286x180.svg'
  ],
  description: `LoremLoremLorem LoremLorem Lorem Lorem Lorem Lorem LoremLorem Lorem
  LoremLoremLorem Lorem  Lorem LoremLorem Lorem Lorem
  Lorem LoremLorem Lorem Lorem Lorem Loremv Lorem Lorem.`,
  quantity: 2
}

export default function Mockup(GraphQL_String) {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (GraphQL_String === 'Category') resolve(Category_Search);
      if (GraphQL_String === 'Search') resolve(Category_Search);
      if (GraphQL_String === 'Checkout') resolve(Checkout);
      if (GraphQL_String === 'Product') resolve(Product);
      if (GraphQL_String === 'Error') resolve('What?'); // Should use Reject I guess
      reject('Error Here!');
    }, 2000);
  });

  return promise;
}