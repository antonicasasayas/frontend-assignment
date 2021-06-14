import * as React from "react";
import { render, screen,  } from "@testing-library/react";
import MovieCard from "../components/MovieCard";


test("renders movie card correctly", () => {
    const { rerender } = render(<MovieCard />);
    
    rerender(<MovieCard movies={[]} />);
});
