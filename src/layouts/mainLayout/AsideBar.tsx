import { Aside } from "../../common/aside";

export function AsideBar() {
  return (
    <Aside.Root>
      <Aside.Section>
        <Aside.ListOfLinks>
          <Aside.Link to="/">logo</Aside.Link>
          <Aside.Link to="/">hola</Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>

      <Aside.Section isExtended>
        <Aside.ListOfLinks>
          <Aside.Link to="/">logo</Aside.Link>
          <Aside.Link to="/">hola</Aside.Link>
        </Aside.ListOfLinks>

        <Aside.ListOfLinks>
          <Aside.Link to="/">logo</Aside.Link>
          <Aside.Link to="/">hola</Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>

      <Aside.Section>
        <Aside.ListOfLinks>
          <Aside.Link to="/">logo</Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>
    </Aside.Root>
  );
}
