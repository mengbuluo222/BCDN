import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from './redux/authReducer'
import Web3 from 'web3';
import { Layout } from 'antd';
import Login from './pages/Login';
import HomePage from './pages/Home';
import Blog from './pages/Blog';
import Download from './pages/Download';
import Learning from './pages/Learning';
import Invite from './pages/Jobs';
import Quiz from './pages/Quiz';
import Logo from './components/Logo';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuLeft from './components/MenuLeft';
import LanguageProvider from './components/LanguageProvider';


const { Content, Sider } = Layout;
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  // backgroundColor: '#f5f5f5',
  backgroundColor: '#fff',
};

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  // const token = useSelector((state) => log);
  const dispatch = useDispatch();

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          console.log(accounts[0],'accounts[0]');
          dispatch(setToken(accounts[0]));
          setWeb3(web3Instance);
        } catch (error) {
          console.error('用户拒绝授权或发生错误:', error);
        }
      } else {
        console.error('请安装 MetaMask 钱包。');
      }
    };

    initWeb3();
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Layout >
          <Sider className="h-screen w-45" style={siderStyle}>
            <Logo />
            <MenuLeft />
            {/* <Footer /> */}
          </Sider>
          <Layout className="h-screen">
            <Header className="w-full" />
            <Content className="w-full h-full overflow-y-auto p-4 bg-white">
              <Routes>
                <Route path="/" element={<Login web3={web3} account={account} />} />
                <Route path="/home" element={<HomePage web3={web3} />} />
                <Route path="/blog" element={<Blog web3={web3}  />} />
                <Route path="/learning" element={<Learning web3={web3} />} />
                <Route path="/quiz" element={<Quiz web3={web3} />} />
                <Route path="/download" element={<Download web3={web3} />} />
                <Route path="/jobs" element={<Invite web3={web3} />} />
              </Routes>
            </Content>
            {/*  */}
          </Layout>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;