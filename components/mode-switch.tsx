import Switch from "@material-ui/core/Switch";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import { whitemode, darkmode } from "../store/actions";
import { connect } from "react-redux";
import { ModeState, ActionTypes } from "../store/types";
import styled from "@emotion/styled";

interface LayoutProps {
  isDarkMode: boolean;
  whitemode: () => ActionTypes;
  darkmode: () => ActionTypes;
}

const ModeSwitch: React.FC<LayoutProps> = (props: LayoutProps) => {
  const handleChange = () => {
    props.isDarkMode ? props.whitemode() : props.darkmode();
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

const mapStateToProps = (state: ModeState) => {
  return {
    isDarkMode: state.isDarkMode
  };
};

const mapDispatchToProps = {
  whitemode,
  darkmode
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwitch);
