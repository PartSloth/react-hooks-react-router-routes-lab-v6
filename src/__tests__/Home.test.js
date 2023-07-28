import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "../routes.js"
import Home from "../pages/Home";

const router = createMemoryRouter(routes)

test("renders 'Home Page' inside of a <h1 />", () => {
  render(<RouterProvider router={router}/>);
  const h1 = screen.queryByText(/Home Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});
