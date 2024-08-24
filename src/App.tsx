import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { MySDK } from "alan-sdk";

function App() {
  const [tonconnectUI] = useTonConnectUI();
  const addr = useTonAddress();
  const handleClick = async () => {
    const sdk = new MySDK("Alan");
    const payload = sdk.greet(addr);
    tonconnectUI.sendTransaction({
      validUntil: Math.floor(Date.now() / 1000) + 3600,
      messages: [
        {
          address:
            "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F", // destination address
          amount: "20000000", //Toncoin in nanotons
          payload: payload.toString(),
        },
      ],
    });
  };
  const handleLogout = async () => {
    await tonconnectUI.disconnect();
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {addr ? (
          <button onClick={handleClick}>Your address is {addr}</button>
        ) : (
          <TonConnectButton />
        )}
        {addr && <button onClick={handleLogout}>Logout</button>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
