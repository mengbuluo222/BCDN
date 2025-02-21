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
import Invite from './pages/Invite';
import Quiz from './pages/Quiz';
import Header from './components/Header';
import LanguageProvider from './components/LanguageProvider';


const { Content, Footer } = Layout;

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  // const token = useSelector((state) => log);
  const dispatch = useDispatch();
  // console.log(token,'token');
  

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
        <Layout style={{ minHeight: '100vh', padding: '20px' }}>
          <Header />
          <Content style={{marginTop: '40px'}}>
            {/* 其他页面内容 */}  
            <Routes>
              <Route path="/" element={<Login web3={web3} account={account} />} />
              <Route path="/home" element={<HomePage web3={web3} />} />
              <Route path="/blog" element={<Blog web3={web3}  />} />
              <Route path="/learning" element={<Learning web3={web3} />} />
              <Route path="/quiz" element={<Quiz web3={web3} />} />
              <Route path="/download" element={<Download web3={web3} />} />
              <Route path="/invite" element={<Invite web3={web3} />} />
            </Routes>
          </Content>
          <Footer>底部</Footer>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;