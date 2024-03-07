import {
  ExtractMoneyIcon,
  FundMoneyIcon,
  HomeIcon,
  LogOutIcon,
  ProfileIcon,
  SendIcon,
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
            <Aside.Icon>💸</Aside.Icon>
          </Aside.Link>
          <Aside.Link to="/">
            <Aside.Icon>
              <ProfileIcon />
            </Aside.Icon>
            <Aside.Text>Profile</Aside.Text>
          </Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>

      <Aside.Section isExtended>
        <Aside.ListOfLinks>
          <Aside.Link to="/home">
            <Aside.Icon>
              <HomeIcon />
            </Aside.Icon>
            <Aside.Text>home</Aside.Text>
          </Aside.Link>
          <Aside.Link to="/actions/extract">
            <Aside.Icon>
              <ExtractMoneyIcon />
            </Aside.Icon>
            <Aside.Text>Extact</Aside.Text>
          </Aside.Link>
          <Aside.Link to="/actions/add">
            <Aside.Icon>
              <FundMoneyIcon />
            </Aside.Icon>
            <Aside.Text>Add</Aside.Text>
          </Aside.Link>
          <Aside.Link to="/actions/send">
            <Aside.Icon>
              <SendIcon />
            </Aside.Icon>
            <Aside.Text>Send</Aside.Text>
          </Aside.Link>
        </Aside.ListOfLinks>

        <Aside.ListOfLinks>
          <Aside.Link to="/">
            <Aside.Icon>
              <ShareIcon />
            </Aside.Icon>
            <Aside.Text>share</Aside.Text>
          </Aside.Link>
          <Aside.Link to="/settings">
            <Aside.Icon>
              <SettingsIcons />
            </Aside.Icon>
            <Aside.Text>settings</Aside.Text>
          </Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>

      <Aside.Section>
        <Aside.ListOfLinks>
          <Aside.Link to="/">
            <Aside.Icon>
              <LogOutIcon />
            </Aside.Icon>
            <Aside.Text>logout</Aside.Text>
          </Aside.Link>
        </Aside.ListOfLinks>
      </Aside.Section>
    </Aside.Root>
  );
}
