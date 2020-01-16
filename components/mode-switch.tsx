import Switch from "@material-ui/core/Switch";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import { lightmode, darkmode } from "../store/actions";
import { connect } from "react-redux";
import { ModeType, ActionTypes } from "../store/types";
import styled from "@emotion/styled";

interface LayoutProps {
  isDarkMode: boolean;
  lightmode: () => ActionTypes;
  darkmode: () => ActionTypes;
}

const ModeSwitch: React.FC<LayoutProps> = (props: LayoutProps) => {
  const handleChange = () => {
    props.isDarkMode ? props.lightmode() : props.darkmode();
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <SwitchContainer>
        <Switch
          className="modechange"
          checked={props.isDarkMode}
          onChange={() => handleChange()}
          value="checked"
          color="primary"
        />
      </SwitchContainer>
    </PersistGate>
  );
};

const SwitchContainer = styled.div`
  margin-left: -10px;
`;

const mapStateToProps = (state: ModeType) => {
  return {
    isDarkMode: state.isDarkMode
  };
};

const mapDispatchToProps = {
  lightmode,
  darkmode
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
