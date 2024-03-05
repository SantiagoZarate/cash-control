import {
  HomeIcon,
  LogOutIcon,
  MoneyIcon,
  ProfileIcon,
  SettingsIcons,
  ShareIcon,
} from "@icon";
import { Aside } from "../../common/aside";

export function AsideBar() {
  return (
    <Aside.Root>
      <Aside.Section>
        {/* Dirty workaround */}
        <div />
        <Aside.ListOfLinks>
          <Aside.Link to="/" className="text-2xl">
            💸
          </Aside.Link>
          <Aside.Link to="/">
            <ProfileIcon />
          </Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>

      <Aside.Section isExtended>
        <Aside.ListOfLinks>
          <Aside.Link to="/">
            <HomeIcon />
          </Aside.Link>
          <Aside.Link to="/">
            <MoneyIcon />
          </Aside.Link>
        </Aside.ListOfLinks>

        <Aside.ListOfLinks>
          <Aside.Link to="/">
            <ShareIcon />
          </Aside.Link>
          <Aside.Link to="/">
            <SettingsIcons />
          </Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>

      <Aside.Section>
        <Aside.ListOfLinks>
          <Aside.Link to="/">
            <LogOutIcon />
          </Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>
    </Aside.Root>
  );
}
