import React from 'react';
import { useSelector } from 'react-redux';

const LoginPage = ({ web3, account }) => {
  const token = localStorage.getItem('token');

  if (!web3 || !account) {
    return (
      <div>
        <h1>请使用 Web3 钱包登录</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>已登录，账号: {account}</h1>
      <a href="/home">进入首页</a>
    </div>
  );
};

export default LoginPage;