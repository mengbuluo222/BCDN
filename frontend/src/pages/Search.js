import React from 'react';
import { Layout, Input, Button } from 'antd';

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  return (
    <Layout style={{ padding: '24px 16px' }}>
      <Input.Search
        placeholder="输入关键词"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
      />
    </Layout>
  );
}

export default Search;