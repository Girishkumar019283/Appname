import { render, screen } from '@testing-library/react';
import App from './App';
import SumComp from './component/SumComp';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Check addition of two numbers",()=>{
//   render(<SumComp/>);
//   expect(SumComp(10,20)).toBe(30);
// });

test("Test case first",()=>{
  render(<App/>);
  const imgtitle=screen.getByTitle("AI generated image");
  expect(imgtitle).toBeInTheDocument();
});

test("Test case second",()=>{
  render(<App/>);
  const textbox=screen.getByRole('textbox');
  expect(textbox).toBeInTheDocument();

  const CheckInputPlaceHolder=screen.getByPlaceholderText('Enter your name');
  expect (CheckInputPlaceHolder).toBeInTheDocument();
  
  expect(textbox).toHaveAttribute("name","username");
  expect(textbox).toHaveAttribute("id","userID");

  
})
describe.skip("UI test case",()=>{
  test('test1 username', () => {
    render(<App/>);
     let textbox = screen.getByRole("textbox");
     expect(textbox).toHaveAttribute("name","username");
  })

   test('test2 userid', () => {
    render(<App/>);
     let textbox = screen.getByRole("textbox");
     expect(textbox).toHaveAttribute("id","userID");
  })
  test('test3 userid', () => {
    render(<App/>);
     let textbox = screen.getByRole("textbox");
     expect(textbox).toHaveAttribute("id","userID");
  })
  describe(" Nested UI test case",()=>{
  test(' nested test1 username', () => {
    render(<App/>);
     let textbox = screen.getByRole("textbox");
     expect(textbox).toHaveAttribute("name","username");
  })
})
})


describe.only("API test case",()=>{
  test('test4 username', () => {
    render(<App/>);
     let textbox = screen.getByRole("textbox");
     expect(textbox).toHaveAttribute("name","username");
  })

   test('test5 userid', () => {
    render(<App/>);
     let textbox = screen.getByRole("textbox");
     expect(textbox).toHaveAttribute("id","userID");
  })

  test('test6 userid', () => {
    render(<App/>);
     let textbox = screen.getByRole("textbox");
     expect(textbox).toHaveAttribute("id","userID");
  })
  
  
})