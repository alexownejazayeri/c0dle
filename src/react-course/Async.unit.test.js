import { render, screen } from "@testing-library/react";
import Async from "./Async";

// This version not ideal because will
// a) hammer network with requests since testing all the time throughout the SDLC
// b) if not fetching data, but component sending POST -- might be changing a database during testing (oops)
// Solution -- either don't send request at all, or send to a "fake server". Both viable!

// Best practice: don't test code you haven't written e.g.(fetch function / API)
// instead, test if your component behaves correctly depending on the different outcomes of sending a request with fetch
// check if component behaves after getting response data; also if correctly after getting an error

// Also! This works well for testing localStorage where you don't want to trigger changes in the actual storage
// Jest has a tool for this

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: "First post" }],
    });

    //Arrange
    render(<Async />);

    //Assert
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});


// Testing is a topic a whole course could be written on
// Dedicated courses and tutorials
// Good resources: 
// Jest docs --> matchers, , expressing expectations, async, promise completion, mocking functions (regular and promises), guides, features
// Testing React --> React Testing Library --> learn way more about testing react, complete example and api (core api: get, find, query), async code, ecosystem part!!
// Extensions: REACT HOOKS extension is important to check out
// 