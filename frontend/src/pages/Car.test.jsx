import { expect, describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { useParams } from "react-router-dom";

import Car from "./Car";

vi.mock("react-router-dom");

describe("<Car>", () => {
  it("should render the component Car", () => {
    vi.mocked(useParams).mockReturnValue({ id: "04" });

    const result = render(<Car />);

    expect(result).toMatchSnapshot();
  });
});
