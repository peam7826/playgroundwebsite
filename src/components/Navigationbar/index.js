import "../Navigationbar/menu.css";
import { Menu } from "antd";

function Navigationbar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      {new Array(3).fill(null).map((_, index) => {
        const key = index + 1;
        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
      })}
    </Menu>
  );
}

export default Navigationbar;
