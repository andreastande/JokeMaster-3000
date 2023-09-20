import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { test, expect } from "vitest";
import { CategoryProvider } from "../context/CategoryContext";
import userEvent from "@testing-library/user-event";

test("Show dropdown when clicked", async () => {
  const { getByText, getByRole, asFragment } = render(
    <CategoryProvider>
      <Header />
    </CategoryProvider>,
  );

  const dropDown = getByRole("button");
  await userEvent.click(dropDown);
  expect(asFragment()).toMatchSnapshot();

  const programming = getByText("Programming");
  expect(programming).toBeTruthy(); // The text is found

  const pun = screen.getByText("Pun");
  expect(pun).toBeTruthy(); // The text is found

  const favorites = getByText("Favorites");
  expect(favorites).toBeTruthy(); // The text is found
});

test("Title is found", () => {
  const { getByText } = render(
    <CategoryProvider>
      <Header />
    </CategoryProvider>,
  );

  const title = getByText("JOKEMASTER-3000");
  expect(title).toBeTruthy(); // The text is found
});