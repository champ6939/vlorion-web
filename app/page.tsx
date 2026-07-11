'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 讓瀏覽器一載入首頁，就立刻跳轉到真實的 index.html
    window.location.replace('/index.html');
  }, []);

  return null; // 首頁不渲染任何東西
}
