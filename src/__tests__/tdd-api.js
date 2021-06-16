import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { getMovies as mockGetMovies } from "../api";
import App from "../components/App";

jest.mock("../Api.js");

afterEach(() => {
  jest.clearAllMocks();
});

test("Api call works correctly", () => {
  mockGetMovies.mockResolvedValueOnce();

  render(<App />);
 

 

  

  

 
  expect(mockGetMovies).toHaveBeenCalledTimes(1);
});
