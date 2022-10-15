import { render, fireEvent, screen } from "@testing-library/react";
import StickyContainer from "@components/StickyContainer/stickycontainer.component";

test("can see container", async () => {
  const container = render(
    <StickyContainer>
      <p>Container test</p>
    </StickyContainer>
  );

  expect(container).toMatchSnapshot();
});
