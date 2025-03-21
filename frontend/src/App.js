import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ConfigProvider } from 'antd';
import { setToken } from './redux/modules/authReducer';
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
import MenuLeft from './components/MenuLeft';
import { IntlProvider } from 'react-intl';
import enMessages from './locales/en.json';
import zhMessages from './locales/zh.json';
const messages = {
  en: enMessages,
  zh: zhMessages
};


const { Content, Sider } = Layout;


function App() {
  const language = useSelector((state) => state.language.language);
  const locale = useSelector((state) => state.language.locale);

  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  // const token = useSelector((state) => log);
  const dispatch = useDispatch();

  useEffect(() => {
    
    console.log('Current locale:', locale);
  }, [locale, dispatch]);

  useEffect(() => {

    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          
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
    <IntlProvider locale={language} messages={messages[language]}>
      <ConfigProvider locale={locale}>
        <Router>
          <Layout >
            <Sider className="h-screen w-45 bg-[#fff]">
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
      </ConfigProvider>
    </IntlProvider>
  );
}

export default App;