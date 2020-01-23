import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
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

const CyanSwitch = withStyles({
  switchBase: {
    color: cyan[300],
    "&$checked": {
      color: cyan[500]
    },
    "&$checked + $track": {
      backgroundColor: cyan[500]
    }
  },
  checked: {},
  track: {
    border: "1px solid rgb(21, 32, 43)",
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#FFFFFF"
  }
})(Switch);

const ModeSwitch: React.FC<LayoutProps> = (props: LayoutProps) => {
  const handleChange = () => {
    props.isDarkMode ? props.lightmode() : props.darkmode();
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <SwitchContainer>
        <CyanSwitch
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
